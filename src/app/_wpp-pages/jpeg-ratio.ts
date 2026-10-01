import { closeSync, openSync, readFileSync, readSync } from "node:fs";
import path from "node:path";

const HEAD_BYTES = 256 * 1024;

function ratioFromBuffer(data: Buffer): number | undefined {
  if (data.length < 4 || data[0] !== 0xff || data[1] !== 0xd8) return undefined;
  let offset = 2;
  while (offset + 9 < data.length && data[offset] === 0xff) {
    const marker = data[offset + 1];
    const isFrame = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isFrame) {
      const height = data.readUInt16BE(offset + 5);
      const width = data.readUInt16BE(offset + 7);
      return width > 0 && height > 0 ? width / height : undefined;
    }
    offset += 2 + data.readUInt16BE(offset + 2);
  }
  return undefined;
}

// Width/height ratio of a JPEG under /public, read from its frame header.
// Reads only the head of the file, falling back to the whole file when the header sits past it.
export function jpegRatio(src: string): number | undefined {
  try {
    const file = path.join(process.cwd(), "public", decodeURI(src));
    const fd = openSync(file, "r");
    const head = Buffer.alloc(HEAD_BYTES);
    let read = 0;
    try {
      read = readSync(fd, head, 0, HEAD_BYTES, 0);
    } finally {
      closeSync(fd);
    }
    return ratioFromBuffer(head.subarray(0, read)) ?? (read === HEAD_BYTES ? ratioFromBuffer(readFileSync(file)) : undefined);
  } catch {
    // Missing or unreadable file: callers fall back to a default ratio.
    return undefined;
  }
}

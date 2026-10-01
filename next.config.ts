import type { NextConfig } from "next";
import type { webpack } from "next/dist/compiled/webpack/webpack";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import path from "node:path";

const appRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: appRoot,
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (isServer && config.output) {
      config.output.chunkFilename = "chunks/[name].js";
      config.plugins ??= [];
      config.plugins.push({
        apply(compiler: webpack.Compiler) {
          compiler.hooks.afterEmit.tap("ServerChunkRootAliasPlugin", () => {
            const outputPath = compiler.outputPath;
            const chunksDir = path.join(outputPath, "chunks");

            if (!fs.existsSync(chunksDir)) {
              return;
            }

            for (const filename of fs.readdirSync(chunksDir)) {
              if (!/^\d+\.js$/.test(filename)) {
                continue;
              }

              const aliasPath = path.join(outputPath, filename);
              const source = `module.exports = require("./chunks/${filename}");\n`;

              if (!fs.existsSync(aliasPath) || fs.readFileSync(aliasPath, "utf8") !== source) {
                fs.writeFileSync(aliasPath, source);
              }
            }
          });
        },
      });
    }

    return config;
  },
};

export default nextConfig;

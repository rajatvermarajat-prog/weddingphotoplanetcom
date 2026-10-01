const FONT_URLS: Record<string, string> = {
  "DXI1ORHCpsQm3Vp6mXoaTegdm0LZdjqr5-oayXSOefg.woff2":
    "https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTegdm0LZdjqr5-oayXSOefg.woff2",
  "cJZKeOuBrn4kERxqtaUH3T8E0i7KZn-EPnyo3HZu7kw.woff":
    "https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3T8E0i7KZn-EPnyo3HZu7kw.woff",
  "MTP_ySUJH_bn48VBG8sNSnhCUOGz7vYGh680lGh-uXM.woff":
    "https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNSnhCUOGz7vYGh680lGh-uXM.woff",
  "EInbV5DfGHOiMmvb1Xr-hnhCUOGz7vYGh680lGh-uXM.woff":
    "https://fonts.gstatic.com/s/opensans/v13/EInbV5DfGHOiMmvb1Xr-hnhCUOGz7vYGh680lGh-uXM.woff",
};

export function GET(_request: Request, { params }: { params: Promise<{ font: string }> }) {
  return params.then(({ font }) => {
    const url = FONT_URLS[font];

    if (!url) {
      return new Response(null, { status: 404 });
    }

    return Response.redirect(url, 307);
  });
}

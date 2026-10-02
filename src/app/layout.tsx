import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./site-footer.css";

export const metadata: Metadata = {
  title: {
    default: "Wedding Photo Planet",
    template: "%s",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/images/favicon.png",
    shortcut: "/assets/images/favicon.png",
  },
  verification: {
    google: "bWtRYA0paxcRzXqXqf1fB8gJA7PEogTaLcTQw8epHQ4",
    other: {
      "facebook-domain-verification": "sxxseb5n03hhk6n6mjnui9h4xbgbdi",
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Great+Vibes&family=Open+Sans:wght@400;600;700&family=Playfair+Display:ital,wght@0,500;1,500&family=Poppins:wght@400;500;600&family=Raleway:wght@400;600;700&family=Source+Sans+Pro:wght@600;700&display=swap"
        />
        <link rel="stylesheet" href="/assets/css/resize.css" media="screen" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" media="screen" />
        <link rel="stylesheet" href="/assets/css/mobile-performance.css" media="screen" />
        <link rel="stylesheet" href="/assets/css/justifiedgallery.css" />
        <link rel="stylesheet" href="/assets/css/lightgallery.css" />
        <link rel="stylesheet" href="/assets/css/owl-carousel/owl.carousel.css" />
        <link rel="stylesheet" href="/assets/css/owl-carousel/owl.theme.default.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/site-layout.css?v=28" media="screen" />
        <link rel="stylesheet" href="/assets/css/blog.css" media="screen" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script id="wpp-legacy-flags" strategy="beforeInteractive">
          {`window.wppNeedsGallery=true;window.wppNeedsSlick=true;window.wppNeedsOwl=true;window.wppRunWhenIdle=function(cb,t){var ms=t==null?450:t;if(window.requestIdleCallback){window.requestIdleCallback(function(){cb();},{timeout:ms});}else{setTimeout(cb,1);}};`}
        </Script>
        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom.js" strategy="afterInteractive" />
        <Script src="/assets/js/dist/js/lightgallery.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.justifiedgallery.js" strategy="afterInteractive" />
        <Script src="/assets/js/gallery-init.js" strategy="afterInteractive" />
        <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/site-init.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

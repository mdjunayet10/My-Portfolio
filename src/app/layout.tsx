import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { AnimatedBackground } from "@/components/animated-background";
import { BackToTop } from "@/components/back-to-top";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollEffects } from "@/components/scroll-effects";
import "./globals.css";

const SITE_TITLE = "Md Junayet | Web Developer";
const SITE_URL = "https://md-junayet-portfolio.web.app";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: SITE_TITLE,
    absolute: SITE_TITLE,
  },
  description:
    "Portfolio of Md Junayet, a web developer building modern web, mobile, Firebase, full-stack, and game projects.",
  keywords: [
    "Md Junayet",
    "Software Developer",
    "Flutter Developer",
    "Web Developer",
    "Firebase Developer",
    "Next.js",
    "Portfolio",
    "Next.js Developer",
    "Game Developer",
    "Bangladesh Developer",
  ],
  authors: [{ name: "Md Junayet", url: "https://github.com/mdjunayet10" }],
  creator: "Md Junayet",
  openGraph: {
    title: SITE_TITLE,
    description:
      "Portfolio of Md Junayet, a web developer building modern web, mobile, Firebase, full-stack, and game projects.",
    url: SITE_URL,
    siteName: SITE_TITLE,
    images: [
      {
        url: "/profile-photo.jpg",
        width: 944,
        height: 1093,
        alt: "Md Junayet profile photo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Portfolio of Md Junayet, a web developer building modern web, mobile, Firebase, full-stack, and game projects.",
    images: ["/profile-photo.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <title>{SITE_TITLE}</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var expectedTitle = ${JSON.stringify(SITE_TITLE)};

                function forceTitle() {
                  if (document.title !== expectedTitle) {
                    document.title = expectedTitle;
                  }
                }

                forceTitle();

                if (document.readyState === "loading") {
                  document.addEventListener("DOMContentLoaded", forceTitle);
                } else {
                  forceTitle();
                }

                var observer = new MutationObserver(forceTitle);
                observer.observe(document.documentElement, {
                  childList: true,
                  subtree: true
                });

                window.addEventListener("popstate", forceTitle);
                window.addEventListener("pageshow", forceTitle);
              })();
            `,
          }}
        />
      </head>
      <body>
        <AnimatedBackground />
        <ScrollEffects />
        <CustomCursor />
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { MobileTabBar, SiteHeader } from "@/components/site-header";
import { ScrollTop } from "@/components/scroll-top";
import { SmoothScroll } from "@/components/smooth-scroll";
import { documentTitle } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: documentTitle,
    template: "%s | BNI PLUTUS",
  },
  description: documentTitle,
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} h-full antialiased`}>
      <body className="flex min-h-dvh flex-col bg-mist font-sans text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-bni focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <SiteHeader />
          <main id="content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <MobileTabBar />
          <ScrollTop />
        </SmoothScroll>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Toolbar } from "basehub/next-toolbar";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Jaem Dessources | Systems Engineer",
    template: "%s | Jaem Dessources",
  },
  description:
    "Systems Engineering student passionate about performance optimization, infrastructure reliability, and building scalable solutions.",
  keywords: [
    "Systems Engineer",
    "Performance Optimization",
    "Infrastructure",
    "Next.js",
    "React",
    "Full Stack",
  ],
  authors: [{ name: "Jaem Dessources" }],
  creator: "Jaem Dessources",
  metadataBase: new URL("https://jaemdessources.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
        <Toolbar></Toolbar>
      </body>
    </html>
  );
}

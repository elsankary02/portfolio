import FloatingGradient from "@/components/FloatingGradient";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://mohamedelsankary.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mohamed Ibrahim | Junior Flutter Developer",
    template: "%s | Mohamed Ibrahim - Junior Flutter Developer",
  },
  description:
    "Junior Flutter Developer with 4+ years of experience building production mobile applications for Android and iOS. Specializing in Flutter, Dart, Clean Architecture, and scalable software.",
  keywords: [
    "Flutter Developer",
    "Junior Flutter Developer",
    "Mobile App Developer",
    "Dart",
    "Clean Architecture",
    "Riverpod",
    "iOS",
    "Android",
    "Cairo",
    "Egypt",
    "Mohamed Ibrahim",
    "Mohamed Elsankary",
    "Flutter Cairo",
  ],
  authors: [{ name: "Mohamed Ibrahim", url: siteUrl }],
  creator: "Mohamed Ibrahim",
  publisher: "Mohamed Ibrahim",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mohamed Ibrahim - Portfolio",
    url: siteUrl,
    title: "Mohamed Ibrahim | Junior Flutter Developer",
    description:
      "Building scalable Flutter apps for Android & iOS with clean architecture and exceptional user experiences.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Ibrahim - Junior Flutter Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@elsankary99",
    creator: "@elsankary99",
    title: "Mohamed Ibrahim | Junior Flutter Developer",
    description:
      "Building scalable Flutter apps for Android & iOS with clean architecture and exceptional user experiences.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-background text-foreground antialiased">
        <FloatingGradient />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

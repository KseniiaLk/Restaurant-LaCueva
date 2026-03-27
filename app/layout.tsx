import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { LanguageProvider } from "@/components/LanguageProvider";
import { RestaurantJsonLd } from "@/components/RestaurantJsonLd";
import { getMetadataBase, getSiteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Scandinavian cuisine and wine bar in Alicante city centre. Reserve a table or private event at Grottan La Cueva.";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Grottan La Cueva | Restaurant & Wine Bar Alicante",
    template: "%s | Grottan La Cueva",
  },
  description: siteDescription,
  keywords: [
    "restaurant Alicante",
    "Swedish restaurant Alicante",
    "Scandinavian restaurant Spain",
    "Grottan La Cueva",
    "La Cueva restaurant",
    "wine bar Alicante",
    "private dinner Alicante",
  ],
  authors: [{ name: "Grottan La Cueva" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ES",
    url: getSiteUrl(),
    siteName: "Grottan La Cueva",
    title: "Grottan La Cueva | Restaurant & Wine Bar Alicante",
    description: siteDescription,
    images: [
      {
        url: "/MAIN.png",
        width: 1200,
        height: 630,
        alt: "Grottan La Cueva restaurant interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grottan La Cueva | Restaurant & Wine Bar Alicante",
    description: siteDescription,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RestaurantJsonLd />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

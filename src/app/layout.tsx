"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderContext from "@/context/ProviderContexts";
import "../assets/font/IBM_Plex_Sans.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Capsule Transit",
//   description: "Airport Transit Hotel In KLIA 1 and KLIA 2",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>CapsuleTransit | Airport Transit Hotel in KLIA1 and KLIA2</title>
        <meta
          name="description"
          content="Airport Transit Hotel In KLIA 1 and KLIA 2"
        />
        <meta
          property="og:title"
          content="CapsuleTransit | Airport Transit Hotel in KLIA1 and KLIA2"
        />
        <meta
          property="og:description"
          content="Airport Transit Hotel In KLIA 1 and KLIA 2"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body style={{ margin: 0 }}>
        <ProviderContext>{children}</ProviderContext>
      </body>
    </html>
  );
}

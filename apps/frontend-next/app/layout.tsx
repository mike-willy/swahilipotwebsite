import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Swahilipot Hub",
  description: "Official Swahilipot Hub Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.className} ${geistMono.className}`}>
        {children}
      </body>
    </html>
  );
}

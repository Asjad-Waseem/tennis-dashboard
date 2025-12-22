import "@/app/styles/global.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PlayerProvider } from "@/contexts/PlayerContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tennis Dashboard - Project For Showcase",
  description:
    "Professional tennis dashboard with live scores, statistics, and rankings",
  icons: {
    icon: "/company_logo.svg",
    shortcut: "/company_logo.svg",
    apple: "/company_logo.svg",
  },
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
        <PlayerProvider>{children}</PlayerProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimeNavBarDemo } from "@/src/components/ui/navbar/nav";
import Footer from "./footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Ensure dark mode class is applied based on the user's preference or manual toggle
  const isDarkMode = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <AnimeNavBarDemo/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

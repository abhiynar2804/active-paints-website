import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import FloatingWhatsApp from "@/Components/layout/FloatingWhatsApp";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Active Paints',
    template: '%s | Active Paints',
  },
  description:
    'Premium interior, exterior, waterproof and industrial paint solutions for homes, commercial buildings and projects across India.',
  keywords: [
    'paint manufacturer',
    'interior paint',
    'exterior paint',
    'waterproof paint',
    'industrial paint',
    'wall paint',
    'Active Paints',
  ],
}

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
        <Navbar />
        {children}
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}

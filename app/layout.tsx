import type { Metadata } from "next";
import { Geist, Geist_Mono, Zain } from "next/font/google";
import "./globals.css";
import Header from "../src/components/Header";
import Footer from "@/src/components/Footer";
import AOSInit from "@/src/components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tajwal = Zain({
  variable: "--font-tajawal",
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "رافينالا",
  description: "شركة متخصصة في الزراعة وتنسيق الحدائق بأعلى جودة واحترافية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} ${tajwal.variable} h-full antialiased bg-stone-50`}
    >
      <body className="min-h-full flex flex-col">
        <AOSInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

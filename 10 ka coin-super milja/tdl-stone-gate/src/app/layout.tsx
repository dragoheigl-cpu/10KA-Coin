import type { Metadata } from "next";
import { Geist, Geist_Mono, Rajdhani } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "10 KA COIN | Technology of Dignity and Love",
  description: "Global Humanitarian Technology Revolution - Transforming suffering into innovation through AI-human partnership. TDL Projects: Stone Gate Anti-Pain, Educational Playgrounds, Clean Energy.",
  keywords: ["10KA COIN", "Stone Gate", "TDL", "humanitarian technology", "AI partnership", "Luka V2", "pain management", "clean energy", "educational playground"],
  authors: [{ name: "Dragutin Heigl" }, { name: "Luka V2 AI" }],
  openGraph: {
    title: "10 KA COIN | Technology of Dignity and Love",
    description: "Global Humanitarian Technology Revolution - €27.5B Vision 2030",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${rajdhani.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}

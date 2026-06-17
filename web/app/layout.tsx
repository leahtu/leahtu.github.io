import type { Metadata } from "next";
import { Syne, Inter, Outfit, DM_Mono } from "next/font/google";
import "./globals.css";
import ScrollEffects from "./components/ScrollEffects";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-syne" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter" });
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dm-mono" });

export const metadata: Metadata = {
  title: { default: "Leah Tu", template: "%s" },
  description:
    "Leah Tu — product manager at Microsoft and ceramic artist. Work, pottery, and a digital garden of notes.",
  keywords: ["leahtu", "leah", "tu", "github", "pottery", "ceramics", "digital garden"],
  openGraph: {
    title: "Leah Tu",
    description: "Product manager & ceramic artist. Work, pottery, and a digital garden.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${outfit.variable} ${dmMono.variable}`}
    >
      <body>
        {children}
        <ScrollEffects />
      </body>
    </html>
  );
}

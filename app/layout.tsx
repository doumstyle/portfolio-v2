import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

const AnekTelegu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption"
});

export const metadata: Metadata = {
  title: "Mamadou AMADOU • Software Engineer",
  description: "Tech Support turned Fullstack Developer on JavaScript Technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable, GeistMono.variable, AnekTelegu.variable, "font-sans h-full bg-background text-foreground")}>       {children}
      </body>
    </html>
  );
}

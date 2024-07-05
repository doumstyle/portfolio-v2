import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import { cn } from "lib/utils";

const TitilliumWeb = Titillium_Web({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caption"
})

export const metadata: Metadata = {
  title: "Mamadou AMADOU • Software Engineer",
  description:
    "Tech Support turned Fullstack Developer on JavaScript Technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          TitilliumWeb.variable,
          "font-caption h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}

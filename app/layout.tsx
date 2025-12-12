import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Antonio Melino",
  description: "Portfolio profesional de desarrollador full stack",
  generator: "v0.app",
  icons: {
    icon: "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765500411/rocket_zq2lme.svg",
    apple:
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1765500411/rocket_zq2lme.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="smooth-scroll">
      <body className={`font-sans antialiased`}>
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

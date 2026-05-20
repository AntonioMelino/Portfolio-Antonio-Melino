import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700"],
});

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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

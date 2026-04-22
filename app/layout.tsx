import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thonyta Chhay — Economist & Data Scientist",
  description:
    "Portfolio of Thonyta Chhay, Fulbright Scholar and MS Economics (Data Science) student at Northeastern University. Former Economist at Cambodia's Ministry of Economy and Finance.",
  keywords: ["economics", "data science", "machine learning", "causal inference", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}

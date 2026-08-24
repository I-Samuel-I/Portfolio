import type { Metadata } from "next";
import localFont from "next/font/local";
import FilmGrain from "../components/atoms/filmGrain";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Samuel Gomes",
  description: "Portfolio - Samuel Gomes",
  openGraph:{title:"Site"},
  twitter:{}
};

export const satoshiFont = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../assets/fonts/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      data-theme="dark"
      className={`h-full antialiased ${satoshiFont.variable} ${satoshiFont.className}`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FilmGrain />
      </body>
    </html>
  );
}

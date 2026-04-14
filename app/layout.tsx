import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

// Montserrat (только Semibold 600 для заголовков)
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

// Open Sans (Regular 400 для текста)
const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400"], // Regular
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IINOVATICA",
  description: "Corporate Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${montserrat.variable} ${openSans.variable} font-open-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

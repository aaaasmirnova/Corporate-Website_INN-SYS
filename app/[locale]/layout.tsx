import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Montserrat, Open_Sans } from "next/font/google";
import { Footer } from "@/components/common/Footer";
import "../globals.css";
import "../icomoon.css";

// Montserrat (только Semibold 600 для заголовков)
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

// Open Sans (Regular 400 для текста)
const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "800"], // Regular
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IINOVATICA",
  description: "Corporate Website",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>

      <body className={`${montserrat.variable} antialiased`}>


        <NextIntlClientProvider>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

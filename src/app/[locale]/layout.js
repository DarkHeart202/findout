import { Almarai, Cairo, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { getMessages, getTranslations } from "next-intl/server";

import { NextIntlClientProvider } from "next-intl";
import { FavoriteProvider } from "@/context/FavoriteContext";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: {
      template: "%s | Find Out",
      default: t("defaultTitle"),
    },
    description: t("description"),
  };
}
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"], // الأوزان المتاحة للخط فقط
  variable: "--font-almarai",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const defaultFont = locale === "ar" ? "font-cairo" : "font-inter";
  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${cairo.variable} ${almarai.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${defaultFont}`}>
        <NextIntlClientProvider messages={messages}>
          <FavoriteProvider>{children}</FavoriteProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Пригон авто из Европы под ключ | Спорт-Тех",
  description: "Надежный пригон автомобилей из Европы в Россию под ключ. Полное юридическое сопровождение, прозрачные цены, доставка и растаможка. Получите подборку авто уже сегодня!",
  icons: {
    icon: "/sport-tech-logo.jpg",
    shortcut: "/sport-tech-logo.jpg",
    apple: "/sport-tech-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

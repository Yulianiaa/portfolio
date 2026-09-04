import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Ульяна Прощенко — Product Designer",
  description: "Middle+ продуктовый дизайнер с 4+ годами опыта",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${onest.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-800 font-sans">
        {children}
      </body>
    </html>
  );
}

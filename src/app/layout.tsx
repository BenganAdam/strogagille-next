import type { Metadata } from "next";
import { Oswald, Work_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { classNames } from "@/lib/utils/classNames";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CookieBanner from "@/components/CookieBanner/CookieBanner";

export const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Strögagille Legacy",
  description: "Den officiella hemsidan för Strögagille Legacy.",
  openGraph: {
    title: "Strögagille Legacy",
    description: "Den officiella hemsidan för Strögagille Legacy.",
    images: [
      {
        url: "/images/logo.png",
        width: 300,
        height: 300,
        alt: "Strögagille logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.GTM_ID ? process.env.GTM_ID : "";
  return (
    <html lang="sv" className="scroll-smooth relative">
      <body
        className={classNames(
          oswald.variable,
          work_sans.variable,
          poppins.variable
        )}
      >
        <CookieBanner gtmId={gtmId} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

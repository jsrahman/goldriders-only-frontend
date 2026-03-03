import { Montserrat, Unbounded } from "next/font/google";
  
// css // 
import "@/public/styles/bootstrap-layer.css";
import "@/public/scss/main.scss";
import { NextIntlClientProvider } from "next-intl";

import Backdrop from "@/components/layout/Backdrop";
import Preloader from "@/components/layout/Preloader";
import MobileMenu from "@/components/layout/MobileMenu";
import SearchModal from "@/components/layout/search/SearchModal";
import WalletModal from "@/components/templates/wallet/WalletModal";
import CookiesCard from "@/components/layout/CookiesCard";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import { Toaster } from "react-hot-toast";
import LanguageModal from "@/components/templates/LanguageModal";
import SupportModal from "@/components/templates/SupportModal";
import SpinModal from "@/components/templates/SpinModal";
import WithDrawRewards from "@/components/templates/WithDrawRewards";
import BalanceModal from "@/components/templates/wallet/BalanceModal";
import { getMessages } from "next-intl/server";

// css //
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--body-font",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--heading-font",
});

export const metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_SITE_TITLE || "ChangaLab - Home",
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME || "ChangaLab"}`,
  },
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  keywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS?.split(","),
  authors: [{ name: process.env.NEXT_PUBLIC_SITE_NAME }],
  creator: process.env.NEXT_PUBLIC_SITE_NAME,
  publisher: process.env.NEXT_PUBLIC_SITE_NAME,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),

  // Apple Web App
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: process.env.NEXT_PUBLIC_SITE_TITLE,
  },

  // Icons
  icons: {
    icon: process.env.NEXT_PUBLIC_SITE_LOGO,
    apple: process.env.NEXT_PUBLIC_SITE_LOGO,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    title: process.env.NEXT_PUBLIC_SITE_TITLE,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    images: [
      {
        url: process.env.NEXT_PUBLIC_SITE_OG_IMAGE,
        width: 1180,
        height: 600,
        alt: process.env.NEXT_PUBLIC_SITE_TITLE,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: process.env.NEXT_PUBLIC_SITE_TITLE,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    images: [process.env.NEXT_PUBLIC_SITE_OG_IMAGE],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  shrinkToFit: "no",
};

export default async function RootLayout({ children }) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <head>
        {/* Schema.org markup for Google+ */}
        <meta itemProp="name" content={process.env.NEXT_PUBLIC_SITE_TITLE} />
        <meta
          itemProp="description"
          content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION}
        />
        <meta
          itemProp="image"
          content={process.env.NEXT_PUBLIC_SITE_OG_IMAGE}
        />
      </head>
      <body className={`${montserrat.variable} ${unbounded.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <main className="container-fluid">
            <Sidebar />
            {children}
          </main>

          <CookiesCard />
          <MobileMenu />
          <Backdrop />
          <Preloader />
          <SearchModal />
          <WalletModal />
          <BalanceModal />
          <LanguageModal />
          <SupportModal />
          <SpinModal />
          <WithDrawRewards />
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              style: {
                background: "hsl(var(--black-dark))",
                boxShadow: "0 -3px 0 0 hsl(var(--black-light-ultra)/0.3) inset",
                color: "hsl(var(--white))",
                borderRadius: "16px",
                fontSize: "14px",
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

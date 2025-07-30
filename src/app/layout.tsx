import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingPriceWidget } from "@/components/floating-price-widget";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AurumTrust Gold - Uganda's Premier Precious Metals Dealer",
  description: "Buy gold, silver and platinum bullion coins, bars and storage products from Uganda's premier precious metals dealer. LBMA certified, fully insured, secure storage.",
  creator: "AurumTrust Gold",
  openGraph: {
    title: "AurumTrust Gold - Uganda's Premier Precious Metals Dealer",
    description: "Buy gold, silver and platinum bullion coins, bars and storage products from Uganda's premier precious metals dealer.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AurumTrust Gold - Uganda's Premier Precious Metals Dealer",
    description: "Buy gold, silver and platinum bullion coins, bars and storage products from Uganda's premier precious metals dealer.",
  },
};

export default function RootLayout({children}: Readonly<{ children: ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased bg-white min-h-screen")}
        suppressHydrationWarning>
        <main className="flex flex-col min-h-screen w-full">
          <SiteHeader />
          {children}
          <SiteFooter />
          <FloatingPriceWidget />
        </main>
      </body>
    </html>
  );
}

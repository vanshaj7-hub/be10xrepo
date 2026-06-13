import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { siteConfig } from "@/data/portfolio";
import { STORAGE_KEY } from "@/theme/tokens";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const colorModeScript = `(function(){try{var k=${JSON.stringify(STORAGE_KEY)};var s=localStorage.getItem(k);var m=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-color-mode",m)}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable}`}>
        <Script id="color-mode-init" strategy="beforeInteractive">
          {colorModeScript}
        </Script>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}

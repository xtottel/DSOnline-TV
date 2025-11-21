import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import { DSHeader } from "@/layout/DSHeader";
import { DSFooter } from "@/layout/DSFooter";
import { ThemeProvider } from "next-themes";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { AnalyticsProvider } from "@/context/AnalyticsProvider";
// import { CookiesProvider } from "@/context/CookiesContext";
// import { CookiesBanner } from "@/components/common/CookiesBanner";
import Script from "next/script";
import { TrackingScripts } from "@/components/common/TrackingScripts";
//import TopBar from "@/layout/Topbar";

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "DS Online TV GH | Premier Media Production",
    template: "%s | DS Online TV GH",
  },
  description:
    "DS Online TV GH - Your premier media production company specializing in live streaming, video production, and broadcast services in Ghana.",
  keywords: [
    "Ghana media production",
    "live streaming Ghana",
    "video production",
    "DS Online TV",
    "broadcast services",
    "event coverage Ghana",
  ],
  openGraph: {
    title: "DS Online TV GH | Premier Media Production",
    description:
      "Professional media production services in Ghana - live streaming, video production, and broadcast solutions.",
    url: "https://dsonlinetvgh.com",
    siteName: "DS Online TV GH",
    images: [
      {
        url: "https://dsonlinetvgh.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DS Online TV GH",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DS Online TV GH | Premier Media Production",
    description: "Professional media production services in Ghana",
    images: ["https://dsonlinetvgh.com/twitter-image.jpg"],
  },
  metadataBase: new URL("https://dsonlinetvgh.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="theme-color" content="#111e4f" />
      </head>
      <body
        className={`${outfit.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50`}
      >
        <GoogleTagManager gtmId="G-FLDGHERSB9" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="sendexa-theme"
        >
          <AnalyticsProvider>
            {/* <CookiesProvider> */}
            {/* <TopBar /> */}
            <DSHeader />

            <main id="main-content" className="min-h-screen">
              {children}
            </main>
            <DSFooter />
            {/* <CookiesBanner /> */}
            <SpeedInsights />
            {/* </CookiesProvider> */}
          </AnalyticsProvider>
        </ThemeProvider>

        <TrackingScripts />

        <Script
          src="https://vercel-speed-insights.vercel.app/script.js"
          strategy="afterInteractive"
          // data-vercel-speed-insights="your-vercel-speed-insights-id"
        />
      </body>
    </html>
  );
}

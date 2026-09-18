import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import StructuredData from "./structured-data"

const GA_ID = "G-S6NFJ6766T"

const inter = Inter({ subsets: ["latin"], display: "swap" })

const BASE_URL = "https://manglamevents.in"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Manglam Event Studio — Premier Wedding & Event Planning in Bihar",
    template: "%s | Manglam Event Studio",
  },
  description:
    "Bihar's top wedding & event planning company in Sitamarhi. Luxury weddings, destination events, corporate shows & more. 500+ events, 4.9★ rated since 2014.",
  keywords: [
    "wedding planner Bihar",
    "wedding planner Sitamarhi",
    "wedding planner Patna",
    "event management Bihar",
    "event planning Sitamarhi",
    "luxury wedding planner Bihar",
    "destination wedding planner India",
    "destination wedding Bihar",
    "wedding decorator Bihar",
    "mandap decoration Bihar",
    "floral wedding decor Bihar",
    "corporate event management Bihar",
    "concert organiser Bihar",
    "DJ night organiser Bihar",
    "artist management Bihar",
    "wedding photographer Bihar",
    "wedding videographer Bihar",
    "Manglam Event Studio",
    "manglam event",
    "best event planner in Bihar",
    "affordable wedding planner Bihar",
    "Dholida Nights",
  ],
  authors: [{ name: "Manglam Event Studio", url: BASE_URL }],
  creator: "Manglam Event Studio",
  publisher: "Manglam Event Studio",
  category: "Event Planning",
  applicationName: "Manglam Event Studio",
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    title: "Manglam Event Studio — Premier Wedding & Event Planning in Bihar",
    description:
      "Bihar's most trusted wedding and event planning studio. Luxury weddings, destination events, corporate experiences, and more — crafted with soul since 2014.",
    siteName: "Manglam Event Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Manglam Event Studio — Luxury Wedding & Event Planning in Bihar, India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manglam Event Studio — Premier Wedding & Event Planning in Bihar",
    description:
      "Bihar's most trusted wedding and event planning studio. Luxury weddings, destination events, corporate experiences — crafted since 2014.",
    images: ["/og-image.png"],
    site: "@manglamevent",
    creator: "@manglamevent",
  },
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Sitamarhi, Bihar, India",
    "geo.position": "26.5953;85.4878",
    ICBM: "26.5953, 85.4878",
    "msapplication-TileColor": "#d4af37",
    "msapplication-config": "/browserconfig.xml",
  },
}

export const viewport: Viewport = {
  themeColor: "#d4af37",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        {/* Font preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Cloudinary CDN preconnect for hero and about images */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Structured Data */}
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content — accessibility & SEO */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-[#a45f26] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <div id="main-content">{children}</div>

        {/* Google Analytics GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  )
}


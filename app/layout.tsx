import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Manglam Event — Premier Wedding & Event Planning in Bihar",
  description:
    "Creating magical moments and unforgettable celebrations since 2014. Expert wedding planning, destination weddings, corporate events, and more. Bihar's most trusted event management company.",
  keywords:
    "wedding planning, destination weddings, event planning, wedding decor, corporate events, Patna wedding planner, Bihar wedding planner, luxury wedding Bihar",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.png",
        color: "#d4af37",
      },
    ],
  },
  manifest: "/site.webmanifest",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://manglamevent.com",
    title: "Manglam Event — Premier Wedding & Event Planning",
    description:
      "Creating magical moments and unforgettable celebrations. Expert wedding planning, destination weddings, corporate events, and more.",
    siteName: "Manglam Event",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Manglam Event — Wedding Planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manglam Event — Premier Wedding & Event Planning",
    description: "Creating magical moments and unforgettable celebrations.",
    images: ["/og-image.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#d4af37",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#d4af37" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Manglam Event - Premier Wedding & Event Planning",
  description:
    "Creating magical moments and unforgettable celebrations. Expert wedding planning, destination weddings, corporate events, and more. Your dream event planning partner.",
  keywords:
    "wedding planning, destination weddings, event planning, wedding decor, corporate events, Mumbai wedding planner",
  generator: "v0.dev",
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
  themeColor: "#d4af37",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manglamevent.com",
    title: "Manglam Event - Premier Wedding & Event Planning",
    description:
      "Creating magical moments and unforgettable celebrations. Expert wedding planning, destination weddings, corporate events, and more.",
    siteName: "Manglam Event",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Manglam Event - Wedding Planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manglam Event - Premier Wedding & Event Planning",
    description: "Creating magical moments and unforgettable celebrations.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#d4af37" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

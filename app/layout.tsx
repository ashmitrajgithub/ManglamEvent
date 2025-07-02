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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

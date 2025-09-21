import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AlArab Club 777 - Gateway to Ancient Egypt",
  description:
    "Experience the magic of Egypt with pyramid tours, desert safaris, and authentic Egyptian adventures. Your gateway to ancient wonders.",
  keywords: "Egypt tours, pyramid tours, desert safari, camel rides, Egyptian adventures, Giza pyramids, ancient Egypt",
  authors: [{ name: "AlArab Club 777" }],
  openGraph: {
    title: "AlArab Club 777 - Gateway to Ancient Egypt",
    description: "Experience the magic of Egypt with pyramid tours, desert safaris, and authentic Egyptian adventures.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlArab Club 777 - Gateway to Ancient Egypt",
    description: "Experience the magic of Egypt with pyramid tours, desert safaris, and authentic Egyptian adventures.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

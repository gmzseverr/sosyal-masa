import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sosyal Masa - Haftalık Beraberlik Dozunuz",
  description: "Türkiye'nin ilk sosyal yemek eşleştirme platformu. Yeni insanlarla tanışın, güzel sohbetler edin.",
  generator: "v0.app",
  keywords: ["sosyal yemek", "tanışma", "networking", "İstanbul", "İzmir", "Ankara"],
  authors: [{ name: "Sosyal Masa Ekibi" }],
  openGraph: {
    title: "Sosyal Masa - Haftalık Beraberlik Dozunuz",
    description: "Türkiye'nin ilk sosyal yemek eşleştirme platformu",
    type: "website",
    locale: "tr_TR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

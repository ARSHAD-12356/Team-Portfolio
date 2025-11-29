import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TriVerse Studio - 3D Web Development Agency",
  description:
    "We build visually stunning, scalable & high-performance web applications with 3D experiences, motion design and modern tech stacks.",
  generator: "v0.app",
  openGraph: {
    title: "TriVerse Studio - 3D Web Development Agency",
    description: "We build visually stunning, scalable & high-performance web applications",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

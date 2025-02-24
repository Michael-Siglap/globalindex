import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingHeader from "@/components/FloatingHeader"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Global Economic Indices",
  description: "Explore various economic indices from around the world",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FloatingHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Wissal Tajiri - Software Engineer | MIAGE & Réseaux",
  description:
    "Développeuse passionnée spécialisée en développement full-stack, réseaux informatiques, sécurité et intelligence artificielle. Étudiante ingénieur à l'EMSI.",
  keywords: ["Software Engineer", "Full Stack", "Réseaux", "Sécurité", "Intelligence Artificielle", "React", "Spring Boot", "Wissal Tajiri", "EMSI"],
  authors: [{ name: "Wissal Tajiri" }],
  creator: "Wissal Tajiri",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: "Wissal Tajiri - Software Engineer",
    description: "Développeuse spécialisée en full-stack, réseaux et IA.",
    siteName: "Portfolio Wissal Tajiri",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wissal Tajiri - Software Engineer",
    description: "Développeuse spécialisée en full-stack, réseaux et IA.",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

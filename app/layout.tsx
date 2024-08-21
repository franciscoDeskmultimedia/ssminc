import { DraftAlert } from "@/components/misc/DraftAlert"
import { HeaderNav } from "@/components/navigation/HeaderNav"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import TopMenu from "@/components/ui/top-menu/TopMenu"
import ContactUsNumber from "@/components/ui/contact-us-number/ContactUsNumber"

import "@/styles/globals.css"

import { Inter, PT_Sans } from "next/font/google"
import Footer from "@/components/ui/footer/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const ptsans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ptsans",
})

export const metadata: Metadata = {
  title: {
    default: "Next.js for Drupal",
    template: "%s | Next.js for Drupal",
  },
  description: "A Next.js site powered by a Drupal backend.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <DraftAlert />
        <HeaderNav />
        <div className="px-6 mx-auto max-w-screen-2xl">
          <main
            className={` container py-10 mx-auto ${inter.variable} ${ptsans.variable} font-sans max-w-[1662px]`}
          >
            {children}
          </main>
        </div>
        <Footer></Footer>
      </body>
    </html>
  )
}

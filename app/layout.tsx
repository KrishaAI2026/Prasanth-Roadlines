import type { Metadata } from "next"
import { Inter, Barlow_Condensed } from "next/font/google"
import "./globals.css"
import { QuoteModalProvider } from "@/components/ui/quote-context"
import { GetQuoteModal } from "@/components/ui/get-quote-modal"
import { WhatsAppFloat } from "@/components/ui/whatsapp-float"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prasanthroadlines.com"),

  title: "Prasanth Roadlines | Chemical & Pharma Logistics India – Visakhapatnam",
  description:
    "Prasanth Roadlines — trusted chemical and pharma logistics company in India, based in Visakhapatnam. Safe, compliant transport of chemicals, pharmaceuticals, and bulk cargo across Andhra Pradesh, Telangana, Tamil Nadu & beyond. Get a free quote in 2 hours.",

  keywords: [
    "Prasanth Roadlines",
    "Chemical and Pharma Logistics India",
    "Chemical transport Visakhapatnam",
    "pharmaceutical logistics Andhra Pradesh",
    "bulk cargo transport India",
    "road freight services Vizag",
    "tanker lorry transport",
    "chemical logistics company",
    "pharma logistics provider",
    "interstate freight solutions",
    "industrial transport services",
    "container transport India",
    "hazmat transport compliance",
    "bulk carrier services",
    "chemical delivery services",
    "pharmaceutical transport India",
    "road logistics provider",
    "Visakhapatnam transport company",
    "Auto Nagar Vizag logistics",
    "Andhra Pradesh freight services",
    "Telangana bulk transport",
    "Tamil Nadu logistics",
    "Chennai to Hyderabad freight",
    "Visakhapatnam to Chennai transport",
    "Pan-India freight network",
    "Vizag chemical transport",
    "Andhra Pradesh logistics",
    "South India freight",
    "industrial transport Visakhapatnam",
    "chemical tanker transport",
    "pharmaceutical grade logistics",
    "bulk liquid transport",
    "hazardous material transport",
    "dry bulk cargo",
    "container logistics services",
    "heavy cargo transport",
    "industrial chemicals transport",
    "API transport India",
    "formulation transport",
    "excipients logistics",
    "manufacturing transport",
    "factory delivery services",
    "warehouse to warehouse transport",
    "chemical transport with compliance",
    "safe pharmaceutical logistics India",
    "reliable bulk transport services",
    "quick freight quote online",
    "24/7 freight tracking",
    "cost-effective transport solutions",
    "timely delivery guarantee",
    "specialized transport services",
    "licensed chemical transport",
    "regulated pharma logistics",
    "insured cargo transport",
    "real-time tracking logistics",
    "B2B logistics provider",
    "industrial logistics solutions",
    "supply chain transport",
    "freight forwarding India",
    "transport partner",
    "logistics operator",
    "fleet management services",
    "route optimization freight",
    "on-time delivery service",
    "quality assurance logistics",
    "complaint-free transport",
    "industry-trusted logistics",
  ],

  // --- Canonical URL (tells Google the official address of the site) ---
  alternates: {
    canonical: "https://www.prasanthroadlines.com",
  },

  // --- Open Graph (WhatsApp, LinkedIn, Facebook link preview) ---
  openGraph: {
    type: "website",
    url: "https://www.prasanthroadlines.com",
    siteName: "Prasanth Roadlines",
    title: "Prasanth Roadlines | Chemical & Bulk Transport – Visakhapatnam",
    description:
      "Safe, compliant road freight for chemicals, pharmaceuticals & bulk cargo. Serving Andhra Pradesh, Telangana, Tamil Nadu & pan-India. Free quote in 2 hours.",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Prasanth Roadlines – Road Freight Specialists",
      },
    ],
  },

  // --- Twitter / X card ---
  twitter: {
    card: "summary_large_image",
    title: "Prasanth Roadlines | Chemical & Bulk Transport",
    description:
      "Trusted road freight for chemicals, pharma & bulk cargo across South India. Free quote in 2 hours.",
    images: ["/favicon.png"],
  },

  // --- Favicon ---
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  // --- Tell Google: index this page and follow all links ---
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${barlowCondensed.variable} antialiased font-sans`}>
        {/* Structured data — tells Google this is a local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Prasanth Roadlines",
              url: "https://www.prasanthroadlines.com",
              logo: "https://www.prasanthroadlines.com/favicon.png",
              image: "https://www.prasanthroadlines.com/favicon.png",
              description:
                "Prasanth Roadlines is a road freight company in Visakhapatnam specialising in safe, compliant transport of chemicals, pharmaceuticals, and bulk cargo across South India.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "195/4, Block D, Industrial Development Area, Auto Nagar",
                addressLocality: "Visakhapatnam",
                addressRegion: "Andhra Pradesh",
                postalCode: "530012",
                addressCountry: "IN",
              },
              telephone: "+91-9948729999",
              openingHours: "Mo-Sa 09:00-18:00",
              sameAs: [
                "https://wa.me/919948729999",
              ],
              areaServed: [
                "Visakhapatnam", "Andhra Pradesh", "Telangana",
                "Tamil Nadu", "Odisha", "Karnataka",
              ],
              serviceType: [
                "Chemical Transport",
                "Pharmaceutical Logistics",
                "Bulk Cargo Transport",
                "Road Freight",
                "Interstate Logistics",
              ],
            }),
          }}
        />
        <QuoteModalProvider>
          {children}
          <GetQuoteModal />
          <WhatsAppFloat />
        </QuoteModalProvider>
      </body>
    </html>
  )
}

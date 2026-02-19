import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegacyFormBridge from "@/components/LegacyFormBridge";
import { LocalBusinessSchema, WebSiteSchema } from "@/components/SchemaMarkup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hiredronepilot.uk'),
  title: {
    default: 'Hire Drone Pilot UK | Get Multiple Competitive Quotes Fast',
    template: '%s | HireDronePilot',
  },
  description:
    'HireDronePilot is an intro marketplace connecting clients with independent drone pilots. Compare multiple quotes across the UK.',
  keywords: ['hire drone pilot', 'drone pilot uk', 'drone survey', 'aerial inspection', 'drone mapping', 'gvc certified drone pilot', 'commercial drone services'],
  authors: [{ name: 'HireDronePilot' }],
  creator: 'HireDronePilot',
  publisher: 'HireDronePilot',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://hiredronepilot.uk',
    siteName: 'HireDronePilot',
    title: 'Hire Drone Pilot UK | Get Multiple Competitive Quotes Fast',
    description:
      'Intro marketplace connecting clients with independent drone pilots across the UK.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HireDronePilot - Compare Trusted Drone Pilots',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Drone Pilot UK | Compare Quotes',
    description:
      'Intro marketplace connecting clients with independent drone pilots.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://hiredronepilot.uk',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <LocalBusinessSchema />
        <WebSiteSchema />
        <Header />
        <LegacyFormBridge />
        <main className="pt-[104px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

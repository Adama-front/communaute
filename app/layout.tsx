import { AccessibilityToolbar } from "@/components/ui/accessibility-toolbar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voix de la Communauté - Actualités Locales",
  description:
    "Votre plateforme d'information dédiée à notre commune. Actualités locales, événements, initiatives citoyennes.",
  keywords:
    "actualités locales, information communautaire, événements, sport, économie, société",
  authors: [{ name: "Voix de la Communauté" }],
  creator: "Voix de la Communauté",
  publisher: "Voix de la Communauté",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL("https://voixcommunaute.fr"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Voix de la Communauté - Actualités Locales",
    description: "Votre plateforme d'information dédiée à notre commune.",
    url: "https://voixcommunaute.fr",
    siteName: "Voix de la Communauté",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Voix de la Communauté"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Voix de la Communauté - Actualités Locales",
    description: "Votre plateforme d'information dédiée à notre commune.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "google-site-verification-code"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className={montserrat.className}>
        {children}
        <Toaster />
        <AccessibilityToolbar />
      </body>
    </html>
  );
}

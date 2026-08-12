import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "IceLux Detailing | Premium Mobile Car Detailing – Iowa Colony, TX",
    template: "%s | IceLux Detailing",
  },
  description:
      "IceLux Detailing offers premium mobile car detailing services in Iowa Colony and surrounding areas. Interior restoration, exterior detailing, ceramic coating, and maintenance plans delivered to your driveway.",
  keywords: [
    "mobile car detailing",
    "mobile car detailing Iowa Colony TX",
    "mobile car detailing Pearland TX",
    "mobile car detailing Alvin TX",
    "mobile car detailing Rosharon TX",
    "mobile car detailing Manvel TX",
    "auto detailing near me",
    "ceramic coating Iowa Colony",
    "interior car detailing Texas",
    "exterior auto detailing Texas",
    "IceLux Detailing",
    "car wash Iowa Colony",
    "mobile detailer Brazoria County",
  ],
  authors: [{ name: "IceLux Detailing" }],
  creator: "IceLux Detailing",
  metadataBase: new URL("https://iceluxdetailing.com"),
  alternates: {
    canonical: "https://iceluxdetailing.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iceluxdetailing.com",
    siteName: "IceLux Detailing",
    title: "IceLux Detailing | Premium Mobile Car Detailing – Iowa Colony, TX",
    description:
        "Professional mobile car detailing serving Iowa Colony, Pearland, Alvin, Rosharon & surrounding areas. Interior, exterior, ceramic coating — we come to you.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IceLux Detailing — Premium Mobile Car Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IceLux Detailing | Premium Mobile Car Detailing",
    description:
        "Professional mobile car detailing serving Iowa Colony & surrounding areas. From dusty to icy — we come to you.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Once you verify your site in Google Search Console, paste the
    // verification token here:
    // google: "your-google-verification-token",
  },
};

/* ─── LocalBusiness JSON-LD schema ───────────────────────────────
   This is the single biggest SEO addition — it tells Google
   explicitly that this is a real local business, what it does,
   where it serves, and how to contact it.
──────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://iceluxdetailing.com",
  "name": "IceLux Detailing",
  "description": "Premium mobile car detailing serving Iowa Colony, Pearland, Alvin, Rosharon, Manvel and surrounding areas. Interior restoration, exterior detailing, ceramic coating, and paint protection delivered to your driveway.",
  "url": "https://iceluxdetailing.com",
  "telephone": "+17252219148",
  "email": "iceluxdetailing@gmail.com",
  "image": "https://iceluxdetailing.com/Logo.png",
  "logo": "https://iceluxdetailing.com/Logo.png",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Venmo, Zelle",
  "areaServed": [
    { "@type": "City", "name": "Iowa Colony", "sameAs": "https://en.wikipedia.org/wiki/Iowa_Colony,_Texas" },
    { "@type": "City", "name": "Pearland",    "sameAs": "https://en.wikipedia.org/wiki/Pearland,_Texas" },
    { "@type": "City", "name": "Alvin",       "sameAs": "https://en.wikipedia.org/wiki/Alvin,_Texas" },
    { "@type": "City", "name": "Rosharon",    "sameAs": "https://en.wikipedia.org/wiki/Rosharon,_Texas" },
    { "@type": "City", "name": "Manvel",      "sameAs": "https://en.wikipedia.org/wiki/Manvel,_Texas" },
    { "@type": "County", "name": "Brazoria County" },
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Iowa Colony",
    "addressRegion": "TX",
    "addressCountry": "US",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.4627,
    "longitude": -95.4177,
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
    ],
    "opens": "08:00",
    "closes": "19:00",
  },
  "sameAs": [
    "https://www.instagram.com/IceLux_Detailing",
    "https://www.facebook.com/IceLuxDetailing",
    "https://www.tiktok.com/@iceluxdetailing",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Detailing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IceLux Signature",
          "description": "Full interior & exterior detail — vacuum, surface cleaning, door jambs, hand wash, wheel & tire cleaning, tire dressing, bug removal, glass cleaning.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Blue Diamond Signature",
          "description": "Ultimate detail package including clay bar treatment, IceLux Shield paint protection, exterior trim restoration, interior dressing, and engine bay detail.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Lux Refresh",
          "description": "Maintenance detail to keep your vehicle fresh between full details. Interior vacuum, surface wipe-downs, glass, contact wash, wheel & tire cleaning.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ceramic Coating & Paint Protection",
          "description": "Ceramic protective wash, IceLux Shield sealant, and IceLux Crystal Coat for long-lasting hydrophobic paint protection.",
        },
      },
    ],
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <head>
        {/* Google Search Console verification — add token once you have it */}
        {/* <meta name="google-site-verification" content="YOUR_TOKEN_HERE" /> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
            rel="stylesheet"
        />
        <style>{`
          :root {
            --font-display: 'Cormorant Garamond', serif;
            --font-body: 'DM Sans', sans-serif;
          }
        `}</style>

        {/* LocalBusiness structured data */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
      <Navbar />
      <main style={{ paddingTop: "72px" }}>{children}</main>
      <Footer />
      </body>
      </html>
  );
}
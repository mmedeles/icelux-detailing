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
    "Iowa Colony car detailing",
    "premium detailing Texas",
    "ceramic coating Iowa Colony",
    "interior car detailing",
    "exterior auto detailing",
    "IceLux Detailing",
  ],
  authors: [{ name: "IceLux Detailing" }],
  creator: "IceLux Detailing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iceluxdetailing.com",
    siteName: "IceLux Detailing",
    title: "IceLux Detailing | Premium Mobile Car Detailing",
    description:
      "Professional mobile car detailing serving Iowa Colony & surrounding areas. From dusty to icy — we come to you.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IceLux Detailing | Premium Mobile Car Detailing",
    description:
      "Professional mobile car detailing serving Iowa Colony & surrounding areas.",
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

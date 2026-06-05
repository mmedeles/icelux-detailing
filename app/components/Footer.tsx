import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/app/lib/data";

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery",  label: "Gallery" },
  { href: "/contact",  label: "Contact" },
];

const socialLinks = [
  {
    href: siteConfig.instagramUrl,
    label: siteConfig.instagram,
    icon: (
        <img src="/instagram.svg" alt="Instagram" width={15} height={15}
             style={{ filter: "invert(60%) sepia(80%) saturate(400%) hue-rotate(170deg)", flexShrink: 0 }} />
    ),
  },
  {
    href: siteConfig.facebookUrl,
    label: "@IceLux Detailing",
    icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#0BBFFF" style={{ flexShrink: 0 }}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@iceluxdetailing",
    label: "@iceluxdetailing",
    icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#0BBFFF" style={{ flexShrink: 0 }}>
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.28 8.28 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z"/>
        </svg>
    ),
  },
];

export default function Footer() {
  return (
      <footer style={{ background: "#07101C", borderTop: "1px solid rgba(43,203,255,0.10)" }}>

        <style>{`
        .footer-link:hover { color: #0BBFFF !important; }
        .footer-grid {
          display: grid;
          gap: 3rem;
          grid-template-columns: 1fr 1fr;
          padding: 4rem 0 3rem;
          align-items: start;
        }
        .footer-brand { grid-column: span 2; }
        @media (min-width: 680px) {
          .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; }
          .footer-brand { grid-column: span 1; }
        }
      `}</style>

        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 1.5rem" }}>

          {/* ── Main grid ──────────────────────────────────────── */}
          <div className="footer-grid" style={{ width: "100%", maxWidth: "72rem", margin: "0 auto" }}>

            {/* Brand */}
            <div className="footer-brand">
              <div style={{ marginBottom: "1.5rem" }}>
                <Image src="/Logo.png" alt="IceLux Detailing" width={140} height={48}
                       style={{ height: "150px", width: "auto", objectFit: "contain" }} />
              </div>
              <p style={{ color: "#8CA9BD", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: "22rem", marginBottom: "1.25rem" }}>
                Premium mobile car detailing serving Iowa Colony and surrounding areas.
                Professional-grade results delivered directly to your driveway.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <MapPin size={14} color="#0BBFFF" style={{ flexShrink: 0 }} />
                <span style={{ color: "#8CA9BD", fontSize: "0.875rem" }}>{siteConfig.serviceArea}</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 style={{ color: "#EAF8FF", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                Navigation
              </h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none", padding: 0, margin: 0 }}>
                {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="footer-link"
                            style={{ color: "#8CA9BD", fontSize: "0.9375rem", textDecoration: "none", transition: "color 0.2s" }}>
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 style={{ color: "#EAF8FF", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                Contact
              </h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1.125rem", listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <a href={`tel:${siteConfig.phone}`} className="footer-link"
                     style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#8CA9BD", fontSize: "0.9375rem", textDecoration: "none", transition: "color 0.2s" }}>
                    <Phone size={14} color="#0BBFFF" style={{ flexShrink: 0 }} />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="footer-link"
                     style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#8CA9BD", fontSize: "0.9375rem", textDecoration: "none", transition: "color 0.2s" }}>
                    <Mail size={14} color="#0BBFFF" style={{ flexShrink: 0 }} />
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 style={{ color: "#EAF8FF", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                Socials
              </h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1.125rem", listStyle: "none", padding: 0, margin: 0 }}>
                {socialLinks.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="footer-link"
                         style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#8CA9BD", fontSize: "0.9375rem", textDecoration: "none", transition: "color 0.2s" }}>
                        {s.icon}
                        {s.label}
                      </a>
                    </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ── Divider ─────────────────────────────────────────── */}
          <div style={{ width: "100%", maxWidth: "72rem", margin: "0 auto", height: "1px", background: "linear-gradient(90deg, transparent, rgba(43,203,255,0.25), transparent)" }} />

          {/* ── Bottom bar ──────────────────────────────────────── */}
          <div style={{ width: "100%", maxWidth: "72rem", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", padding: "1.5rem 0 2rem" }}>
            <p style={{ color: "#8CA9BD", fontSize: "0.8125rem" }}>
              © {new Date().getFullYear()} IceLux Detailing. All rights reserved.
            </p>
            <p style={{ color: "#8CA9BD", fontSize: "0.8125rem" }}>
              Premium Mobile Detailing · {siteConfig.serviceArea}
            </p>
          </div>

        </div>
      </footer>
  );
}
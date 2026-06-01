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

export default function Footer() {
  return (
      <footer style={{ background: "#07101C", borderTop: "1px solid rgba(43,203,255,0.10)" }}>

        {/* Hover styles via a global <style> tag — no client JS needed */}
        <style>{`
        .footer-link:hover  { color: #0BBFFF !important; }
        .footer-brand       { grid-column: span 2; }
        @media (max-width: 640px) {
          .footer-brand     { grid-column: span 1; }
        }
      `}</style>

        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>

          {/* ── Main grid ──────────────────────────────────────── */}
          <div style={{
            width: "100%",
            maxWidth: "72rem",
            margin: "0 auto",
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            padding: "4rem 0 3rem",
            alignItems: "start",
          }}>

            {/* Brand */}
            <div className="footer-brand">
              <div style={{ marginBottom: "1.5rem" }}>
                <Image
                    src="/Logo.png"
                    alt="IceLux Detailing"
                    width={140}
                    height={48}
                    style={{ height: "150px", width: "auto", objectFit: "contain" }}
                />
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
                      <Link
                          href={link.href}
                          className="footer-link"
                          style={{ color: "#8CA9BD", fontSize: "0.9375rem", textDecoration: "none", transition: "color 0.2s" }}
                      >
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
                  <a
                      href={`tel:${siteConfig.phone}`}
                      className="footer-link"
                      style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#8CA9BD", fontSize: "0.9375rem", textDecoration: "none", transition: "color 0.2s" }}
                  >
                    <Phone size={14} color="#0BBFFF" style={{ flexShrink: 0 }} />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                      href={`mailto:${siteConfig.email}`}
                      className="footer-link"
                      style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#8CA9BD", fontSize: "0.9375rem", textDecoration: "none", transition: "color 0.2s" }}
                  >
                    <Mail size={14} color="#0BBFFF" style={{ flexShrink: 0 }} />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                      style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#8CA9BD", fontSize: "0.9375rem", textDecoration: "none", transition: "color 0.2s" }}
                  >
                    <img
                        src="/instagram.svg"
                        alt="Instagram"
                        width={14}
                        height={14}
                        style={{ filter: "invert(60%) sepia(80%) saturate(400%) hue-rotate(170deg)", flexShrink: 0 }}
                    />
                    {siteConfig.instagram}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Divider ─────────────────────────────────────────── */}
          <div style={{
            width: "100%",
            maxWidth: "72rem",
            margin: "0 auto",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(43,203,255,0.25), transparent)",
          }} />

          {/* ── Bottom bar ──────────────────────────────────────── */}
          <div style={{
            width: "100%",
            maxWidth: "72rem",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            padding: "1.5rem 0 2rem",
          }}>
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
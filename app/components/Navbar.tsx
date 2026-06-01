"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/app/lib/data";

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery",  label: "Gallery" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(5,9,18,0.97)" : "rgba(5,9,18,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(43,203,255,0.10)",
        boxShadow: scrolled ? "0 4px 40px rgba(11,191,255,0.05)" : "none",
        transition: "all 0.3s ease",
      }}>
        <style>{`
        .nav-link        { color: #8CA9BD; text-decoration: none; font-size: 0.9375rem; font-weight: 500; letter-spacing: 0.02em; position: relative; padding-bottom: 0.125rem; transition: color 0.2s; }
        .nav-link:hover  { color: #0BBFFF; }
        .nav-link.active { color: #0BBFFF; }
        .nav-link.active::after { content: ""; position: absolute; bottom: -2px; left: 0; right: 0; height: 1px; background: #0BBFFF; opacity: 0.6; border-radius: 9999px; }
        .nb-phone        { color: #8CA9BD; font-size: 0.75rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.375rem; transition: color 0.2s; }
        .nb-phone:hover  { color: #0BBFFF; }
        .mob-link        { color: #8CA9BD; text-decoration: none; font-size: 1rem; padding: 0.75rem 0; border-bottom: 1px solid rgba(43,203,255,0.07); display: block; transition: color 0.2s; }
        .mob-link:hover,
        .mob-link.active { color: #0BBFFF; }
        .mob-phone       { display: flex; align-items: center; gap: 0.5rem; color: #8CA9BD; font-size: 0.9375rem; padding: 0.75rem 0; border-bottom: 1px solid rgba(43,203,255,0.07); text-decoration: none; }

        /* show/hide by breakpoint */
        .nb-phone-strip  { display: flex; justify-content: flex-end; padding: 0.375rem 2rem; border-bottom: 1px solid rgba(43,203,255,0.10); }
        .nb-desktop-nav  { display: flex; }
        .nb-desktop-ctas { display: flex; }
        .nb-hamburger    { display: none; background: none; border: none; cursor: pointer; padding: 0.5rem; }
        .nb-mobile-menu  { display: block; }

        @media (max-width: 768px) {
          .nb-phone-strip  { display: none; }
          .nb-desktop-nav  { display: none !important; }
          .nb-desktop-ctas { display: none !important; }
          .nb-hamburger    { display: flex; align-items: center; }
        }
      `}</style>

        {/* ── Phone strip ──────────────────────────────────────── */}
        <div className="nb-phone-strip">
          <a href={`tel:${siteConfig.phone}`} className="nb-phone">
            <Phone size={11} color="#0BBFFF" />
            {siteConfig.phone}
          </a>
        </div>

        {/* ── Main bar ─────────────────────────────────────────── */}
        <div style={{ width: "100%", padding: "0 2rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px", position: "relative" }}>

            {/* Logo */}
            <Link href="/" style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
              <Image
                  src="/Logo.png"
                  alt="IceLux Detailing"
                  width={120}
                  height={40}
                  style={{ height: "70px", width: "auto", objectFit: "contain", transition: "opacity 0.2s" }}
                  priority
              />
            </Link>

            {/* Desktop nav — centred */}
            <nav className="nb-desktop-nav"
                 style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", alignItems: "center", gap: "2.25rem" }}>
              {navLinks.map((link) => (
                  <Link
                      key={link.href}
                      href={link.href}
                      className={`nav-link${pathname === link.href ? " active" : ""}`}
                  >
                    {link.label}
                  </Link>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="nb-desktop-ctas" style={{ alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
              <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-outline-ice"
                  style={{ padding: "0.5rem 1.125rem", borderRadius: "9999px", fontSize: "0.8125rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.375rem", whiteSpace: "nowrap" }}
              >
                <Phone size={13} /> Call Us
              </a>
              <Link
                  href="/contact"
                  className="btn-ice"
                  style={{ padding: "0.5625rem 1.25rem", borderRadius: "9999px", fontSize: "0.8125rem", fontWeight: 600, whiteSpace: "nowrap", display: "inline-flex", alignItems: "center" }}
              >
                Book Your Detail
              </Link>
            </div>

            {/* Hamburger */}
            <button
                className="nb-hamburger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} color="#8CA9BD" /> : <Menu size={22} color="#8CA9BD" />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ──────────────────────────────────────── */}
        <div className="nb-mobile-menu" style={{
          overflow: "hidden",
          maxHeight: isOpen ? "480px" : "0",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.3s ease, opacity 0.3s ease",
        }}>
          <nav style={{ background: "#07101C", borderBottom: "1px solid rgba(43,203,255,0.10)", padding: "1rem 2rem 1.5rem", display: "flex", flexDirection: "column" }}>
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`mob-link${pathname === link.href ? " active" : ""}`}
                >
                  {link.label}
                </Link>
            ))}
            <a href={`tel:${siteConfig.phone}`} className="mob-phone">
              <Phone size={14} color="#0BBFFF" /> {siteConfig.phone}
            </a>
            <Link
                href="/contact"
                className="btn-ice"
                style={{ padding: "0.875rem", borderRadius: "9999px", fontSize: "0.9375rem", fontWeight: 600, textAlign: "center", marginTop: "1rem", display: "block" }}
            >
              Book Your Detail
            </Link>
          </nav>
        </div>
      </header>
  );
}
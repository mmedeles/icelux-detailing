"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/app/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050912]/95 backdrop-blur-md border-b border-[rgba(43,203,255,0.12)] shadow-[0_4px_30px_rgba(34,191,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo placeholder — replace with <Image> when logo asset is ready */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22BFFF] to-[#8EDFFF] flex items-center justify-center glow-blue-sm group-hover:scale-110 transition-transform duration-300">
              <span className="text-[#050912] font-bold text-xs tracking-wide">IL</span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-[#EAF8FF] font-bold text-lg tracking-[0.08em] uppercase"
                style={{ fontFamily: "var(--font-display, serif)" }}
              >
                IceLux
              </span>
              <span className="text-[#22BFFF] text-[10px] tracking-[0.2em] uppercase font-light">
                Detailing
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-all duration-200 hover:text-[#22BFFF] ${
                  pathname === link.href
                    ? "text-[#22BFFF]"
                    : "text-[#8CA9BD]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Book CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-ice px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide"
            >
              Book Your Detail
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#8CA9BD] hover:text-[#22BFFF] transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[#07101C]/98 backdrop-blur-xl border-b border-[rgba(43,203,255,0.12)] px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base tracking-wide py-2 border-b border-[rgba(43,203,255,0.08)] transition-colors ${
                pathname === link.href
                  ? "text-[#22BFFF]"
                  : "text-[#8CA9BD] hover:text-[#EAF8FF]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-ice px-5 py-3 rounded-full text-sm font-semibold tracking-wide text-center mt-2"
          >
            Book Your Detail
          </Link>
        </nav>
      </div>
    </header>
  );
}

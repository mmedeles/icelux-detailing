"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
          className="fixed top-0 left-0 right-0 z-50 bg-[#050912]/96 backdrop-blur-md border-b border-[rgba(43,203,255,0.1)] shadow-[0_4px_40px_rgba(34,191,255,0.04)]"
      >
        {/* Use a fixed-width container with generous padding on both sides */}
        <div className="w-full px-8 sm:px-10 lg:px-14">
          <div className="flex items-center justify-between" style={{ height: "72px" }}>

            {/* ── Logo ─────────────────────────────────────────────── */}
            <Link href="/" className="shrink-0 group">
              <Image
                  src="/logo.png"
                  alt="IceLux Detailing"
                  width={160}
                  height={48}
                  className="h-20 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
                  priority
              />
            </Link>

            {/* ── Desktop Nav — truly centered in the full header ─── */}
            <nav className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                  <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm font-medium tracking-wide transition-all duration-200 hover:text-[#22BFFF] relative ${
                          pathname === link.href ? "text-[#22BFFF]" : "text-[#8CA9BD]"
                      }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                        <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#22BFFF] opacity-60 rounded-full" />
                    )}
                  </Link>
              ))}
            </nav>

            {/* ── Book CTA — never clips ─────────────────────────── */}
            <div className="hidden md:flex items-center shrink-0 ml-4">
              <Link
                  href="/contact"
                  className="btn-ice px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide whitespace-nowrap"
              >
                Book Your Detail
              </Link>
            </div>

            {/* ── Mobile Menu Button ────────────────────────────── */}
            <button
                className="md:hidden text-[#8CA9BD] hover:text-[#22BFFF] transition-colors p-2 shrink-0"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ───────────────────────────────────────── */}
        <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <nav className="bg-[#07101C]/98 backdrop-blur-xl border-b border-[rgba(43,203,255,0.1)] px-8 pt-4 pb-6 flex flex-col gap-1">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base tracking-wide py-3 border-b border-[rgba(43,203,255,0.07)] transition-colors ${
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
                className="btn-ice px-5 py-3.5 rounded-full text-sm font-semibold tracking-wide text-center mt-4"
            >
              Book Your Detail
            </Link>
          </nav>
        </div>
      </header>
  );
}
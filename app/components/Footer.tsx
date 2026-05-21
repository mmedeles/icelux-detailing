import Link from "next/link";
import { Phone, Mail, Share2, MapPin } from "lucide-react";
import { siteConfig } from "@/app/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#07101C] border-t border-[rgba(43,203,255,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22BFFF] to-[#8EDFFF] flex items-center justify-center">
                <span className="text-[#050912] font-bold text-xs">IL</span>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-[#EAF8FF] font-bold text-lg tracking-[0.08em] uppercase"
                  style={{ fontFamily: "var(--font-display, serif)" }}
                >
                  IceLux
                </span>
                <span className="text-[#22BFFF] text-[10px] tracking-[0.2em] uppercase">
                  Detailing
                </span>
              </div>
            </div>
            <p className="text-[#8CA9BD] text-sm leading-relaxed max-w-sm">
              Premium mobile car detailing serving Iowa Colony and surrounding areas.
              Professional-grade results delivered directly to your driveway.
            </p>
            <div className="mt-5 flex items-center gap-2 text-[#8CA9BD] text-sm">
              <MapPin size={14} className="text-[#22BFFF] shrink-0" />
              <span>{siteConfig.serviceArea}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#EAF8FF] text-sm font-semibold tracking-widest uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/packages", label: "Packages" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8CA9BD] hover:text-[#22BFFF] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#EAF8FF] text-sm font-semibold tracking-widest uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-[#8CA9BD] hover:text-[#22BFFF] text-sm transition-colors"
                >
                  <Phone size={14} className="text-[#22BFFF] shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-[#8CA9BD] hover:text-[#22BFFF] text-sm transition-colors"
                >
                  <Mail size={14} className="text-[#22BFFF] shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#8CA9BD] hover:text-[#22BFFF] text-sm transition-colors"
                >
                  <Share2 size={14} className="text-[#22BFFF] shrink-0" />
                  {siteConfig.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-ice mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[#8CA9BD] text-xs">
          <p>
            © {new Date().getFullYear()} IceLux Detailing. All rights reserved.
          </p>
          <p>Premium Mobile Detailing · {siteConfig.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}

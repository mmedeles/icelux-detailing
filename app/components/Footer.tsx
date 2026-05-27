import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/app/lib/data";

export default function Footer() {
  return (
      <footer className="bg-[#07101C] border-t border-[rgba(43,203,255,0.09)]">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-5">
                <Image
                    src="/Logo.png"
                    alt="IceLux Detailing"
                    width={140}
                    height={48}
                    className="h-40 w-auto object-contain"
                />
              </div>
              <p className="text-[#8CA9BD] text-sm leading-relaxed max-w-xs">
                Premium mobile car detailing serving Iowa Colony and surrounding areas.
                Professional-grade results delivered directly to your driveway.
              </p>
              <div className="mt-5 flex items-center gap-2 text-[#8CA9BD] text-sm">
                <MapPin size={13} className="text-[#22BFFF] shrink-0" />
                <span>{siteConfig.serviceArea}</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-[#EAF8FF] text-xs font-semibold tracking-[0.2em] uppercase mb-5">Navigation</h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/packages", label: "Packages" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}
                            className="text-[#8CA9BD] hover:text-[#22BFFF] text-sm transition-colors">
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[#EAF8FF] text-xs font-semibold tracking-[0.2em] uppercase mb-5">Contact</h3>
              <ul className="space-y-3.5">
                <li>
                  <a href={`tel:${siteConfig.phone}`}
                     className="flex items-center gap-2 text-[#8CA9BD] hover:text-[#22BFFF] text-sm transition-colors">
                    <Phone size={13} className="text-[#22BFFF] shrink-0" />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`}
                     className="flex items-center gap-2 text-[#8CA9BD] hover:text-[#22BFFF] text-sm transition-colors">
                    <Mail size={13} className="text-[#22BFFF] shrink-0" />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-[#8CA9BD] hover:text-[#22BFFF] text-sm transition-colors">
                    <img
                        src="/instagram.svg"
                        alt="Instagram"
                        width={13}
                        height={13}
                        style={{ filter: "invert(60%) sepia(80%) saturate(400%) hue-rotate(170deg)" }}
                    />
                    {siteConfig.instagram}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="divider-ice mt-12 mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[#8CA9BD] text-xs">
            <p>© {new Date().getFullYear()} IceLux Detailing. All rights reserved.</p>
            <p>Premium Mobile Detailing · {siteConfig.serviceArea}</p>
          </div>
        </div>
      </footer>
  );
}
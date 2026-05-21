import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ChevronRight, Zap } from "lucide-react";
import { packages, enhancements, siteConfig } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "View IceLux Detailing's full range of premium mobile detailing packages and enhancement services for Iowa Colony and surrounding areas.",
};

const tierStyles: Record<string, { badge: string; accent: string; featured: boolean }> = {
  signature: {
    badge: "bg-[rgba(34,191,255,0.08)] text-[#8EDFFF] border border-[rgba(43,203,255,0.2)]",
    accent: "text-[#22BFFF]",
    featured: false,
  },
  premium: {
    badge: "bg-[rgba(34,191,255,0.12)] text-[#22BFFF] border border-[rgba(43,203,255,0.35)]",
    accent: "text-[#22BFFF]",
    featured: false,
  },
  elite: {
    badge: "bg-[rgba(34,191,255,0.18)] text-[#EAF8FF] border border-[rgba(43,203,255,0.5)]",
    accent: "text-[#22BFFF]",
    featured: true,
  },
  maintenance: {
    badge: "bg-[rgba(34,191,255,0.06)] text-[#8CA9BD] border border-[rgba(43,203,255,0.15)]",
    accent: "text-[#8EDFFF]",
    featured: false,
  },
};

const tierLabels: Record<string, string> = {
  signature: "Signature",
  premium: "Premium",
  elite: "Elite",
  maintenance: "Maintenance",
};

export default function PackagesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-[#050912] pt-32 pb-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,191,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#22BFFF] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            IceLux Services
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold text-[#EAF8FF] mb-5"
            style={{ fontFamily: "var(--font-display, serif)" }}
          >
            Detailing Packages
          </h1>
          <p className="text-[#8CA9BD] text-lg max-w-xl mx-auto">
            Every package is designed for a specific level of care. Choose the one that
            fits your vehicle — or contact us for a custom quote.
          </p>
        </div>
      </section>

      {/* Packages grid */}
      <section className="bg-[#050912] pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {packages.map((pkg) => {
              const style = tierStyles[pkg.tier] || tierStyles.signature;
              return (
                <div
                  key={pkg.id}
                  className={`card-hover rounded-2xl p-7 flex flex-col relative ${
                    style.featured
                      ? "bg-[#0B1B33] border-ice-glow"
                      : "bg-[#09111F] border-ice"
                  }`}
                >
                  {style.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#22BFFF] to-[#8EDFFF] text-[#050912] text-xs font-bold tracking-widest uppercase whitespace-nowrap">
                      Most Comprehensive
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-5">
                    <span
                      className={`text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full ${style.badge}`}
                    >
                      {tierLabels[pkg.tier]}
                    </span>
                  </div>

                  <h2
                    className="text-[#EAF8FF] text-2xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-display, serif)" }}
                  >
                    {pkg.name}
                  </h2>
                  <p className={`text-sm font-medium mb-3 ${style.accent}`}>
                    {pkg.tagline}
                  </p>
                  <p className="text-[#8CA9BD] text-sm mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {pkg.services.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-[#8CA9BD]">
                        <CheckCircle
                          size={14}
                          className={`${style.accent} shrink-0 mt-0.5`}
                        />
                        {s}
                      </li>
                    ))}
                  </ul>

                  {pkg.note && (
                    <p className="text-[#8CA9BD] text-xs italic mb-5 border-t border-[rgba(43,203,255,0.1)] pt-4">
                      {pkg.note}
                    </p>
                  )}

                  <Link
                    href="/contact"
                    className={`flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold tracking-wide transition-all ${
                      style.featured ? "btn-ice" : "btn-outline-ice"
                    }`}
                  >
                    Get a Quote
                    <ChevronRight size={15} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhancements */}
      <section className="bg-[#0B1628] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#22BFFF] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              Add-Ons
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#EAF8FF] mb-4"
              style={{ fontFamily: "var(--font-display, serif)" }}
            >
              Enhancement Services
            </h2>
            <p className="text-[#8CA9BD] max-w-xl mx-auto">
              Customize any package with targeted enhancements for an even deeper clean
              or longer-lasting protection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {enhancements.map((enh) => (
              <div
                key={enh.name}
                className="card-hover bg-[#09111F] border-ice rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-[rgba(34,191,255,0.08)] border border-[rgba(43,203,255,0.2)] flex items-center justify-center shrink-0 mt-0.5">
                  <Zap size={14} className="text-[#22BFFF]" />
                </div>
                <div>
                  <h3 className="text-[#EAF8FF] font-semibold text-sm mb-1">
                    {enh.name}
                  </h3>
                  <p className="text-[#8CA9BD] text-xs leading-relaxed">
                    {enh.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#8CA9BD] text-sm mt-10">
            Add enhancements to any package.{" "}
            <Link href="/contact" className="text-[#22BFFF] hover:underline">
              Contact us for pricing.
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#050912] py-24 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(34,191,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#EAF8FF] mb-5"
            style={{ fontFamily: "var(--font-display, serif)" }}
          >
            Not sure which package is right?
          </h2>
          <p className="text-[#8CA9BD] mb-8">
            Send us a message or call and we'll help you pick the right detail for your
            vehicle and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-ice px-8 py-4 rounded-full text-base font-semibold tracking-wide"
            >
              Book Now
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-outline-ice px-8 py-4 rounded-full text-base font-semibold tracking-wide"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

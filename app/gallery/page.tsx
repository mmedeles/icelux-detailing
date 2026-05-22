import type { Metadata } from "next";
import Link from "next/link";
import { Camera, ChevronRight, Share2 } from "lucide-react";
import { galleryCategories, siteConfig } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
      "View IceLux Detailing's portfolio of before & after transformations, interior restoration, exterior gloss, ceramic coatings, and more.",
};

// Placeholder gallery items — replace with real photos
const galleryItems = [
  { category: "Before & After", label: "Full Interior Detail", size: "large" },
  { category: "Exterior", label: "Paint Gloss Finish", size: "medium" },
  { category: "Interior", label: "Leather Restoration", size: "medium" },
  { category: "Ceramic Coating", label: "Hydrophobic Beading", size: "medium" },
  { category: "Before & After", label: "Exterior Wash & Clay", size: "medium" },
  { category: "Wheels & Tires", label: "Wheel Deep Clean", size: "small" },
  { category: "Interior", label: "Dashboard Restoration", size: "small" },
  { category: "Exterior", label: "Panel Gloss Detail", size: "small" },
  { category: "Transformations", label: "Full Vehicle Transformation", size: "large" },
  { category: "Wheels & Tires", label: "Tire Dressing", size: "small" },
  { category: "Ceramic Coating", label: "Crystal Coat Application", size: "medium" },
  { category: "Interior", label: "Carpet Steam Clean", size: "small" },
];

export default function GalleryPage() {
  return (
      <>
        {/* Header */}
        <section className="relative bg-[#050912] pt-16 pb-16 overflow-hidden">
          <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                    "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,191,255,0.07) 0%, transparent 70%)",
              }}
          />
          <div className="relative w-full flex flex-col items-center text-center px-8 sm:px-10 lg:px-14">
            <p className="text-[#22BFFF] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">
              Our Work
            </p>
            <h1
                className="text-5xl sm:text-6xl font-bold text-[#EAF8FF] mb-5"
                style={{ fontFamily: "var(--font-display, serif)" }}
            >
              Gallery
            </h1>
            <p className="text-[#8CA9BD] text-lg max-w-xl leading-relaxed">
              Every vehicle tells a story. Heres what the IceLux difference looks like before, during, and after.
            </p>
          </div>
        </section>

        {/* Category filters */}
        <section className="bg-[#050912] pb-8">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14">
            <div className="flex flex-wrap gap-2 justify-center">
              <button className="px-4 py-2 rounded-full bg-[rgba(34,191,255,0.12)] border border-[rgba(43,203,255,0.4)] text-[#22BFFF] text-sm font-medium">
                All
              </button>
              {galleryCategories.map((cat) => (
                  <button
                      key={cat}
                      className="px-4 py-2 rounded-full bg-[#09111F] border-ice text-[#8CA9BD] text-sm hover:text-[#22BFFF] hover:border-[rgba(43,203,255,0.4)] transition-all"
                  >
                    {cat}
                  </button>
              ))}
            </div>
            <p className="text-center text-[#8CA9BD] text-xs mt-4 opacity-60">
              Filter functionality — connect real photos to activate
            </p>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="bg-[#050912] pb-24">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {galleryItems.map((item, i) => {
                const aspect =
                    item.size === "large"
                        ? "aspect-[4/3]"
                        : item.size === "medium"
                            ? "aspect-square"
                            : "aspect-[3/4]";
                return (
                    <div
                        key={i}
                        className={`break-inside-avoid ${aspect} rounded-xl bg-[#09111F] border-ice relative overflow-hidden group card-hover w-full`}
                    >
                      {/* Placeholder visual */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#09111F] via-[#0B1628] to-[#0B1B33]" />
                      <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: `radial-gradient(circle at ${30 + i * 17}% ${
                                40 + i * 11
                            }%, rgba(34,191,255,0.6) 0%, transparent 50%)`,
                          }}
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[rgba(5,9,18,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <Camera size={22} className="text-[#22BFFF] mx-auto mb-2" />
                          <p className="text-[#EAF8FF] text-sm font-semibold">{item.label}</p>
                        </div>
                      </div>

                      {/* Category badge */}
                      <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[rgba(5,9,18,0.8)] border border-[rgba(43,203,255,0.2)] text-[#8EDFFF] text-[10px] font-medium tracking-wide uppercase backdrop-blur-sm">
                      {item.category}
                    </span>
                      </div>

                      {/* Placeholder text */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center opacity-40">
                          <Camera size={20} className="text-[#22BFFF] mx-auto mb-1.5" />
                          <p className="text-[#8CA9BD] text-xs">Photo placeholder</p>
                        </div>
                      </div>

                      {/* Corner accents */}
                      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[rgba(43,203,255,0.4)]" />
                      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[rgba(43,203,255,0.4)]" />
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="bg-[#0B1628] py-20">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14">
            <div className="text-center mb-12">
              <p className="text-[#22BFFF] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                Transformations
              </p>
              <h2
                  className="text-4xl font-bold text-[#EAF8FF]"
                  style={{ fontFamily: "var(--font-display, serif)" }}
              >
                Before &amp; After
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Interior Full Restoration" },
                { label: "Exterior Clay & Polish" },
              ].map((item, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border-ice bg-[#09111F]">
                    <div className="grid grid-cols-2">
                      {["Before", "After"].map((phase) => (
                          <div
                              key={phase}
                              className="aspect-[3/2] relative flex flex-col items-center justify-center"
                              style={{
                                background:
                                    phase === "Before"
                                        ? "linear-gradient(135deg, #09111F, #0B1628)"
                                        : "linear-gradient(135deg, #0B1628, #0B1B33)",
                              }}
                          >
                            <Camera size={18} className="text-[#22BFFF] opacity-30 mb-2" />
                            <span className="text-[#8CA9BD] text-xs opacity-50">
                        {phase} photo
                      </span>
                            <div className="absolute top-2 left-2">
                        <span
                            className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full ${
                                phase === "Before"
                                    ? "bg-[rgba(0,0,0,0.5)] text-[#8CA9BD]"
                                    : "bg-[rgba(34,191,255,0.2)] text-[#22BFFF]"
                            }`}
                        >
                          {phase}
                        </span>
                            </div>
                          </div>
                      ))}
                    </div>
                    <div className="px-4 py-3 border-t border-[rgba(43,203,255,0.1)]">
                      <p className="text-[#8CA9BD] text-sm">{item.label}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram CTA */}
        <section className="bg-[#050912] py-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-[#09111F] border-ice rounded-2xl p-10 relative overflow-hidden">
              <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(34,191,255,0.05) 0%, transparent 70%)",
                  }}
              />
              <Share2 size={32} className="text-[#22BFFF] mx-auto mb-4" />
              <h2
                  className="text-3xl font-bold text-[#EAF8FF] mb-3"
                  style={{ fontFamily: "var(--font-display, serif)" }}
              >
                Follow Our Work
              </h2>
              <p className="text-[#8CA9BD] mb-6 text-sm">
                See our latest details, transformations, and process videos on Instagram.
                New content posted regularly.
              </p>
              <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ice px-8 py-3 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2"
              >
                <Share2 size={16} />
                {siteConfig.instagram}
              </a>

              {/* Instagram embed placeholder */}
              <div className="mt-8 grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="aspect-square rounded-lg bg-[rgba(34,191,255,0.04)] border border-[rgba(43,203,255,0.1)] flex items-center justify-center"
                    >
                      <Camera size={14} className="text-[#22BFFF] opacity-30" />
                    </div>
                ))}
              </div>
              <p className="text-[#8CA9BD] text-xs mt-3 opacity-50">
                Instagram feed embed — connect via Elfsight or similar widget
              </p>
            </div>

            <div className="mt-10">
              <Link
                  href="/contact"
                  className="btn-ice px-8 py-4 rounded-full text-base font-semibold tracking-wide inline-flex items-center gap-2"
              >
                Book Your Detail
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </>
  );
}
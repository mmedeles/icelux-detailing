import type { Metadata } from "next";
import Link from "next/link";
import { Camera, ChevronRight, Share2 } from "lucide-react";
import { galleryCategories, siteConfig } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
      "View IceLux Detailing's portfolio of before & after transformations, interior restoration, exterior gloss, engine bay cleaning, paint protection, and more.",
};

/* ─── Gallery items
   Updated: "Ceramic Coating" → "Engine Bay" / "Paint Protection" throughout
──────────────────────────────────────────────────────────────────────────── */
const galleryItems = [
  { category: "Before & After",   label: "Full Interior Detail",        size: "large"  },
  { category: "Exterior",          label: "Paint Gloss Finish",          size: "medium" },
  { category: "Interior",          label: "Leather Restoration",         size: "medium" },
  { category: "Paint Protection",  label: "IceLux Shield Application",   size: "medium" },
  { category: "Before & After",    label: "Exterior Wash & Clay",        size: "medium" },
  { category: "Wheels & Tires",    label: "Wheel Deep Clean",            size: "small"  },
  { category: "Interior",          label: "Dashboard Restoration",       size: "small"  },
  { category: "Exterior",          label: "Panel Gloss Detail",          size: "small"  },
  { category: "Transformations",   label: "Full Vehicle Transformation",  size: "large"  },
  { category: "Wheels & Tires",    label: "Tire Dressing",               size: "small"  },
  { category: "Engine Bay",        label: "Engine Bay Deep Clean",       size: "medium" },
  { category: "Interior",          label: "Carpet Steam Clean",          size: "small"  },
  { category: "Paint Protection",  label: "Crystal Coat Application",    size: "medium" },
  { category: "Engine Bay",        label: "Engine Bay Dressing",         size: "small"  },
];

const ICE   = "#0BBFFF";
const MUTED = "#8CA9BD";
const TEXT  = "#EAF8FF";
const BG    = "#050912";
const BG3   = "#09111F";
const BG4   = "#0B1628";
const FONT_DISPLAY = "var(--font-display,serif)";
const SECTION_BORDER = "1px solid rgba(43,203,255,0.10)";

export default function GalleryPage() {
  return (
      <>
        {/* ── HEADER ──────────────────────────────────────────────────── */}
        <section style={{ position: "relative", background: BG, overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(11,191,255,0.07) 0%, transparent 70%)" }} />
          <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "6rem 2rem 5rem" }}>
            <p style={{ color: ICE, fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Our Work
            </p>
            <h1 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 700, color: TEXT, marginBottom: "1.25rem", lineHeight: 1.05 }}>
              Gallery
            </h1>
            <p style={{ color: MUTED, fontSize: "1.0625rem", maxWidth: "34rem", lineHeight: 1.75 }}>
              Every vehicle tells a story. Here&apos;s what the IceLux difference looks like — before, during, and after.
            </p>
          </div>
        </section>

        {/* ── CATEGORY FILTERS ────────────────────────────────────────── */}
        <section style={{ background: BG, paddingBottom: "2.5rem" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", justifyContent: "center", maxWidth: "72rem" }}>
              <button style={{ padding: "0.5rem 1.25rem", borderRadius: "9999px", background: "rgba(11,191,255,0.12)", border: "1px solid rgba(43,203,255,0.4)", color: ICE, fontSize: "0.875rem", fontWeight: 500, cursor: "pointer" }}>
                All
              </button>
              {galleryCategories.map((cat) => (
                  <button key={cat}
                          style={{ padding: "0.5rem 1.25rem", borderRadius: "9999px", background: BG3, border: "1px solid rgba(43,203,255,0.18)", color: MUTED, fontSize: "0.875rem", fontWeight: 500, cursor: "pointer", transition: "all 0.2s" }}>
                    {cat}
                  </button>
              ))}
            </div>
            <p style={{ color: MUTED, fontSize: "0.75rem", marginTop: "1rem", opacity: 0.6 }}>
              Filter functionality — connect real photos to activate
            </p>
          </div>
        </section>

        {/* ── GALLERY GRID ────────────────────────────────────────────── */}
        <section style={{ background: BG, paddingBottom: "6rem" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <div style={{ width: "100%", maxWidth: "72rem", columns: "1", columnGap: "1rem" }} className="gallery-columns">
              {galleryItems.map((item, i) => {
                const aspectRatio = item.size === "large" ? "4/3" : item.size === "medium" ? "1/1" : "3/4";
                return (
                    <div key={i} style={{
                      breakInside: "avoid",
                      aspectRatio,
                      borderRadius: "0.75rem",
                      background: BG3,
                      border: "1px solid rgba(43,203,255,0.18)",
                      position: "relative",
                      overflow: "hidden",
                      marginBottom: "1rem",
                      display: "block",
                    }} className="card-hover">
                      {/* Subtle gradient bg */}
                      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${BG3}, ${BG4})` }} />
                      <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: `radial-gradient(circle at ${30 + i * 17}% ${40 + i * 11}%, rgba(11,191,255,0.6) 0%, transparent 50%)` }} />

                      {/* Placeholder icon */}
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                        <div style={{ textAlign: "center", opacity: 0.4 }}>
                          <Camera size={20} color={ICE} style={{ display: "block", margin: "0 auto 0.375rem" }} />
                          <p style={{ color: MUTED, fontSize: "0.75rem" }}>Photo placeholder</p>
                        </div>
                      </div>

                      {/* Category badge */}
                      <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem", right: "0.75rem" }}>
                    <span style={{ display: "inline-block", padding: "0.25rem 0.625rem", borderRadius: "9999px", background: "rgba(5,9,18,0.8)", border: "1px solid rgba(43,203,255,0.2)", color: "#8EDFFF", fontSize: "0.625rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", backdropFilter: "blur(4px)" }}>
                      {item.category}
                    </span>
                      </div>

                      {/* Corner accents */}
                      <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", width: "1rem", height: "1rem", borderTop: "1px solid rgba(43,203,255,0.4)", borderLeft: "1px solid rgba(43,203,255,0.4)" }} />
                      <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", width: "1rem", height: "1rem", borderTop: "1px solid rgba(43,203,255,0.4)", borderRight: "1px solid rgba(43,203,255,0.4)" }} />
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── BEFORE & AFTER ──────────────────────────────────────────── */}
        <section style={{ background: BG4, borderTop: SECTION_BORDER, paddingTop: "6rem", paddingBottom: "6rem" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <div style={{ width: "100%", maxWidth: "72rem", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                <p style={{ color: ICE, fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  Transformations
                </p>
                <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: TEXT }}>
                  Before &amp; After
                </h2>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.5rem" }}>
                {[
                  { label: "Interior Full Restoration" },
                  { label: "Exterior Clay & Paint Protection" },  {/* ← updated label */}
                ].map((item, i) => (
                    <div key={i} style={{ borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(43,203,255,0.18)", background: BG3 }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                        {["Before", "After"].map((phase) => (
                            <div key={phase} style={{
                              aspectRatio: "3/2",
                              position: "relative",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              background: phase === "Before"
                                  ? "linear-gradient(135deg,#09111F,#0B1628)"
                                  : "linear-gradient(135deg,#0B1628,#0B1B33)",
                            }}>
                              <Camera size={18} color={ICE} style={{ opacity: 0.3, marginBottom: "0.5rem" }} />
                              <span style={{ color: MUTED, fontSize: "0.75rem", opacity: 0.5 }}>{phase} photo</span>
                              <div style={{ position: "absolute", top: "0.5rem", left: "0.5rem" }}>
                          <span style={{
                            fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                            padding: "0.125rem 0.5rem", borderRadius: "9999px",
                            background: phase === "Before" ? "rgba(0,0,0,0.5)" : "rgba(11,191,255,0.2)",
                            color: phase === "Before" ? MUTED : ICE,
                          }}>
                            {phase}
                          </span>
                              </div>
                            </div>
                        ))}
                      </div>
                      <div style={{ padding: "0.875rem 1rem", borderTop: "1px solid rgba(43,203,255,0.1)" }}>
                        <p style={{ color: MUTED, fontSize: "0.9375rem", fontWeight: 500 }}>{item.label}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SOCIAL CTA ──────────────────────────────────────────────── */}
        <section style={{ background: BG, borderTop: SECTION_BORDER, paddingTop: "6rem", paddingBottom: "6rem" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <div style={{ width: "100%", maxWidth: "36rem", margin: "0 auto" }}>
              <div style={{ background: BG3, border: "1px solid rgba(43,203,255,0.18)", borderRadius: "1rem", padding: "3rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at center,rgba(11,191,255,0.05) 0%,transparent 70%)" }} />

                <img src="/instagram.svg" alt="Instagram" width={28} height={28}
                     style={{ filter: "invert(60%) sepia(80%) saturate(400%) hue-rotate(170deg)", display: "block", margin: "0 auto 1.25rem" }} />

                <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "1.875rem", fontWeight: 700, color: TEXT, marginBottom: "0.875rem" }}>
                  Follow Our Work
                </h2>
                <p style={{ color: MUTED, fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                  See our latest details, transformations, and process videos on Instagram and TikTok. New content posted regularly.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
                  <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer"
                     className="btn-ice"
                     style={{ padding: "0.75rem 2rem", borderRadius: "9999px", fontSize: "0.9375rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                    <Share2 size={16} />
                    {siteConfig.instagram}
                  </a>
                  <a href={siteConfig.tiktokUrl} target="_blank" rel="noopener noreferrer"
                     className="btn-outline-ice"
                     style={{ padding: "0.75rem 2rem", borderRadius: "9999px", fontSize: "0.9375rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.83 1.54V6.78a4.85 4.85 0 01-1.06-.09z"/>
                    </svg>
                    {siteConfig.tiktok}
                  </a>
                </div>

                {/* Feed placeholder grid */}
                <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.5rem" }}>
                  {[...Array(6)].map((_, i) => (
                      <div key={i} style={{ aspectRatio: "1/1", borderRadius: "0.5rem", background: "rgba(11,191,255,0.04)", border: "1px solid rgba(43,203,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Camera size={14} color={ICE} style={{ opacity: 0.3 }} />
                      </div>
                  ))}
                </div>
                <p style={{ color: MUTED, fontSize: "0.75rem", marginTop: "0.75rem", opacity: 0.5 }}>
                  Instagram feed embed — connect via Elfsight or similar widget
                </p>
              </div>

              <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
                <Link href="/contact" className="btn-ice"
                      style={{ padding: "1rem 2rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  Book Your Detail <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <style>{`
        @media (min-width: 640px)  { .gallery-columns { columns: 2; } }
        @media (min-width: 1024px) { .gallery-columns { columns: 3; } }
      `}</style>
      </>
  );
}
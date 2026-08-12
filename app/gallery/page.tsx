"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, X } from "lucide-react";
import { siteConfig } from "@/app/lib/data";

/* ─── Style constants ─────────────────────────────────── */
const BG   = "#050912";
const BG3  = "#09111F";
const BG4  = "#0B1628";
const ICE  = "#0BBFFF";
const TEXT = "#EAF8FF";
const MUTED = "#8CA9BD";
const FONT_DISPLAY = "var(--font-display,serif)";
const SECTION_BORDER = "1px solid rgba(43,203,255,0.10)";

/* ─── Intersection observer ───────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
        { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, style: extra = {} }: {
  children: React.ReactNode; delay?: number; style?: React.CSSProperties;
}) {
  const { ref, inView } = useInView();
  return (
      <div ref={ref} style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        ...extra,
      }}>
        {children}
      </div>
  );
}

/* ─── All categories ──────────────────────────────────── */
const CATEGORIES = ["All", "Before & After", "Interior", "Exterior", "Wheels & Tires", "Engine Bay", "Paint Protection", "Transformations"];

/* ─── Gallery items with real photos ─────────────────── */
const galleryItems = [
  /* ── EXTERIOR ───────────────────────────────────────── */
  { src: "/after cad full 1.jpg",       cat: "Exterior",       label: "Cadillac XT6 - Full Exterior Detail",    size: "large"  },
  { src: "/after cad full 2.jpg",       cat: "Exterior",       label: "Cadillac XT6 - Side Profile",            size: "medium" },
  { src: "/after cad full 3.jpg",       cat: "Exterior",       label: "Cadillac XT6 - Rear 3/4 View",           size: "medium" },
  { src: "/after cad full 4.jpg",       cat: "Exterior",       label: "Cadillac XT6 - Front 3/4 View",          size: "large"  },
  { src: "/after 3.jpg",                cat: "Exterior",       label: "Cadillac XT6 - Neighborhood Shot",       size: "medium" },
  { src: "/cad after front.jpg",        cat: "Exterior",       label: "Cadillac XT6 - Front View",              size: "medium" },
  { src: "/after silver van full.jpg",  cat: "Exterior",       label: "Sprinter Van - Front View",              size: "medium" },
  { src: "/after silver van 2 full.jpg",cat: "Exterior",       label: "Sprinter Van - Rear 3/4 View",           size: "medium" },
  { src: "/IMG_1726.jpeg",              cat: "Exterior",       label: "Wagoneer - Side Profile",                size: "large"  },
  { src: "/IMG_1727.jpeg",              cat: "Exterior",       label: "Wagoneer - Rear 3/4 View",               size: "medium" },
  { src: "/IMG_1729.jpeg",              cat: "Exterior",       label: "Wagoneer - Front 3/4 View",              size: "medium" },
  { src: "/IMG_1730.jpeg",              cat: "Exterior",       label: "Wagoneer - Rear Quarter",               size: "large"  },

  /* ── INTERIOR ───────────────────────────────────────── */
  { src: "/after cad int 1.jpg",        cat: "Interior",       label: "Cadillac XT6 - Driver Cabin",            size: "medium" },
  { src: "/after cad int 2.jpg",        cat: "Interior",       label: "Cadillac XT6 - Front Interior",          size: "medium" },
  { src: "/after cad int 3.jpg",        cat: "Interior",       label: "Cadillac XT6 - Interior Steering",       size: "medium" },
  { src: "/after cad int 11.jpg",       cat: "Interior",       label: "Cadillac LYRIQ 600 E4 - Center Console Detail", size: "large" },
  { src: "/after cad int 12.jpg",       cat: "Interior",       label: "Cadillac LYRIQ 600 E4 - Rear Floor",     size: "medium" },
  { src: "/after cad int 13.jpg",       cat: "Interior",       label: "Cadillac LYRIQ 600 E4 - Cargo Area",     size: "medium" },
  { src: "/after cad int 14.jpg",       cat: "Interior",       label: "Cadillac LYRIQ 600 E4 - Night Interior Glow", size: "large" },
  { src: "/after cad int 15.jpg",       cat: "Interior",       label: "Cadillac LYRIQ 600 E4 - Dashboard",      size: "medium" },
  { src: "/after 2.jpg",                cat: "Interior",       label: "Sprinter Van - Driver Cabin After",       size: "medium" },
  { src: "/porsche-interior.png",       cat: "Interior",       label: "Porsche Macan - Interior Restoration",   size: "large"  },
  { src: "/IMG_1711.jpeg",              cat: "Interior",       label: "Wagoneer - Driver Cabin",                size: "large"  },
  { src: "/IMG_1712.jpeg",              cat: "Interior",       label: "Wagoneer - Rear Seats",                  size: "medium" },
  { src: "/IMG_1713.jpeg",              cat: "Interior",       label: "Wagoneer - Cargo Area",                  size: "medium" },
  { src: "/IMG_1715.jpeg",              cat: "Interior",       label: "Wagoneer - Passenger Side",              size: "medium" },
  { src: "/IMG_1716.jpeg",              cat: "Interior",       label: "Wagoneer - Rear Interior",               size: "large"  },
  { src: "/IMG_1717.jpeg",              cat: "Interior",       label: "Wagoneer - Steering & Dash",             size: "medium" },
  { src: "/IMG_1720.jpeg",              cat: "Interior",       label: "Wagoneer - Second Row Seats",            size: "medium" },
  { src: "/IMG_1721.jpeg",              cat: "Interior",       label: "Wagoneer - Cargo Floor",                 size: "large"  },
  { src: "/IMG_1722.jpeg",              cat: "Interior",       label: "Wagoneer - Center Console",              size: "medium" },

  /* ── WHEELS & TIRES ─────────────────────────────────── */
  { src: "/after cad tire 1.jpg",       cat: "Wheels & Tires", label: "Cadillac XT6 - Wheel & Tire Dressing",  size: "medium" },
  { src: "/detail-truck.jpeg",          cat: "Wheels & Tires", label: "F-150 - Wheel Deep Clean",              size: "medium" },
  { src: "/wagoneer-exterior.jpeg",     cat: "Wheels & Tires", label: "Wagoneer - Wheel & Side Panel",         size: "large"  },
  { src: "/IMG_1725.jpeg",              cat: "Wheels & Tires", label: "Wagoneer - Wheel Close-Up",             size: "medium" },
  { src: "/IMG_1731.jpeg",              cat: "Wheels & Tires", label: "Wagoneer - Rear Wheel",                 size: "medium" },
  { src: "/IMG_1732.jpeg",              cat: "Wheels & Tires", label: "Wagoneer - Front Wheel",                size: "large"  },

  /* ── TRANSFORMATIONS ────────────────────────────────── */
  { src: "/after silver van 3.jpg",     cat: "Transformations", label: "Sprinter Van - Full Transformation",   size: "large"  },
  { src: "/IMG_1734.jpeg",              cat: "Transformations", label: "Wagoneer - Full Detail Complete",       size: "large"  },
];

/* ─── Before / After pairs ────────────────────────────── */
const beforeAfterPairs = [
  {
    label: "Cadillac XT6 - Full Interior Restoration",
    vehicle: "Cadillac XT6",
    before: { src: "/before cad int 1.jpg",  caption: "Heavy soiling, debris throughout" },
    after:  { src: "/after cad int 2.jpg",   caption: "Fully restored - showroom clean"  },
  },
  {
    label: "Cadillac XT6 - Rear Interior",
    vehicle: "Cadillac XT6",
    before: { src: "/before cad int 2.jpg",  caption: "Child seats, heavy debris, stains" },
    after:  { src: "/after cad int 12.jpg",  caption: "Spotless rear floor, mats restored" },
  },
  {
    label: "Cadillac LYRIQ 600 E4 - 3rd Row & Cargo",
    vehicle: "Cadillac LYRIQ 600 E4",
    before: { src: "/before cad int 3.jpg",  caption: "Dirty seats and soiled floor" },
    after:  { src: "/after cad int 13.jpg",  caption: "Deep cleaned cargo & 3rd row" },
  },
  {
    label: "Sprinter Van - Full Interior Detail",
    vehicle: "Mercedes Sprinter Van",
    before: { src: "/before van 1.jpg",      caption: "Debris-covered floor & seats" },
    after:  { src: "/after 2.jpg",           caption: "Complete restoration - like new" },
  },
  {
    label: "Wagoneer - Interior Detail",
    vehicle: "Jeep Wagoneer",
    before: { src: "/IMG_1711.jpeg",         caption: "Pre-detail inspection" },
    after:  { src: "/IMG_1717.jpeg",         caption: "Full interior detail complete" },
  },
];

/* ══════════════════════════════════════════════════════
   GALLERY PAGE
══════════════════════════════════════════════════════ */
export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  const filtered = activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.cat === activeFilter);

  return (
      <>
        {/* ── HERO HEADER ────────────────────────────────── */}
        <section style={{ position: "relative", background: BG, overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(11,191,255,0.07) 0%, transparent 70%)" }} />
          <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "6rem 2rem 5rem" }}>
            <p style={{ color: ICE, fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1rem" }}>Our Work</p>
            <h1 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 700, color: TEXT, marginBottom: "1.25rem", lineHeight: 1.05 }}>
              Gallery
            </h1>
            <p style={{ color: MUTED, fontSize: "1.0625rem", maxWidth: "34rem", lineHeight: 1.75 }}>
              Every vehicle tells a story. Here&apos;s what the IceLux difference looks like before, during, and after.
            </p>
          </div>
        </section>

        {/* ── CATEGORY FILTERS ───────────────────────────── */}
        <section style={{ background: BG, paddingBottom: "2rem" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", justifyContent: "center", maxWidth: "72rem" }}>
              {CATEGORIES.map((cat) => (
                  <button key={cat} onClick={() => setActiveFilter(cat)} style={{
                    padding: "0.5rem 1.25rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 500, cursor: "pointer",
                    transition: "all 0.2s",
                    background: activeFilter === cat ? "rgba(11,191,255,0.14)" : BG3,
                    border: activeFilter === cat ? "1px solid rgba(43,203,255,0.50)" : "1px solid rgba(43,203,255,0.18)",
                    color: activeFilter === cat ? ICE : MUTED,
                  }}>
                    {cat}
                  </button>
              ))}
            </div>
            <p style={{ color: MUTED, fontSize: "0.75rem", marginTop: "1rem", opacity: 0.55 }}>
              {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
              {activeFilter !== "All" ? ` in ${activeFilter}` : " total"}
            </p>
          </div>
        </section>

        {/* ── MASONRY GALLERY GRID ───────────────────────── */}
        <section style={{ background: BG, paddingBottom: "6rem" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <div style={{ width: "100%", maxWidth: "72rem" }}>
              <div style={{ columns: "1", columnGap: "1rem" }} className="gallery-columns">
                {filtered.map((item, i) => (
                    <FadeIn key={`${item.src}-${i}`} delay={i * 40} style={{ display: "block", breakInside: "avoid", marginBottom: "1rem" }}>
                      <div
                          onClick={() => setLightbox({ src: item.src, label: item.label })}
                          style={{
                            position: "relative",
                            aspectRatio: item.size === "large" ? "4/3" : item.size === "medium" ? "1/1" : "3/4",
                            borderRadius: "0.75rem",
                            overflow: "hidden",
                            cursor: "pointer",
                            border: "1px solid rgba(43,203,255,0.12)",
                          }}
                          className="gallery-card"
                      >
                        <Image src={item.src} alt={item.label} fill className="object-cover"
                               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />

                        {/* Hover overlay */}
                        <div className="gallery-overlay" style={{ position: "absolute", inset: 0, background: "rgba(5,9,18,0.65)", opacity: 0, transition: "opacity 0.3s", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
                          <p style={{ color: TEXT, fontSize: "0.9375rem", fontWeight: 600, textAlign: "center" }}>{item.label}</p>
                          <span style={{ marginTop: "0.625rem", color: ICE, fontSize: "0.75rem", border: "1px solid rgba(11,191,255,0.4)", padding: "0.25rem 0.75rem", borderRadius: "9999px" }}>View</span>
                        </div>

                        {/* Category badge */}
                        <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem" }}>
                      <span style={{ display: "inline-block", padding: "0.2rem 0.625rem", borderRadius: "9999px", background: "rgba(5,9,18,0.85)", border: "1px solid rgba(43,203,255,0.2)", color: "#8EDFFF", fontSize: "0.625rem", fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", backdropFilter: "blur(4px)" }}>
                        {item.cat}
                      </span>
                        </div>

                        {/* Corner accents */}
                        <div style={{ position: "absolute", top: "0.625rem", left: "0.625rem", width: "0.875rem", height: "0.875rem", borderTop: "1.5px solid rgba(43,203,255,0.45)", borderLeft: "1.5px solid rgba(43,203,255,0.45)" }} />
                        <div style={{ position: "absolute", top: "0.625rem", right: "0.625rem", width: "0.875rem", height: "0.875rem", borderTop: "1.5px solid rgba(43,203,255,0.45)", borderRight: "1.5px solid rgba(43,203,255,0.45)" }} />
                      </div>
                    </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BEFORE & AFTER ─────────────────────────────── */}
        <section style={{ background: BG4, borderTop: SECTION_BORDER, paddingTop: "6rem", paddingBottom: "6rem" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <div style={{ width: "100%", maxWidth: "72rem", margin: "0 auto" }}>
              <FadeIn>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                  <p style={{ color: ICE, fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>Transformations</p>
                  <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: TEXT, marginBottom: "1rem" }}>Before &amp; After</h2>
                  <p style={{ color: MUTED, fontSize: "1rem", maxWidth: "32rem", margin: "0 auto", lineHeight: 1.75 }}>Real results from real vehicles. This is what the IceLux Signature does.</p>
                </div>
              </FadeIn>

              <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                {beforeAfterPairs.map((pair, i) => (
                    <FadeIn key={i} delay={i * 80}>
                      <div style={{ background: BG3, border: "1px solid rgba(43,203,255,0.18)", borderRadius: "1rem", overflow: "hidden" }}>
                        {/* Header */}
                        <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(43,203,255,0.10)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span style={{ color: ICE, fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", background: "rgba(11,191,255,0.08)", border: "1px solid rgba(11,191,255,0.2)", padding: "0.2rem 0.625rem", borderRadius: "9999px" }}>
                        {pair.vehicle}
                      </span>
                          <p style={{ color: MUTED, fontSize: "0.9375rem", fontWeight: 500 }}>{pair.label}</p>
                        </div>

                        {/* Before / After split */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                          {/* Before */}
                          <div style={{ position: "relative", aspectRatio: "4/3" }}>
                            <Image src={pair.before.src} alt={`Before: ${pair.label}`} fill className="object-cover" sizes="50vw" />
                            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)" }} />
                            <div style={{ position: "absolute", top: "0.625rem", left: "0.625rem" }}>
                              <span style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.25rem 0.625rem", borderRadius: "9999px", background: "rgba(0,0,0,0.65)", color: MUTED }}>Before</span>
                            </div>
                            <div style={{ position: "absolute", bottom: "0.625rem", left: "0.625rem", right: "0.625rem" }}>
                              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", background: "rgba(0,0,0,0.5)", padding: "0.25rem 0.5rem", borderRadius: "0.375rem", backdropFilter: "blur(4px)" }}>{pair.before.caption}</p>
                            </div>
                          </div>

                          {/* After */}
                          <div style={{ position: "relative", aspectRatio: "4/3", borderLeft: "2px solid rgba(11,191,255,0.3)" }}>
                            <Image src={pair.after.src} alt={`After: ${pair.label}`} fill className="object-cover" sizes="50vw" />
                            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.12)" }} />
                            <div style={{ position: "absolute", top: "0.625rem", left: "0.625rem" }}>
                              <span style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.25rem 0.625rem", borderRadius: "9999px", background: "rgba(11,191,255,0.25)", color: ICE, border: "1px solid rgba(11,191,255,0.4)" }}>After</span>
                            </div>
                            <div style={{ position: "absolute", bottom: "0.625rem", left: "0.625rem", right: "0.625rem" }}>
                              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.75rem", background: "rgba(11,191,255,0.15)", padding: "0.25rem 0.5rem", borderRadius: "0.375rem", backdropFilter: "blur(4px)" }}>{pair.after.caption}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SOCIAL CTA ─────────────────────────────────── */}
        <section style={{ background: BG, borderTop: SECTION_BORDER, paddingTop: "6rem", paddingBottom: "6rem" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <div style={{ width: "100%", maxWidth: "36rem", margin: "0 auto" }}>
              <FadeIn>
                <div style={{ background: BG3, border: "1px solid rgba(43,203,255,0.18)", borderRadius: "1rem", padding: "3rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at center,rgba(11,191,255,0.05) 0%,transparent 70%)" }} />
                  <img src="/instagram.svg" alt="Instagram" width={28} height={28}
                       style={{ filter: "invert(60%) sepia(80%) saturate(400%) hue-rotate(170deg)", display: "block", margin: "0 auto 1.25rem" }} />
                  <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "1.875rem", fontWeight: 700, color: TEXT, marginBottom: "0.875rem" }}>Follow Our Work</h2>
                  <p style={{ color: MUTED, fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                    See our latest details, transformations, and process videos on Instagram and TikTok. New content posted regularly.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", alignItems: "center" }}>
                    <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer"
                       className="btn-outline-ice"
                       style={{ padding: "0.75rem 1.75rem", borderRadius: "9999px", fontSize: "0.9375rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.625rem", width: "100%", justifyContent: "center" }}>
                      <img src="/instagram.svg" alt="Instagram" width={18} height={18} style={{ filter: "invert(60%) sepia(80%) saturate(400%) hue-rotate(170deg)" }} />
                      Instagram - {siteConfig.instagram}
                    </a>
                    <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer"
                       className="btn-outline-ice"
                       style={{ padding: "0.75rem 1.75rem", borderRadius: "9999px", fontSize: "0.9375rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.625rem", width: "100%", justifyContent: "center" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#0BBFFF"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      Facebook - IceLux Detailing
                    </a>
                    <a href="https://www.tiktok.com/@iceluxdetailing" target="_blank" rel="noopener noreferrer"
                       className="btn-outline-ice"
                       style={{ padding: "0.75rem 1.75rem", borderRadius: "9999px", fontSize: "0.9375rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.625rem", width: "100%", justifyContent: "center" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#0BBFFF"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.28 8.28 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z"/></svg>
                      TikTok - @iceluxdetailing
                    </a>
                  </div>
                </div>
              </FadeIn>

              <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
                <Link href="/contact" className="btn-ice"
                      style={{ padding: "1rem 2rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  Book Your Detail <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── LIGHTBOX ───────────────────────────────────── */}
        {lightbox && (
            <div
                onClick={() => setLightbox(null)}
                style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", backdropFilter: "blur(8px)" }}>
              <button onClick={() => setLightbox(null)}
                      style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white", borderRadius: "9999px", width: "2.5rem", height: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <X size={18} />
              </button>
              <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: "100%", maxWidth: "52rem", maxHeight: "85vh", borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(43,203,255,0.25)" }}>
                <Image src={lightbox.src} alt={lightbox.label} width={1200} height={800}
                       style={{ width: "100%", height: "auto", maxHeight: "80vh", objectFit: "contain", display: "block" }} />
                <div style={{ padding: "1rem 1.5rem", background: BG3, borderTop: "1px solid rgba(43,203,255,0.12)" }}>
                  <p style={{ color: MUTED, fontSize: "0.9375rem" }}>{lightbox.label}</p>
                </div>
              </div>
            </div>
        )}

        <style>{`
        @media (min-width: 640px)  { .gallery-columns { columns: 2; } }
        @media (min-width: 1024px) { .gallery-columns { columns: 3; } }
        .gallery-card:hover .gallery-overlay { opacity: 1 !important; }
        .gallery-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .gallery-card:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(11,191,255,0.10); }
      `}</style>
      </>
  );
}
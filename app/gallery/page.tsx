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
const CATEGORIES = ["All", "Full Detail", "Interior", "Exterior", "Paint Protection", "Sprinter Van"];

/* ─── Vehicle jobs with real photos ───────────────────── */
const vehicleJobs = [
  {
    id: "wagoneer-full",
    vehicle: "Jeep Wagoneer",
    service: "IceLux Signature — Full Detail",
    category: "Full Detail",
    thumbnail: "/IMG_1729.jpeg",
    badge: "New",
    photos: [
      "/IMG_1729.jpeg",
      "/IMG_1726.jpeg",
      "/IMG_1727.jpeg",
      "/IMG_1730.jpeg",
      "/IMG_1711.jpeg",
      "/IMG_1712.jpeg",
      "/IMG_1713.jpeg",
      "/IMG_1715.jpeg",
      "/IMG_1716.jpeg",
      "/IMG_1717.jpeg",
      "/IMG_1720.jpeg",
      "/IMG_1721.jpeg",
      "/IMG_1722.jpeg",
      "/IMG_1725.jpeg",
      "/IMG_1731.jpeg",
      "/IMG_1732.jpeg",
      "/IMG_1734.jpeg",
    ],
  },
  {
    id: "cadillac-xt6-full",
    vehicle: "Cadillac XT6",
    service: "IceLux Signature — Full Detail",
    category: "Full Detail",
    thumbnail: "/after cad full 1.jpg",
    badge: null,
    photos: [
      "/after cad full 1.jpg",
      "/after cad full 2.jpg",
      "/after cad full 3.jpg",
      "/after cad full 4.jpg",
      "/after 3.jpg",
      "/cad after front.jpg",
      "/after cad int 1.jpg",
      "/after cad int 2.jpg",
      "/after cad int 3.jpg",
      "/after cad tire 1.jpg",
    ],
  },
  {
    id: "cadillac-lyriq",
    vehicle: "Cadillac LYRIQ 600 E4",
    service: "Interior Restoration",
    category: "Interior",
    thumbnail: "/after cad int 11.jpg",
    badge: null,
    photos: [
      "/after cad int 11.jpg",
      "/after cad int 12.jpg",
      "/after cad int 13.jpg",
      "/after cad int 14.jpg",
      "/after cad int 15.jpg",
    ],
  },
  {
    id: "sprinter-van",
    vehicle: "Mercedes Sprinter Van",
    service: "Full Interior Detail",
    category: "Sprinter Van",
    thumbnail: "/after silver van full.jpg",
    badge: null,
    photos: [
      "/after silver van full.jpg",
      "/after silver van 2 full.jpg",
      "/after silver van 3.jpg",
      "/after 2.jpg",
    ],
  },
  {
    id: "porsche-macan",
    vehicle: "Porsche Macan",
    service: "Interior Restoration",
    category: "Interior",
    thumbnail: "/porsche-interior.png",
    badge: null,
    photos: [
      "/porsche-interior.png",
    ],
  },
  {
    id: "f150-wheels",
    vehicle: "Ford F-150",
    service: "Wheel & Tire Detail",
    category: "Exterior",
    thumbnail: "/detail-truck.jpeg",
    badge: null,
    photos: [
      "/detail-truck.jpeg",
    ],
  },
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
  const [lightbox, setLightbox] = useState<{
    photos: string[];
    index: number;
    vehicle: string;
    service: string;
  } | null>(null);

  const openLightbox = (job: typeof vehicleJobs[0], index = 0) => {
    setLightbox({ photos: job.photos, index, vehicle: job.vehicle, service: job.service });
  };
  const closeLightbox = () => setLightbox(null);
  const lightboxNext = () => setLightbox((lb) => lb
      ? { ...lb, index: (lb.index + 1) % lb.photos.length } : null);
  const lightboxPrev = () => setLightbox((lb) => lb
      ? { ...lb, index: (lb.index - 1 + lb.photos.length) % lb.photos.length }
      : null);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "ArrowLeft")  lightboxPrev();
      if (e.key === "Escape")     closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  const filtered = activeFilter === "All"
      ? vehicleJobs
      : vehicleJobs.filter((job) => job.category === activeFilter);

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
              {filtered.length} vehicle{filtered.length !== 1 ? "s" : ""}
              {activeFilter !== "All" ? ` in ${activeFilter}` : " in gallery"}
            </p>
          </div>
        </section>

        {/* ── VEHICLE CARD GRID ───────────────────────────── */}
        <section style={{ background: BG, paddingBottom: "6rem" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <div style={{ width: "100%", maxWidth: "72rem" }}>
              <div
                  className="vehicle-grid"
                  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.75rem" }}
              >
                {filtered.map((job, i) => (
                    <FadeIn key={job.id} delay={i * 80}>
                      <div
                          onClick={() => openLightbox(job)}
                          className="vehicle-card"
                          style={{
                            position: "relative",
                            background: BG3,
                            border: "1px solid rgba(43,203,255,0.15)",
                            borderRadius: "1rem",
                            overflow: "hidden",
                            cursor: "pointer",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                          }}
                      >
                        {/* Thumbnail */}
                        <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                          <Image
                              src={job.thumbnail}
                              alt={job.vehicle}
                              fill
                              className="object-cover vehicle-thumb"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              style={{ transition: "transform 0.5s ease" }}
                          />
                          {/* Dark gradient overlay at bottom of image */}
                          <div style={{
                            position: "absolute", inset: 0,
                            background: "linear-gradient(to bottom, transparent 40%, rgba(5,9,18,0.85) 100%)",
                          }} />

                          {/* Badge if present */}
                          {job.badge && (
                              <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem" }}>
                                <span style={{
                                  background: "linear-gradient(135deg, #0BBFFF, #8EDFFF)",
                                  color: "#050912", fontSize: "0.625rem", fontWeight: 700,
                                  letterSpacing: "0.15em", textTransform: "uppercase",
                                  padding: "0.25rem 0.625rem", borderRadius: "9999px",
                                }}>{job.badge}</span>
                              </div>
                          )}

                          {/* Photo count badge */}
                          <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem" }}>
                            <span style={{
                              background: "rgba(5,9,18,0.80)", border: "1px solid rgba(43,203,255,0.25)",
                              color: ICE, fontSize: "0.6875rem", fontWeight: 600,
                              padding: "0.25rem 0.625rem", borderRadius: "9999px",
                              backdropFilter: "blur(4px)",
                              display: "inline-flex", alignItems: "center", gap: "0.375rem",
                            }}>
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                                   stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21 15 16 10 5 21"/>
                              </svg>
                              {job.photos.length}
                            </span>
                          </div>

                          {/* Corner accents */}
                          <div style={{ position: "absolute", bottom: "0.625rem", left: "0.625rem", width: "0.875rem", height: "0.875rem", borderBottom: "1.5px solid rgba(43,203,255,0.45)", borderLeft: "1.5px solid rgba(43,203,255,0.45)" }} />
                          <div style={{ position: "absolute", bottom: "0.625rem", right: "0.625rem", width: "0.875rem", height: "0.875rem", borderBottom: "1.5px solid rgba(43,203,255,0.45)", borderRight: "1.5px solid rgba(43,203,255,0.45)" }} />
                        </div>

                        {/* Card body */}
                        <div style={{ padding: "1.25rem 1.5rem" }}>
                          <h3 style={{
                            color: TEXT, fontFamily: FONT_DISPLAY, fontSize: "1.25rem",
                            fontWeight: 700, marginBottom: "0.375rem", lineHeight: 1.2,
                          }}>{job.vehicle}</h3>
                          <p style={{ color: ICE, fontSize: "0.8125rem", fontWeight: 500, marginBottom: "1rem" }}>{job.service}</p>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span style={{
                              color: MUTED, fontSize: "0.75rem",
                              display: "inline-flex", alignItems: "center", gap: "0.375rem",
                            }}>
                              {job.photos.length} photo{job.photos.length !== 1 ? "s" : ""}
                            </span>
                            <span style={{
                              color: ICE, fontSize: "0.8125rem", fontWeight: 600,
                              display: "inline-flex", alignItems: "center", gap: "0.25rem",
                            }}>
                              View Gallery
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                   stroke="currentColor" strokeWidth="2.5">
                                <polyline points="9 18 15 12 9 6"/>
                              </svg>
                            </span>
                          </div>

                          {/* Mini photo strip — show first 4 thumbnails */}
                          {job.photos.length > 1 && (
                              <div style={{ display: "flex", gap: "0.375rem", marginTop: "1rem" }}>
                                {job.photos.slice(0, 4).map((src, idx) => (
                                    <div
                                        key={idx}
                                        onClick={(e) => { e.stopPropagation(); openLightbox(job, idx); }}
                                        style={{
                                          position: "relative", flex: 1, aspectRatio: "1/1",
                                          borderRadius: "0.375rem", overflow: "hidden",
                                          border: "1px solid rgba(43,203,255,0.15)",
                                          cursor: "pointer",
                                        }}
                                    >
                                      <Image src={src} alt="" fill className="object-cover" sizes="80px" />
                                      {idx === 3 && job.photos.length > 4 && (
                                          <div style={{
                                            position: "absolute", inset: 0,
                                            background: "rgba(5,9,18,0.70)",
                                            display: "flex", alignItems: "center",
                                            justifyContent: "center",
                                          }}>
                                            <span style={{ color: TEXT, fontSize: "0.75rem", fontWeight: 700 }}>
                                              +{job.photos.length - 4}
                                            </span>
                                          </div>
                                      )}
                                    </div>
                                ))}
                              </div>
                          )}
                        </div>
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
                onClick={closeLightbox}
                style={{
                  position: "fixed", inset: 0, zIndex: 100,
                  background: "rgba(0,0,0,0.95)",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  backdropFilter: "blur(10px)",
                }}
            >
              {/* Top bar */}
              <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: "absolute", top: 0, left: 0, right: 0,
                    padding: "1.25rem 1.5rem",
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between",
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
                  }}
              >
                <div>
                  <p style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", fontFamily: FONT_DISPLAY }}>{lightbox.vehicle}</p>
                  <p style={{ color: ICE, fontSize: "0.8125rem" }}>{lightbox.service}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8125rem" }}>
                    {lightbox.index + 1} / {lightbox.photos.length}
                  </span>
                  <button
                      onClick={closeLightbox}
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "white", borderRadius: "9999px",
                        width: "2.25rem", height: "2.25rem",
                        display: "flex", alignItems: "center",
                        justifyContent: "center", cursor: "pointer",
                      }}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Main image */}
              <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: "relative", width: "100%", maxWidth: "56rem",
                    maxHeight: "75vh", display: "flex", alignItems: "center",
                    justifyContent: "center", padding: "0 4rem",
                  }}
              >
                <Image
                    src={lightbox.photos[lightbox.index]}
                    alt={`${lightbox.vehicle} - photo ${lightbox.index + 1}`}
                    width={1400} height={900}
                    style={{
                      width: "100%", height: "auto",
                      maxHeight: "70vh", objectFit: "contain",
                      borderRadius: "0.75rem",
                      border: "1px solid rgba(43,203,255,0.20)",
                    }}
                />

                {/* Prev button */}
                {lightbox.photos.length > 1 && (
                    <button
                        onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
                        style={{
                          position: "absolute", left: "0.5rem",
                          background: "rgba(11,191,255,0.12)",
                          border: "1px solid rgba(43,203,255,0.35)",
                          color: ICE, borderRadius: "9999px",
                          width: "2.75rem", height: "2.75rem",
                          display: "flex", alignItems: "center",
                          justifyContent: "center", cursor: "pointer",
                          transition: "background 0.2s",
                        }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2.5">
                        <polyline points="15 18 9 12 15 6"/>
                      </svg>
                    </button>
                )}

                {/* Next button */}
                {lightbox.photos.length > 1 && (
                    <button
                        onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
                        style={{
                          position: "absolute", right: "0.5rem",
                          background: "rgba(11,191,255,0.12)",
                          border: "1px solid rgba(43,203,255,0.35)",
                          color: ICE, borderRadius: "9999px",
                          width: "2.75rem", height: "2.75rem",
                          display: "flex", alignItems: "center",
                          justifyContent: "center", cursor: "pointer",
                          transition: "background 0.2s",
                        }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2.5">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </button>
                )}
              </div>

              {/* Thumbnail strip */}
              {lightbox.photos.length > 1 && (
                  <div
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        position: "absolute", bottom: 0, left: 0, right: 0,
                        padding: "1rem 1.5rem",
                        background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                        display: "flex", gap: "0.5rem",
                        justifyContent: "center", flexWrap: "nowrap",
                        overflowX: "auto",
                      }}
                  >
                    {lightbox.photos.map((src, idx) => (
                        <div
                            key={idx}
                            onClick={() => setLightbox((lb) => lb ? { ...lb, index: idx } : null)}
                            style={{
                              position: "relative", flexShrink: 0,
                              width: "3.5rem", height: "3.5rem",
                              borderRadius: "0.375rem", overflow: "hidden",
                              cursor: "pointer",
                              border: idx === lightbox.index
                                  ? "2px solid #0BBFFF"
                                  : "2px solid rgba(255,255,255,0.15)",
                              opacity: idx === lightbox.index ? 1 : 0.55,
                              transition: "opacity 0.2s, border-color 0.2s",
                            }}
                        >
                          <Image src={src} alt="" fill className="object-cover" sizes="56px" />
                        </div>
                    ))}
                  </div>
              )}
            </div>
        )}

        <style>{`
        .vehicle-grid { width: 100%; }
        .vehicle-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(11,191,255,0.12);
          border-color: rgba(43,203,255,0.40) !important;
        }
        .vehicle-card:hover .vehicle-thumb {
          transform: scale(1.04);
        }
        @media (max-width: 639px) {
          .vehicle-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      </>
  );
}
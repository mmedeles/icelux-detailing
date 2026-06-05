"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  CheckCircle, ChevronRight, Phone, AlertTriangle,
  Shield, Droplets, Sparkles, Wind,
} from "lucide-react";
import { siteConfig } from "@/app/lib/data";
import {
  RubberMatIcon, LeatherIcon, InteriorGlowIcon, StainOdorIcon,
  TrimRestoreIcon, EngineBayIcon,
} from "@/app/components/EnhancementIcons";

/* ─── Style constants ────────────────────────────────────────── */
const BG             = "#050912";
const BG2            = "#07101C";
const BG3            = "#09111F";
const BG4            = "#0B1628";
const ICE            = "#0BBFFF";
const ICE_LIGHT      = "#8EDFFF";
const TEXT           = "#EAF8FF";
const MUTED          = "#8CA9BD";
const BORDER         = "1px solid rgba(43,203,255,0.18)";
const BORDER_GLOW    = "1px solid rgba(43,203,255,0.50)";
const SECTION_BORDER = "1px solid rgba(43,203,255,0.10)";
const FONT_DISPLAY   = "var(--font-display,serif)";

/* ─── Intersection observer ──────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
        { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── FadeIn ─────────────────────────────────────────────────── */
function FadeIn({
                  children, delay = 0, style: extra = {}, className = "",
                }: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
      <div ref={ref} className={className} style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...extra,
      }}>
        {children}
      </div>
  );
}

/* ─── Section header ─────────────────────────────────────────── */
function SectionHeader({ eyebrow, title, subtitle }: {
  eyebrow: string; title: string; subtitle?: string;
}) {
  return (
      <FadeIn style={{ width: "100%", maxWidth: "72rem", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "4rem" }}>
        <p style={{ color: ICE, fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1rem" }}>{eyebrow}</p>
        <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: TEXT, marginBottom: "1.25rem", lineHeight: 1.1 }}>{title}</h2>
        {subtitle && <p style={{ color: MUTED, maxWidth: "36rem", fontSize: "1rem", lineHeight: 1.75 }}>{subtitle}</p>}
      </FadeIn>
  );
}

/* ─── Vehicle sizes ──────────────────────────────────────────── */
const vehicleSizes = ["Sedan", "Standard SUV / Truck", "Large SUV / Truck", "Small Commercial Van", "Large Commercial Van"];

/* ─── Price table ────────────────────────────────────────────── */
function PriceTable({ prices }: { prices: number[] }) {
  return (
      <div style={{ borderTop: SECTION_BORDER, marginTop: "1.25rem", paddingTop: "1.25rem" }}>
        <p style={{ color: ICE, fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Pricing</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {vehicleSizes.map((size, i) => (
              <div key={size} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: MUTED, fontSize: "0.8125rem" }}>{size}</span>
                <span style={{ color: TEXT, fontSize: "0.9375rem", fontWeight: 700 }}>${prices[i]}</span>
              </div>
          ))}
        </div>
      </div>
  );
}

/* ─── Package data ───────────────────────────────────────────── */
const allPackages = [
  {
    id: "signature", badge: "Most Popular", featured: true,
    badgeStyle: { background: "rgba(11,191,255,0.18)", color: ICE, border: "1px solid rgba(11,191,255,0.40)" },
    name: "IceLux Signature", label: "Full Interior & Exterior Detail",
    description: "Restore your vehicle inside and out with a complete detail with vacuuming, surface cleaning, door jambs, interior glass, hand wash, wheel & tire cleaning, tire dressing, bug removal, and glass cleaning.",
    services: ["Full interior vacuum", "Surface & door jamb cleaning", "Interior glass cleaning", "Exterior hand wash & rinse", "Wheel & tire cleaning", "Tire dressing", "Bug removal", "Exterior glass cleaning"],
    prices: [140, 180, 220, 250, 300], warning: null,
  },
  {
    id: "blue-diamond", badge: "Best of the Best", featured: false,
    badgeStyle: { background: "rgba(11,191,255,0.08)", color: ICE_LIGHT, border: "1px solid rgba(43,203,255,0.25)" },
    name: "Blue Diamond Signature", label: "Ultimate Detail Package",
    description: "Our most comprehensive package. Built upon the IceLux Signature, it adds premium restoration and protection for exceptional results inside and out.",
    services: ["Everything in IceLux Signature", "Clay bar treatment", "IceLux Shield protection", "Exterior trim restoration", "Interior dressing", "Engine bay detail"],
    prices: [230, 280, 330, 380, 450], warning: null,
  },
  {
    id: "luxe-refresh", badge: "Maintenance", featured: false,
    badgeStyle: { background: "rgba(11,191,255,0.05)", color: MUTED, border: "1px solid rgba(43,203,255,0.15)" },
    name: "The Lux Refresh", label: "Maintenance Detail",
    description: "Keep your vehicle fresh between full details — vacuuming, surface wipe-downs, interior & exterior glass, contact wash, wheel cleaning, and tire dressing.",
    services: ["Interior vacuum", "Surface wipe-downs", "Interior & exterior glass", "Contact wash", "Wheel & tire cleaning", "Tire dressing"],
    prices: [85, 105, 125, 145, 165],
    warning: "Vehicles previously detailed by IceLux with the IceLux Signature or Blue Diamond package are eligible 3–5 weeks after the full detail.",
  },
  {
    id: "diamond-lounge", badge: "Interior Detail", featured: false,
    badgeStyle: { background: "rgba(11,191,255,0.05)", color: MUTED, border: "1px solid rgba(43,203,255,0.15)" },
    name: "The Diamond Lounge", label: "Interior Detail",
    description: "Refresh your vehicle's cabin with a thorough interior detail — vacuuming, floor mat cleaning, dashboard, console, door panels, interior glass, and a complete wipe-down of all interior surfaces.",
    services: ["Full interior vacuum", "Floor mat cleaning", "Dashboard & console cleaning", "Door panel cleaning", "Interior glass cleaning", "Door jamb cleaning", "Complete interior wipe-down"],
    prices: [100, 125, 150, 175, 200], warning: null,
  },
  {
    id: "diamond-luxe", badge: "Exterior Detail", featured: false,
    badgeStyle: { background: "rgba(11,191,255,0.05)", color: MUTED, border: "1px solid rgba(43,203,255,0.15)" },
    name: "Diamond Luxe Finish", label: "Exterior Detail",
    description: "Bring back your vehicle's shine with a professional exterior detail focused on cleaning, enhancing, and protecting all exterior surfaces.",
    services: ["Exterior hand wash", "Wheel & tire cleaning", "Tire dressing", "Bug removal", "Exterior glass cleaning", "Trim wipe-down"],
    prices: [85, 110, 135, 155, 180], warning: null,
  },
];

/* ─── Paint protection ───────────────────────────────────────── */
const paintProtection = [
  {
    Icon: Droplets, name: "Ceramic Protective Wash", durability: "Up to 1 Month",
    description: "Ceramic-infused wash that boosts gloss, improves water beading, and leaves a slick hydrophobic finish between major details.",
    isSale: true, flashSale: "$15", regularPrice: "$30",
    pricing: null as null | { label: string; price: string }[],
  },
  {
    Icon: Shield, name: "IceLux Shield", durability: "Up to 5 Months",
    description: "Full-body clay decontamination + premium paint sealant. Removes bonded contaminants, enhances gloss, and provides long-lasting hydrophobic protection.",
    isSale: false, flashSale: null, regularPrice: null,
    pricing: [{ label: "Cars, SUVs & Trucks", price: "$50" }, { label: "3rd Row SUVs", price: "$60" }, { label: "Sprinter Vans", price: "$75" }],
  },
  {
    Icon: Sparkles, name: "IceLux Crystal Coat", durability: "Up to 12 Months",
    description: "Our highest level of paint protection — full-body clay decontamination + advanced ceramic wax for deep shine and long-lasting hydrophobic protection.",
    isSale: false, flashSale: null, regularPrice: null,
    pricing: [{ label: "Cars, SUVs & Trucks", price: "$75" }, { label: "3rd Row SUVs", price: "$85" }, { label: "Sprinter Vans", price: "$100" }],
  },
];

/* ─── Enhancements ───────────────────────────────────────────── */
const signatureEnhancements = [
  { Icon: LeatherIcon,      name: "Leather Treatment",           durability: "Up to 3 Months",  price: "$40",     description: "Nourishes leather, restores softness, and protects against drying and cracking." },
  { Icon: RubberMatIcon,    name: "Rubber Mat Renewal",          durability: "Up to 2 Months",  price: "$35",     description: "Restores faded rubber floor mats to a clean, factory-fresh appearance with UV protection." },
  { Icon: TrimRestoreIcon,  name: "Black Trim Restoration",      durability: "6–12 Months",     price: "$40",     description: "Restores faded exterior plastic trim to a rich, deep-black appearance with UV protection." },
  { Icon: EngineBayIcon,    name: "Engine Bay Clean & Dressing", durability: "Up to 6 Months",  price: "$40",     description: "Removes dirt and grime from accessible surfaces, restoring plastic and rubber to a factory-fresh look." },
  { Icon: InteriorGlowIcon, name: "Interior Glow-Up",            durability: "Up to 2 Months",  price: "$20",     description: "Revitalizes plastic, vinyl, and trim surfaces with UV protection and a restored factory-finish appearance." },
  { Icon: StainOdorIcon,    name: "Stain & Odor Removal",        durability: "Varies",          price: "From $30", description: "Targeted stain treatment, steam cleaning, and odor neutralization for carpets and upholstery." },
  { Icon: Wind,             name: "Steam Cleaning",               durability: "N/A",             price: "$40",      description: "High-pressure steam sanitizes and deep-cleans vents, crevices, upholstery, and hard-to-reach interior surfaces." },
];

/* ══════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════ */
export default function PackagesPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  const h = (delay: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: `all 0.7s ease ${delay}ms`,
  });

  return (
      <>
        {/* ══ HERO ════════════════════════════════════════════════ */}
        <section style={{ position: "relative", background: BG, overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(11,191,255,0.07) 0%, transparent 70%)" }} />
          <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "6rem 2rem 5rem" }}>
            <p style={{ color: ICE, fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1rem", ...h(100) }}>
              IceLux Services
            </p>
            <h1 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 700, color: TEXT, marginBottom: "1.25rem", lineHeight: 1.05, ...h(200) }}>
              Detailing Packages
            </h1>
            <p style={{ color: MUTED, fontSize: "1.0625rem", maxWidth: "34rem", lineHeight: 1.75, ...h(320) }}>
              Every package is built for a specific level of care. Choose the one that fits your vehicle, or contact us for a custom quote.
            </p>
          </div>
        </section>

        {/* ══ PACKAGES GRID ═══════════════════════════════════════ */}
        <section style={{ background: BG, borderTop: SECTION_BORDER, paddingTop: "1rem", paddingBottom: "6rem" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <div style={{ width: "100%", maxWidth: "72rem", display: "grid", gap: "1.75rem", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
              {allPackages.map((pkg, i) => (
                  <FadeIn key={pkg.id} delay={i * 80} style={{ display: "flex" }}>
                    <div style={{ position: "relative", background: pkg.featured ? "#0A1A2E" : BG3, border: pkg.featured ? BORDER_GLOW : BORDER, boxShadow: pkg.featured ? "0 0 50px rgba(11,191,255,0.10)" : "none", borderRadius: "1rem", padding: "2rem", display: "flex", flexDirection: "column", width: "100%" }} className="card-hover">

                      {pkg.featured && (
                          <div style={{ position: "absolute", top: "-0.875rem", left: "50%", transform: "translateX(-50%)", padding: "0.25rem 1rem", borderRadius: "9999px", background: `linear-gradient(135deg,${ICE},${ICE_LIGHT})`, color: BG, fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                            ★ Most Popular
                          </div>
                      )}

                      <div style={{ marginBottom: "1.25rem" }}>
                        <span style={{ ...pkg.badgeStyle, fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "0.3rem 0.75rem", borderRadius: "9999px", display: "inline-block" }}>{pkg.badge}</span>
                      </div>

                      <h2 style={{ fontFamily: FONT_DISPLAY, color: TEXT, fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.375rem" }}>{pkg.name}</h2>
                      <p style={{ color: ICE, fontSize: "0.875rem", fontWeight: 500, marginBottom: "1rem" }}>{pkg.label}</p>
                      <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>{pkg.description}</p>

                      <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", flex: 1, marginBottom: "1rem" }}>
                        {pkg.services.map((s) => (
                            <li key={s} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                              <CheckCircle size={13} color={ICE} style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                              <span style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.5 }}>{s}</span>
                            </li>
                        ))}
                      </ul>

                      {pkg.warning && (
                          <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", background: "rgba(11,191,255,0.05)", border: "1px solid rgba(11,191,255,0.2)", borderRadius: "0.75rem", padding: "0.875rem 1rem", margin: "1rem 0" }}>
                            <AlertTriangle size={15} color={ICE} style={{ flexShrink: 0, marginTop: "0.125rem" }} />
                            <p style={{ color: MUTED, fontSize: "0.75rem", lineHeight: 1.65 }}>
                              <span style={{ color: ICE, fontWeight: 600 }}>Eligibility: </span>{pkg.warning}
                            </p>
                          </div>
                      )}

                      <PriceTable prices={pkg.prices} />

                      <Link href="/contact" className={pkg.featured ? "btn-ice" : "btn-outline-ice"}
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.875rem", borderRadius: "9999px", fontSize: "0.9375rem", fontWeight: 600, letterSpacing: "0.04em", marginTop: "1.5rem" }}>
                        Book This Package <ChevronRight size={15} />
                      </Link>
                    </div>
                  </FadeIn>
              ))}
            </div>

            {/* Additional charges notice */}
            <FadeIn style={{ width: "100%", maxWidth: "72rem", margin: "2.5rem auto 0" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", background: "rgba(255,200,50,0.04)", border: "1px solid rgba(255,200,50,0.18)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
                <AlertTriangle size={15} color="#F5C842" style={{ flexShrink: 0, marginTop: "0.125rem" }} />
                <p style={{ color: MUTED, fontSize: "0.8125rem", lineHeight: 1.65 }}>
                  <span style={{ color: "#F5C842", fontWeight: 600 }}>Important: </span>
                  Additional charges may apply for excessive pet hair, stains, sand, mud, heavy soiling, or conditions requiring additional labor and time.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══ PAINT PROTECTION ════════════════════════════════════ */}
        <section id="paint-protection" style={{ background: BG2, borderTop: SECTION_BORDER, paddingTop: "6rem", paddingBottom: "6rem" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <SectionHeader eyebrow="Paint Protection" title="Protect Your Investment"
                           subtitle="Add a layer of paint protection to any package, from a quick ceramic wash to long-lasting crystal coating." />
            <div style={{ width: "100%", maxWidth: "72rem", display: "grid", gap: "1.75rem", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
              {paintProtection.map((item, i) => {
                const IconComp = item.Icon;
                return (
                    <FadeIn key={item.name} delay={i * 100} style={{ display: "flex" }}>
                      <div style={{ background: BG3, border: BORDER, borderRadius: "1rem", padding: "2rem", display: "flex", flexDirection: "column", width: "100%" }} className="card-hover">
                        <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", background: "rgba(11,191,255,0.07)", border: "1px solid rgba(11,191,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                          <IconComp size={20} color={ICE} />
                        </div>
                        <h3 style={{ fontFamily: FONT_DISPLAY, color: TEXT, fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.375rem" }}>{item.name}</h3>
                        <p style={{ color: ICE, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.875rem" }}>Lasts {item.durability}</p>
                        <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.75, flex: 1, marginBottom: "1.25rem" }}>{item.description}</p>
                        <div style={{ borderTop: SECTION_BORDER, paddingTop: "1.25rem" }}>
                          {item.isSale ? (
                              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <span style={{ background: "rgba(11,191,255,0.18)", color: ICE, fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.25rem 0.625rem", borderRadius: "9999px" }}>Flash Sale</span>
                                <span style={{ color: TEXT, fontSize: "1.5rem", fontWeight: 700 }}>{item.flashSale}</span>
                                <span style={{ color: MUTED, fontSize: "0.875rem", textDecoration: "line-through" }}>{item.regularPrice}</span>
                              </div>
                          ) : (
                              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                {item.pricing?.map((p) => (
                                    <div key={p.label} style={{ display: "flex", justifyContent: "space-between" }}>
                                      <span style={{ color: MUTED, fontSize: "0.8125rem" }}>{p.label}</span>
                                      <span style={{ color: TEXT, fontWeight: 700, fontSize: "0.9375rem" }}>{p.price}</span>
                                    </div>
                                ))}
                              </div>
                          )}
                        </div>
                        <Link href="/contact" className="btn-outline-ice"
                              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.75rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 600, marginTop: "1.5rem" }}>
                          Add to Package <ChevronRight size={14} />
                        </Link>
                      </div>
                    </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ SIGNATURE ENHANCEMENTS ══════════════════════════════ */}
        <section style={{ background: BG4, borderTop: SECTION_BORDER, paddingTop: "6rem", paddingBottom: "6rem" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <SectionHeader eyebrow="Add-Ons" title="Signature Enhancements"
                           subtitle="Customize any package with targeted enhancements for a deeper clean or longer-lasting protection." />
            <div style={{ width: "100%", maxWidth: "72rem", display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
              {signatureEnhancements.map((enh, i) => {
                const IconComp = enh.Icon;
                return (
                    <FadeIn key={enh.name} delay={i * 60} style={{ display: "flex" }}>
                      <div style={{ background: BG3, border: BORDER, borderRadius: "1rem", padding: "1.75rem", display: "flex", flexDirection: "column", width: "100%" }} className="card-hover">
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                          <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.625rem", background: "rgba(11,191,255,0.07)", border: "1px solid rgba(11,191,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <IconComp />
                          </div>
                          <div style={{ flex: 1 }}>
                            <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "0.9375rem", marginBottom: "0.25rem" }}>{enh.name}</h3>
                            <p style={{ color: ICE, fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Lasts {enh.durability}</p>
                          </div>
                          <span style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", flexShrink: 0 }}>{enh.price}</span>
                        </div>
                        <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.7 }}>{enh.description}</p>
                      </div>
                    </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ═══════════════════════════════════════════ */}
        <section style={{ position: "relative", background: BG, borderTop: SECTION_BORDER, padding: "7rem 2rem", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(11,191,255,0.07) 0%, transparent 70%)" }} />
          <FadeIn style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <p style={{ color: ICE, fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Get Started</p>
            <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, color: TEXT, maxWidth: "40rem", marginBottom: "1.25rem", lineHeight: 1.1 }}>
              Not Sure Which Package Is Right?
            </h2>
            <p style={{ color: MUTED, maxWidth: "30rem", fontSize: "1rem", lineHeight: 1.75, marginBottom: "3rem" }}>
              Message us or give us a call, we&apos;ll help you pick the right detail for your vehicle and budget.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Link href="/contact" className="btn-ice"
                    style={{ padding: "1rem 2.25rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Book Now <ChevronRight size={16} />
              </Link>
              <a href={`tel:${siteConfig.phone}`} className="btn-outline-ice"
                 style={{ padding: "1rem 2.25rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={16} /> {siteConfig.phone}
              </a>
            </div>
          </FadeIn>
        </section>
      </>
  );
}
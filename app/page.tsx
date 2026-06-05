"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Car, Sparkles, Shield, Calendar, MapPin,
  CheckCircle, MessageCircle, ChevronRight, Star,
  Phone, ArrowRight,
} from "lucide-react";import {
  services, featuredPackages, whyChoose, trustBarItems, siteConfig,
} from "@/app/lib/data";

/* ─── Hooks ──────────────────────────────────────────────────── */
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0: number | null = null;
    const step = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function useInView(threshold = 0.12) {
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

/* ─── Service icon ───────────────────────────────────────────── */
function ServiceIcon({ name }: { name: string }) {
  const cls = "w-6 h-6 text-[#0BBFFF]";
  if (name === "car")            return <Car className={cls} />;
  if (name === "sparkles")       return <Sparkles className={cls} />;
  if (name === "shield")         return <Shield className={cls} />;
  if (name === "calendar")       return <Calendar className={cls} />;
  if (name === "map-pin")        return <MapPin className={cls} />;
  if (name === "check-circle")   return <CheckCircle className={cls} />;
  if (name === "message-circle") return <MessageCircle className={cls} />;
  return null;
}

/* ─── FadeIn ─────────────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = "", style: extraStyle = {} }: {
  children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties;
}) {
  const { ref, inView } = useInView();
  return (
      <div ref={ref} className={className} style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...extraStyle,
      }}>
        {children}
      </div>
  );
}

/* ─── StatCounter ────────────────────────────────────────────── */
function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, inView } = useInView(0.3);
  const count = useCounter(target, 1800, inView);
  return (
      <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 2.5rem" }}>
        <p style={{ fontFamily: "var(--font-display,serif)", fontSize: "3.5rem", fontWeight: 700, color: "#0BBFFF", lineHeight: 1 }}>
          {count}{suffix}
        </p>
        <p style={{ color: "#8CA9BD", fontSize: "0.875rem", marginTop: "0.75rem", letterSpacing: "0.05em" }}>{label}</p>
      </div>
  );
}

/* ─── Section wrapper — guarantees centering at any zoom ─────── */
function Section({ children, bg, style = {} }: {
  children: React.ReactNode;
  bg?: string;
  style?: React.CSSProperties;
}) {
  return (
      <section style={{ background: bg, ...style }}>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 2rem" }}>
          {children}
        </div>
      </section>
  );
}

/* ─── SectionHeader ──────────────────────────────────────────── */
function SectionHeader({ eyebrow, title, subtitle }: {
  eyebrow: string; title: React.ReactNode; subtitle?: string;
}) {
  return (
      <FadeIn style={{ width: "100%", maxWidth: "72rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "4rem" }}>
        <p style={{ color: "#0BBFFF", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1rem" }}>
          {eyebrow}
        </p>
        <h2 style={{ fontFamily: "var(--font-display,serif)", fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 700, color: "#EAF8FF", marginBottom: "1.25rem", lineHeight: 1.1 }}>
          {title}
        </h2>
        {subtitle && (
            <p style={{ color: "#8CA9BD", maxWidth: "38rem", fontSize: "1rem", lineHeight: 1.75 }}>{subtitle}</p>
        )}
      </FadeIn>
  );
}

/* ─── Divider line between sections ─────────────────────────── */
const borderTop = "1px solid rgba(43,203,255,0.10)";

/* ══════════════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════════════ */
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  const anim = (delay: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: `all 0.7s ease ${delay}ms`,
  });

  return (
      <>
        {/* ══ HERO ══════════════════════════════════════════════════ */}
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image src="/hero.jpg" alt="IceLux Detailing" fill priority className="object-cover object-center"
                   style={{ transform: loaded ? "scale(1)" : "scale(1.05)", transition: "transform 8s ease" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg,rgba(0,0,0,0.93) 0%,rgba(0,0,0,0.70) 55%,rgba(0,0,0,0.25) 100%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "8rem", background: "linear-gradient(to top,rgba(5,9,18,1),transparent)" }} />
          </div>

          <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "7rem 1.25rem 5rem" }}>
            <div style={{ width: "100%", maxWidth: "72rem" }}>
              <div className="hero-grid">

                {/* Left — always full width on mobile */}
                <div className="hero-text">
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", borderRadius: "9999px", border: "1px solid rgba(11,191,255,0.4)", background: "rgba(11,191,255,0.08)", marginBottom: "2rem", ...anim(100) }}>
                    <MapPin size={11} color="#0BBFFF" />
                    <span style={{ color: "#0BBFFF", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    Serving Iowa Colony &amp; Surrounding Areas
                  </span>
                  </div>

                  <h1 style={{ fontFamily: "var(--font-display,serif)", fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.02em", marginBottom: "1.5rem", ...anim(200) }}>
                    <span style={{ color: "white", display: "block" }}>Luxury Auto</span>
                    <span style={{ color: "white", display: "block" }}>Detailing</span>
                    <span style={{ backgroundImage: "linear-gradient(90deg,#0BBFFF 0%,#8EDFFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "block", marginTop: "0.25rem" }}>
                    From Dusty to Icy
                  </span>
                  </h1>

                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "32rem", ...anim(350) }}>
                    Professional interior, exterior, and ceramic detailing services.
                    Deep restoration and premium protection brought directly to your driveway.
                    Your vehicle deserves the best. We bring it to you.
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem", ...anim(480) }}>
                    <Link href="/contact" className="btn-ice" style={{ padding: "1rem 2rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.05em", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                      Book Your Detail <ArrowRight size={16} />
                    </Link>
                    <Link href="/packages" className="btn-outline-ice" style={{ padding: "1rem 2rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                      View Packages
                    </Link>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", ...anim(580) }}>
                    <div style={{ display: "flex", gap: "0.125rem" }}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={15} color="#0BBFFF" fill="#0BBFFF" />)}
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem" }}>Premium results, delivered to your door</span>
                  </div>
                </div>

                {/* Right — photo card (hidden on mobile via CSS class) */}
                <div className="hero-photo-card" style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateX(0)" : "translateX(30px)", transition: "all 0.9s ease 300ms" }}>
                  <div style={{ position: "relative", width: "100%", maxWidth: "26rem", borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(11,191,255,0.28)", boxShadow: "0 0 80px rgba(11,191,255,0.10)", aspectRatio: "4/3" }}>
                    <Image src="/detail-truck.jpeg" alt="IceLux Detail Work" fill className="object-cover" />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.18)" }} />
                    <div style={{ position: "absolute", bottom: "1rem", left: "1rem", padding: "0.625rem 1rem", borderRadius: "0.75rem", background: "rgba(0,0,0,0.80)", border: "1px solid rgba(11,191,255,0.35)", backdropFilter: "blur(8px)" }}>
                      <p style={{ color: "#0BBFFF", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.125rem" }}>Mobile Service</p>
                      <p style={{ color: "white", fontSize: "0.875rem", fontWeight: 600 }}>We Come To You</p>
                    </div>
                    <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", width: "1.25rem", height: "1.25rem", borderTop: "2px solid rgba(11,191,255,0.55)", borderLeft: "2px solid rgba(11,191,255,0.55)" }} />
                    <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", width: "1.25rem", height: "1.25rem", borderTop: "2px solid rgba(11,191,255,0.55)", borderRight: "2px solid rgba(11,191,255,0.55)" }} />
                    <div style={{ position: "absolute", bottom: "0.75rem", right: "0.75rem", width: "1.25rem", height: "1.25rem", borderBottom: "2px solid rgba(11,191,255,0.55)", borderRight: "2px solid rgba(11,191,255,0.55)" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ TRUST BAR ═════════════════════════════════════════════ */}
        <Section bg="#07101C" style={{ borderTop: borderTop, borderBottom: borderTop }}>
          <div style={{ width: "100%", maxWidth: "72rem", display: "grid", gap: "2rem", padding: "2rem 0", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))" }}>
            {trustBarItems.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.875rem", justifyContent: "center" }}>
                  <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", background: "#0BBFFF", flexShrink: 0 }} />
                  <div>
                    <p style={{ color: "#EAF8FF", fontSize: "0.875rem", fontWeight: 600 }}>{item.label}</p>
                    <p style={{ color: "#8CA9BD", fontSize: "0.75rem", marginTop: "0.25rem" }}>{item.sub}</p>
                  </div>
                </div>
            ))}
          </div>
        </Section>

        {/* ══ STATS ═════════════════════════════════════════════════ */}
        <Section bg="#050912" style={{ borderBottom: borderTop }}>
          <div style={{ width: "100%", maxWidth: "48rem", display: "grid", gridTemplateColumns: "repeat(3,1fr)", padding: "5rem 0", gap: "0" }} className="stats-grid">
            {[
              { target: 5,   suffix: "★", label: "Star Rating - Every Time" },
              { target: 50,  suffix: "+", label: "Vehicles Detailed" },
              { target: 100, suffix: "%", label: "Satisfaction Guaranteed" },
            ].map((s, i) => (
                <div key={i} style={{ borderLeft: i > 0 ? borderTop : "none" }}>
                  <StatCounter {...s} />
                </div>
            ))}
          </div>
        </Section>

        {/* ══ ABOUT — alternating rows ══════════════════════════════ */}
        <Section bg="#050912" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
          <div style={{ width: "100%", maxWidth: "72rem", display: "flex", flexDirection: "column", gap: "7rem" }}>

            {/* Row 1: full-width text, no image */}
            <FadeIn style={{ width: "100%" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
                <div>
                  <p style={{ color: "#0BBFFF", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Why IceLux</p>
                  <h2 style={{ fontFamily: "var(--font-display,serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#EAF8FF", lineHeight: 1.15, marginBottom: "2rem" }}>
                    Mobile Detailing Built Around You
                  </h2>
                  <p style={{ color: "#8CA9BD", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                    At IceLux Detailing, your vehicle is more than transportation, it&apos;s an investment
                    worth protecting. We come directly to your home or office, bringing professional-grade
                    care with zero hassle. No drop-offs, no waiting rooms, no wasted time.
                  </p>
                  <p style={{ color: "#8CA9BD", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                    Every service uses industry-leading products and meticulous technique, delivering
                    showroom-quality results at your door. Transparent pricing. No hidden fees, ever.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                    <Link href="/contact" className="btn-ice" style={{ padding: "0.875rem 1.75rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                      Get a Quote <ArrowRight size={14} />
                    </Link>
                    <Link href="/packages" className="btn-outline-ice" style={{ padding: "0.875rem 1.75rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 600 }}>
                      Our Packages
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </Section>

        {/* ══ ABOUT ROW 2 — Premium Quality ═════════════════════════ */}
        <section style={{ position: "relative", overflow: "hidden", paddingTop: "6rem", paddingBottom: "6rem" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image src="/wagoneer-interior.png" alt="" fill className="object-cover object-center" />
            <div style={{ position: "absolute", inset: 0, background: "rgba(5,9,18,0.88)" }} />
          </div>
          <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 1.25rem" }}>
            <div style={{ width: "100%", maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
              <FadeIn>
                <p style={{ color: "#0BBFFF", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Premium Quality</p>
                <h2 style={{ fontFamily: "var(--font-display,serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#EAF8FF", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                  Professional Grade Every Single Detail
                </h2>
                <p style={{ color: "#8CA9BD", fontSize: "1rem", lineHeight: 1.8, marginBottom: "3rem", maxWidth: "44rem", margin: "0 auto 3rem" }}>
                  We use only premium detailing products, the same tools trusted by professional shops.
                  From clay bar decontamination to ceramic protective washes, every step is intentional
                  for maximum performance and lasting results.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.25rem", textAlign: "left" }}>
                  {[
                    { icon: <CheckCircle size={18} color="#0BBFFF" />, title: "Professional-Grade Products", desc: "Only the best detailing compounds, coatings, and tools, no shortcuts." },
                    { icon: <CheckCircle size={18} color="#0BBFFF" />, title: "Meticulous Technique", desc: "Every panel, surface, and crevice treated with care and precision." },
                    { icon: <CheckCircle size={18} color="#0BBFFF" />, title: "Transparent Pricing", desc: "What you see is what you pay, no hidden fees... ever." },
                    { icon: <CheckCircle size={18} color="#0BBFFF" />, title: "Kept Informed", desc: "Updates from booking through completion so you're never left guessing." },
                  ].map((pt) => (
                      <div key={pt.title} style={{ background: "rgba(9,17,31,0.80)", border: "1px solid rgba(43,203,255,0.15)", borderRadius: "0.875rem", padding: "1.375rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                        {pt.icon}
                        <p style={{ color: "#EAF8FF", fontWeight: 600, fontSize: "0.9375rem" }}>{pt.title}</p>
                        <p style={{ color: "#8CA9BD", fontSize: "0.875rem", lineHeight: 1.65 }}>{pt.desc}</p>
                      </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══════════════════════════════════════════════ */}
        <Section bg="#07101C" style={{ borderTop: borderTop, paddingTop: "6rem", paddingBottom: "6rem" }}>
          <SectionHeader
              eyebrow="What We Offer"
              title="Luxury Care For Every Detail"
              subtitle="Our passion for excellence shows in every service a clean vehicle, a transformative experience, and enhanced value every time." />
          <div style={{ width: "100%", maxWidth: "72rem", display: "grid", gap: "1.75rem", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
            {services.map((svc, i) => (
                <FadeIn key={svc.id} delay={i * 80}>
                  <div className="card-hover border-ice" style={{ background: "#09111F", borderRadius: "1rem", padding: "2.25rem", display: "flex", flexDirection: "column", height: "100%", alignItems: "center", textAlign: "center" }}>
                    <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "0.75rem", background: "rgba(11,191,255,0.07)", border: "1px solid rgba(11,191,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", flexShrink: 0 }}>
                      <ServiceIcon name={svc.icon} />
                    </div>
                    <h3 style={{ color: "#EAF8FF", fontWeight: 700, fontSize: "1rem", marginBottom: "0.875rem", lineHeight: 1.4 }}>{svc.title}</h3>
                    <p style={{ color: "#8CA9BD", fontSize: "0.875rem", lineHeight: 1.75, flex: 1 }}>{svc.description}</p>
                    <Link
                        href={svc.id === "paint-sealants" ? "/packages#paint-protection" : "/packages"}
                        style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "center", gap: "0.375rem", color: "#0BBFFF", fontSize: "0.875rem", fontWeight: 500 }}>
                      Learn More <ChevronRight size={14} />
                    </Link>
                  </div>
                </FadeIn>
            ))}
          </div>
        </Section>

        {/* ══ PACKAGES — photo background ═══════════════════════════ */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image src="/wagoneer-full.png" alt="packages bg" fill className="object-cover object-center" />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.87)" }} />
          </div>
          <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <SectionHeader
                eyebrow="Our Packages"
                title="Built For Your Vehicle"
                subtitle="Every package is designed with precision and care. Whether you need a quick refresh or a full transformation, we have you covered." />

            <div style={{ width: "100%", maxWidth: "72rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.75rem" }}>
              {featuredPackages.map((pkg, i) => (
                  <FadeIn key={pkg.id} delay={i * 100}>
                    <div style={{
                      background: i === 1 ? "rgba(5,15,35,0.97)" : "rgba(9,17,31,0.94)",
                      border: i === 1 ? "1px solid rgba(11,191,255,0.50)" : "1px solid rgba(11,191,255,0.18)",
                      boxShadow: i === 1 ? "0 0 50px rgba(11,191,255,0.12)" : "none",
                      borderRadius: "1rem",
                      padding: "2.25rem",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }} className="card-hover">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                    <span style={{
                      fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
                      padding: "0.375rem 0.75rem", borderRadius: "9999px",
                      background: i === 1 ? "rgba(11,191,255,0.18)" : "rgba(11,191,255,0.06)",
                      color: i === 1 ? "#0BBFFF" : "#8EDFFF",
                      border: i === 1 ? "1px solid rgba(11,191,255,0.40)" : "1px solid rgba(11,191,255,0.14)",
                    }}>{pkg.badge}</span>
                        {i === 1 && <Star size={14} color="#0BBFFF" fill="#0BBFFF" />}
                      </div>
                      <h3 style={{ fontFamily: "var(--font-display,serif)", color: "#EAF8FF", fontSize: "1.375rem", fontWeight: 700, marginBottom: "0.875rem" }}>{pkg.name}</h3>
                      <p style={{ color: "#8CA9BD", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>{pkg.description}</p>
                      <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1, marginBottom: "1.5rem" }}>
                        {pkg.highlights.map((h) => (
                            <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                              <CheckCircle size={13} color="#0BBFFF" style={{ flexShrink: 0, marginTop: "0.125rem" }} />
                              <span style={{ color: "#8CA9BD", fontSize: "0.875rem" }}>{h}</span>
                            </li>
                        ))}
                      </ul>
                      <p style={{ color: "#8CA9BD", fontSize: "0.6875rem", textAlign: "center", opacity: 0.5, letterSpacing: "0.05em", marginBottom: "1rem" }}>Contact us for pricing</p>
                      <Link href="/packages"
                            className={i === 1 ? "btn-ice" : "btn-outline-ice"}
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.875rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                        {pkg.cta} <ChevronRight size={14} />
                      </Link>
                    </div>
                  </FadeIn>
              ))}
            </div>

            <div style={{ marginTop: "3rem" }}>
              <Link href="/packages" style={{ color: "#0BBFFF", fontSize: "0.875rem", display: "inline-flex", alignItems: "center", gap: "0.375rem", opacity: 0.7 }}>
                View all packages &amp; enhancements <ChevronRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ GALLERY ═══════════════════════════════════════════════ */}
        <section style={{ position: "relative", borderTop: borderTop, paddingTop: "6rem", paddingBottom: "6rem", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image src="/IMG_1719.jpeg" alt="IceLux Detail Work" fill className="object-cover object-center" />
            <div style={{ position: "absolute", inset: 0, background: "rgba(5,9,18,0.82)" }} />
          </div>
          <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <SectionHeader eyebrow="Our Work" title="Results Speak for Themselves" />
            <FadeIn delay={100} style={{ width: "100%", maxWidth: "72rem", margin: "0 auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1rem", marginBottom: "3rem" }}>
                {["/IMG_1711.jpeg","/IMG_1712.jpeg","/IMG_1727.jpeg","/IMG_1730.jpeg","/IMG_1732.jpeg","/IMG_1734.jpeg"].map((src, i) => (
                    <div key={i} style={{ position: "relative", borderRadius: "0.875rem", overflow: "hidden", aspectRatio: "4/3", border: "1px solid rgba(11,191,255,0.18)" }}>
                      <Image src={src} alt="IceLux Detail Work" fill className="object-cover" />
                    </div>
                ))}
              </div>
              <div style={{ textAlign: "center" }}>
                <Link href="/gallery" className="btn-outline-ice" style={{ padding: "0.875rem 2.5rem", borderRadius: "9999px", fontSize: "0.9375rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  View Full Gallery <ChevronRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>



        {/* ══ SERVICE AREA ══════════════════════════════════════════ */}
        <Section bg="#050912" style={{ borderTop: borderTop, paddingTop: "6rem", paddingBottom: "6rem" }}>
          <FadeIn style={{ width: "100%", maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ background: "#09111F", border: "1px solid rgba(43,203,255,0.18)", borderRadius: "1rem", padding: "clamp(1.75rem,5vw,4rem)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at center,rgba(11,191,255,0.05) 0%,transparent 65%)" }} />
              <MapPin size={30} color="#0BBFFF" style={{ marginBottom: "1.25rem" }} />
              <p style={{ color: "#0BBFFF", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>Service Area</p>
              <h2 style={{ fontFamily: "var(--font-display,serif)", fontSize: "clamp(1.75rem,4vw,2.5rem)", fontWeight: 700, color: "#EAF8FF", marginBottom: "1.25rem" }}>Iowa Colony &amp; Surrounding Areas</h2>
              <p style={{ color: "#8CA9BD", maxWidth: "28rem", fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "1.75rem" }}>
                Mobile detailing available throughout our service area.
                We come directly to your home, apartment, or office. No drop-offs needed.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", marginBottom: "2rem" }}>
                {["Iowa Colony", "Alvin", "Pearland", "Rosharon", "Manvel"].map((area) => (
                    <span key={area} style={{ padding: "0.5rem 1.25rem", borderRadius: "9999px", background: "rgba(11,191,255,0.05)", border: "1px solid rgba(11,191,255,0.18)", color: "#8EDFFF", fontSize: "0.875rem", fontWeight: 500 }}>
                  {area}
                </span>
                ))}
              </div>
              {/* Drop-off appointment callout */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem", background: "rgba(11,191,255,0.05)", border: "1px solid rgba(11,191,255,0.22)", borderRadius: "0.875rem", padding: "1.125rem 1.5rem", maxWidth: "32rem", textAlign: "left" }}>
                <span style={{ fontSize: "1.25rem", flexShrink: 0, marginTop: "0.125rem" }}>🏠</span>
                <div>
                  <p style={{ color: "#EAF8FF", fontWeight: 600, fontSize: "0.9375rem", marginBottom: "0.375rem" }}>Drop-Off Appointments Available</p>
                  <p style={{ color: "#8CA9BD", fontSize: "0.875rem", lineHeight: 1.7 }}>
                    Iowa Colony residents may drop off their vehicle for service.
                    Drop-off appointments available for Iowa Colony location only.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* ══ SOCIALS ═══════════════════════════════════════════════ */}
        <Section bg="#050912" style={{ borderTop: borderTop, paddingTop: "6rem", paddingBottom: "6rem" }}>
          <SectionHeader
              eyebrow="Stay Connected"
              title="Follow The IceLux Journey"
              subtitle="See our latest work, before & afters, and behind-the-scenes content across our socials." />
          <div style={{ width: "100%", maxWidth: "56rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1.25rem", margin: "0 auto" }}>
            {[
              {
                href: siteConfig.instagramUrl,
                bg: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)",
                icon: <img src="/instagram.svg" alt="Instagram" width={24} height={24} style={{ filter: "brightness(0) invert(1)" }} />,
                name: "Instagram",
                handle: siteConfig.instagram,
                sub: "Follow our latest details",
              },
              {
                href: siteConfig.facebookUrl,
                bg: "#1877F2",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
                name: "Facebook",
                handle: "IceLux Detailing",
                sub: "Like our page for updates",
              },
              {
                href: "https://www.tiktok.com/@iceluxdetailing",
                bg: "#000000",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.28 8.28 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z"/></svg>,
                name: "TikTok",
                handle: "@iceluxdetailing",
                sub: "Watch our latest details",
              },
            ].map((s, i) => (
                <FadeIn key={s.name} delay={i * 80} style={{ display: "flex" }}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="card-hover border-ice"
                     style={{ display: "flex", alignItems: "center", gap: "1rem", background: "#09111F", borderRadius: "1rem", padding: "1.25rem 1.5rem", width: "100%", textAlign: "left", textDecoration: "none" }}>
                    <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {s.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: "#EAF8FF", fontWeight: 600, fontSize: "0.9375rem", marginBottom: "0.25rem" }}>{s.name}</p>
                      <p style={{ color: "#0BBFFF", fontSize: "0.8125rem", marginBottom: "0.125rem" }}>{s.handle}</p>
                      <p style={{ color: "#8CA9BD", fontSize: "0.75rem" }}>{s.sub}</p>
                    </div>
                    <ChevronRight size={16} color="#8CA9BD" />
                  </a>
                </FadeIn>
            ))}
          </div>
        </Section>

        {/* ══ FINAL CTA ═════════════════════════════════════════════ */}
        <section style={{ position: "relative", background: "#050912", borderTop: borderTop, padding: "7rem 2rem", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% 50%,rgba(11,191,255,0.07) 0%,transparent 68%)" }} />
          <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <FadeIn style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              <p style={{ color: "#0BBFFF", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Get Started</p>
              <h2 style={{ fontFamily: "var(--font-display,serif)", fontSize: "clamp(2.5rem,7vw,5rem)", fontWeight: 700, color: "#EAF8FF", maxWidth: "52rem", marginBottom: "1.5rem", lineHeight: 1.05 }}>
                Ready to Go From{" "}
                <span style={{ backgroundImage: "linear-gradient(90deg,#0BBFFF,#8EDFFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Dusty to Icy?
              </span>
              </h2>
              <p style={{ color: "#8CA9BD", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "32rem", marginBottom: "3rem" }}>
                Book your detail today and experience what premium mobile detailing actually looks like.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <Link href="/contact" className="btn-ice" style={{ padding: "1rem 2.5rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  Book Your Detail <ArrowRight size={16} />
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="btn-outline-ice" style={{ padding: "1rem 2.5rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  <Phone size={16} /> {siteConfig.phone}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Responsive helpers */}
        <style>{`
        /* ── Hero ─────────────────────────────────────────── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          width: 100%;
          align-items: center;
        }
        .hero-text { width: 100%; text-align: left; }
        .hero-photo-card { display: none; }

        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr 1fr; gap: 3.5rem; }
          .hero-photo-card { display: flex; justify-content: center; }
        }

        /* ── Stats ────────────────────────────────────────── */
        .stats-grid {
          grid-template-columns: 1fr !important;
          padding: 3rem 0 !important;
          gap: 2rem !important;
        }
        .stats-grid > div { border-left: none !important; border-top: 1px solid rgba(43,203,255,0.10); padding-top: 2rem; }
        .stats-grid > div:first-child { border-top: none; padding-top: 0; }
        @media (min-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(3,1fr) !important;
            padding: 5rem 0 !important;
            gap: 0 !important;
          }
          .stats-grid > div { border-top: none !important; padding-top: 0 !important; }
          .stats-grid > div + div { border-left: 1px solid rgba(43,203,255,0.10) !important; }
        }

        /* ── Global overflow guard ────────────────────────── */
        @media (max-width: 639px) {
          section { overflow-x: hidden; }
        }
      `}</style>
      </>
  );
}
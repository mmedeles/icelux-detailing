"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Phone, Mail, MapPin, Send, Calendar,
  CheckCircle, Clock, ChevronRight, AlertTriangle,
} from "lucide-react";
import { siteConfig } from "@/app/lib/data";

/* ─── Style constants ────────────────────────────────── */
const BG   = "#050912";
const BG2  = "#07101C";
const BG3  = "#09111F";
const BG4  = "#0B1628";
const ICE  = "#0BBFFF";
const TEXT = "#EAF8FF";
const MUTED = "#8CA9BD";
const BORDER = "1px solid rgba(43,203,255,0.18)";
const BORDER_FOCUS = "1px solid rgba(43,203,255,0.50)";
const SECTION_BORDER = "1px solid rgba(43,203,255,0.10)";
const FONT_DISPLAY = "var(--font-display,serif)";

/* ─── Intersection observer ──────────────────────────── */
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

/* ─── Shared input style ─────────────────────────────── */
const inputStyle: React.CSSProperties = {
  width: "100%",
  background: BG2,
  border: BORDER,
  borderRadius: "0.75rem",
  padding: "0.9375rem 1.125rem",
  color: TEXT,
  fontSize: "0.9375rem",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s",
  boxSizing: "border-box",
};

/* ─── Contact info items ─────────────────────────────── */
const contactItems = [
  {
    icon: <Phone size={17} color={ICE} />,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: <Mail size={17} color={ICE} />,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: (
        <img src="/instagram.svg" alt="Instagram" width={15} height={15}
             style={{ filter: "invert(60%) sepia(80%) saturate(400%) hue-rotate(170deg)" }} />
    ),
    label: "Instagram",
    value: siteConfig.instagram,
    href: siteConfig.instagramUrl,
    external: true,
  },
  {
    icon: <MapPin size={17} color={ICE} />,
    label: "Service Area",
    value: siteConfig.serviceArea,
    href: null,
  },
  {
    icon: <Clock size={17} color={ICE} />,
    label: "Hours",
    value: "By Appointment",
    sub: "7 days a week · Flexible scheduling",
    href: null,
  },
];

const whatToExpect = [
  "We confirm your booking within 24 hours",
  "We arrive at your location on time",
  "Full detail performed at your home or office",
  "Photo documentation before & after",
  "100% satisfaction is our standard",
];

/* ══════════════════════════════════════════════════════
   CONTACT PAGE
══════════════════════════════════════════════════════ */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", vehicle: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  const anim = (delay: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: `all 0.7s ease ${delay}ms`,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mykvbeya", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (response.ok) setSubmitted(true);
  };

  const field = (id: string): React.CSSProperties => ({
    ...inputStyle,
    border: focusedField === id ? BORDER_FOCUS : BORDER,
    background: focusedField === id ? BG4 : BG2,
  });

  return (
      <>
        {/* ── HERO HEADER ──────────────────────────────── */}
        <section style={{ position: "relative", background: BG, overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(11,191,255,0.07) 0%, transparent 70%)" }} />
          <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "6rem 2rem 5rem" }}>
            <p style={{ color: ICE, fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1rem", ...anim(100) }}>
              Get In Touch
            </p>
            <h1 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 700, color: TEXT, marginBottom: "1.25rem", lineHeight: 1.05, ...anim(200) }}>
              Book Your Detail
            </h1>
            <p style={{ color: MUTED, fontSize: "1.0625rem", maxWidth: "34rem", lineHeight: 1.75, ...anim(320) }}>
              Ready to go from dusty to icy? Reach out and we&apos;ll get you scheduled
              for a premium mobile detail at your location.
            </p>
          </div>
        </section>

        {/* ── MAIN CONTENT ─────────────────────────────── */}
        <section style={{ background: BG, borderTop: SECTION_BORDER, paddingBottom: "6rem" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem" }}>
            <div style={{ width: "100%", maxWidth: "72rem", display: "grid", gap: "2.5rem", gridTemplateColumns: "1fr" }} className="contact-grid">

              {/* ── LEFT COLUMN ────────────────────────── */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

                {/* Contact info card */}
                <FadeIn delay={50}>
                  <div style={{ background: BG3, border: BORDER, borderRadius: "1rem", padding: "2rem" }}>
                    <h2 style={{ fontFamily: FONT_DISPLAY, color: TEXT, fontSize: "1.375rem", fontWeight: 700, marginBottom: "1.75rem" }}>
                      Contact Info
                    </h2>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "1.375rem", listStyle: "none", padding: 0, margin: 0 }}>
                      {contactItems.map((item) => {
                        const inner = (
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                              <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.625rem", background: "rgba(11,191,255,0.07)", border: "1px solid rgba(43,203,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                {item.icon}
                              </div>
                              <div>
                                <p style={{ color: MUTED, fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{item.label}</p>
                                <p style={{ color: TEXT, fontWeight: 600, fontSize: "0.9375rem" }}>{item.value}</p>
                                {item.sub && <p style={{ color: MUTED, fontSize: "0.8125rem", marginTop: "0.125rem" }}>{item.sub}</p>}
                              </div>
                            </div>
                        );
                        return (
                            <li key={item.label}>
                              {item.href ? (
                                  <a href={item.href} target={item.external ? "_blank" : undefined}
                                     rel={item.external ? "noopener noreferrer" : undefined}
                                     style={{ textDecoration: "none", display: "block" }} className="contact-link">
                                    {inner}
                                  </a>
                              ) : inner}
                            </li>
                        );
                      })}
                    </ul>
                  </div>
                </FadeIn>

                {/* Drop-off notice */}
                <FadeIn delay={100}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", background: "rgba(11,191,255,0.05)", border: "1px solid rgba(11,191,255,0.22)", borderRadius: "1rem", padding: "1.375rem 1.5rem" }}>
                    <span style={{ fontSize: "1.375rem", flexShrink: 0, marginTop: "0.1rem" }}>🏠</span>
                    <div>
                      <p style={{ color: TEXT, fontWeight: 600, fontSize: "0.9375rem", marginBottom: "0.375rem" }}>Drop-Off Appointments Available</p>
                      <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.7 }}>
                        Iowa Colony residents may drop off their vehicle for service.
                        Drop-off appointments are available for the <span style={{ color: ICE, fontWeight: 600 }}>Iowa Colony location only</span>.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Online booking CTA */}
                <FadeIn delay={150}>
                  <div style={{ background: "#0A1A2E", border: "1px solid rgba(43,203,255,0.35)", boxShadow: "0 0 30px rgba(11,191,255,0.07)", borderRadius: "1rem", padding: "2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at center,rgba(11,191,255,0.06) 0%,transparent 70%)" }} />
                    <Calendar size={26} color={ICE} style={{ display: "block", margin: "0 auto 1rem" }} />
                    <h3 style={{ fontFamily: FONT_DISPLAY, color: TEXT, fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                      Online Booking
                    </h3>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                      Book directly through our scheduling system. Pick your date, time, and service in minutes.
                    </p>
                    <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer"
                       className="btn-ice"
                       style={{ padding: "0.875rem 1.75rem", borderRadius: "9999px", fontSize: "0.9375rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                      <Calendar size={15} /> Schedule Online
                    </a>
                  </div>
                </FadeIn>

                {/* What to expect */}
                <FadeIn delay={200}>
                  <div style={{ background: BG3, border: BORDER, borderRadius: "1rem", padding: "2rem" }}>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem" }}>What to Expect</h3>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem", listStyle: "none", padding: 0, margin: 0 }}>
                      {whatToExpect.map((step) => (
                          <li key={step} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                            <CheckCircle size={14} color={ICE} style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                            <span style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{step}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>

              {/* ── RIGHT COLUMN — Quote Form ───────────── */}
              <FadeIn delay={80}>
                <div style={{ background: BG3, border: BORDER, borderRadius: "1rem", padding: "2.5rem" }}>
                  {submitted ? (
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "4rem 2rem" }}>
                        <div style={{ width: "4.5rem", height: "4.5rem", borderRadius: "9999px", background: "rgba(11,191,255,0.12)", border: "1px solid rgba(43,203,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                          <CheckCircle size={30} color={ICE} />
                        </div>
                        <h3 style={{ fontFamily: FONT_DISPLAY, color: TEXT, fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.875rem" }}>Message Received!</h3>
                        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "22rem" }}>
                          We&apos;ll be in touch within 24 hours to confirm your detail.
                        </p>
                        <button onClick={() => setSubmitted(false)}
                                style={{ color: ICE, fontSize: "0.9375rem", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
                          Send another message
                        </button>
                      </div>
                  ) : (
                      <>
                        <h2 style={{ fontFamily: FONT_DISPLAY, color: TEXT, fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.625rem" }}>
                          Request a Quote
                        </h2>
                        <p style={{ color: MUTED, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "2.25rem" }}>
                          Tell us about your vehicle and what you&apos;re looking for. We&apos;ll get back to you with a custom quote.
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.375rem" }}>

                          {/* Name + Phone */}
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-row">
                            <div>
                              <label style={{ display: "block", color: MUTED, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.625rem" }}>
                                Full Name *
                              </label>
                              <input type="text" required placeholder="Your name"
                                     value={form.name}
                                     onChange={(e) => setForm({ ...form, name: e.target.value })}
                                     onFocus={() => setFocusedField("name")}
                                     onBlur={() => setFocusedField(null)}
                                     style={field("name")} />
                            </div>
                            <div>
                              <label style={{ display: "block", color: MUTED, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.625rem" }}>
                                Phone Number *
                              </label>
                              <input type="tel" required placeholder="Your phone"
                                     value={form.phone}
                                     onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                     onFocus={() => setFocusedField("phone")}
                                     onBlur={() => setFocusedField(null)}
                                     style={field("phone")} />
                            </div>
                          </div>

                          {/* Email */}
                          <div>
                            <label style={{ display: "block", color: MUTED, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.625rem" }}>
                              Email Address
                            </label>
                            <input type="email" placeholder="your@email.com"
                                   value={form.email}
                                   onChange={(e) => setForm({ ...form, email: e.target.value })}
                                   onFocus={() => setFocusedField("email")}
                                   onBlur={() => setFocusedField(null)}
                                   style={field("email")} />
                          </div>

                          {/* Vehicle */}
                          <div>
                            <label style={{ display: "block", color: MUTED, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.625rem" }}>
                              Vehicle (Year / Make / Model) *
                            </label>
                            <input type="text" required placeholder="e.g. 2021 Toyota Camry"
                                   value={form.vehicle}
                                   onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                                   onFocus={() => setFocusedField("vehicle")}
                                   onBlur={() => setFocusedField(null)}
                                   style={field("vehicle")} />
                          </div>

                          {/* Service */}
                          <div>
                            <label style={{ display: "block", color: MUTED, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.625rem" }}>
                              Service Interest
                            </label>
                            <select value={form.service}
                                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                                    onFocus={() => setFocusedField("service")}
                                    onBlur={() => setFocusedField(null)}
                                    style={{ ...field("service"), appearance: "none" as const }}>
                              <option value="">Select a package...</option>
                              <option value="icelux-signature">IceLux Signature — Full Interior & Exterior</option>
                              <option value="blue-diamond">Blue Diamond Signature — Ultimate Detail</option>
                              <option value="luxrefresh">LuxRefresh — Maintenance Detail</option>
                              <option value="diamond-lounge">The Diamond Lounge — Interior Detail</option>
                              <option value="diamond-luxe">Diamond Luxe Finish — Exterior Detail</option>
                              <option value="enhancement">Enhancement / Add-On Only</option>
                              <option value="not-sure">Not sure — need a recommendation</option>
                            </select>
                          </div>

                          {/* Preferred time */}
                          <div>
                            <label style={{ display: "block", color: MUTED, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.625rem" }}>
                              Preferred Appointment Time
                            </label>
                            <select value={form.message.includes("Preferred time:") ? "" : ""}
                                    onChange={(e) => setForm({ ...form, message: form.message.replace(/Preferred time:.*\n?/, "") + (e.target.value ? `Preferred time: ${e.target.value}\n` : "") })}
                                    onFocus={() => setFocusedField("time")}
                                    onBlur={() => setFocusedField(null)}
                                    style={{ ...field("time"), appearance: "none" as const }}>
                              <option value="">Select a time window...</option>
                              <optgroup label="Morning">
                                <option value="6:00 AM">6:00 AM</option>
                                <option value="6:30 AM">6:30 AM</option>
                                <option value="7:00 AM">7:00 AM</option>
                                <option value="7:30 AM">7:30 AM</option>
                                <option value="8:00 AM">8:00 AM</option>
                                <option value="8:30 AM">8:30 AM</option>
                                <option value="9:00 AM">9:00 AM</option>
                                <option value="9:30 AM">9:30 AM</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="10:30 AM">10:30 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="11:30 AM">11:30 AM</option>
                              </optgroup>
                              <optgroup label="Afternoon">
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="12:30 PM">12:30 PM</option>
                                <option value="1:00 PM">1:00 PM</option>
                                <option value="1:30 PM">1:30 PM</option>
                                <option value="2:00 PM">2:00 PM</option>
                                <option value="2:30 PM">2:30 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                                <option value="3:30 PM">3:30 PM</option>
                                <option value="4:00 PM">4:00 PM</option>
                                <option value="4:30 PM">4:30 PM</option>
                                <option value="5:00 PM">5:00 PM</option>
                              </optgroup>
                              <optgroup label="Evening">
                                <option value="5:30 PM">5:30 PM</option>
                                <option value="6:00 PM">6:00 PM</option>
                                <option value="6:30 PM">6:30 PM</option>
                                <option value="7:00 PM">7:00 PM</option>
                              </optgroup>
                              <option value="Flexible">Flexible — any time works</option>
                            </select>
                          </div>

                          {/* Notes */}
                          <div>
                            <label style={{ display: "block", color: MUTED, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.625rem" }}>
                              Additional Notes
                            </label>
                            <textarea rows={5} placeholder="Tell us about your vehicle's condition, specific concerns, preferred date, or anything else we should know..."
                                      value={form.message}
                                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                                      onFocus={() => setFocusedField("message")}
                                      onBlur={() => setFocusedField(null)}
                                      style={{ ...field("message"), resize: "none" as const, lineHeight: "1.6" }} />
                          </div>

                          {/* Submit */}
                          <button type="submit" className="btn-ice"
                                  style={{ width: "100%", padding: "1.125rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
                            <Send size={17} /> Send Request
                          </button>

                          <p style={{ color: MUTED, fontSize: "0.8125rem", textAlign: "center", lineHeight: 1.6 }}>
                            We typically respond within 24 hours. For faster service, call or text{" "}
                            <a href={`tel:${siteConfig.phone}`} style={{ color: ICE }}>{siteConfig.phone}</a>
                          </p>
                          <p style={{ color: MUTED, fontSize: "0.7125rem", textAlign: "center", lineHeight: 0.5 }}>
                            This is NOT an official booking, this is purely a quote upon your request
                          </p>
                        </form>
                      </>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────── */}
        <section style={{ position: "relative", background: BG, borderTop: SECTION_BORDER, padding: "6rem 2rem", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 50% at 50% 50%,rgba(11,191,255,0.06) 0%,transparent 68%)" }} />
          <FadeIn style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <p style={{ color: ICE, fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1rem" }}>Prefer to Call?</p>
            <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 700, color: TEXT, maxWidth: "36rem", marginBottom: "1.25rem", lineHeight: 1.1 }}>
              We&apos;re Always a Call Away
            </h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: "28rem", marginBottom: "2.5rem" }}>
              Call or text us directly to book, ask questions, or get a quick quote on the spot.
            </p>
            <a href={`tel:${siteConfig.phone}`} className="btn-ice"
               style={{ padding: "1rem 2.5rem", borderRadius: "9999px", fontSize: "1.0625rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.625rem" }}>
              <Phone size={17} /> {siteConfig.phone}
            </a>
          </FadeIn>
        </section>

        <style>{`
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 2fr 3fr !important; align-items: start; }
        }
        @media (max-width: 540px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
        .contact-link:hover p:last-child { color: ${ICE}; }
      `}</style>
      </>
  );
}
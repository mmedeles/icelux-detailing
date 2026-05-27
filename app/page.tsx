import Link from "next/link";
import Image from "next/image";
import {
  Car, Sparkles, Shield, Calendar, MapPin,
  CheckCircle, MessageCircle, ChevronRight, Star,
} from "lucide-react";
import {
  services, featuredPackages, whyChoose, trustBarItems,
} from "@/app/lib/data";

function ServiceIcon({ name }: { name: string }) {
  const cls = "w-5 h-5 text-[#22BFFF]";
  if (name === "car") return <Car className={cls} />;
  if (name === "sparkles") return <Sparkles className={cls} />;
  if (name === "shield") return <Shield className={cls} />;
  if (name === "calendar") return <Calendar className={cls} />;
  if (name === "map-pin") return <MapPin className={cls} />;
  if (name === "check-circle") return <CheckCircle className={cls} />;
  if (name === "message-circle") return <MessageCircle className={cls} />;
  return null;
}

export default function Home() {
  return (
      <>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050912]">
          {/* Ambient glow */}
          <div aria-hidden className="absolute inset-0 pointer-events-none"
               style={{ background: "radial-gradient(ellipse 65% 55% at 68% 42%, rgba(34,191,255,0.07) 0%, transparent 65%)" }} />
          {/* Subtle grid */}
          <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.022]"
               style={{
                 backgroundImage: "linear-gradient(rgba(34,191,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,191,255,1) 1px, transparent 1px)",
                 backgroundSize: "64px 64px",
               }} />
          {/* Edge vignette */}
          <div aria-hidden className="absolute inset-0 pointer-events-none"
               style={{ background: "radial-gradient(ellipse at center, transparent 35%, #050912 88%)" }} />

          <div className="relative max-w-7xl mx-auto px-8 sm:px-10 lg:px-14 pt-16 pb-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Copy */}
            <div className="max-w-xl">
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(43,203,255,0.28)] bg-[rgba(34,191,255,0.05)] mb-8">
                <MapPin size={25} className="text-[#22BFFF] shrink-0" />
                <span className="text-[#8EDFFF] text-[11px] font-medium tracking-[0.18em] uppercase">
                Serving Iowa Colony &amp; Surrounding Areas
              </span>
              </div>

              {/* Headline */}
              <h1
                  className="text-5xl sm:text-6xl lg:text-[68px] font-bold leading-[1.04] tracking-tight mb-6"
                  style={{ fontFamily: "var(--font-display, serif)" }}
              >
                <span className="text-[#EAF8FF] block">Premium Mobile</span>
                <span className="text-[#EAF8FF] block">Detailing</span>
                <span
                    className="text-transparent bg-clip-text block mt-1"
                    style={{ backgroundImage: "linear-gradient(90deg, #22BFFF 0%, #8EDFFF 100%)", textShadow: "none", WebkitTextStroke: "0px" }}
                >
                From Dusty to Icy
              </span>
              </h1>

              {/* Subheadline */}
              <p className="text-[#8CA9BD] text-base sm:text-lg leading-relaxed mb-10 max-w-md">
                Professional interior, exterior, and ceramic detailing services delivering
                deep restoration and premium protection directly to your driveway.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="btn-ice px-10 py-4 rounded-full text-base font-semibold tracking-wide">
                  Book Your Detail
                </Link>
                <Link href="/packages" className="btn-outline-ice px-10 py-4 rounded-full text-base font-semibold tracking-wide">
                  View Packages
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-[#22BFFF] fill-[#22BFFF]" />
                  ))}
                </div>
                <span className="text-[#8CA9BD] text-base">Premium results, delivered to your door</span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative w-full">
              <div className="aspect-[4/3] rounded-2xl border border-[rgba(43,203,255,0.18)] overflow-hidden glow-blue relative">
                <Image
                    src="/hero.jpg"
                    alt="IceLux Detailing premium mobile car detail"
                    fill
                    className="object-cover"
                    priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-4 bg-[#09111F] border border-[rgba(43,203,255,0.28)] rounded-xl px-4 py-3 glow-blue-sm shadow-lg">
                <p className="text-[#22BFFF] text-[10px] font-semibold tracking-[0.18em] uppercase mb-0.5">Mobile Service</p>
                <p className="text-[#EAF8FF] text-sm font-bold">We Come To You</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ──────────────────────────────────────────────────────── */}
        <section className="bg-[#07101C] border-y border-[rgba(43,203,255,0.09)]">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14 py-7">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {trustBarItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#22BFFF] shrink-0 opacity-80" />
                    <div>
                      <p className="text-[#EAF8FF] text-sm font-semibold leading-tight">{item.label}</p>
                      <p className="text-[#8CA9BD] text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ───────────────────────────────────────────────────────── */}
        <section className="bg-[#050912] py-28">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14">
            <div className="text-center mb-16">
              <p className="text-[#22BFFF] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">What We Offer</p>
              <h2
                  className="text-4xl sm:text-5xl font-bold text-[#EAF8FF]"
                  style={{ fontFamily: "var(--font-display, serif)" }}
              >
                Luxury Care For Every Detail
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((svc) => (
                  <div key={svc.id} className="card-hover bg-[#09111F] border-ice rounded-2xl p-7 group">
                    <div className="w-11 h-11 rounded-xl bg-[rgba(34,191,255,0.07)] border border-[rgba(43,203,255,0.18)] flex items-center justify-center mb-5 group-hover:bg-[rgba(34,191,255,0.11)] transition-colors">
                      <ServiceIcon name={svc.icon} />
                    </div>
                    <h3 className="text-[#EAF8FF] font-semibold text-base mb-2.5 tracking-tight">{svc.title}</h3>
                    <p className="text-[#8CA9BD] text-sm leading-relaxed">{svc.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED PACKAGES ──────────────────────────────────────────────── */}
        <section className="bg-[#0B1628] py-28">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14">
            <div className="text-center mb-16">
              <p className="text-[#22BFFF] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">Our Packages</p>
              <h2
                  className="text-4xl sm:text-5xl font-bold text-[#EAF8FF] mb-5"
                  style={{ fontFamily: "var(--font-display, serif)" }}
              >
                Built For Your Vehicle
              </h2>
              <p className="text-[#8CA9BD] max-w-lg mx-auto text-base leading-relaxed">
                Every package is designed with precision and care. Whether you need a
                quick refresh or a full transformation, we have you covered.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPackages.map((pkg, i) => (
                  <div
                      key={pkg.id}
                      className={`card-hover rounded-2xl p-8 flex flex-col ${
                          i === 1 ? "bg-[#0B1B33] border-ice-glow" : "bg-[#09111F] border-ice"
                      }`}
                  >
                    <div className="flex items-start justify-between mb-6">
                  <span className={`text-[10px] font-semibold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full ${
                      i === 1
                          ? "bg-[rgba(34,191,255,0.14)] text-[#22BFFF] border border-[rgba(43,203,255,0.38)]"
                          : "bg-[rgba(34,191,255,0.06)] text-[#8EDFFF] border border-[rgba(43,203,255,0.14)]"
                  }`}>
                    {pkg.badge}
                  </span>
                      {i === 1 && (
                          <Star size={14} className="text-[#22BFFF] fill-[#22BFFF] mt-1" />
                      )}
                    </div>

                    <h3
                        className="text-[#EAF8FF] text-2xl font-bold mb-2"
                        style={{ fontFamily: "var(--font-display, serif)" }}
                    >
                      {pkg.name}
                    </h3>
                    <p className="text-[#8CA9BD] text-sm leading-relaxed mb-6">{pkg.description}</p>

                    <ul className="space-y-2.5 mb-8 flex-1">
                      {pkg.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-[#8CA9BD]">
                            <CheckCircle size={13} className="text-[#22BFFF] shrink-0 mt-0.5" />
                            {h}
                          </li>
                      ))}
                    </ul>

                    <Link
                        href="/packages"
                        className={`flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all ${
                            i === 1 ? "btn-ice" : "btn-outline-ice"
                        }`}
                    >
                      {pkg.cta}
                      <ChevronRight size={15} />
                    </Link>
                  </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/packages" className="text-[#22BFFF] text-sm hover:underline tracking-wide inline-flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                View all packages &amp; enhancements <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── GALLERY PREVIEW ────────────────────────────────────────────────── */}
        <section className="bg-[#050912] py-28">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14">
            <div className="text-center mb-14">
              <p className="text-[#22BFFF] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">Our Work</p>
              <h2
                  className="text-4xl sm:text-5xl font-bold text-[#EAF8FF]"
                  style={{ fontFamily: "var(--font-display, serif)" }}
              >
                Results Speak for Themselves
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
              {[
                { label: "Before", sub: "Interior" },
                { label: "After", sub: "Interior" },
                { label: "Before", sub: "Exterior" },
                { label: "After", sub: "Exterior" },
              ].map((ph, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-[#09111F] border-ice flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#09111F] to-[#0B1628]" />
                    <div className="relative text-center">
                  <span className={`block text-xs font-bold tracking-[0.16em] uppercase mb-1 ${ph.label === "After" ? "text-[#22BFFF]" : "text-[#8CA9BD]"}`}>
                    {ph.label}
                  </span>
                      <span className="text-[#8CA9BD] text-xs">{ph.sub}</span>
                      <p className="text-[#8CA9BD] text-[10px] mt-3 opacity-40 tracking-widest uppercase">Photo coming soon</p>
                    </div>
                  </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/gallery" className="btn-outline-ice px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide">
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE ─────────────────────────────────────────────────────── */}
        <section className="bg-[#0B1628] py-28">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#22BFFF] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">Why IceLux</p>
                <h2
                    className="text-4xl sm:text-5xl font-bold text-[#EAF8FF] mb-6"
                    style={{ fontFamily: "var(--font-display, serif)" }}
                >
                  The Difference Is<br />in the Details
                </h2>
                <p className="text-[#8CA9BD] leading-relaxed mb-10 max-w-md text-base">
                  IceLux Detailing isn&apos;t just a car wash — it&apos;s a mobile detailing experience
                  built around convenience, quality, and professionalism you can actually feel.
                </p>
                <Link href="/contact" className="btn-ice px-8 py-4 rounded-full text-sm font-semibold tracking-wide">
                  Book Your Detail
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyChoose.map((item) => (
                    <div key={item.title} className="card-hover bg-[#09111F] border-ice rounded-2xl p-6">
                      <div className="w-10 h-10 rounded-xl bg-[rgba(34,191,255,0.07)] border border-[rgba(43,203,255,0.18)] flex items-center justify-center mb-4">
                        <ServiceIcon name={item.icon} />
                      </div>
                      <h3 className="text-[#EAF8FF] font-semibold text-sm mb-2">{item.title}</h3>
                      <p className="text-[#8CA9BD] text-sm leading-relaxed">{item.description}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICE AREA ───────────────────────────────────────────────────── */}
        <section className="bg-[#050912] py-20">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14">
            <div className="bg-[#09111F] border-ice rounded-2xl p-10 md:p-16 relative overflow-hidden flex flex-col items-center text-center">              <div className="absolute inset-0 pointer-events-none"
                   style={{ background: "radial-gradient(ellipse at center, rgba(34,191,255,0.04) 0%, transparent 65%)" }} />
              <MapPin size={26} className="text-[#22BFFF] mx-auto mb-5" />
              <p className="text-[#22BFFF] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">Service Area</p>
              <h2
                  className="text-3xl sm:text-4xl font-bold text-[#EAF8FF] mb-5"
                  style={{ fontFamily: "var(--font-display, serif)" }}
              >
                Iowa Colony &amp; Surrounding Areas
              </h2>
              <p className="text-[#8CA9BD] max-w-md mx-auto text-sm leading-relaxed mb-8">
                We bring the full IceLux experience directly to your home, apartment, or office.
                No drop-offs needed, we handle everything on-site.
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {["Iowa Colony", "Alvin", "Pearland", "Rosharon", "Manvel"].map((area) => (
                    <span key={area} className="px-4 py-2 rounded-full bg-[rgba(34,191,255,0.05)] border border-[rgba(43,203,255,0.18)] text-[#8EDFFF] text-sm font-medium">
                  {area}
                </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────────────────────────── */}
        <section className="bg-[#07101C] py-24 border-t border-[rgba(43,203,255,0.07)]">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14">
            <div className="text-center mb-14">
              <p className="text-[#22BFFF] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">Testimonials</p>
              <h2
                  className="text-4xl font-bold text-[#EAF8FF]"
                  style={{ fontFamily: "var(--font-display, serif)" }}
              >
                What Our Clients Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-[#09111F] border-ice rounded-2xl p-7">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, j) => (
                          <Star key={j} size={12} className="text-[#22BFFF] fill-[#22BFFF]" />
                      ))}
                    </div>
                    <p className="text-[#8CA9BD] text-sm italic mb-5 leading-relaxed">
                      &ldquo;Testimonial placeholder (replace with real customer review when available.&rdquo;)
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-[rgba(43,203,255,0.08)]">
                      <div className="w-8 h-8 rounded-full bg-[rgba(34,191,255,0.08)] border border-[rgba(43,203,255,0.18)]" />
                      <div>
                        <p className="text-[#EAF8FF] text-sm font-semibold">Customer Name</p>
                        <p className="text-[#8CA9BD] text-xs">Iowa Colony, TX</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
        <section className="relative bg-[#050912] py-32 overflow-hidden">
          <div aria-hidden className="absolute inset-0 pointer-events-none"
               style={{ background: "radial-gradient(ellipse 75% 55% at 50% 50%, rgba(34,191,255,0.07) 0%, transparent 68%)" }} />
          <div className="relative w-full flex flex-col items-center text-center px-8 sm:px-10 lg:px-14">
            <p className="text-[#22BFFF] text-[11px] font-semibold tracking-[0.22em] uppercase mb-5">Get Started</p>
            <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#EAF8FF] mb-6 max-w-3xl"
                style={{ fontFamily: "var(--font-display, serif)" }}
            >
              Ready to Go From{" "}
              <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #22BFFF, #8EDFFF)" }}
              >
        Dusty to Icy?
      </span>
            </h2>
            <p className="text-[#8CA9BD] text-base sm:text-lg mb-10 max-w-lg leading-relaxed">
              Book your detail today and experience what premium mobile detailing
              actually looks like.
            </p>
            <Link href="/contact" className="btn-ice px-10 py-4 rounded-full text-base font-semibold tracking-wide">
              Book Your Detail
            </Link>
          </div>
        </section>
      </>
  );
}
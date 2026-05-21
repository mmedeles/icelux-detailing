import Link from "next/link";
import {
  Car,
  Sparkles,
  Shield,
  Calendar,
  MapPin,
  CheckCircle,
  MessageCircle,
  ChevronRight,
  Star,
} from "lucide-react";
import {
  services,
  featuredPackages,
  whyChoose,
  trustBarItems,
  siteConfig,
} from "@/app/lib/data";

// ─── Icon resolver ────────────────────────────────────────────────────────────
function ServiceIcon({ name }: { name: string }) {
  const cls = "w-6 h-6 text-[#22BFFF]";
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
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050912]">
        {/* Background glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 65% 40%, rgba(34,191,255,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Grid pattern */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,191,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,191,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial vignette */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, #050912 90%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(43,203,255,0.3)] bg-[rgba(34,191,255,0.06)] mb-6">
              <MapPin size={12} className="text-[#22BFFF]" />
              <span className="text-[#8EDFFF] text-xs font-medium tracking-widest uppercase">
                Serving Iowa Colony &amp; Surrounding Areas
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display, serif)" }}
            >
              <span className="text-[#EAF8FF]">Premium Mobile</span>
              <br />
              <span className="text-[#EAF8FF]">Detailing</span>
              <br />
              <span
                className="text-transparent bg-clip-text text-glow"
                style={{
                  backgroundImage: "linear-gradient(90deg, #22BFFF, #8EDFFF)",
                }}
              >
                From Dusty to Icy
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-[#8CA9BD] text-lg leading-relaxed max-w-lg mb-10">
              Professional interior, exterior, and ceramic detailing services delivering
              deep restoration and premium protection directly to your driveway.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-ice px-8 py-4 rounded-full text-base font-semibold tracking-wide text-center"
              >
                Book Your Detail
              </Link>
              <Link
                href="/packages"
                className="btn-outline-ice px-8 py-4 rounded-full text-base font-semibold tracking-wide text-center"
              >
                View Packages
              </Link>
            </div>

            {/* Social proof micro */}
            <div className="flex items-center gap-2 mt-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#22BFFF] fill-[#22BFFF]" />
                ))}
              </div>
              <span className="text-[#8CA9BD] text-sm">Serving Iowa Colony with a premium finish</span>
            </div>
          </div>

          {/* Hero visual placeholder */}
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-2xl border border-[rgba(43,203,255,0.2)] bg-[#09111F] flex flex-col items-center justify-center overflow-hidden glow-blue"
              style={{
                background:
                  "linear-gradient(135deg, #09111F 0%, #0B1628 50%, #0B1B33 100%)",
              }}
            >
              {/* Glow orb inside placeholder */}
              <div
                className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full opacity-20 blur-3xl"
                style={{ background: "#22BFFF" }}
              />
              <div className="relative text-center px-8">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(34,191,255,0.1)] border border-[rgba(43,203,255,0.3)] flex items-center justify-center mx-auto mb-4">
                  <Car size={28} className="text-[#22BFFF]" />
                </div>
                <p className="text-[#8CA9BD] text-sm tracking-wide">
                  Hero Image Placeholder
                </p>
                <p className="text-[#22BFFF] text-xs mt-1 tracking-widest uppercase opacity-60">
                  Replace with cinematic detailing photo
                </p>
              </div>
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[rgba(43,203,255,0.5)]" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[rgba(43,203,255,0.5)]" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[rgba(43,203,255,0.5)]" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[rgba(43,203,255,0.5)]" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#09111F] border border-[rgba(43,203,255,0.3)] rounded-xl px-4 py-3 glow-blue-sm">
              <p className="text-[#22BFFF] text-xs font-semibold tracking-wider uppercase">Mobile Service</p>
              <p className="text-[#EAF8FF] text-sm font-bold">We Come To You</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────────────────────── */}
      <section className="bg-[#07101C] border-y border-[rgba(43,203,255,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBarItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22BFFF] shrink-0" />
                <div>
                  <p className="text-[#EAF8FF] text-sm font-semibold">{item.label}</p>
                  <p className="text-[#8CA9BD] text-xs">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────────── */}
      <section className="bg-[#050912] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#22BFFF] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              What We Offer
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#EAF8FF]"
              style={{ fontFamily: "var(--font-display, serif)" }}
            >
              Luxury Care For Every Detail
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="card-hover bg-[#09111F] border-ice rounded-2xl p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(34,191,255,0.08)] border border-[rgba(43,203,255,0.2)] flex items-center justify-center mb-4 group-hover:bg-[rgba(34,191,255,0.12)] transition-colors">
                  <ServiceIcon name={svc.icon} />
                </div>
                <h3 className="text-[#EAF8FF] font-semibold text-lg mb-2 tracking-tight">
                  {svc.title}
                </h3>
                <p className="text-[#8CA9BD] text-sm leading-relaxed">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PACKAGES ──────────────────────────────────────────────── */}
      <section className="bg-[#0B1628] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#22BFFF] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              Our Packages
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#EAF8FF] mb-4"
              style={{ fontFamily: "var(--font-display, serif)" }}
            >
              Built For Your Vehicle
            </h2>
            <p className="text-[#8CA9BD] max-w-xl mx-auto">
              Every package is designed with precision and care. Whether you need a
              quick refresh or a full transformation, we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPackages.map((pkg, i) => (
              <div
                key={pkg.id}
                className={`card-hover rounded-2xl p-7 flex flex-col ${
                  i === 1
                    ? "bg-[#0B1B33] border-ice-glow relative"
                    : "bg-[#09111F] border-ice"
                }`}
              >
                {/* Badge */}
                <div className="flex items-start justify-between mb-5">
                  <span
                    className={`text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full ${
                      i === 1
                        ? "bg-[rgba(34,191,255,0.15)] text-[#22BFFF] border border-[rgba(43,203,255,0.4)]"
                        : "bg-[rgba(34,191,255,0.06)] text-[#8EDFFF] border border-[rgba(43,203,255,0.15)]"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                  {i === 1 && (
                    <div className="w-6 h-6 rounded-full bg-[rgba(34,191,255,0.15)] border border-[rgba(43,203,255,0.4)] flex items-center justify-center">
                      <Star size={11} className="text-[#22BFFF] fill-[#22BFFF]" />
                    </div>
                  )}
                </div>

                <h3
                  className="text-[#EAF8FF] text-2xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-display, serif)" }}
                >
                  {pkg.name}
                </h3>
                <p className="text-[#8CA9BD] text-sm mb-5">{pkg.description}</p>

                <ul className="space-y-2 mb-7 flex-1">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-[#8CA9BD]">
                      <CheckCircle size={14} className="text-[#22BFFF] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/packages"
                  className={`flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold tracking-wide transition-all ${
                    i === 1
                      ? "btn-ice"
                      : "btn-outline-ice"
                  }`}
                >
                  {pkg.cta}
                  <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/packages"
              className="text-[#22BFFF] text-sm hover:underline tracking-wide inline-flex items-center gap-1"
            >
              View all packages &amp; enhancements <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ────────────────────────────────────────────────── */}
      <section className="bg-[#050912] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#22BFFF] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              Our Work
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#EAF8FF]"
              style={{ fontFamily: "var(--font-display, serif)" }}
            >
              Results Speak for Themselves
            </h2>
          </div>

          {/* Before / After grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {[
              { label: "Before", sub: "Interior" },
              { label: "After", sub: "Interior" },
              { label: "Before", sub: "Exterior" },
              { label: "After", sub: "Exterior" },
            ].map((ph, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-[#09111F] border-ice flex flex-col items-center justify-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#09111F] to-[#0B1628]" />
                <div className="relative text-center">
                  <span
                    className={`block text-xs font-bold tracking-widest uppercase mb-1 ${
                      ph.label === "After" ? "text-[#22BFFF]" : "text-[#8CA9BD]"
                    }`}
                  >
                    {ph.label}
                  </span>
                  <span className="text-[#8CA9BD] text-xs">{ph.sub}</span>
                  <p className="text-[#8CA9BD] text-[10px] mt-3 opacity-50 tracking-widest uppercase">
                    Photo coming
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="btn-outline-ice px-8 py-3 rounded-full text-sm font-semibold tracking-wide inline-block"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0B1628] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#22BFFF] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                Why IceLux
              </p>
              <h2
                className="text-4xl sm:text-5xl font-bold text-[#EAF8FF] mb-6"
                style={{ fontFamily: "var(--font-display, serif)" }}
              >
                The Difference Is in the Details
              </h2>
              <p className="text-[#8CA9BD] leading-relaxed mb-8">
                IceLux Detailing isn't just a car wash — it's a mobile detailing experience
                built around convenience, quality, and professionalism you can actually feel.
              </p>
              <Link
                href="/contact"
                className="btn-ice px-8 py-4 rounded-full text-base font-semibold tracking-wide inline-block"
              >
                Book Your Detail
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="card-hover bg-[#09111F] border-ice rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgba(34,191,255,0.08)] border border-[rgba(43,203,255,0.2)] flex items-center justify-center mb-4">
                    <ServiceIcon name={item.icon} />
                  </div>
                  <h3 className="text-[#EAF8FF] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[#8CA9BD] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ───────────────────────────────────────────────────── */}
      <section className="bg-[#050912] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#09111F] border-ice rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(34,191,255,0.05) 0%, transparent 70%)",
              }}
            />
            <MapPin size={28} className="text-[#22BFFF] mx-auto mb-4" />
            <p className="text-[#22BFFF] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              Service Area
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#EAF8FF] mb-4"
              style={{ fontFamily: "var(--font-display, serif)" }}
            >
              Iowa Colony &amp; Surrounding Areas
            </h2>
            <p className="text-[#8CA9BD] max-w-lg mx-auto text-sm leading-relaxed">
              We bring the full IceLux experience directly to your home, apartment,
              or office. No need to drive anywhere — we handle everything on-site.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Iowa Colony", "Alvin", "Pearland", "Rosharon", "Manvel"].map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-full bg-[rgba(34,191,255,0.06)] border border-[rgba(43,203,255,0.2)] text-[#8EDFFF] text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS PLACEHOLDER ────────────────────────────────────────── */}
      <section className="bg-[#07101C] py-16 border-t border-[rgba(43,203,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#22BFFF] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            Testimonials
          </p>
          <h2
            className="text-3xl font-bold text-[#EAF8FF] mb-4"
            style={{ fontFamily: "var(--font-display, serif)" }}
          >
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#09111F] border-ice rounded-2xl p-6 text-left"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="text-[#22BFFF] fill-[#22BFFF]" />
                  ))}
                </div>
                <p className="text-[#8CA9BD] text-sm italic mb-4 leading-relaxed">
                  "Testimonial placeholder — replace with real customer review when available."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[rgba(34,191,255,0.1)] border border-[rgba(43,203,255,0.2)]" />
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
      <section className="relative bg-[#050912] py-28 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(34,191,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#22BFFF] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Get Started
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#EAF8FF] mb-6"
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
          <p className="text-[#8CA9BD] text-lg mb-10 max-w-lg mx-auto">
            Book your detail today and experience what premium mobile detailing
            actually looks like.
          </p>
          <Link
            href="/contact"
            className="btn-ice px-10 py-4 rounded-full text-base font-semibold tracking-wide inline-block"
          >
            Book Your Detail
          </Link>
        </div>
      </section>
    </>
  );
}

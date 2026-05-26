"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Share2,
  MapPin,
  Send,
  Calendar,
  CheckCircle,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/app/lib/data";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mykvbeya", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    });
    if (response.ok) {
      setSubmitted(true);
    }
  };

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
              Get In Touch
            </p>
            <h1
                className="text-5xl sm:text-6xl font-bold text-[#EAF8FF] mb-5"
                style={{ fontFamily: "var(--font-display, serif)" }}
            >
              Book Your Detail
            </h1>
            <p className="text-[#8CA9BD] text-lg max-w-xl leading-relaxed">
              Ready to go from dusty to icy? Reach out and we&apos;ll get you scheduled
              for a premium mobile detail at your location.
            </p>
          </div>
        </section>

        <section className="bg-[#050912] pb-28">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

              {/* Left: Contact info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact card */}
                <div className="bg-[#09111F] border-ice rounded-2xl p-7">
                  <h2
                      className="text-[#EAF8FF] text-xl font-bold mb-6"
                      style={{ fontFamily: "var(--font-display, serif)" }}
                  >
                    Contact Info
                  </h2>
                  <ul className="space-y-5">
                    <li>
                      <a
                          href={`tel:${siteConfig.phone}`}
                          className="flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[rgba(34,191,255,0.08)] border border-[rgba(43,203,255,0.2)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(34,191,255,0.12)] transition-colors">
                          <Phone size={16} className="text-[#22BFFF]" />
                        </div>
                        <div>
                          <p className="text-[#8CA9BD] text-xs uppercase tracking-widest mb-0.5">Phone</p>
                          <p className="text-[#EAF8FF] font-semibold group-hover:text-[#22BFFF] transition-colors">
                            {siteConfig.phone}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                          href={`mailto:${siteConfig.email}`}
                          className="flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[rgba(34,191,255,0.08)] border border-[rgba(43,203,255,0.2)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(34,191,255,0.12)] transition-colors">
                          <Mail size={16} className="text-[#22BFFF]" />
                        </div>
                        <div>
                          <p className="text-[#8CA9BD] text-xs uppercase tracking-widest mb-0.5">Email</p>
                          <p className="text-[#EAF8FF] font-semibold text-sm group-hover:text-[#22BFFF] transition-colors break-all">
                            {siteConfig.email}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                          href={siteConfig.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[rgba(34,191,255,0.08)] border border-[rgba(43,203,255,0.2)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(34,191,255,0.12)] transition-colors">
                          <Share2 size={16} className="text-[#22BFFF]" />
                        </div>
                        <div>
                          <p className="text-[#8CA9BD] text-xs uppercase tracking-widest mb-0.5">Instagram</p>
                          <p className="text-[#EAF8FF] font-semibold group-hover:text-[#22BFFF] transition-colors">
                            {siteConfig.instagram}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[rgba(34,191,255,0.08)] border border-[rgba(43,203,255,0.2)] flex items-center justify-center shrink-0">
                          <MapPin size={16} className="text-[#22BFFF]" />
                        </div>
                        <div>
                          <p className="text-[#8CA9BD] text-xs uppercase tracking-widest mb-0.5">Service Area</p>
                          <p className="text-[#EAF8FF] font-semibold">{siteConfig.serviceArea}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[rgba(34,191,255,0.08)] border border-[rgba(43,203,255,0.2)] flex items-center justify-center shrink-0">
                          <Clock size={16} className="text-[#22BFFF]" />
                        </div>
                        <div>
                          <p className="text-[#8CA9BD] text-xs uppercase tracking-widest mb-0.5">Hours</p>
                          <p className="text-[#EAF8FF] text-sm">By Appointment</p>
                          <p className="text-[#8CA9BD] text-xs">7 days a week · Flexible scheduling</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Online booking CTA */}
                <div className="bg-[#0B1B33] border-ice-glow rounded-2xl p-6 text-center relative overflow-hidden">
                  <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                            "radial-gradient(ellipse at center, rgba(34,191,255,0.06) 0%, transparent 70%)",
                      }}
                  />
                  <Calendar size={24} className="text-[#22BFFF] mx-auto mb-3" />
                  <h3
                      className="text-[#EAF8FF] font-bold text-lg mb-2"
                      style={{ fontFamily: "var(--font-display, serif)" }}
                  >
                    Online Booking
                  </h3>
                  <p className="text-[#8CA9BD] text-sm mb-5">
                    Book directly through our scheduling system — pick your date, time,
                    and service in minutes.
                  </p>
                  {/* TODO: Replace href with Square Appointments or Calendly URL */}
                  <a
                      href="#booking-placeholder"
                      className="btn-ice px-6 py-3 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Booking link coming soon! Call or email us to schedule.");
                      }}
                  >
                    <Calendar size={15} />
                    Schedule Online
                  </a>
                  <p className="text-[#8CA9BD] text-xs mt-3 opacity-60">
                    Connect Square Appointments or Calendly here
                  </p>
                </div>

                {/* What to expect */}
                <div className="bg-[#09111F] border-ice rounded-2xl p-6">
                  <h3 className="text-[#EAF8FF] font-semibold mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    {[
                      "We confirm your booking within 24 hrs",
                      "We arrive at your location on time",
                      "Full detail performed at your home or office",
                      "Photo documentation before & after",
                      "100% satisfaction is our standard",
                    ].map((step) => (
                        <li key={step} className="flex items-start gap-2 text-sm text-[#8CA9BD]">
                          <CheckCircle size={14} className="text-[#22BFFF] shrink-0 mt-0.5" />
                          {step}
                        </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Contact form */}
              <div className="lg:col-span-3">
                <div className="bg-[#09111F] border-ice rounded-2xl p-7 md:p-10">
                  {submitted ? (
                      <div className="text-center py-16">
                        <div className="w-16 h-16 rounded-full bg-[rgba(34,191,255,0.12)] border border-[rgba(43,203,255,0.4)] flex items-center justify-center mx-auto mb-5 glow-blue-sm">
                          <CheckCircle size={28} className="text-[#22BFFF]" />
                        </div>
                        <h3
                            className="text-[#EAF8FF] text-2xl font-bold mb-3"
                            style={{ fontFamily: "var(--font-display, serif)" }}
                        >
                          Message Received!
                        </h3>
                        <p className="text-[#8CA9BD] mb-6">
                          We'll be in touch within 24 hours to confirm your detail.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="text-[#22BFFF] text-sm hover:underline"
                        >
                          Send another message
                        </button>
                      </div>
                  ) : (
                      <>
                        <h2
                            className="text-[#EAF8FF] text-2xl font-bold mb-2"
                            style={{ fontFamily: "var(--font-display, serif)" }}
                        >
                          Request a Quote
                        </h2>
                        <p className="text-[#8CA9BD] text-sm mb-7">
                          Tell us about your vehicle and what you're looking for. We'll
                          get back to you with a custom quote.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-[#8CA9BD] text-xs font-medium uppercase tracking-widest mb-2">
                                Full Name *
                              </label>
                              <input
                                  type="text"
                                  required
                                  value={formState.name}
                                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                  placeholder="Your name"
                                  className="w-full bg-[#07101C] border border-[rgba(43,203,255,0.2)] rounded-xl px-4 py-3 text-[#EAF8FF] text-sm placeholder-[#8CA9BD] focus:outline-none focus:border-[rgba(43,203,255,0.5)] focus:bg-[#0B1628] transition-all"
                              />
                            </div>
                            <div>
                              <label className="block text-[#8CA9BD] text-xs font-medium uppercase tracking-widest mb-2">
                                Phone Number *
                              </label>
                              <input
                                  type="tel"
                                  required
                                  value={formState.phone}
                                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                  placeholder="Your phone"
                                  className="w-full bg-[#07101C] border border-[rgba(43,203,255,0.2)] rounded-xl px-4 py-3 text-[#EAF8FF] text-sm placeholder-[#8CA9BD] focus:outline-none focus:border-[rgba(43,203,255,0.5)] focus:bg-[#0B1628] transition-all"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[#8CA9BD] text-xs font-medium uppercase tracking-widest mb-2">
                              Email Address
                            </label>
                            <input
                                type="email"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                placeholder="your@email.com"
                                className="w-full bg-[#07101C] border border-[rgba(43,203,255,0.2)] rounded-xl px-4 py-3 text-[#EAF8FF] text-sm placeholder-[#8CA9BD] focus:outline-none focus:border-[rgba(43,203,255,0.5)] focus:bg-[#0B1628] transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-[#8CA9BD] text-xs font-medium uppercase tracking-widest mb-2">
                              Vehicle (Year / Make / Model) *
                            </label>
                            <input
                                type="text"
                                required
                                value={formState.vehicle}
                                onChange={(e) => setFormState({ ...formState, vehicle: e.target.value })}
                                placeholder="e.g. 2021 Toyota Camry"
                                className="w-full bg-[#07101C] border border-[rgba(43,203,255,0.2)] rounded-xl px-4 py-3 text-[#EAF8FF] text-sm placeholder-[#8CA9BD] focus:outline-none focus:border-[rgba(43,203,255,0.5)] focus:bg-[#0B1628] transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-[#8CA9BD] text-xs font-medium uppercase tracking-widest mb-2">
                              Service Interest
                            </label>
                            <select
                                value={formState.service}
                                onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                                className="w-full bg-[#07101C] border border-[rgba(43,203,255,0.2)] rounded-xl px-4 py-3 text-[#EAF8FF] text-sm focus:outline-none focus:border-[rgba(43,203,255,0.5)] focus:bg-[#0B1628] transition-all appearance-none"
                            >
                              <option value="" className="bg-[#07101C]">Select a package...</option>
                              <option value="icelux-signature" className="bg-[#07101C]">IceLux Signature</option>
                              <option value="diamond-luxe" className="bg-[#07101C]">Diamond Luxe Finish</option>
                              <option value="diamond-lounge" className="bg-[#07101C]">The Diamond Lounge</option>
                              <option value="blue-diamond" className="bg-[#07101C]">Blue Diamond Signature</option>
                              <option value="luxe-refresh" className="bg-[#07101C]">Luxe Refresh</option>
                              <option value="not-sure" className="bg-[#07101C]">Not sure — need a recommendation</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[#8CA9BD] text-xs font-medium uppercase tracking-widest mb-2">
                              Additional Notes
                            </label>
                            <textarea
                                rows={4}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                placeholder="Tell us about your vehicle's condition, any specific concerns, or preferred scheduling..."
                                className="w-full bg-[#07101C] border border-[rgba(43,203,255,0.2)] rounded-xl px-4 py-3 text-[#EAF8FF] text-sm placeholder-[#8CA9BD] focus:outline-none focus:border-[rgba(43,203,255,0.5)] focus:bg-[#0B1628] transition-all resize-none"
                            />
                          </div>

                          <button
                              type="submit"
                              className="btn-ice w-full py-4 rounded-full text-base font-semibold tracking-wide flex items-center justify-center gap-2"
                          >
                            <Send size={16} />
                            Send Request
                          </button>

                          <p className="text-[#8CA9BD] text-xs text-center">
                            We typically respond within 24 hours. For faster service, call or text{" "}
                            <a href={`tel:${siteConfig.phone}`} className="text-[#22BFFF]">
                              {siteConfig.phone}
                            </a>
                          </p>
                        </form>
                      </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}
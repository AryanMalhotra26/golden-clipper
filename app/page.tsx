// Golden Clipper — Luxe Landing Page (React/Next-ready)
// Tailwind v4 compatible • Framer Motion • Mobile hamburger nav
"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type React from "react";

// === Brand constants (edit these) ===
const BRAND = {
  name: "Golden Clipper Barbershop",
  address: "284 Springbank Dr, London, ON N6J 1E9",
  phoneE164: "+15196198792",
  igUrl: "https://instagram.com/goldenclipper.to",
  mapUrl:
    "https://www.google.com/maps?q=284+Springbank+Dr,+London,+ON+N6J+1E9&z=15&output=embed",
};

const PRICES = [
  { name: "Haircut+Beard", price: 35 },
  { name: "Fade & Taper Cuts", price: 20 },
  { name: "Beard Trim & Shaping", price: 20 },
  { name: "Hot Towel Shave", price: 20 },
  { name: "Kids’ Haircuts", price: 20 },
  { name: "Buzz Cut (incl. senior)", price: 15 },
  { name: "Edge-Up / Line-Up", price: 10 },
  { name: "Hair Wash & Conditioning", price: 5 },
  { name: "Eyebrow Shaping", price: 5 },
];

// Simple gold gradient utility
const Gold = {
  text:
    "bg-clip-text text-transparent bg-gradient-to-r from-[#d1b464] via-[#c8a24a] to-[#ae8d35]",
  bg: "bg-gradient-to-br from-[#1c1b17] via-[#111010] to-black",
  ring: "ring-1 ring-[#c8a24a]/40",
  btn:
    "bg-gradient-to-r from-[#c8a24a] to-[#ae8d35] text-black hover:brightness-110",
};

export default function LuxeGoldenClipper() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const tel = `tel:${BRAND.phoneE164}`;

  // --- Mobile nav toggle ---
  const [navOpen, setNavOpen] = useState(false);

  // --- Quick Inquiry state & helpers (prefilled WhatsApp text) ---
  const [qName, setQName] = useState("");
  const [qPhone, setQPhone] = useState("");
  const [qService, setQService] = useState("Haircut+Beard ($35)");
  const [qNotes, setQNotes] = useState("");

  // wa.me requires number without '+'
  const waNumber = useMemo(() => BRAND.phoneE164.replace("+", ""), []);
  const waMessage = useMemo(() => {
    const msg = `New Booking Inquiry
Name: ${qName}
Phone: ${qPhone}
Service: ${qService}
Notes: ${qNotes}`;
    return encodeURIComponent(msg);
  }, [qName, qPhone, qService, qNotes]);

  const openWhatsApp = () => {
    const url = `https://wa.me/${waNumber}?text=${waMessage}`;
    window.open(url, "_blank");
  };

  return (
    <div className={`min-h-screen ${Gold.bg} text-zinc-100`}>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between relative">
          <a
            href="#home"
            className={`font-extrabold tracking-tight text-lg md:text-xl ${Gold.text}`}
          >
            Golden Clipper
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7 text-sm text-zinc-300">
            <a className="hover:text-zinc-50" href="#services">Services</a>
            <a className="hover:text-zinc-50" href="#hours">Hours</a>
            <a className="hover:text-zinc-50" href="#location">Location</a>
            <a className="hover:text-zinc-50" href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={tel}
              className={`hidden sm:inline-flex px-4 py-2 rounded-full ${Gold.btn} ${Gold.ring} shadow md:inline-flex`}
            >
              Call
            </a>
            <a
              href="#booking"
              className="hidden md:inline-flex px-4 py-2 rounded-full border border-zinc-700 bg-black/50 hover:bg-black/70"
            >
              Book Now
            </a>

            {/* Mobile hamburger (only < md) */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-700 bg-black/40 hover:bg-black/60"
              aria-label="Toggle menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-zinc-200"></span>
                <span className="block h-0.5 w-5 bg-zinc-200"></span>
                <span className="block h-0.5 w-5 bg-zinc-200"></span>
              </div>
            </button>
          </div>

          {/* Mobile dropdown panel */}
          <motion.div
            initial={false}
            animate={navOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            className="md:hidden absolute left-0 right-0 top-full overflow-hidden border-b border-zinc-800 bg-black/90 backdrop-blur rounded-b-xl"
          >
            <div className="px-4 py-3 flex flex-col gap-2 text-sm">
              <a onClick={() => setNavOpen(false)} className="py-2 hover:text-zinc-50" href="#services">Services</a>
              <a onClick={() => setNavOpen(false)} className="py-2 hover:text-zinc-50" href="#hours">Hours</a>
              <a onClick={() => setNavOpen(false)} className="py-2 hover:text-zinc-50" href="#location">Location</a>
              <a onClick={() => setNavOpen(false)} className="py-2 hover:text-zinc-50" href="#contact">Contact</a>
              <div className="pt-2 flex gap-2">
                <a onClick={() => setNavOpen(false)} href={tel} className={`flex-1 inline-flex justify-center px-4 py-2 rounded-lg ${Gold.btn} ${Gold.ring} font-semibold`}>Call</a>
                <a onClick={() => setNavOpen(false)} href="#booking" className="flex-1 inline-flex justify-center px-4 py-2 rounded-lg border border-zinc-700 bg-black/50 hover:bg-black/70">Book</a>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* HERO (no background image) */}
      <header id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-[#c8a24a] to-transparent" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-[#ae8d35] to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Look sharp. <span className={Gold.text}>Feel sharper.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-zinc-300 max-w-xl"
          >
            Premium fades & classic cuts in the heart of Springbank. Walk-ins welcome.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a href="#booking" className={`inline-flex px-6 py-3 rounded-xl ${Gold.btn} ${Gold.ring} shadow font-semibold`}>Book Now</a>
            <a href={tel} className="inline-flex px-6 py-3 rounded-xl border border-zinc-700 bg-black/40 hover:bg-black/60">Call</a>
            <a href="#location" className="inline-flex px-6 py-3 rounded-xl border border-zinc-700 bg-black/40 hover:bg-black/60">Directions</a>
          </motion.div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-400">
            <span className="px-3 py-1 rounded-full border border-zinc-700 bg-black/30">Local Favourite</span>
            <span className="px-3 py-1 rounded-full border border-zinc-700 bg-black/30">Family Friendly</span>
            <span className="px-3 py-1 rounded-full border border-zinc-700 bg-black/30">Same-Day Service</span>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Services & Pricing</h2>
          <p className="text-zinc-400 mt-2">Straightforward menu. Consistent results.</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRICES.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -3 }}
              className={`rounded-2xl p-5 bg-black/50 border border-zinc-800 ${Gold.ring} shadow`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{item.name}</h3>
                <span className={`font-bold ${Gold.text}`}>${item.price}</span>
              </div>
              <p className="text-sm text-zinc-400 mt-2">Quality tools, clean finish, no rush.</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-sm text-zinc-400">
          Prices shown before tax. Walk-ins welcome. Debit, credit, cash, and tap accepted.
        </div>

        <div className="mt-8">
          <a href="#booking" className={`inline-flex px-6 py-3 rounded-xl ${Gold.btn} ${Gold.ring} font-semibold`}>Book a Service</a>
        </div>
      </section>

      {/* HOURS */}
      <section id="hours" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Hours</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-2xl">
          {[
            { d: "Mon–Fri", t: "10:00am – 8:00pm*" },
            { d: "Sat", t: "9:00am – 6:00pm*" },
            { d: "Sun", t: "10:00am – 5:00pm*" },
          ].map((h) => (
            <div key={h.d} className={`p-5 rounded-xl bg-black/50 border border-zinc-800 ${Gold.ring}`}>
              <div className="flex items-center justify-between">
                <span>{h.d}</span>
                <span className={`font-semibold ${Gold.text}`}>{h.t}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-zinc-400 mt-4">*Last appointment starts 30 minutes before closing.</p>
      </section>

      {/* LOCATION */}
      <section id="location" className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className={`rounded-3xl p-6 bg-black/50 border border-zinc-800 ${Gold.ring} shadow`}>
            <h2 className="text-3xl md:text-4xl font-bold">Find us</h2>
            <p className="mt-2 text-zinc-300">{BRAND.address}</p>
            <ul className="mt-4 text-zinc-300 space-y-2 text-sm">
              <li>• Free parking outside the shop</li>
              <li>• Near main bus routes</li>
              <li>• Wheelchair accessible</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={BRAND.mapUrl.replace("output=embed", "")} target="_blank" className={`inline-flex px-6 py-3 rounded-xl ${Gold.btn} ${Gold.ring} font-semibold`}>Get Directions</a>
              <a href="#contact" className="inline-flex px-6 py-3 rounded-xl border border-zinc-700 bg-black/50 hover:bg-black/70">Contact</a>
            </div>
          </div>
          <div className="w-full h-64 md:h-[420px] rounded-3xl overflow-hidden border border-zinc-800 shadow">
            <iframe title="Map to Golden Clipper Barbershop" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={BRAND.mapUrl}></iframe>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="px-4 pb-16">
        <div className={`max-w-6xl mx-auto rounded-3xl p-8 md:p-10 bg-black/60 border border-zinc-800 ${Gold.ring} shadow`}>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold">Book your chair</h2>
              <p className="mt-2 text-zinc-300">Choose a service, pick a time, and you’re set. Prefer to walk in? Come by anytime during hours.</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-3 max-w-lg">
                <a href={tel} className={`inline-flex justify-center px-6 py-3 rounded-xl ${Gold.btn} ${Gold.ring} font-semibold`}>Call</a>
                <button onClick={openWhatsApp} className="inline-flex justify-center px-6 py-3 rounded-xl border border-zinc-700 bg-black/50 hover:bg-black/70">WhatsApp</button>
                <a href="#services" className="inline-flex justify-center px-6 py-3 rounded-xl border border-zinc-700 bg-black/50 hover:bg-black/70">See Services</a>
              </div>
              <p className="text-sm text-zinc-400 mt-4">Same-day availability • Quick touch-ups • Clean fades guaranteed</p>
            </div>
            <div className={`rounded-2xl p-6 bg-black/40 border border-zinc-800 ${Gold.ring}`}>
              <h3 className="font-semibold text-lg">Quick Inquiry</h3>
              <p className="text-sm text-zinc-400">Tap to open a message with your details.</p>
              <div className="mt-4 grid gap-3">
                <Input placeholder="Your name" value={qName} onChange={(e) => setQName((e.target as HTMLInputElement).value)} />
                <Input placeholder="Phone (optional)" value={qPhone} onChange={(e) => setQPhone((e.target as HTMLInputElement).value)} />
                <Select value={qService} onChange={(e) => setQService((e.target as HTMLSelectElement).value)}>
                  <option>Haircut+Beard ($35)</option>
                  <option>Fade & Taper ($20)</option>
                  <option>Beard Trim & Shaping ($20)</option>
                  <option>Hot Towel Shave ($20)</option>
                  <option>Kids’ Haircut ($20)</option>
                  <option>Buzz / Senior ($15)</option>
                  <option>Edge-Up / Line-Up ($10)</option>
                  <option>Wash & Conditioning ($5)</option>
                  <option>Eyebrow Shaping ($5)</option>
                </Select>
                <Textarea placeholder="Preferred time, barber, notes" rows={3} value={qNotes} onChange={(e) => setQNotes((e.target as HTMLTextAreaElement).value)} />
                <div className="flex gap-3 pt-1">
                  <button onClick={openWhatsApp} className={`${Gold.btn} ${Gold.ring} inline-flex justify-center px-5 py-3 rounded-xl font-semibold`}>Send via WhatsApp</button>
                  <a href={tel} className="inline-flex justify-center px-5 py-3 rounded-xl border border-zinc-700 bg-black/50 hover:bg-black/70">Call Instead</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS (no menu link) */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold">What clients say</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            "Best cut I’ve gotten in London. Clean shop, friendly barbers.",
            "Great with kids and super patient. Highly recommend.",
            "Walked in on lunch — out fresh in 20 minutes.",
          ].map((t, i) => (
            <div key={i} className={`p-6 rounded-2xl bg-black/50 border border-zinc-800 ${Gold.ring}`}>
              {t}
              <div className="mt-3 text-sm text-zinc-400">— Client</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className={`text-xl font-extrabold ${Gold.text}`}>Golden Clipper</div>
            <p className="text-zinc-400 mt-2">Clean cuts. Sharp fades. Walk-ins welcome.</p>
          </div>
          <div>
            <h4 className="font-semibold">Visit</h4>
            <address className="not-italic text-zinc-300 mt-2">{BRAND.address}</address>
            <a className="text-sm text-zinc-400 underline mt-2 inline-block" href={BRAND.mapUrl.replace("output=embed", "")} target="_blank">Open in Maps</a>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-2 text-zinc-300 space-y-1">
              <li>Phone: <a href={tel} className="underline">(519) 619-8792</a></li>
              <li>Instagram: <a href={BRAND.igUrl} className="underline" target="_blank">@goldenclipper.to</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-zinc-500 pb-8">© {year} {BRAND.name}. All rights reserved.</div>
      </footer>
    </div>
  );
}

// Minimal luxury inputs without external UI libs (styled Tailwind only)
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full px-3 py-2 rounded-lg bg-black/40 border border-zinc-800 ${Gold.ring} placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#c8a24a]/30 ${props.className ?? ""}`}
    />
  );
}
function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`w-full px-3 py-2 rounded-lg bg-black/40 border border-zinc-800 ${Gold.ring} placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#c8a24a]/30 ${props.className ?? ""}`}
    />
  );
}
function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`w-full px-3 py-2 rounded-lg bg-black/40 border border-zinc-800 ${Gold.ring} focus:outline-none focus:ring-2 focus:ring-[#c8a24a]/30 ${props.className ?? ""}`}
    />
  );
}
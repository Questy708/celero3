"use client";

import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Building2,
  Coins,
  Heart,
  Handshake,
  Globe,
  Lightbulb,
  Sparkles,
  Clock,
  Calendar,
  Star,
  Users,
  Check,
  ChevronRight,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { Link } from "@/artemis/router";

/* ══════════════════════════════════════════════════════════════════════════
   COMMUNITY PAGE
   ══════════════════════════════════════════════════════════════════════════ */
export function Community() {
  return (
    <div className="bg-white text-[#111111]">
      <HeroSection />
      <ManifestoSection />
      <ArchetypesSection />
      <RhythmSection />
      <TestimonialsPassportSection />
      <CTASection />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   1. HERO — Cinematic dark hero with overlaid text
   ══════════════════════════════════════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto bg-[#0A0A0A] rounded-sm overflow-hidden">
        {/* Image container */}
        <div className="relative min-h-[520px] md:min-h-[640px] lg:min-h-[720px]">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt="Community collaborating on the Route"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end min-h-[520px] md:min-h-[640px] lg:min-h-[720px] px-8 md:px-14 lg:px-20 pb-12 md:pb-16 lg:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/70 mb-6 block">
                Community
              </span>
              <h1 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px] xl:text-[76px] leading-[1.05] font-display font-medium tracking-[-0.03em] text-white max-w-4xl mb-6 md:mb-8">
                Alone, you build a product. Together, we build a{" "}
                <span className="italic text-[#FF4D00]">civilization</span>.
              </h1>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] text-white/50 font-medium max-w-2xl">
                XCitizens are the fourth engine — 1,200+ operators, founders, investors, and mentors across 190 hubs and 39 countries. Not a network. A bloodstream.
              </p>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 md:mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {[
                { value: "1,200+", label: "XCitizens" },
                { value: "190", label: "Hubs" },
                { value: "39", label: "Countries" },
                { value: "840+", label: "Connections/mo" },
              ].map((stat, i) => (
                <div key={stat.label}>
                  <div className="text-[24px] md:text-[32px] lg:text-[36px] font-display font-medium tracking-[-0.02em] text-white/90">
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-white/25 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   2. THE MANIFESTO — Dark container, editorial
   ══════════════════════════════════════════════════════════════════════════ */
function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const pillars = [
    {
      icon: Handshake,
      title: "Trust-Based Introductions",
      description: "Every connection is vetted. Members don't cold-pitch; they earn access through contribution. Higher-signal deals, faster trust.",
    },
    {
      icon: Globe,
      title: "Borderless Collaboration",
      description: "A founder in Nairobi works with an operator in Accra and an investor in London. Cross-border as easy as cross-desk.",
    },
    {
      icon: Lightbulb,
      title: "Knowledge Transfer",
      description: "Workshops, playbooks, and field reports from ventures that have scaled. Hard-won lessons flow back in real time.",
    },
    {
      icon: Sparkles,
      title: "Compound Returns",
      description: "Every new member strengthens the whole. Deals get faster, talent gets deeper, capital gets smarter. The flywheel accelerates.",
    },
  ];

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 mt-6 md:mt-8">
      <div className="max-w-[1400px] mx-auto bg-[#0A0A0A] rounded-sm overflow-hidden">
        {/* Thesis */}
        <div className="px-8 md:px-14 lg:px-20 pt-16 md:pt-24 pb-12 md:pb-16 border-b border-white/[0.06]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/60 mb-6 block">
              The Fourth Engine
            </span>
            <h2 className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] font-display font-medium tracking-[-0.03em] text-white/90 max-w-4xl mb-8">
              The first three engines — infrastructure, ventures, capital — are structures. Community is the{" "}
              <span className="italic text-[#FF4D00]">bloodstream</span>.
            </h2>
            <p className="text-[15px] md:text-[17px] lg:text-[18px] leading-[1.75] text-white/40 font-medium max-w-3xl mb-6">
              Without it, the Route is a map. With it, the Route becomes a movement. XCitizens don't just network — they compound. Trust-based introductions, not cold pitches. Borderless collaboration, not siloed effort. Knowledge that flows back, not hoarded expertise.
            </p>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-white/[0.06]">
          {pillars.map((pillar, i) => {
            const PillarIcon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`px-8 md:px-10 lg:px-8 py-10 md:py-12 lg:py-14 border-b sm:border-b-0 border-white/[0.06] ${
                  i > 0 ? "lg:border-l border-white/[0.06]" : ""
                } ${i >= 2 ? "sm:border-t lg:border-t-0" : ""}`}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-white/[0.08] mb-5 group-hover:border-[#FF4D00]/30 transition-colors duration-300">
                  <PillarIcon className="w-4.5 h-4.5 text-[#FF4D00]" />
                </div>
                <h3 className="text-[14px] md:text-[15px] font-display font-medium tracking-tight text-white/90 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[13px] md:text-[14px] leading-[1.7] text-white/30 font-medium">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   3. THE ARCHETYPES — Split layout
   ══════════════════════════════════════════════════════════════════════════ */
function ArchetypesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const archetypes = [
    {
      callsign: "FOUNDER",
      tagline: "Turns thesis into companies",
      icon: Rocket,
    },
    {
      callsign: "OPERATOR",
      tagline: "Turns effort into momentum",
      icon: Building2,
    },
    {
      callsign: "INVESTOR",
      tagline: "Turns conviction into capital deployment",
      icon: Coins,
    },
    {
      callsign: "MENTOR",
      tagline: "Turns experience into acceleration",
      icon: Heart,
    },
  ];

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 mt-6 md:mt-8">
      <div className="max-w-[1400px] mx-auto bg-[#0A0A0A] rounded-sm overflow-hidden">
        <div className="grid lg:grid-cols-12">
          {/* Left — thesis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 px-8 md:px-14 lg:px-20 py-14 md:py-20 lg:border-r border-white/[0.06]"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/60 mb-6 block">
              The Archetypes
            </span>
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] font-display font-medium tracking-[-0.03em] text-white/90 max-w-xl mb-8">
              Four roles, one{" "}
              <span className="italic text-[#FF4D00]">flywheel</span>.
            </h2>
            <p className="text-[15px] md:text-[17px] leading-[1.75] text-white/40 font-medium max-w-lg mb-6">
              Founders build ventures. Operators run the infrastructure. Investors deploy capital. Mentors transfer knowledge. Each role compounds the others — the flywheel doesn't spin without all four.
            </p>
            <p className="text-[14px] leading-[1.75] text-white/25 font-medium max-w-lg">
              The architecture is set. The network is assembling. Every archetype has a seat at the table — and a role in the machine.
            </p>
          </motion.div>

          {/* Right — archetype cards */}
          <div className="lg:col-span-5 flex flex-col">
            {archetypes.map((arch, i) => {
              const ArchIcon = arch.icon;
              return (
                <motion.div
                  key={arch.callsign}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`group px-8 md:px-12 lg:px-10 py-6 md:py-8 flex items-center gap-4 md:gap-5 hover:bg-white/[0.03] transition-colors duration-300 ${
                    i < archetypes.length - 1 ? "border-b border-white/[0.06]" : ""
                  }`}
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-white/[0.08] group-hover:border-[#FF4D00]/30 transition-colors duration-300">
                    <ArchIcon className="w-4 h-4 text-white/30 group-hover:text-[#FF4D00] transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00]/70 mb-1">
                      {arch.callsign}
                    </div>
                    <div className="text-[14px] md:text-[15px] font-display font-medium text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      {arch.tagline}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-[#FF4D00]/50 transition-colors duration-300 flex-shrink-0" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   4. THE RHYTHM — How the community compounds
   ══════════════════════════════════════════════════════════════════════════ */
function RhythmSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const rhythmItems = [
    {
      cadence: "Weekly",
      title: "Office Hours & Peer Circles",
      description: "Thematic peer circles: energy founders with energy founders, investors with investors. Office hours with partners and mentors. High-signal, low-friction.",
      icon: Clock,
    },
    {
      cadence: "Monthly",
      title: "Deal Flow Sessions & Masterclasses",
      description: "Curated deal flow for investors. Domain masterclasses led by operators who've scaled. Every session produces actionable output, not just slides.",
      icon: Calendar,
    },
    {
      cadence: "Quarterly",
      title: "Demo Days & Route Summits",
      description: "Accelerator cohorts present to investors. Cross-hub operators convene for deal sharing, mentorship, and flywheel acceleration.",
      icon: Star,
    },
    {
      cadence: "Annually",
      title: "xCitizen Assembly",
      description: "The full network convenes. Strategy reviews, venture showcases, LP meetings, and the State of the Route address. Where the next thesis gets debated.",
      icon: Globe,
    },
  ];

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 mt-6 md:mt-8">
      <div className="max-w-[1400px] mx-auto bg-[#0A0A0A] rounded-sm overflow-hidden">
        {/* Header */}
        <div className="px-8 md:px-14 lg:px-20 pt-16 md:pt-24 pb-12 md:pb-16 border-b border-white/[0.06]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/60 mb-6 block">
              Cadence
            </span>
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] font-display font-medium tracking-[-0.03em] text-white/90 max-w-3xl">
              The community compounds when it{" "}
              <span className="italic text-[#FF4D00]">convenes</span>.
            </h2>
          </motion.div>
        </div>

        {/* Rhythm grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-white/[0.06]">
          {rhythmItems.map((item, i) => {
            const RhythmIcon = item.icon;
            return (
              <motion.div
                key={item.cadence}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`px-8 md:px-10 lg:px-8 py-10 md:py-12 lg:py-14 border-b sm:border-b-0 border-white/[0.06] ${
                  i > 0 ? "lg:border-l border-white/[0.06]" : ""
                } ${i >= 2 ? "sm:border-t lg:border-t-0" : ""}`}
              >
                {/* Cadence badge */}
                <div className="mb-5">
                  <span className="inline-block text-[9px] font-mono font-bold tracking-[0.2em] uppercase bg-[#FF4D00] text-white px-2.5 py-1">
                    {item.cadence}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <RhythmIcon className="w-4 h-4 text-white/20" />
                  <h3 className="text-[14px] md:text-[15px] font-display font-medium tracking-tight text-white/90">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[13px] md:text-[14px] leading-[1.7] text-white/30 font-medium">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   5. TESTIMONIALS + PASSPORT — Split layout
   ══════════════════════════════════════════════════════════════════════════ */
function TestimonialsPassportSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const testimonials = [
    {
      quote: "When the Route is fully operational, a Fellow could join in Cohort 3 and within six months be running operations for a venture in Kano. The network won't just connect you; it will place you where you're needed most.",
      name: "Chioma Adekunle",
      role: "Operations Lead, Helios",
      location: "Kano, Nigeria",
    },
    {
      quote: "The peer network, at scale, will be transformative. Imagine needing a regulatory contact in Rwanda for a diagnostics pilot — an XCitizen in Kigali could make the intro within 24 hours. That's the flywheel we're building.",
      name: "Dr. Kofi Mensah",
      role: "Co-Founder, Refract",
      location: "Cape Town, South Africa",
    },
    {
      quote: "As an investor, the deal flow could be unlike anything else. Six vehicles, vetted ventures, and the infrastructure to actually de-risk early-stage Africa. I could see deploying through multiple SPVs in a single year.",
      name: "Amara Diallo",
      role: "LP, xCelero Capital",
      location: "Dakar, Senegal",
    },
  ];

  const passportBenefits = [
    "Access to all 190 hubs across 39 countries",
    "Curated deal flow & peer circle invitations",
    "XCitizen-only events: summits, demo days, masterclasses",
    "Direct introductions to founders, operators & investors",
    "Route directory: talent, vendors, co-founders",
    "Voting rights at the annual xCitizen Assembly",
  ];

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#FAFAFA]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left — Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00] mb-8 block">
              From the Network
            </span>
            <div className="space-y-0">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`py-8 md:py-10 ${
                    i < testimonials.length - 1 ? "border-b border-[#111111]/10" : ""
                  }`}
                >
                  <p className="text-[16px] md:text-[18px] leading-[1.65] text-[#111111]/70 font-medium mb-6 italic font-serif">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-[13px] font-display font-medium text-[#111111]/90">
                        {testimonial.name}
                      </div>
                      <div className="text-[11px] text-[#111111]/40 font-medium">
                        {testimonial.role} · {testimonial.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — xCitizen Passport */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00] mb-8 block">
              xCitizen Passport
            </span>
            <div className="bg-white border border-[#111111]/10 rounded-sm p-8 md:p-10">
              <h3 className="text-[20px] md:text-[24px] font-display font-medium tracking-tight text-[#111111]/90 mb-2">
                Your access to the Route.
              </h3>
              <p className="text-[13px] md:text-[14px] text-[#111111]/40 font-medium mb-8">
                One passport. Full network.
              </p>
              <div className="space-y-4">
                {passportBenefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-[#FF4D00] flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] md:text-[14px] text-[#111111]/60 font-medium leading-[1.5]">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-[#111111]/10">
                <Link
                  to="/join"
                  className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.12em] uppercase text-[#FF4D00] hover:text-[#111111] transition-colors group"
                >
                  Apply for the Passport
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   6. CTA — Dark closing
   ══════════════════════════════════════════════════════════════════════════ */
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 pb-6 md:pb-8">
      <div className="max-w-[1400px] mx-auto bg-[#0A0A0A] rounded-sm overflow-hidden">
        <div className="px-8 md:px-14 lg:px-20 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <h2 className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] leading-[1.08] font-display font-medium tracking-[-0.03em] text-white/90 max-w-3xl mb-10 md:mb-12">
              The network is forming. Your seat is{" "}
              <span className="italic text-[#FF4D00]">waiting</span>.
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 md:mb-14">
              <Link
                to="/join"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF4D00] text-white text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:bg-[#FF4D00]/90 transition-colors"
              >
                Join as a Founder
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <Link
                to="/capital"
                className="group inline-flex items-center gap-2 px-8 py-3.5 border border-white/[0.15] text-white/70 text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:border-white/30 hover:text-white transition-all"
              >
                Join as an Investor
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>
            <p className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/20">
              190 hubs · 39 countries · One flywheel
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

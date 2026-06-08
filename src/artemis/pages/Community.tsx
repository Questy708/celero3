"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Calendar,
  MapPin,
  Users,
  ChevronRight,
  Clock,
  Star,
  Globe,
  Heart,
  Check,
  X,
  Rocket,
  Building2,
  Coins,
  CheckCircle,
  Fingerprint,
  ShieldCheck,
  Activity,
  Lightbulb,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { Link } from "@/artemis/router";

/* ── Gallery Images ── */
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Team collaborating at a hub",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80",
    alt: "Workshop in progress",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
    alt: "Community gathering",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    alt: "Lab work at M1 Core",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    alt: "Founders working at XEmbassy",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    alt: "Conference keynote",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
    alt: "Mentorship session",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    alt: "Team planning sprint",
    span: "col-span-1 row-span-1",
  },
];

/* ── Upcoming Events ── */
const upcomingEvents = [
  {
    title: "xCelero Accelerator Cohort 1 Demo Day",
    date: "March 28, 2026",
    time: "10:00 AM EAT",
    location: "M1 Core Nairobi + Virtual",
    type: "Demo Day",
    description:
      "Ventures from Cohort 1 present their validated MVPs to investors, partners, and the XCitizen network. Sector deep-dives in energy, life sciences, and digital finance.",
    spots: "Limited to 200 attendees",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Route Summit: Gulf of Guinea Arc",
    date: "April 12, 2026",
    time: "9:00 AM WAT",
    location: "XEmbassy Lagos",
    type: "Summit",
    description:
      "Operators and founders from Lagos, Accra, and Abidjan convene for cross-hub deal flow sharing, infrastructure updates, and peer mentorship.",
    spots: "Open to all XCitizens",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Building in Life Sciences: From Lab to Market",
    date: "April 25, 2026",
    time: "2:00 PM EAT",
    location: "Virtual Masterclass",
    type: "Masterclass",
    description:
      "Dr. Adebayo Ogunlesi leads a session on regulatory pathways for diagnostics and therapeutics in African markets. Case studies from Refract and Allele.",
    spots: "Open to all XCitizens",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "xHansa Fellowship Applications Open",
    date: "May 1 - May 31, 2026",
    time: "Rolling admissions",
    location: "All Route Hubs",
    type: "Fellowship",
    description:
      "The xHansa Fellowship seeds the talent pipeline. Semester-long program embedded in venture operations. Open to engineers, operators, and domain experts.",
    spots: "50 fellowships targeted",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Capital Roundtable: Thematic Fund Deep Dive",
    date: "May 15, 2026",
    time: "11:00 AM CAT",
    location: "M1 Core Cape Town + Virtual",
    type: "Investor Event",
    description:
      "Deep dive into the xCelero Thematic Fund allocation strategy. Portfolio construction, sector weighting, and co-investment opportunities for LPs.",
    spots: "Accredited investors only",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Community Town Hall Q2",
    date: "June 5, 2026",
    time: "3:00 PM UTC",
    location: "Virtual",
    type: "Town Hall",
    description:
      "Quarterly all-hands for the XCitizen network. Route updates, new hub openings, venture milestones, and community-driven agenda items.",
    spots: "Open to all XCitizens",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  },
];

/* ── Dispatches ── */
const dispatches = [
  {
    signal:
      "A Fellow joins in Cohort 3. Six months later, they're running operations for a venture 3,000 km away. That's not networking — that's placement. The Route doesn't introduce you to opportunities. It puts you inside them.",
    name: "Chioma Adekunle",
    role: "Operations Lead, Helios",
    location: "Kano, Nigeria",
    tag: "OPERATIONS",
  },
  {
    signal:
      "Need a regulatory contact in Rwanda for a diagnostics pilot? An XCitizen in Kigali makes the intro within 24 hours. That's not convenience — that's architecture. The flywheel isn't aspirational. It's operational.",
    name: "Dr. Kofi Mensah",
    role: "Co-Founder, Refract",
    location: "Cape Town, South Africa",
    tag: "LIFE SCIENCES",
  },
  {
    signal:
      "Six vehicles. Vetted ventures. Infrastructure that actually de-risks early-stage Africa. I could see deploying through multiple SPVs in a single year. This isn't a fund — it's a weapons system for conviction.",
    name: "Amara Diallo",
    role: "LP, xCelero Capital",
    location: "Dakar, Senegal",
    tag: "CAPITAL",
  },
];

/* ── Passport Benefits (expanded) ── */
const passportBenefits = [
  {
    title: "Hub Access",
    description: "Walk into any of 190 co-working, lab, and maker spaces across 39 countries. One scan, full entry.",
    icon: Globe,
  },
  {
    title: "Curated Deal Flow",
    description: "Investor-grade deal memos delivered monthly. Pre-vetted by operators on the ground, not cold pitches from LinkedIn.",
    icon: Coins,
  },
  {
    title: "XCitizen-Only Events",
    description: "Demo days, summits, masterclasses, and town halls. No public tickets. No tourists. Builders only.",
    icon: Calendar,
  },
  {
    title: "Warm Introductions",
    description: "Direct introductions to founders, operators, and investors — vouched by two degrees of XCitizen verification.",
    icon: ShieldCheck,
  },
  {
    title: "Route Directory",
    description: "Talent, vendors, co-founders, regulators, lab access — searchable by sector, hub, and availability.",
    icon: Rocket,
  },
  {
    title: "Assembly Vote",
    description: "Voting rights at the annual xCitizen Assembly. Shape the Route's thesis, priorities, and next-year strategy.",
    icon: CheckCircle,
  },
];

/* ── Town Square Discussions ── */
const previewDiscussions = [
  {
    community: "Energy & Infrastructure",
    title: "Mini-grid economics in Northern Nigeria: unit economics from Cohort 7",
    author: "Yusuf Hassan",
    upvotes: 142,
    color: "bg-[#FF4D00]",
  },
  {
    community: "Digital Finance",
    title: "Cross-border payments infrastructure: what we learned building across 3 corridors",
    author: "Fatima Al-Rashid",
    upvotes: 204,
    color: "bg-amber-600",
  },
  {
    community: "Capital & Deals",
    title: "SPV deployment update: Q1 2026 portfolio construction",
    author: "Amara Diallo",
    upvotes: 312,
    color: "bg-rose-600",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   COMMUNITY PAGE
   ══════════════════════════════════════════════════════════════════════════ */
export function Community() {
  return (
    <div className="bg-white text-[#111111]">
      <HeroSection />
      <GalleryCollage />
      <PillarsSection />
      <ArchetypeCardsSection />
      <CadenceEventsSection />
      <DispatchesSection />
      <TownSquareSection />
      <PassportSection />
      <CTASection />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   1. HERO — Cinematic dark hero (KEEP EXACTLY)
   ══════════════════════════════════════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto bg-[#0A0A0A] rounded-sm overflow-hidden">
        <div className="relative min-h-[520px] md:min-h-[640px] lg:min-h-[720px]">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt="Community collaborating on the Route"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />

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
                XCitizens are the fourth engine — 1,200+ operators, founders,
                investors, and mentors across 190 hubs and 39 countries. Not a
                network. A bloodstream.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 md:mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {[
                { value: "1,200+", label: "XCitizens" },
                { value: "190", label: "Hubs" },
                { value: "39", label: "Countries" },
                { value: "840+", label: "Connections/mo" },
              ].map((stat) => (
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
   2. GALLERY COLLAGE — Masonry photo grid (light bg)
   ══════════════════════════════════════════════════════════════════════════ */
function GalleryCollage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#111111]/10"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00] mb-4 block">
            Life on the Route
          </span>
          <h2 className="text-[28px] md:text-[40px] font-display font-medium tracking-tight leading-[1.1]">
            Inside the{" "}
            <em className="italic font-serif text-[#FF4D00]">network</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[180px] md:auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-[11px] font-mono font-bold tracking-[0.15em] uppercase">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   3. PILLARS — Light bg, editorial thesis + 4-column axiom grid
   ══════════════════════════════════════════════════════════════════════════ */
function PillarsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const pillars = [
    {
      icon: Fingerprint,
      title: "Every node is placed",
      description:
        "XCitizens aren't added to a directory — they're positioned in the architecture. A founder in energy sits beside investors who deploy in energy. An operator in logistics is paired with ventures that need supply-chain velocity. Placement, not enrollment.",
    },
    {
      icon: ShieldCheck,
      title: "Trust is the currency",
      description:
        "Reputation isn't a badge — it's a ledger. Every introduction carries the weight of the vouching chain behind it. Cold outreach is noise. A warm introduction through two degrees of XCitizen verification is signal. The network self-regulates.",
    },
    {
      icon: Lightbulb,
      title: "Knowledge that routes",
      description:
        "Workshops, playbooks, and field reports from ventures that have scaled. Hard-won lessons flow back into the network in real time. Information doesn't broadcast — it routes to the person who needs it, when they need it.",
    },
    {
      icon: Sparkles,
      title: "Every cycle compounds",
      description:
        "Weekly peer circles tighten bonds. Monthly masterclasses seed collaborations. Quarterly summits close deals. Each cycle makes the next one faster and higher-leverage. The flywheel doesn't spin — it accelerates.",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/70 mb-6 block">
            The Nerve
          </span>
          <h2 className="text-[26px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[1.06] font-display font-medium tracking-[-0.03em] text-[#111111]/90 mb-6">
            Infrastructure is the skeleton. Capital is the fuel. Community is the{" "}
            <span className="italic text-[#FF4D00]">signal path</span>.
          </h2>
          <p className="text-[15px] md:text-[17px] lg:text-[18px] leading-[1.75] text-[#111111]/45 font-medium max-w-2xl">
            Most networks are directories — names, titles, LinkedIn links. The
            Route is a neural architecture. Information doesn&apos;t broadcast;
            it routes. Connections don&apos;t scatter; they close loops. The
            difference between a contact list and a civilization is whether the
            system learns.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-[#111111]/10">
          {pillars.map((pillar, i) => {
            const PIcon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`px-6 md:px-8 py-10 md:py-12 border-b sm:border-b-0 border-[#111111]/10 ${
                  i > 0 ? "lg:border-l border-[#111111]/10" : ""
                } ${i >= 2 ? "sm:border-t lg:border-t-0" : ""}`}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-[#111111]/10 mb-5">
                  <PIcon className="w-4.5 h-4.5 text-[#FF4D00]" />
                </div>
                <h3 className="text-[14px] md:text-[15px] font-display font-medium tracking-tight text-[#111111]/90 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[13px] md:text-[14px] leading-[1.7] text-[#111111]/45 font-medium">
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
   4. ARCHETYPE CARDS — Light gray bg, dark accent cards
   ══════════════════════════════════════════════════════════════════════════ */
function ArchetypeCardsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const archetypes = [
    {
      callsign: "FOUNDER",
      icon: Rocket,
      transforms: "Conviction → Companies",
      feeds: "Raw belief shaped into a venture the Route can accelerate. Without conviction, the flywheel has no starting torque.",
      draws: "Pre-matched operators. Thesis-aligned capital. Infrastructure built for their sector and stage. A co-founding team assembled, not recruited.",
    },
    {
      callsign: "OPERATOR",
      icon: Building2,
      transforms: "Effort → Momentum",
      feeds: "The discipline to turn plans into cadence. Running hubs, managing programs, building the machine while everyone else talks about it.",
      draws: "Equity in what they build. A pipeline of ventures to operate. A network that treats execution as the scarcest resource — and prices it accordingly.",
    },
    {
      callsign: "INVESTOR",
      icon: Coins,
      transforms: "Conviction → Deployment",
      feeds: "Capital placed with thesis precision. Not spray-and-pray — concentrated bets across six vehicles with sector-aligned theses.",
      draws: "Deal flow no cold call can replicate. Ventures already de-risked by operators on the ground. Co-investment alongside peers who share their conviction.",
    },
    {
      callsign: "MENTOR",
      icon: Heart,
      transforms: "Experience → Acceleration",
      feeds: "Hard-won domain knowledge. Contact books that took decades to build. Operational playbooks that compress three years of mistakes into three sessions.",
      draws: "Carry in the vehicles they shape. First access to the next generation of talent. The compound return of watching something they touched succeed at scale.",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/70 mb-4 block">
            The Metabolism
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.08] font-display font-medium tracking-[-0.03em] text-[#111111]/90">
              Four transformations. One{" "}
              <span className="italic text-[#FF4D00]">engine</span>.
            </h2>
            <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#111111]/40 font-medium max-w-sm">
              Remove one, and the whole system slows. Founders without operators
              are visionaries without execution. Capital without mentors is
              deployment without judgment.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {archetypes.map((arch, i) => {
            const AIcon = arch.icon;
            return (
              <motion.div
                key={arch.callsign}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-[#0A0A0A] rounded-sm overflow-hidden group"
              >
                <div className="px-6 md:px-7 pt-8 md:pt-10 pb-6 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00]/70">
                      {arch.callsign}
                    </span>
                    <div className="w-9 h-9 flex items-center justify-center border border-white/[0.08] group-hover:border-[#FF4D00]/30 transition-colors duration-300">
                      <AIcon className="w-4 h-4 text-white/25 group-hover:text-[#FF4D00] transition-colors duration-300" />
                    </div>
                  </div>
                  <p className="text-[14px] md:text-[15px] font-mono tracking-[0.05em] text-white/50">
                    {arch.transforms}
                  </p>
                </div>
                <div className="px-6 md:px-7 py-6 md:py-8 space-y-5">
                  <div>
                    <span className="text-[8px] font-mono font-bold tracking-[0.2em] uppercase text-white/20 mb-2 block">
                      Feeds in
                    </span>
                    <p className="text-[12px] md:text-[13px] leading-[1.7] text-white/35 font-medium">
                      {arch.feeds}
                    </p>
                  </div>
                  <div className="w-full h-px bg-white/[0.04]" />
                  <div>
                    <span className="text-[8px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00]/30 mb-2 block">
                      Draws out
                    </span>
                    <p className="text-[12px] md:text-[13px] leading-[1.7] text-white/35 font-medium">
                      {arch.draws}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   5. CADENCE + EVENTS — Image-based event cards on light bg
   ══════════════════════════════════════════════════════════════════════════ */
function CadenceEventsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedEvent, setSelectedEvent] = useState<
    (typeof upcomingEvents)[number] | null
  >(null);

  const cadenceItems = [
    { period: "Weekly", title: "Office Hours & Peer Circles", icon: Clock },
    { period: "Monthly", title: "Deal Flow & Masterclasses", icon: Calendar },
    { period: "Quarterly", title: "Demo Days & Route Summits", icon: Star },
    { period: "Annually", title: "xCitizen Assembly", icon: Globe },
  ];

  const eventTypeColor: Record<string, string> = {
    "Demo Day": "bg-[#FF4D00] text-white",
    Summit: "bg-[#111111] text-white",
    Masterclass: "bg-[#FF4D00]/10 text-[#FF4D00]",
    Fellowship: "bg-[#111111]/10 text-[#111111]",
    "Investor Event": "bg-[#FF4D00] text-white",
    "Town Hall": "bg-[#111111]/10 text-[#111111]",
  };

  return (
    <>
      <section ref={ref} className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-[1400px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mb-10 md:mb-14"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/70 mb-6 block">
              The Pulse
            </span>
            <h2 className="text-[28px] sm:text-[38px] md:text-[50px] lg:text-[58px] leading-[1.06] font-display font-medium tracking-[-0.03em] text-[#111111]/90 mb-4">
              Weekly peer circles. Monthly deal flow. Quarterly{" "}
              <span className="italic text-[#FF4D00]">closings</span>.
            </h2>
            <p className="text-[15px] md:text-[17px] leading-[1.75] text-[#111111]/45 font-medium max-w-2xl">
              Communities that meet once a year are acquaintances. Communities
              that convene weekly close deals. Every cadence cycle — from
              peer circles to the annual Assembly — compounds the one before it.
            </p>
          </motion.div>

          {/* Cadence strip */}
          <div className="mb-12 md:mb-16">
            <div className="relative">
              <div className="absolute top-4 left-0 right-0 h-px bg-[#111111]/10" />
              <div className="grid grid-cols-4 gap-4 md:gap-6">
                {cadenceItems.map((c, i) => {
                  const CIcon = c.icon;
                  return (
                    <motion.div
                      key={c.period}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#FF4D00] mb-6 relative z-10" />
                      <div className="flex items-center gap-2 mb-2">
                        <CIcon className="w-3 h-3 text-[#FF4D00]/50 hidden sm:block" />
                        <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00]/70">
                          {c.period}
                        </span>
                      </div>
                      <p className="text-[12px] md:text-[13px] font-display font-medium text-[#111111]/50 leading-[1.5]">
                        {c.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Events — Image-based cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setSelectedEvent(event)}
                className={`group border bg-white overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer ${
                  event.featured
                    ? "border-[#FF4D00]/30 hover:border-[#FF4D00]/60"
                    : "border-[#111111]/10 hover:border-[#111111]/20"
                }`}
              >
                {/* Event image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Type badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[9px] font-mono font-bold tracking-[0.1em] uppercase px-2 py-1 ${eventTypeColor[event.type] || "bg-[#111111]/10 text-[#111111]"}`}
                    >
                      {event.type}
                    </span>
                  </div>
                  {event.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[9px] font-mono font-bold tracking-[0.1em] uppercase px-2 py-1 bg-[#FF4D00] text-white flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  )}
                  {/* Date overlay */}
                  <div className="absolute bottom-3 left-3">
                    <div className="text-[11px] font-mono font-bold tracking-[0.05em] text-white flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#FF4D00]" />
                      {event.date}
                    </div>
                  </div>
                </div>

                {/* Content below image */}
                <div className="p-4 md:p-5">
                  <h3 className="text-[15px] md:text-[17px] font-display font-medium tracking-tight leading-tight mb-2 group-hover:text-[#FF4D00] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-[12px] md:text-[13px] text-[#111111]/55 leading-[1.6] font-medium mb-3 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-[10px] text-[#111111]/40 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {event.spots}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventDetailModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   EVENT DETAIL MODAL
   ══════════════════════════════════════════════════════════════════════════ */
function EventDetailModal({
  event,
  onClose,
}: {
  event: (typeof upcomingEvents)[number];
  onClose: () => void;
}) {
  const [rsvpEmail, setRsvpEmail] = useState("");
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [rsvpLoading, setRsvpLoading] = useState(false);
  const [rsvpError, setRsvpError] = useState("");

  const handleRSVP = async () => {
    if (!rsvpEmail) return;
    setRsvpLoading(true);
    setRsvpError("");
    try {
      const res = await fetch("/api/capital/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: rsvpEmail,
          consent: true,
          source: `rsvp_${event.type.toLowerCase().replace(/\s+/g, "_")}`,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "RSVP failed");
      }
      setRsvpSubmitted(true);
    } catch (err) {
      setRsvpError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setRsvpLoading(false);
    }
  };

  const eventTypeColor: Record<string, string> = {
    "Demo Day": "bg-[#FF4D00] text-white",
    Summit: "bg-[#111111] text-white",
    Masterclass: "bg-[#FF4D00]/10 text-[#FF4D00]",
    Fellowship: "bg-[#111111]/10 text-[#111111]",
    "Investor Event": "bg-[#FF4D00] text-white",
    "Town Hall": "bg-[#111111]/10 text-[#111111]",
  };

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white text-[#111111] max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-black/30 text-white hover:bg-black/60 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-3 left-3">
            <span
              className={`inline-block text-[9px] font-mono font-bold tracking-[0.1em] uppercase px-2.5 py-1 ${eventTypeColor[event.type] || "bg-[#111111]/10 text-[#111111]"}`}
            >
              {event.type}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-[24px] md:text-[28px] font-display font-medium tracking-tight leading-[1.15] mb-6">
            {event.title}
          </h2>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-[13px] font-medium">
              <Calendar className="w-4 h-4 text-[#FF4D00] flex-shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-[13px] font-medium text-[#111111]/60">
              <Clock className="w-4 h-4 text-[#FF4D00] flex-shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-3 text-[13px] font-medium text-[#111111]/60">
              <MapPin className="w-4 h-4 text-[#FF4D00] flex-shrink-0" />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-[14px] md:text-[15px] text-[#111111]/60 leading-[1.7] font-medium mb-6">
            {event.description}
          </p>

          <div className="flex items-center gap-2 text-[12px] font-medium text-[#111111]/40 mb-8 pb-6 border-b border-[#111111]/10">
            <Users className="w-4 h-4" />
            <span>{event.spots}</span>
          </div>

          {rsvpSubmitted ? (
            <div className="w-full py-3.5 bg-[#111111] text-white text-[12px] font-bold uppercase tracking-[0.12em] text-center flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              You&apos;re on the list
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={rsvpEmail}
                  onChange={(e) => setRsvpEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 border border-[#111111]/15 text-[13px] font-medium placeholder:text-[#111111]/30 focus:outline-none focus:border-[#FF4D00] transition-colors"
                />
                <button
                  onClick={handleRSVP}
                  disabled={rsvpLoading || !rsvpEmail}
                  className="px-6 py-3 bg-[#FF4D00] text-white text-[12px] font-bold uppercase tracking-[0.12em] hover:bg-[#FF4D00]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {rsvpLoading ? "..." : "RSVP"}
                </button>
              </div>
              {rsvpError && (
                <p className="text-[11px] text-red-500 font-medium">
                  {rsvpError}
                </p>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   6. DISPATCHES — Light bg, editorial pull-quotes
   ══════════════════════════════════════════════════════════════════════════ */
function DispatchesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/70 mb-4 block">
            Signal from the Field
          </span>
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] leading-[1.1] font-display font-medium tracking-[-0.03em] text-[#111111]/90">
            Not testimonials.{" "}
            <span className="italic text-[#FF4D00]">Readings</span>.
          </h2>
        </motion.div>

        <div className="divide-y divide-[#111111]/10">
          {dispatches.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group py-10 md:py-14 hover:bg-white transition-colors duration-300"
            >
              <div
                className={`grid lg:grid-cols-12 gap-6 lg:gap-10 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div
                  className={`lg:col-span-8 ${i % 2 === 1 ? "lg:col-start-5" : ""}`}
                >
                  <span className="inline-block text-[8px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00]/60 mb-4">
                    {d.tag}
                  </span>
                  <p className="text-[17px] sm:text-[20px] md:text-[24px] leading-[1.5] font-display font-medium tracking-[-0.01em] text-[#111111]/65 mb-6">
                    &ldquo;{d.signal}&rdquo;
                  </p>
                </div>

                <div
                  className={`lg:col-span-4 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} flex lg:justify-end`}
                >
                  <div className="lg:text-right">
                    <div className="w-8 h-px bg-[#FF4D00] mb-4 lg:ml-auto" />
                    <div className="text-[14px] font-display font-medium text-[#111111]/80">
                      {d.name}
                    </div>
                    <div className="text-[11px] text-[#111111]/40 font-medium mt-1">
                      {d.role}
                    </div>
                    <div className="text-[10px] text-[#111111]/30 font-medium">
                      {d.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   7. TOWN SQUARE — Forum preview with discussion cards
   ══════════════════════════════════════════════════════════════════════════ */
function TownSquareSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-[#111111]/10"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Copy + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00] mb-6 block">
              Town Square
            </span>
            <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-display font-medium tracking-tight leading-[1.05] mb-6">
              Where the network{" "}
              <em className="italic font-serif text-[#FF4D00]">talks</em>.
            </h2>
            <p className="text-[17px] md:text-[19px] text-[#111111]/50 font-medium leading-relaxed mb-6">
              The XCitizen forum. Real-time discussions on deals, infrastructure,
              regulations, hiring, and hard-won lessons from the Route. No noise.
              No cold pitches. Just builders sharing what they know.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Energy & Infrastructure",
                "Life Sciences",
                "Digital Finance",
                "Route Operations",
                "Capital & Deals",
                "Founders Corner",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-[10px] font-mono font-bold tracking-[0.1em] uppercase border border-[#111111]/10 text-[#111111]/40"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/townsquare"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF4D00] text-white text-[12px] font-bold uppercase tracking-[0.12em] hover:bg-[#FF4D00]/90 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Enter Town Square
              </Link>
              <span className="text-[12px] text-[#111111]/30 font-medium">
                Free account required · takes 60 seconds
              </span>
            </div>
          </motion.div>

          {/* Right: Preview cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            {/* Mock forum header */}
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#111111]/10">
              <div className="w-8 h-8 bg-[#FF4D00] flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-[14px] font-display font-medium tracking-tight">
                  Town Square
                </div>
                <div className="text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-[#FF4D00]">
                  XCitizen Forum
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2 text-[10px] text-[#111111]/25 font-mono font-bold">
                <span>1,200+ members</span>
                <span>·</span>
                <span>6 communities</span>
              </div>
            </div>

            {previewDiscussions.map((discussion, i) => (
              <motion.div
                key={discussion.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border border-[#111111]/10 p-4 hover:border-[#FF4D00]/20 hover:bg-[#FAFAFA] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 text-[11px] text-[#111111]/35 mb-2">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${discussion.color}`}
                  >
                    <span className="text-[7px] font-bold text-white uppercase">
                      {discussion.community[0]}
                    </span>
                  </div>
                  <span className="font-bold text-[#111111]/50">
                    {discussion.community}
                  </span>
                  <span>·</span>
                  <span>{discussion.author}</span>
                </div>
                <h4 className="text-[14px] md:text-[15px] font-display font-medium tracking-tight text-[#111111]/80 leading-snug group-hover:text-[#FF4D00] transition-colors">
                  {discussion.title}
                </h4>
                <div className="flex items-center gap-3 mt-2.5 text-[10px] text-[#111111]/25 font-mono font-bold">
                  <span className="flex items-center gap-1">
                    <ArrowUp className="w-3 h-3 text-[#FF4D00]" />
                    {discussion.upvotes}
                  </span>
                  <span>6 comments</span>
                  <span className="ml-auto flex items-center gap-1 group-hover:text-[#FF4D00] transition-colors">
                    View discussion
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Bottom fade hint */}
            <div className="relative h-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   8. PASSPORT — Detailed benefits + passport visual
   ══════════════════════════════════════════════════════════════════════════ */
function PassportSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left — Passport identity + visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/60 mb-6 block">
              xCitizen Passport
            </span>
            <h2 className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] leading-[1.05] font-display font-medium tracking-[-0.03em] text-white/90 mb-4">
              One passport.{" "}
              <span className="italic text-[#FF4D00]">Full access</span>.
            </h2>
            <p className="text-[15px] md:text-[17px] text-white/35 font-medium leading-[1.75] mb-8">
              The xCitizen Passport isn&apos;t membership — it&apos;s clearance.
              $25 one-time setup. $9/year after that. Access to every hub, every
              deal room, every peer circle on the Route. No tiers. No gates
              inside the gate.
            </p>

            {/* Passport visual */}
            <div className="relative mt-auto">
              <div className="relative overflow-hidden rounded-sm border border-white/[0.08] group">
                <img
                  src="/passport-visual.png"
                  alt="xCitizen Passport — your access card to the Route"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-white/25 block">
                      Setup fee
                    </span>
                    <span className="text-[20px] font-display font-medium text-white/70">
                      $25
                    </span>
                  </div>
                  <div className="w-px h-8 bg-white/[0.06]" />
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-white/25 block">
                      Annual
                    </span>
                    <span className="text-[20px] font-display font-medium text-white/70">
                      $9/yr
                    </span>
                  </div>
                </div>
                <Link
                  to="/join"
                  className="group/link inline-flex items-center gap-2 px-6 py-3 bg-[#FF4D00] text-white text-[11px] font-mono font-bold tracking-[0.12em] uppercase hover:bg-[#FF4D00]/90 transition-colors"
                >
                  Apply
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right — Benefits grid with detail */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {passportBenefits.map((benefit, i) => {
                const BIcon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border border-white/[0.06] p-5 md:p-6 hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 flex items-center justify-center border border-white/[0.08] group-hover:border-[#FF4D00]/30 transition-colors duration-300">
                        <BIcon className="w-3.5 h-3.5 text-[#FF4D00]/70 group-hover:text-[#FF4D00] transition-colors duration-300" />
                      </div>
                      <h3 className="text-[14px] md:text-[15px] font-display font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-[12px] md:text-[13px] leading-[1.7] text-white/30 font-medium group-hover:text-white/45 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <p className="text-[11px] text-white/20 font-medium">
                No tiers. No hidden fees. Every XCitizen gets the same access.
              </p>
              <Link
                to="/join"
                className="group inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.12em] uppercase text-[#FF4D00] hover:text-white transition-colors"
              >
                Full passport details
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   9. CTA — Dark closing statement
   ══════════════════════════════════════════════════════════════════════════ */
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/70 mb-6 block">
            The network is live
          </span>
          <h2 className="text-[28px] sm:text-[38px] md:text-[50px] lg:text-[60px] leading-[1.05] font-display font-medium tracking-[-0.03em] text-[#111111]/90 mb-6">
            1,200 builders. 190 hubs. Your seat is{" "}
            <span className="italic text-[#FF4D00]">waiting</span>.
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#111111]/45 font-medium leading-[1.75] max-w-xl mx-auto mb-10">
            The network is assembling. The flywheel is spinning. Every
            archetype — founder, operator, investor, mentor — has a role in the
            machine. The machine needs all four.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/join"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#FF4D00] text-white text-[11px] font-mono font-bold tracking-[0.12em] uppercase hover:bg-[#FF4D00]/90 transition-colors"
            >
              Join as Founder
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              to="/join"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-[#111111]/15 text-[#111111] text-[11px] font-mono font-bold tracking-[0.12em] uppercase hover:border-[#111111]/40 hover:bg-[#FAFAFA] transition-all"
            >
              Join as Investor
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

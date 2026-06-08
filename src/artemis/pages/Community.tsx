"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  ChevronRight,
  Clock,
  Star,
  Globe,
  Handshake,
  Lightbulb,
  Sparkles,
  Heart,
  Shield,
  Check,
  MessageSquare,
  X,
  Rocket,
  Building2,
  Coins,
  CheckCircle,
  Zap,
  CircleDot,
  Flame,
  ArrowUp,
} from "lucide-react";
import { Link } from "@/artemis/router";

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

/* ── Voices ── */
const voices = [
  {
    quote:
      "When the Route is fully operational, a Fellow could join in Cohort 3 and within six months be running operations for a venture in Kano. The network won't just connect you; it will place you where you're needed most.",
    name: "Chioma Adekunle",
    role: "Operations Lead, Helios",
    location: "Kano, Nigeria",
  },
  {
    quote:
      "The peer network, at scale, will be transformative. Imagine needing a regulatory contact in Rwanda for a diagnostics pilot \u2014 an XCitizen in Kigali could make the intro within 24 hours. That's the flywheel we're building.",
    name: "Dr. Kofi Mensah",
    role: "Co-Founder, Refract",
    location: "Cape Town, South Africa",
  },
  {
    quote:
      "As an investor, the deal flow could be unlike anything else. Six vehicles, vetted ventures, and the infrastructure to actually de-risk early-stage Africa. I could see deploying through multiple SPVs in a single year.",
    name: "Amara Diallo",
    role: "LP, xCelero Capital",
    location: "Dakar, Senegal",
  },
];

/* ── Passport Benefits ── */
const passportBenefits = [
  "Access to all 190 hubs across 39 countries",
  "Curated deal flow & peer circle invitations",
  "XCitizen-only events: summits, demo days, masterclasses",
  "Direct introductions to founders, operators & investors",
  "Route directory: talent, vendors, co-founders",
  "Voting rights at the annual xCitizen Assembly",
];

/* ══════════════════════════════════════════════════════════════════════════
   COMMUNITY PAGE
   ══════════════════════════════════════════════════════════════════════════ */
export function Community() {
  return (
    <div className="bg-white text-[#111111]">
      <HeroSection />
      <ThesisSection />
      <ArchetypesSection />
      <ProtocolsSection />
      <ConveningSection />
      <VoicesSection />
      <PassportSection />
      <CommonsSection />
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
   2. THE THESIS — Why community is structural, not social
   ══════════════════════════════════════════════════════════════════════════ */
function ThesisSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const principles = [
    {
      icon: CircleDot,
      heading: "Structure, not serendipity",
      body: "The Route doesn't rely on chance encounters. Every hub, program, and event is engineered so that the right people meet at the right stage. A founder in Cohort 3 doesn't stumble onto their lead operator — the system places them.",
    },
    {
      icon: Flame,
      heading: "Reciprocity as protocol",
      body: "Cold pitches die here. Every introduction is earned through contribution. You share a contact, you get two back. You teach a masterclass, you gain deal flow. The protocol is simple: give first, compound later.",
    },
    {
      icon: Zap,
      heading: "Density over scale",
      body: "1,200 XCitizens across 190 hubs isn't a vanity metric — it's a density calculation. Enough founders in energy to fill a room. Enough investors with thesis alignment to close a round. Enough operators to run the machine.",
    },
  ];

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 mt-6 md:mt-8">
      <div className="max-w-[1400px] mx-auto bg-[#0A0A0A] rounded-sm overflow-hidden">
        {/* Opening thesis */}
        <div className="px-8 md:px-14 lg:px-20 pt-16 md:pt-24 pb-14 md:pb-20 border-b border-white/[0.06]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/60 mb-6 block">
              The Thesis
            </span>
            <h2 className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-[54px] leading-[1.08] font-display font-medium tracking-[-0.03em] text-white/90 max-w-4xl mb-8">
              Infrastructure builds the skeleton. Capital fuels the muscle.
              Community is the{" "}
              <span className="italic text-[#FF4D00]">nerve system</span>.
            </h2>
            <p className="text-[15px] md:text-[17px] lg:text-[18px] leading-[1.75] text-white/35 font-medium max-w-3xl">
              Most networks are address books. xCelero is an operating system.
              The difference isn't size — it's architecture. Every XCitizen is
              placed, not added. Every connection is vetted, not random. Every
              interaction compounds, not expires.
            </p>
          </motion.div>
        </div>

        {/* Three principles */}
        <div className="grid lg:grid-cols-3">
          {principles.map((p, i) => {
            const PIcon = p.icon;
            return (
              <motion.div
                key={p.heading}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`px-8 md:px-12 lg:px-10 py-12 md:py-16 ${
                  i > 0 ? "lg:border-l border-t lg:border-t-0 border-white/[0.06]" : ""
                }`}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-white/[0.08] mb-6">
                  <PIcon className="w-4.5 h-4.5 text-[#FF4D00]" />
                </div>
                <h3 className="text-[17px] md:text-[19px] font-display font-medium tracking-tight text-white/90 mb-4">
                  {p.heading}
                </h3>
                <p className="text-[13px] md:text-[14px] leading-[1.75] text-white/30 font-medium">
                  {p.body}
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
   3. THE ARCHETYPES — What each role feeds into the flywheel
   ══════════════════════════════════════════════════════════════════════════ */
function ArchetypesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const archetypes = [
    {
      callsign: "FOUNDER",
      icon: Rocket,
      gives: "Thesis → Companies. Raw conviction shaped into ventures that the Route can accelerate.",
      receives: "Infrastructure, mentorship, capital, and operators pre-matched to their stage and sector.",
    },
    {
      callsign: "OPERATOR",
      icon: Building2,
      gives: "Effort → Momentum. The discipline to run hubs, manage programs, and turn chaos into cadence.",
      receives: "Access to the venture pipeline, equity upside, and a seat at every strategic table on the Route.",
    },
    {
      callsign: "INVESTOR",
      icon: Coins,
      gives: "Conviction → Deployment. Capital placed with thesis alignment across six vehicles.",
      receives: "Curated deal flow, de-risked ventures, and co-investment alongside operators who've already validated.",
    },
    {
      callsign: "MENTOR",
      icon: Heart,
      gives: "Experience → Acceleration. Hard-won domain expertise, contact books, and operational playbooks.",
      receives: "Carry in the vehicles they advise, early access to talent, and the compound return of watching ventures they shaped succeed.",
    },
  ];

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 mt-6 md:mt-8">
      <div className="max-w-[1400px] mx-auto bg-[#0A0A0A] rounded-sm overflow-hidden">
        {/* Header */}
        <div className="px-8 md:px-14 lg:px-20 pt-16 md:pt-24 pb-10 md:pb-14 border-b border-white/[0.06]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/60 mb-6 block">
              The Archetypes
            </span>
            <h2 className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.08] font-display font-medium tracking-[-0.03em] text-white/90 mb-6">
              Four roles. One{" "}
              <span className="italic text-[#FF4D00]">metabolism</span>.
            </h2>
            <p className="text-[15px] md:text-[17px] leading-[1.75] text-white/35 font-medium max-w-2xl">
              The flywheel doesn't spin without all four. Each archetype feeds
              something the others need — and receives something only the others
              can give. That's the metabolism.
            </p>
          </motion.div>
        </div>

        {/* Archetype rows */}
        <div className="divide-y divide-white/[0.06]">
          {archetypes.map((arch, i) => {
            const AIcon = arch.icon;
            return (
              <motion.div
                key={arch.callsign}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group grid md:grid-cols-12 gap-6 md:gap-8 px-8 md:px-14 lg:px-20 py-8 md:py-10 hover:bg-white/[0.02] transition-colors duration-300"
              >
                {/* Callsign + Icon */}
                <div className="md:col-span-3 flex items-center gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-white/[0.08] group-hover:border-[#FF4D00]/30 transition-colors duration-300">
                    <AIcon className="w-4 h-4 text-white/25 group-hover:text-[#FF4D00] transition-colors duration-300" />
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00]/70">
                    {arch.callsign}
                  </span>
                </div>

                {/* Gives */}
                <div className="md:col-span-4 lg:col-span-4">
                  <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-white/20 mb-2 block">
                    Gives
                  </span>
                  <p className="text-[13px] md:text-[14px] leading-[1.7] text-white/40 font-medium">
                    {arch.gives}
                  </p>
                </div>

                {/* Receives */}
                <div className="md:col-span-5 lg:col-span-5">
                  <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00]/30 mb-2 block">
                    Receives
                  </span>
                  <p className="text-[13px] md:text-[14px] leading-[1.7] text-white/40 font-medium">
                    {arch.receives}
                  </p>
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
   4. THE PROTOCOLS — How the community actually operates
   ══════════════════════════════════════════════════════════════════════════ */
function ProtocolsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const protocols = [
    {
      icon: Handshake,
      label: "Vetted Introductions",
      rule: "No cold outreach inside the network. Every intro flows through a trust chain — a mutual XCitizen vouches, the system verifies contribution history, and the introduction carries reputation weight.",
    },
    {
      icon: Globe,
      label: "Borderless by Default",
      rule: "A regulatory contact in Kigali. A supply-chain lead in Mombasa. A co-founder in Dakar. The Route's 190-hub architecture means cross-border should feel like cross-desk. If it doesn't, the protocol is broken.",
    },
    {
      icon: Lightbulb,
      label: "Knowledge Returns",
      rule: "Every masterclass, every post-mortem, every field report loops back into the commons. Knowledge hoarded is knowledge wasted. The system is designed so that what one XCitizen learns, every XCitizen can access.",
    },
    {
      icon: Sparkles,
      label: "Compound, Don't Extract",
      rule: "The measure of a healthy network isn't how much you take — it's how much stronger the whole becomes after your participation. Deals close faster because trust compounds. Talent gets deeper because mentors return. Capital gets smarter because operators stay.",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#FF4D00] mb-6 block">
            The Protocols
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] font-display font-medium tracking-[-0.02em] mb-6">
            Not rules.{" "}
            <span className="italic font-serif text-[#FF4D00]">
              Operating principles
            </span>
            .
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#111111]/50 font-medium max-w-2xl">
            Every network has culture. Ours has protocols — explicit,
            enforceable, and designed to keep the bloodstream circulating.
          </p>
        </motion.div>

        {/* Protocol items — stacked editorial rows */}
        <div className="space-y-0">
          {protocols.map((proto, i) => {
            const PIcon = proto.icon;
            return (
              <motion.div
                key={proto.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group grid md:grid-cols-12 gap-5 md:gap-8 py-8 md:py-10 border-t border-[#111111]/10"
              >
                {/* Number + Icon */}
                <div className="md:col-span-2 flex items-center gap-4">
                  <span className="text-[36px] md:text-[44px] font-display font-medium tracking-[-0.03em] leading-none text-[#111111]/[0.07]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 border border-[#111111]/10 flex items-center justify-center group-hover:border-[#FF4D00]/30 group-hover:text-[#FF4D00] transition-colors">
                    <PIcon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Label */}
                <div className="md:col-span-3 flex items-center">
                  <h3 className="text-[17px] md:text-[20px] font-display font-medium tracking-tight group-hover:text-[#FF4D00] transition-colors">
                    {proto.label}
                  </h3>
                </div>

                {/* Rule */}
                <div className="md:col-span-7 flex items-center">
                  <p className="text-[14px] md:text-[15px] text-[#111111]/50 leading-[1.7] font-medium">
                    {proto.rule}
                  </p>
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
   5. THE CONVENING — Events & cadence
   ══════════════════════════════════════════════════════════════════════════ */
function ConveningSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedEvent, setSelectedEvent] = useState<
    (typeof upcomingEvents)[number] | null
  >(null);

  const cadenceRow = [
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
      <section ref={ref} className="px-6 md:px-12 lg:px-20 mt-6 md:mt-8">
        <div className="max-w-[1400px] mx-auto bg-[#0A0A0A] rounded-sm overflow-hidden">
          {/* Header */}
          <div className="px-8 md:px-14 lg:px-20 pt-16 md:pt-24 pb-10 md:pb-14 border-b border-white/[0.06]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/60 mb-6 block">
                The Convening
              </span>
              <h2 className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.08] font-display font-medium tracking-[-0.03em] text-white/90 max-w-3xl mb-6">
                The bloodstream{" "}
                <span className="italic text-[#FF4D00]">circulates</span>.
              </h2>
              <p className="text-[15px] md:text-[17px] leading-[1.75] text-white/35 font-medium max-w-2xl">
                The community compounds because it convenes on cadence. Every
                cycle is a pressure cycle — building, presenting, reviewing,
                scaling.
              </p>
            </motion.div>
          </div>

          {/* Cadence strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/[0.06]">
            {cadenceRow.map((c, i) => {
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
                  className={`px-8 md:px-10 lg:px-8 py-6 md:py-8 ${
                    i > 0 ? "border-l border-t lg:border-t-0 border-white/[0.06]" : "border-t lg:border-t-0 border-white/[0.06]"
                  } ${i >= 2 ? "" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CIcon className="w-3.5 h-3.5 text-[#FF4D00]/50" />
                    <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00]/70">
                      {c.period}
                    </span>
                  </div>
                  <p className="text-[13px] md:text-[14px] font-display font-medium text-white/60">
                    {c.title}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Upcoming events */}
          <div className="px-8 md:px-14 lg:px-20 py-10 md:py-14">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/25">
                Upcoming
              </span>
              <span className="text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-white/15">
                Click to RSVP
              </span>
            </div>

            <div className="space-y-0">
              {upcomingEvents.map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setSelectedEvent(event)}
                  className={`group grid md:grid-cols-12 gap-4 md:gap-6 px-4 md:px-6 py-5 md:py-6 hover:bg-white/[0.03] transition-colors duration-200 cursor-pointer ${
                    i < upcomingEvents.length - 1
                      ? "border-b border-white/[0.04]"
                      : ""
                  }`}
                >
                  {/* Date */}
                  <div className="md:col-span-2 flex items-center">
                    <span className="text-[11px] font-mono font-medium text-white/30 group-hover:text-white/50 transition-colors">
                      {event.date}
                    </span>
                  </div>

                  {/* Title + type */}
                  <div className="md:col-span-5 flex items-center gap-3">
                    <span
                      className={`inline-block text-[8px] font-mono font-bold tracking-[0.1em] uppercase px-2 py-0.5 flex-shrink-0 ${eventTypeColor[event.type] || "bg-white/10 text-white"}`}
                    >
                      {event.type}
                    </span>
                    <span className="text-[14px] md:text-[15px] font-display font-medium text-white/70 group-hover:text-white transition-colors truncate">
                      {event.title}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="md:col-span-3 flex items-center">
                    <span className="text-[12px] text-white/20 font-medium truncate">
                      {event.location}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-2 flex items-center justify-end">
                    <ChevronRight className="w-4 h-4 text-white/[0.06] group-hover:text-[#FF4D00]/50 group-hover:translate-x-0.5 transition-all duration-200" />
                  </div>
                </motion.div>
              ))}
            </div>
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
   6. VOICES — Testimonials
   ══════════════════════════════════════════════════════════════════════════ */
function VoicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#FF4D00] mb-6 block">
            Voices from the Route
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] font-display font-medium tracking-[-0.02em]">
            The people who{" "}
            <span className="italic font-serif text-[#FF4D00]">compound</span>.
          </h2>
        </motion.div>

        {/* Testimonials — editorial pull-quote layout */}
        <div className="max-w-4xl mx-auto space-y-0">
          {voices.map((voice, i) => (
            <motion.div
              key={voice.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="py-10 md:py-14 border-t border-[#111111]/10 last:border-b"
            >
              <p className="text-[18px] sm:text-[22px] md:text-[26px] leading-[1.5] font-display font-medium tracking-[-0.01em] text-[#111111]/70 mb-8 max-w-3xl">
                &ldquo;{voice.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-px h-8 bg-[#FF4D00]/30" />
                <div>
                  <div className="text-[14px] font-display font-medium tracking-tight text-[#111111]/90">
                    {voice.name}
                  </div>
                  <div className="text-[11px] text-[#111111]/40 font-medium">
                    {voice.role} · {voice.location}
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
   7. THE PASSPORT — Access to the Route
   ══════════════════════════════════════════════════════════════════════════ */
function PassportSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 mt-6 md:mt-8">
      <div className="max-w-[1400px] mx-auto bg-[#0A0A0A] rounded-sm overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left — Passport visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="px-8 md:px-14 lg:px-16 py-14 md:py-20 lg:border-r border-white/[0.06] flex flex-col justify-center"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/60 mb-6 block">
              The Passport
            </span>
            <h2 className="text-[26px] sm:text-[34px] md:text-[44px] leading-[1.08] font-display font-medium tracking-[-0.03em] text-white/90 max-w-md mb-6">
              One pass. Full{" "}
              <span className="italic text-[#FF4D00]">circulation</span>.
            </h2>
            <p className="text-[14px] md:text-[15px] leading-[1.75] text-white/35 font-medium max-w-md mb-10">
              The xCitizen Passport isn't a membership card — it's access to
              the entire operating system. Every hub. Every event. Every
              connection in the network. No tiers. No gatekeeping beyond the
              initial activation.
            </p>

            {/* Passport card */}
            <div className="bg-[#111111] border border-white/[0.06] overflow-hidden max-w-sm">
              <div className="h-1.5 bg-[#FF4D00]" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 border border-[#FF4D00]/30 flex items-center justify-center">
                    <Shield
                      className="w-5 h-5 text-[#FF4D00]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00]/70">
                      xCelero
                    </div>
                    <div className="text-[15px] font-display font-medium tracking-tight text-white/80">
                      xCitizen Passport
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-[9px] font-mono font-bold tracking-[0.15em] uppercase text-white/25">
                        Activation
                      </div>
                      <div className="text-[32px] font-display font-medium tracking-[-0.02em] leading-none text-white/90">
                        $25
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-[0.1em] uppercase text-white/15 border border-white/[0.06] px-2 py-0.5">
                      Lifetime
                    </span>
                  </div>
                  <div className="h-px bg-white/[0.06]" />
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-[9px] font-mono font-bold tracking-[0.15em] uppercase text-white/25">
                        Annual
                      </div>
                      <div className="text-[32px] font-display font-medium tracking-[-0.02em] leading-none text-white/90">
                        $9<span className="text-[14px] text-white/30">/yr</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-[0.1em] uppercase text-[#FF4D00]/60 border border-[#FF4D00]/20 px-2 py-0.5">
                      Low Barrier
                    </span>
                  </div>
                </div>

                <Link
                  to="/join"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#FF4D00] text-white text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:bg-[#FF4D00]/90 transition-colors"
                >
                  Get the Passport
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right — Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="px-8 md:px-14 lg:px-16 py-14 md:py-20 flex flex-col justify-center"
          >
            <h3 className="text-[18px] md:text-[22px] font-display font-medium tracking-tight text-white/80 mb-3">
              What the passport unlocks
            </h3>
            <p className="text-[13px] md:text-[14px] text-white/30 font-medium leading-[1.65] mb-10 max-w-md">
              Intentionally flat pricing. The Route stays open to every serious
              builder, regardless of background.
            </p>

            <div className="space-y-0">
              {passportBenefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-3 py-4 border-t border-white/[0.04]"
                >
                  <Check
                    className="w-4 h-4 text-[#FF4D00] flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="text-[13px] md:text-[14px] text-white/50 font-medium leading-snug">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/[0.06]">
              {[
                { value: "1,200+", label: "Holders" },
                { value: "39+", label: "Countries" },
                { value: "1", label: "Flat rate" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-[22px] md:text-[26px] font-display font-medium tracking-[-0.02em] text-white/70">
                    {s.value}
                  </div>
                  <div className="text-[9px] font-mono font-bold tracking-[0.15em] uppercase text-white/20 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   8. THE COMMONS — Shared space / forum
   ══════════════════════════════════════════════════════════════════════════ */
function CommonsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const discussions = [
    {
      community: "Energy & Infrastructure",
      title:
        "Mini-grid economics in Northern Nigeria: unit economics from Cohort 7",
      author: "Yusuf Hassan",
      upvotes: 142,
      color: "bg-[#FF4D00]",
    },
    {
      community: "Digital Finance",
      title:
        "Cross-border payments infrastructure: what we learned building across 3 corridors",
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

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#FF4D00] mb-6 block">
              The Commons
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] font-display font-medium tracking-[-0.02em] mb-6">
              Where the bloodstream{" "}
              <span className="italic font-serif text-[#FF4D00]">
                exchanges
              </span>
              .
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#111111]/50 font-medium max-w-xl mb-8">
              The XCitizen forum. Not a feed. Not a broadcast. A structured
              commons where operators share what they've learned, founders ask
              the questions that matter, and investors find the signal in the
              noise. Every post compounds. Every thread is searchable. Nothing
              expires.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
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
                  className="px-3 py-1.5 text-[9px] font-mono font-bold tracking-[0.1em] uppercase border border-[#111111]/10 text-[#111111]/35"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              to="/townsquare"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#FF4D00] text-white text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:bg-[#FF4D00]/90 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Enter the Commons
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Right — Preview cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-3"
          >
            {/* Forum header */}
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#111111]/10">
              <div className="w-8 h-8 bg-[#FF4D00] flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-[14px] font-display font-medium tracking-tight">
                  The Commons
                </div>
                <div className="text-[9px] font-mono font-bold tracking-[0.15em] uppercase text-[#FF4D00]">
                  XCitizen Forum
                </div>
              </div>
              <div className="ml-auto text-[9px] font-mono font-bold text-[#111111]/20">
                1,200+ members · 6 communities
              </div>
            </div>

            {discussions.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.25 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border border-[#111111]/10 p-4 hover:border-[#FF4D00]/20 hover:bg-[#FAFAFA] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 text-[10px] text-[#111111]/30 mb-2">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${d.color}`}
                  >
                    <span className="text-[7px] font-bold text-white uppercase">
                      {d.community[0]}
                    </span>
                  </div>
                  <span className="font-bold text-[#111111]/45">
                    {d.community}
                  </span>
                  <span>·</span>
                  <span>{d.author}</span>
                </div>
                <h4 className="text-[14px] md:text-[15px] font-display font-medium tracking-tight text-[#111111]/75 leading-snug group-hover:text-[#FF4D00] transition-colors">
                  {d.title}
                </h4>
                <div className="flex items-center gap-3 mt-2.5 text-[10px] text-[#111111]/20 font-mono font-bold">
                  <span className="flex items-center gap-1">
                    <ArrowUp className="w-3 h-3 text-[#FF4D00]" />
                    {d.upvotes}
                  </span>
                  <span>6 comments</span>
                  <span className="ml-auto flex items-center gap-1 group-hover:text-[#FF4D00] transition-colors">
                    View
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   9. CTA — Closing
   ══════════════════════════════════════════════════════════════════════════ */
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 pb-6 md:pb-8">
      <div className="max-w-[1400px] mx-auto bg-[#0A0A0A] rounded-sm overflow-hidden relative">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF4D00]/30 to-transparent" />

        <div className="relative z-10 px-8 md:px-14 lg:px-20 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FF4D00]/60 mb-8 block">
              Join the Route
            </span>
            <h2 className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] leading-[1.08] font-display font-medium tracking-[-0.03em] text-white/90 max-w-3xl mb-10 md:mb-12">
              The architecture is set. The network is{" "}
              <span className="italic text-[#FF4D00]">assembling</span>.
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
                className="group inline-flex items-center gap-2 px-8 py-3.5 border border-white/[0.12] text-white/60 text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:border-white/25 hover:text-white transition-all"
              >
                Join as an Investor
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>
            <p className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/15">
              190 hubs · 39 countries · One metabolism
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

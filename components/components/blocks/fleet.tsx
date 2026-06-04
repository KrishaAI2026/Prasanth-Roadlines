"use client";

import { motion } from "framer-motion";
import { Shield, Clock, TrendingUp, CheckCircle2, MapPin, Users } from "lucide-react";
import { BentoGridShowcase } from "@/components/ui/bento-grid";

/* â"€â"€ Slot 1 (top-left): Route stats with highway backdrop â"€â"€ */
const StatsCard = () => (
  <div className="relative h-full rounded-2xl overflow-hidden min-h-[200px]">
    <img
      src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=900&auto=format&fit=crop"
      alt="Highway routes network"
      className="bento-image absolute inset-0 w-full h-full object-cover scale-105"
    />
    {/* gradient bottom-up */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c] via-[#0d1f3c]/70 to-[#0d1f3c]/20" />

    <div className="relative z-10 h-full p-6 flex flex-col justify-between">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-orange-400">
        By the Numbers
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-4xl font-black text-white leading-none">
            2<span className="text-orange-400">,</span>000
            <span className="text-orange-400 text-2xl">+</span>
          </p>
          <p className="text-[11px] text-white/55 mt-1 leading-tight">
            KM Routes Covered Daily
          </p>
        </div>
        <div>
          <p className="text-4xl font-black text-white leading-none">
            50<span className="text-orange-400 text-2xl">+</span>
          </p>
          <p className="text-[11px] text-white/55 mt-1 leading-tight">
            Trusted Clients Across India
          </p>
        </div>
      </div>
    </div>
  </div>
);

/* â"€â"€ Slot 3 (top-right): Commitment badges over chemical plant â"€â"€ */
const BadgesCard = () => (
  <div className="relative h-full rounded-2xl overflow-hidden min-h-[200px]">
    <img
      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
      alt="Industrial safety compliance"
      className="bento-image absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[#1e3a5f]/80 mix-blend-multiply" />
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />

    <div className="relative z-10 h-full p-6 flex flex-col justify-between">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-orange-400">
        Our Commitment
      </p>

      <div className="flex flex-wrap gap-2">
        {[
          { icon: Shield, label: "Safety First" },
          { icon: CheckCircle2, label: "100% Compliant" },
          { icon: Clock, label: "On-Time" },
          { icon: MapPin, label: "Pan-India" },
          { icon: TrendingUp, label: "Transparent" },
          { icon: Users, label: "B2B Focused" },
        ].map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="flex items-center gap-1.5 text-[11px] font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
          >
            <Icon className="h-3 w-3 text-orange-400" />
            {label}
          </span>
        ))}
      </div>
    </div>
  </div>
);

/* â"€â"€ Slot 2 (tall center, 3 rows): Fleet hero image â"€â"€ */
const MainCard = () => (
  <div className="relative h-full rounded-2xl overflow-hidden min-h-[500px]">
    <img
      src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=900&auto=format&fit=crop"
      alt="Prasanth Roadlines Fleet"
      className="bento-image absolute inset-0 w-full h-full object-cover"
    />
    {/* dual gradient: subtle top tint + strong bottom overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c] via-[#0d1f3c]/30 to-transparent" />
    <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />

    {/* Top badge */}
    <div className="absolute top-5 left-5">
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white bg-orange-500 px-3 py-1.5 rounded-full">
        Our Fleet
      </span>
    </div>

    {/* Bottom copy */}
    <div className="absolute bottom-6 left-6 right-6">
      <p className="text-3xl font-black text-white leading-tight mb-2">
        Built for<br />
        <span className="text-orange-400">Industrial Scale</span>
      </p>
      <p className="text-white/60 text-sm leading-relaxed">
        Specialized tankers, bulk carriers &amp; container trucks engineered for
        chemical, pharma and heavy freight.
      </p>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-white/20" />
        <span className="text-[10px] tracking-widest uppercase text-white/40">
          Visakhapatnam · Chennai · Hyderabad · Kochi
        </span>
        <div className="h-px flex-1 bg-white/20" />
      </div>
    </div>
  </div>
);

/* â"€â"€ Slot 4 (middle-left): Quote card over warehouse image â"€â"€ */
const AboutCard = () => (
  <div className="relative h-full rounded-2xl overflow-hidden min-h-[210px]">
    <img
      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop"
      alt="Logistics operations"
      className="bento-image absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a5f]/95 via-[#1e3a5f]/75 to-[#1e3a5f]/40" />

    <div className="relative z-10 h-full p-6 flex flex-col justify-between">
      <div className="w-8 h-1 rounded-full bg-orange-500" />

      <div>
        <p className="text-base font-black text-white leading-snug italic mb-3">
          &ldquo;We don&rsquo;t just move goods — we move trust, reliability, and growth for your business.&rdquo;
        </p>
        <p className="text-[11px] text-white/50 tracking-wider uppercase">
          — Prasanth Roadlines
        </p>
      </div>
    </div>
  </div>
);

/* â"€â"€ Slot 5 (middle/bottom-right, 2 rows): Delivery stat over container port â"€â"€ */
const StatCard = () => (
  <div className="relative h-full rounded-2xl overflow-hidden min-h-[280px]">
    <img
      src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop"
      alt="Successful deliveries cargo port"
      className="bento-image absolute inset-0 w-full h-full object-cover"
    />
    {/* orange tint overlay */}
    <div className="absolute inset-0 bg-orange-500/85" />

    <div className="relative z-10 h-full p-6 flex flex-col justify-between">
      <TrendingUp className="h-7 w-7 text-white/80" />

      <div>
        <p className="text-7xl font-black text-white leading-none">
          500
          <span className="text-white/50 text-4xl">+</span>
        </p>
        <p className="text-sm text-white/85 mt-2 leading-snug font-semibold">
          Successful Deliveries<br />Every Month
        </p>
        <div className="mt-4 pt-4 border-t border-white/25">
          <p className="text-[11px] text-white/65">
            Chemical · Pharma · Bulk · Interstate
          </p>
        </div>
      </div>
    </div>
  </div>
);

/* â"€â"€ Slot 6 (bottom-left): Company story with Vizag industrial backdrop â"€â"€ */
const JourneyCard = () => (
  <div className="relative h-full rounded-2xl overflow-hidden min-h-[200px]">
    <img
      src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=900&auto=format&fit=crop"
      alt="Visakhapatnam city India"
      className="bento-image absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/95 via-[#0d1f3c]/60 to-[#0d1f3c]/20" />

    <div className="relative z-10 h-full p-6 flex flex-col justify-between">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-orange-400">
        Our Story
      </p>

      <div>
        <h3 className="text-lg font-black text-white leading-tight mb-2">
          Rooted in Vizag.<br />Serving India.
        </h3>
        <p className="text-[12px] text-white/55 leading-relaxed">
          From Auto Nagar, Visakhapatnam — a Pan-India freight network
          trusted by leading industrial companies across AP, TN, Telangana &amp; Kerala.
        </p>
        <div className="flex items-center gap-2 mt-3">
          <MapPin className="h-3.5 w-3.5 text-orange-400 flex-shrink-0" />
          <p className="text-[11px] text-white/45">
            195/4 Block D, Auto Nagar, Visakhapatnam 530012
          </p>
        </div>
      </div>
    </div>
  </div>
);

/* â"€â"€ Section â"€â"€ */
export default function Fleet() {
  return (
    <section id="about" className="py-24 bg-[#0a1628] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-2xl mb-14"
        >
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-orange-400 mb-3">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Why{" "}
            <span className="text-orange-400">Prasanth</span>{" "}
            Roadlines
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Decades of specialized logistics experience combined with a
            commitment to safety, compliance, and operational excellence.
          </p>
        </motion.div>

        <BentoGridShowcase
          integrations={<StatsCard />}
          featureTags={<BadgesCard />}
          mainFeature={<MainCard />}
          secondaryFeature={<AboutCard />}
          statistic={<StatCard />}
          journey={<JourneyCard />}
        />
      </div>
    </section>
  );
}

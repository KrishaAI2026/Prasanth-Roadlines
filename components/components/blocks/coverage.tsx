"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, FlaskConical, Package, Truck, Shield } from "lucide-react";
import { useQuoteModal } from "@/components/ui/quote-context";

const routes = [
  { from: "Visakhapatnam", to: "Chennai", tag: "Chemical · Pharma" },
  { from: "Visakhapatnam", to: "Hyderabad", tag: "Bulk · Industrial" },
  { from: "Visakhapatnam", to: "Kochi", tag: "Container · Cargo" },
  { from: "Visakhapatnam", to: "Vijayawada", tag: "Freight · Logistics" },
  { from: "Visakhapatnam", to: "Bangalore", tag: "Pharma · Chemical" },
  { from: "Hyderabad", to: "Chennai", tag: "Bulk · Industrial" },
  { from: "Chennai", to: "Kochi", tag: "Chemical · Container" },
  { from: "Visakhapatnam", to: "Bhubaneswar", tag: "Bulk · Freight" },
];

const industries = [
  {
    icon: FlaskConical,
    title: "Chemical Transport Visakhapatnam",
    description:
      "Prasanth Roadlines provides licensed chemical transport in Visakhapatnam and across Andhra Pradesh. Our chemical transport services cover industrial chemicals, solvents, bulk liquids, and hazardous materials — with full hazmat compliance, trained drivers, and a safety-certified fleet.",
    keywords: ["chemical transport Visakhapatnam", "hazmat", "tanker lorry", "industrial chemicals"],
  },
  {
    icon: Shield,
    title: "Pharma Transport Visakhapatnam",
    description:
      "Trusted pharma transport in Visakhapatnam for pharmaceutical companies across South India. Our pharma logistics services include API transport, formulation delivery, and excipient freight — fully regulated and temperature-aware for pharmaceutical-grade compliance.",
    keywords: ["pharma transport Visakhapatnam", "API transport", "pharma logistics", "pharmaceutical grade"],
  },
  {
    icon: Package,
    title: "Bulk Cargo Transport Andhra Pradesh",
    description:
      "Dry bulk cargo, bulk liquid transport, and raw material freight across Andhra Pradesh, Odisha, Karnataka, and Kerala. Serving manufacturing units, factories, and warehouses with reliable, cost-effective bulk transport solutions.",
    keywords: ["bulk cargo transport", "dry bulk", "raw materials", "Andhra Pradesh freight"],
  },
  {
    icon: Truck,
    title: "Container & Interstate Freight",
    description:
      "Container logistics and heavy cargo transport for industrial scale operations. Full container loads (FCL) and interstate freight solutions from Visakhapatnam port to all major industrial hubs across India.",
    keywords: ["container transport India", "heavy cargo", "interstate freight", "supply chain"],
  },
];

const states = [
  "Andhra Pradesh", "Telangana", "Tamil Nadu",
  "Odisha", "Karnataka", "Kerala",
  "Maharashtra", "West Bengal",
];

export default function Coverage() {
  const { openModal } = useQuoteModal();

  return (
    <section id="coverage" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-500 mb-3">
            Pan-India Coverage
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3a5f] mb-4 leading-tight">
            Chemical &amp; Pharma Logistics <span className="text-orange-500">Across India</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Prasanth Roadlines is a leading chemical and pharma logistics provider in India —
            operating road freight services across South India and beyond, specialising in
            chemical transport, pharmaceutical logistics, and bulk cargo from our base in
            Visakhapatnam, Andhra Pradesh.
          </p>
        </motion.div>

        {/* ── Key Routes ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-black text-[#1e3a5f] mb-6 text-center">
            Key Transport Routes from Visakhapatnam
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {routes.map((route, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col gap-2 p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:border-orange-300 hover:bg-orange-50 transition-colors group"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-[#1e3a5f]">
                  <MapPin className="h-3.5 w-3.5 text-orange-500 flex-shrink-0" />
                  {route.from}
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-orange-500 transition-colors" />
                  {route.to}
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-orange-500">
                  {route.tag}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Industries ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-black text-[#1e3a5f] mb-6 text-center">
            Industries We Transport For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <ind.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-[#1e3a5f] mb-2">{ind.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">{ind.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="text-[10px] font-semibold uppercase tracking-wider bg-orange-50 text-orange-600 border border-orange-200 px-2.5 py-1 rounded-full"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── SEO keyword block ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-black text-[#1e3a5f] mb-2">
              Chemical Transport Visakhapatnam
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Looking for reliable chemical transport in Visakhapatnam? Prasanth Roadlines
              offers safe, compliant, and timely chemical transport services from Visakhapatnam
              to all major industrial cities in India. Licensed tanker fleet, hazmat-trained
              drivers, and 100% regulatory compliance.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-black text-[#1e3a5f] mb-2">
              Pharma Transport Visakhapatnam
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Need pharma transport in Visakhapatnam? We are a trusted pharma logistics
              partner for pharmaceutical companies in Andhra Pradesh. Our pharma transport
              services ensure safe, compliant delivery of APIs, formulations, and bulk
              pharmaceutical materials across India.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-black text-[#1e3a5f] mb-2">
              Bulk &amp; Industrial Logistics Vizag
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Prasanth Roadlines is Visakhapatnam's trusted industrial logistics company
              for bulk cargo, container freight, and heavy industrial transport. Operating
              from Auto Nagar, Vizag — we serve factories, plants, and warehouses across
              South India with a dedicated, well-maintained fleet.
            </p>
          </div>
        </motion.div>

        {/* ── States we serve ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0d1f3c] rounded-3xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-400 mb-2">
                Service Area
              </p>
              <h3 className="text-2xl font-black text-white mb-2">
                Serving 8+ States Across India
              </h3>
              <p className="text-white/55 text-sm max-w-md leading-relaxed">
                From our logistics base at Auto Nagar, Visakhapatnam — we provide
                reliable road freight, chemical transport, and pharma logistics
                across India's major industrial corridors.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-2 max-w-sm">
              {states.map((state) => (
                <span
                  key={state}
                  className="text-xs font-semibold text-white/80 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full"
                >
                  {state}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center sm:text-left">
              Need a freight partner for chemical, pharma, or bulk cargo transport in Visakhapatnam?
            </p>
            <button
              onClick={openModal}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-full font-bold text-sm transition-colors whitespace-nowrap"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FlaskConical, Package, Route } from "lucide-react";
import { ServiceCarousel, type Service } from "@/components/ui/services-card";

const services: Service[] = [
  {
    number: "001",
    title: "Chemical & Pharma Logistics",
    description:
      "Specialized in chemical and pharmaceutical transport, we guarantee safe handling, timely deliveries, and full compliance with industry regulations. Your sensitive cargo is always in trusted hands.",
    icon: FlaskConical,
    gradient: "bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "002",
    title: "Bulk & Container Transport",
    description:
      "We handle large-volume cargo with a fleet designed for bulk loads and containerized shipments. Our services ensure safe handling, cost efficiency, and timely delivery across regions.",
    icon: Package,
    gradient: "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "003",
    title: "Interstate Freight Solutions",
    description:
      "We connect major cities and industrial hubs with reliable interstate transport. Our logistics network ensures seamless movement of goods across state borders with full compliance and safety.",
    icon: Route,
    gradient: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
  },
];

const iconMap: Record<string, React.ElementType> = {
  "001": FlaskConical,
  "002": Package,
  "003": Route,
};

const gradientMap: Record<string, string> = {
  "001": "bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700",
  "002": "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600",
  "003": "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700",
};

interface SanityService { number?: string; title?: string; description?: string; }

export default function Services({ servicesData }: { servicesData?: SanityService[] }) {
  const displayServices: Service[] = servicesData && servicesData.length > 0
    ? servicesData.map((s) => ({
        number: s.number || "001",
        title: s.title || "",
        description: s.description || "",
        icon: iconMap[s.number || "001"] || FlaskConical,
        gradient: gradientMap[s.number || "001"] || gradientMap["001"],
        image: services.find((def) => def.number === s.number)?.image,
      }))
    : services;

  return (
    <section id="services" className="py-24 bg-[#0d1f3c] overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-400 mb-3">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Transport <span className="text-orange-400">Services</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            End-to-end road freight solutions for chemical, pharmaceutical,
            and bulk cargo — serving Andhra Pradesh, Telangana, Tamil Nadu &amp; beyond.
          </p>
        </motion.div>
      </div>

      <ServiceCarousel services={displayServices} />
    </section>
  );
}

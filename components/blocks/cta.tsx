"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-[#0d1f3c] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-400 mb-6">
            Ready to Ship?
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Move Your Cargo with{" "}
            <span className="text-orange-400">Confidence</span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Get a customized quote for your chemical, pharmaceutical, or bulk
            freight needs. Our team responds within 2 hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="tel:+919948729999"
              className="group flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              +91 9948729999
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:prasanthi999@hotmail.com"
              className="flex items-center gap-3 border border-white/20 text-white/80 hover:text-white hover:border-orange-500/60 px-8 py-4 rounded-full font-bold text-base transition-all duration-200"
            >
              <Mail className="h-5 w-5 text-orange-400" />
              prasanthi999@hotmail.com
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Free Quote in 2 Hours
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              100% Compliant Transport
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Pan-India Coverage
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

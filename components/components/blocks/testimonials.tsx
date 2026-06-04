"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  _id: string;
  name: string;
  company?: string;
  location?: string;
  quote: string;
  rating?: number;
}

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-500 mb-3">
            Client Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3a5f] mb-4 leading-tight">
            What Our <span className="text-orange-500">Clients Say</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Trusted by leading industrial companies across South India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t._id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
            >
              {/* Quote icon */}
              <Quote className="h-7 w-7 text-orange-200" />

              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= (t.rating || 5)
                        ? "text-orange-400 fill-orange-400"
                        : "text-slate-200 fill-slate-200"
                    }`}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Client info */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[#1e3a5f] font-bold text-sm">{t.name}</p>
                {t.company && (
                  <p className="text-orange-500 text-xs font-semibold">{t.company}</p>
                )}
                {t.location && (
                  <p className="text-slate-400 text-xs mt-0.5">{t.location}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

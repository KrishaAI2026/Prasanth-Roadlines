"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface SiteSettings {
  phone1?: string;
  phone2?: string;
  email?: string;
  address?: string;
  workingHours?: string;
}

export default function Contact({ siteSettings }: { siteSettings?: SiteSettings }) {
  const phone1 = siteSettings?.phone1 || "9948729999";
  const phone2 = siteSettings?.phone2 || "9407279999";
  const email = siteSettings?.email || "prasanthroadlines@gmail.com";
  const address = siteSettings?.address || "195/4, Block D, Industrial Development Area, Auto Nagar, Visakhapatnam, Andhra Pradesh 530012";
  const workingHours = siteSettings?.workingHours || "Monday - Saturday: 9:00 AM - 6:00 PM";
  return (
    <section id="contact" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3a5f] mb-4 leading-tight">
            Contact <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Visit us at our head office in Visakhapatnam or reach out anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-slate-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.037253434227!2d83.1891575!3d17.695700199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39690063ce81e7%3A0xbb7332be8335b8c!2sPrasanth%20roadlines!5e0!3m2!1sen!2sin!4v1780392215015!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >

            {/* Address */}
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-orange-500 mb-1">
                  Head Office
                </p>
                <p className="text-[#1e3a5f] font-semibold text-sm leading-relaxed">
                  195/4, Block D, Industrial Development Area,<br />
                  Auto Nagar, Visakhapatnam,<br />
                  Andhra Pradesh 530012
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-orange-500 mb-1">
                  Phone
                </p>
                <a
                  href={`tel:+91${phone1}`}
                  className="block text-[#1e3a5f] font-semibold text-sm hover:text-orange-500 transition-colors"
                >
                  +91 {phone1}
                </a>
                <a
                  href={`tel:+91${phone2}`}
                  className="block text-[#1e3a5f] font-semibold text-sm hover:text-orange-500 transition-colors mt-1"
                >
                  +91 {phone2}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-orange-500 mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-[#1e3a5f] font-semibold text-sm hover:text-orange-500 transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-orange-500 mb-1">
                  Working Hours
                </p>
                <p className="text-[#1e3a5f] font-semibold text-sm">
                  {workingHours}
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  Sunday: By Appointment Only
                </p>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://maps.google.com/?q=Prasanth+roadlines+Auto+Nagar+Visakhapatnam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 rounded-xl bg-[#1e3a5f] hover:bg-[#162d4a] text-white font-bold text-sm transition-colors"
            >
              <MapPin className="h-4 w-4" />
              Get Directions on Google Maps
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

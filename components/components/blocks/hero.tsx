"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { ArrowRight } from "lucide-react";

const VIDEO_SRC = "/services-bg.mp4";

const POSTER_SRC = "/hero-bg.png";

const BG_SRC = "/hero-bg.png";

export default function Hero() {
  const handleGetQuote = () => {
    window.dispatchEvent(new CustomEvent("prasanth:open-quote"));
  };

  return (
    <div id="home">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={VIDEO_SRC}
        posterSrc={POSTER_SRC}
        bgImageSrc={BG_SRC}
        title="PRASANTH ROADLINES"
        date="Delivering More Than Cargo"
        scrollToExpand="â†“ Scroll to play & explore"
        textBlend={false}
      >
        <div className="flex flex-col items-center gap-6 py-10 text-center">
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Trusted chemical transport &amp; pharma transport in Visakhapatnam —
            safe, compliant road freight across India's major industrial hubs.
          </p>
          <button
            onClick={handleGetQuote}
            className="group flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}

"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { ArrowRight } from "lucide-react";
import { urlFor, fileUrl } from "@/sanity/image";

interface HeroData {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  backgroundImage?: any;
  video?: any;
}

export default function Hero({ heroData }: { heroData?: HeroData }) {
  const handleGetQuote = () => {
    window.dispatchEvent(new CustomEvent("prasanth:open-quote"));
  };

  const title       = heroData?.title       || "PRASANTH ROADLINES";
  const subtitle    = heroData?.subtitle    || "Delivering More Than Cargo";
  const description = heroData?.description || "Trusted chemical transport & pharma transport in Visakhapatnam — safe, compliant road freight across India's major industrial hubs.";
  const buttonText  = heroData?.buttonText  || "Get a Free Quote";

  const bgSrc    = heroData?.backgroundImage ? urlFor(heroData.backgroundImage).url() : "/hero-bg.png";
  const videoSrc = heroData?.video           ? fileUrl(heroData.video)                : "/services-bg.mp4";

  return (
    <div id="home">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={videoSrc}
        posterSrc={bgSrc}
        bgImageSrc={bgSrc}
        title={title}
        date={subtitle}
        scrollToExpand="↓ Scroll to play & explore"
        textBlend={false}
      >
        <div className="flex flex-col items-center gap-6 py-10 text-center">
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            {description}
          </p>
          <button
            onClick={handleGetQuote}
            className="group flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
          >
            {buttonText}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}

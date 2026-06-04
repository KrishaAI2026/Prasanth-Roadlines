"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

export interface ClientLogo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  subheading?: string;
  logos?: ClientLogo[];
}

export const Logos3 = ({
  heading = "Trusted by Industry Leaders",
  subheading = "Proudly serving leading companies across chemical, pharmaceutical and industrial sectors",
  logos = [],
}: Logos3Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false }),
  ]);

  /* duplicate logos for seamless infinite feel */
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-white border-t border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-3">
          Our Clients
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-[#1e3a5f] mb-3">
          {heading}
        </h2>
        <p className="text-slate-500 text-base max-w-xl mx-auto">
          {subheading}
        </p>
      </div>

      <div className="relative">
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex items-center gap-0">
            {allLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-10 py-4 border-r border-slate-100 last:border-r-0"
              >
                <img
                  src={logo.image}
                  alt={logo.description}
                  className={logo.className ?? "h-10 w-auto object-contain transition-all duration-300"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

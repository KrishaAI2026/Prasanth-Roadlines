import Navbar from "@/components/blocks/navbar";
import Hero from "@/components/blocks/hero";
import Services from "@/components/blocks/services";
import Process from "@/components/blocks/process";
import Fleet from "@/components/blocks/fleet";
import Coverage from "@/components/blocks/coverage";
import Clients from "@/components/blocks/clients";
import CTA from "@/components/blocks/cta";
import Contact from "@/components/blocks/contact";
import Footer from "@/components/blocks/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Global custom cursor */}
      <CustomCursor />

      {/* 1. Sticky Navbar */}
      <Navbar />

      {/* 2. Hero â€” Scroll-to-expand animation */}
      <Hero />

      {/* Stats ribbon */}
      <div className="bg-orange-500 py-4 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { value: "2,000+ KM", label: "Routes Daily" },
              { value: "500+", label: "Deliveries/Month" },
              { value: "50+", label: "Trusted Clients" },
              { value: "100%", label: "Compliance" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-white/75 uppercase tracking-wider font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Services â€” Animated carousel cards */}
      <Services />

      {/* 4. Process â€” Interactive stepper */}
      <Process />

      {/* 5. About/Fleet — Bento grid with stats & images */}
      <Fleet />

      {/* 6. Routes & Industries */}
      <Coverage />

      {/* 7. Clients — Auto-scrolling logo strip */}
      <Clients />

      {/* 7. CTA â€” call buttons */}
      <CTA />

      {/* 8. Contact & Location */}
      <Contact />

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}

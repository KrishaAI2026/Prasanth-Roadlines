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
import { getSiteSettings, getHeroSection, getStats, getServices, getTestimonials } from "@/sanity/queries";
import Testimonials from "@/components/blocks/testimonials";

export const revalidate = 60; // revalidate every 60 seconds

export default async function Home() {
  const [siteSettings, heroData, statsData, servicesData, testimonialsData] = await Promise.all([
    getSiteSettings(),
    getHeroSection(),
    getStats(),
    getServices(),
    getTestimonials(),
  ]);

  const stats = statsData ? [
    { value: statsData.stat1Value || "2,000+ KM", label: statsData.stat1Label || "Routes Daily" },
    { value: statsData.stat2Value || "500+",      label: statsData.stat2Label || "Deliveries/Month" },
    { value: statsData.stat3Value || "50+",       label: statsData.stat3Label || "Trusted Clients" },
    { value: statsData.stat4Value || "100%",      label: statsData.stat4Label || "Compliance" },
  ] : [
    { value: "2,000+ KM", label: "Routes Daily" },
    { value: "500+",      label: "Deliveries/Month" },
    { value: "50+",       label: "Trusted Clients" },
    { value: "100%",      label: "Compliance" },
  ];

  return (
    <main className="overflow-x-hidden">
      <CustomCursor />
      <Navbar siteSettings={siteSettings} />
      <Hero heroData={heroData} />

      {/* Stats ribbon */}
      <div className="bg-orange-500 py-4 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {stats.map((stat) => (
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

      <Services servicesData={servicesData} />
      <Process />
      <Fleet />
      <Coverage />
      <Clients />
      <Testimonials testimonials={testimonialsData} />
      <CTA siteSettings={siteSettings} />
      <Contact siteSettings={siteSettings} />
      <Footer siteSettings={siteSettings} />
    </main>
  );
}

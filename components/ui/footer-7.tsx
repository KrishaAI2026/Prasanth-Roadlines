import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src?: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Services",
    links: [
      { name: "Chemical & Pharma", href: "#services" },
      { name: "Bulk Transport", href: "#services" },
      { name: "Interstate Freight", href: "#services" },
      { name: "Get a Quote", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Our Process", href: "#process" },
      { name: "Fleet", href: "#about" },
      { name: "Compliance", href: "#about" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "+91 9948729999", href: "tel:+919948729999" },
      { name: "prasanthi999@hotmail.com", href: "mailto:prasanthi999@hotmail.com" },
      { name: "Auto Nagar, Vizag", href: "#contact" },
      { name: "Andhra Pradesh", href: "#contact" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "https://www.facebook.com/wix", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/company/wix-com", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "#home",
    alt: "Prasanth Roadlines",
    title: "Prasanth Roadlines",
  },
  sections = defaultSections,
  description = "A trusted logistics partner specializing in chemical, pharmaceutical, and bulk transport across major industrial hubs.",
  socialLinks = defaultSocialLinks,
  copyright = "Â© 2025 Prasanth Roadlines. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-16 bg-[#0a1628] text-white">
      <div className="container mx-auto px-6">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start lg:max-w-xs">
            <div className="flex items-center lg:justify-start">
              <a href={logo.url} className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt={logo.alt}
                  className="h-12 w-auto object-contain"
                />
                <h2 className="text-lg font-bold text-white">{logo.title}</h2>
              </a>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {description}
            </p>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-orange-400 mb-2">Head Office</p>
              <p className="text-xs text-white/50 leading-relaxed">
                195/4, Block D, Industrial Development Area,<br />
                Auto Nagar, Visakhapatnam,<br />
                Andhra Pradesh 530012
              </p>
            </div>
            <ul className="flex items-center space-x-5 text-white/50">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-orange-400 transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid w-full gap-8 md:grid-cols-3">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-sm tracking-widest uppercase text-orange-400">{section.title}</h3>
                <ul className="space-y-3 text-sm text-white/60">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-white transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs font-medium text-white/40 md:flex-row md:items-center">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-white transition-colors">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

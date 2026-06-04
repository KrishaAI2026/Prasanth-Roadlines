"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useQuoteModal } from "@/components/ui/quote-context";

const menu = [
  { title: "Home",     id: "home" },
  { title: "Services", id: "services" },
  { title: "Process",  id: "process" },
  { title: "About",    id: "about" },
  { title: "Contact",  id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const { openModal } = useQuoteModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    /* If going anywhere except home, unlock the hero animation first */
    if (id !== "home") {
      window.dispatchEvent(new CustomEvent("hero-complete"));
    }

    /* Small delay so hero state updates before we scroll */
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 60);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setSheetOpen(false);   // close mobile drawer
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1f3c]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">

        {/* â”€â”€ Desktop nav â”€â”€ */}
        <nav className="hidden lg:flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo.png"
              alt="Prasanth Roadlines"
              className="h-10 w-auto object-contain"
            />
            <span className="text-white font-bold text-lg tracking-tight">
              Prasanth <span className="text-orange-400">Roadlines</span>
            </span>
          </button>

          {/* Links */}
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {menu.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="inline-flex h-9 items-center justify-center px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-md hover:bg-white/10"
                  >
                    {item.title}
                  </button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side */}
          <div className="flex gap-4 items-center">
            <a
              href="tel:+919948729999"
              className="flex items-center gap-1.5 text-sm text-white/70 hover:text-orange-400 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              +91 9948729999
            </a>
            <a
              href="mailto:prasanthi999@hotmail.com"
              className="flex items-center gap-1.5 text-sm text-white/70 hover:text-orange-400 transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              prasanthi999@hotmail.com
            </a>
            <Button
              size="sm"
              onClick={openModal}
              className="bg-orange-500 hover:bg-orange-400 text-white border-0 ml-3"
            >
              Get a Quote
            </Button>
          </div>
        </nav>

        {/* â”€â”€ Mobile nav â”€â”€ */}
        <div className="flex lg:hidden items-center justify-between h-14">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2"
          >
            <img
              src="/logo.png"
              alt="Prasanth Roadlines"
              className="h-9 w-auto object-contain"
            />
            <span className="text-white font-bold text-base tracking-tight">
              Prasanth <span className="text-orange-400">Roadlines</span>
            </span>
          </button>

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent className="bg-[#0d1f3c] border-white/10 text-white overflow-y-auto">
              <SheetHeader className="mb-6">
                <SheetTitle className="flex items-center gap-2">
                  <img
                    src="/logo.png"
                    alt="Prasanth Roadlines"
                    className="h-9 w-auto object-contain"
                  />
                  <span className="text-white font-bold text-base">
                    Prasanth <span className="text-orange-400">Roadlines</span>
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {menu.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left py-3 px-2 text-white/80 hover:text-orange-400 font-medium border-b border-white/10 transition-colors"
                  >
                    {item.title}
                  </button>
                ))}

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="tel:+919948729999"
                    className="flex items-center gap-2 text-sm text-white/70"
                  >
                    <Phone className="h-4 w-4 text-orange-400" />
                    +91 9948729999
                  </a>
                  <a
                    href="mailto:prasanthi999@hotmail.com"
                    className="flex items-center gap-2 text-sm text-white/70"
                  >
                    <Mail className="h-4 w-4 text-orange-400" />
                    prasanthi999@hotmail.com
                  </a>
                  <Button
                    onClick={() => { openModal(); setSheetOpen(false); }}
                    className="mt-2 bg-orange-500 hover:bg-orange-400 text-white w-full"
                  >
                    Get a Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}

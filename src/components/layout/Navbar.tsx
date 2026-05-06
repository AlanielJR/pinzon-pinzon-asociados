"use client";

import { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-chocolate shadow-lg shadow-chocolate/30"
          : "bg-chocolate/95"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <Scale className="w-6 h-6 text-gold" />
            <div>
              <span className="font-heading text-xl font-bold text-gold leading-none block">
                Pinzón &amp; Pinzón
              </span>
              <span className="text-white/60 text-xs tracking-widest uppercase">
                Asociados · Panamá
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-4 bg-gold text-chocolate-dark hover:bg-gold-light px-5 py-2.5 text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Consulta Gratuita
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-gold transition-colors"
            aria-label="Menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-gold py-3 px-2 text-base font-medium transition-colors duration-200 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="mt-3 bg-gold text-chocolate-dark text-center py-3 font-semibold text-base"
            >
              Consulta Gratuita
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

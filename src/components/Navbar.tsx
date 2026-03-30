"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-blur border-b border-white/[0.04]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[880px] mx-auto px-10 sm:px-14 md:px-16 flex items-center justify-between h-12">
        <Link
          href="/"
          className="text-xs font-semibold text-foreground/80 hover:text-foreground transition-colors"
        >
          Lakshya Singh
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-foreground/60 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-foreground/60 hover:text-foreground transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {menuOpen ? (
              <path
                d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M2 5.5H16" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                <path d="M2 9H16" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                <path d="M2 12.5H16" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden nav-blur border-t border-white/[0.04] px-10 sm:px-14 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

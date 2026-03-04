"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const scrollRangeRef = useRef<[number, number]>([0, 200]);
  const { scrollY } = useScroll();
  const logoOpacity = useMotionValue(0);
  const backdropBlur = useTransform(logoOpacity, [0, 1], ["blur(0px)", "blur(8px)"]);

  useLayoutEffect(() => {
    const heroTitle = document.querySelector<HTMLElement>("#hero h1");
    const heroContent = document.querySelector<HTMLElement>("#herocontent");
    if (heroTitle && heroContent) {
      const top = heroTitle.offsetTop;
      scrollRangeRef.current = [top, top + heroContent.offsetHeight];
    }
  }, []);

  useEffect(() => {
    return scrollY.on("change", (y) => {
      const [start, end] = scrollRangeRef.current;
      logoOpacity.set(Math.max(0, Math.min(1, (y - start) / (end - start))));
      setTitleVisible(y > start);
    });
  }, [scrollY, logoOpacity]);

  return (
    <motion.header
      ref={headerRef}
      role="banner"
      style={{ backdropFilter: backdropBlur }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(255,255,255,0.04)] bg-[hsla(0,0%,41%,0)]"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo — fades in as hero title scrolls out of view */}
        <motion.a
          href="#hero"
          style={{ opacity: logoOpacity }}
          className={`text-lg font-semibold tracking-wide text-[#fafafa]${titleVisible ? "" : " pointer-events-none"}`}
        >
          Irene Mercadal
        </motion.a>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="ml-auto hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-muted transition-colors hover:text-[#fafafa]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile nav — CSS-only details/summary */}
        <details ref={mobileMenuRef} className="group relative ml-auto md:hidden">
          <summary className="list-none cursor-pointer p-1" aria-label="Toggle navigation menu">
            {/* Hamburger icon */}
            <svg
              className="block h-6 w-6 text-[#fafafa] group-open:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Close icon */}
            <svg
              className="hidden h-6 w-6 text-[#fafafa] group-open:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </summary>

          {/* Dropdown */}
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,30,0.90)] py-2 backdrop-blur-md"
          >
            <ul>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => { if (mobileMenuRef.current) mobileMenuRef.current.open = false; }}
                    className="block px-5 py-3 text-sm text-muted transition-colors hover:text-[#fafafa]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </motion.header>
  );
}

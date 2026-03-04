"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = headerRef.current?.offsetHeight ?? 64;
      setTitleVisible(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 border-b border-[rgba(255,255,255,0.04)] bg-[hsla(0,0%,41%,0)] ${titleVisible ? "backdrop-blur-sm" : ""} transition-colors duration-500`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo — only visible after scrolling past the header */}
        <a
          href="#hero"
          className={`text-lg font-semibold tracking-wide text-[#fafafa] transition-opacity duration-1000 ${
            titleVisible ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          Irene Mercadal
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden md:block">
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
        <details className="group relative md:hidden">
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
    </header>
  );
}

import Image from "next/image";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Fixed background image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Darkening overlay — ensures #fafafa text meets WCAG AA contrast */}
      <div
        className="fixed inset-0 -z-10 bg-black/40"
        aria-hidden="true"
      />

      <Navbar />

      <main id="main-content" aria-label="Portfolio content">
        <Hero />
        <FadeIn><About /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Contact /></FadeIn>
      </main>

      <footer
        aria-label="Site footer"
        className="border-t border-[rgba(255,255,255,0.08)] py-8 text-center text-sm text-muted"
      >
        <p>© 2026 by Irene Mercadal.</p>
      </footer>
    </>
  );
}

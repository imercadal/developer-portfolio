export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="flex min-h-screen items-center justify-center pt-20"
    >
      <div id="herocontent" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          Full-Stack Developer
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-[#fafafa] md:text-7xl">
          Irene Mercadal
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[rgba(250,250,250,0.75)]">
          I build thoughtful, accessible web experiences — from interactive UIs
          to scalable back-end systems.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#projects"
            className="rounded-xl bg-[#fafafa] px-8 py-3 text-sm font-semibold text-[#111] transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-surface px-8 py-3 text-sm font-semibold text-[#fafafa] backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

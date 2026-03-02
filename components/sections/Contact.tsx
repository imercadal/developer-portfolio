export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(43,59,67,0.1)] p-8 backdrop-blur-sm md:p-12">
        <h2 className="mb-4 text-3xl font-bold text-[#fafafa]">
          Get in Touch
        </h2>

        <p className="mb-8 max-w-lg leading-relaxed text-[rgba(250,250,250,0.55)]">
          I&apos;m open to new opportunities, collaborations, and interesting
          projects. Feel free to reach out — I&apos;ll get back to you promptly.
        </p>

        <a
          href="mailto:irenemercadal@nyu.edu"
          className="inline-block rounded-xl bg-[#fafafa] px-8 py-3 text-sm font-semibold text-[#111] transition-opacity hover:opacity-90"
          aria-label="Send email to irenemercadal@nyu.edu"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}

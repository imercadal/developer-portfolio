'use client';

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

        <p className="mb-8 max-w-lg leading-relaxed text-muted">
          I&apos;m open to new opportunities, collaborations, and interesting
          projects. Feel free to reach out — I&apos;ll get back to you promptly.
        </p>

        <div className="flex flex-col items-center sm:flex-row sm:items-start">
          <a
            href="mailto:irenemercadal@duck.com"
            className="inline-flex items-center gap-2 rounded-xl bg-[#fafafa] px-8 py-3 text-sm font-semibold text-[#111] transition-opacity hover:opacity-90"
            aria-label="Send email to irenemercadal@duck.com"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Say Hello
          </a>
          <button
            onClick={() => navigator.clipboard.writeText("irenemercadal@duck.com")}
            className="mt-2 sm:mt-0 sm:ml-4 inline-block px-8 py-3 text-sm font-semibold italic text-[#fafafa] transition-opacity hover:opacity-90 hover:scale-105"
            aria-label="Copy email address to clipboard"
          >
            or copy email address
          </button>
        </div>
      </div>
    </section>
  );
}

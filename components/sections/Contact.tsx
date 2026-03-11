'use client';
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = { name: string; email: string; message: string };

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function onSubmit(data: FormData) {
    setStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="mx-auto max-w-6xl px-6 py-24 grid justify-center"
    >
      <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(43,59,67,0.1)] p-8 backdrop-blur-sm md:p-12">
        <h2 className="mb-4 text-3xl font-bold text-[#fafafa]">
          Get in Touch
        </h2>

        <p className="mb-8 max-w-lg leading-relaxed text-muted">
          I&apos;m open to new opportunities, collaborations, and interesting
          projects. Feel free to reach out — I&apos;ll get back to you promptly.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 max-w-lg"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-muted text-sm">Name</label>
            <input
              {...register('name', { required: true })}
              id="name"
              type="text"
              placeholder="Your name"
              className="bg-surface border border-[rgba(255,255,255,0.08)] text-[#fafafa] placeholder:text-muted rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-[rgba(255,255,255,0.3)]"
            />
            {errors.name && <p className="text-red-400 text-sm">Name is required.</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-muted text-sm">Email</label>
            <input
              id="email"
              {...register('email', { required: true })}
              type="email"
              placeholder="your@email.com"
              className="bg-surface border border-[rgba(255,255,255,0.08)] text-[#fafafa] placeholder:text-muted rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-[rgba(255,255,255,0.3)]"
            />
            {errors.email && <p className="text-red-400 text-sm">Email is required.</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-muted text-sm">Message</label>
            <textarea
              id="message"
              {...register('message', { required: true })}
              rows={5}
              placeholder="Your message..."
              className="bg-surface border border-[rgba(255,255,255,0.08)] text-[#fafafa] placeholder:text-muted rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-[rgba(255,255,255,0.3)] resize-none"
            />
            {errors.message && <p className="text-red-400 text-sm">Message is required.</p>}
          </div>

          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-xl bg-[#fafafa] px-8 py-3 text-sm font-semibold text-[#111] transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText("irenemercadal@duck.com")}
              className="inline-block px-4 py-3 text-sm font-semibold italic text-[#fafafa] transition-opacity hover:opacity-90 hover:scale-105"
              aria-label="Copy email address to clipboard"
            >
              or copy email address
            </button>
          </div>

          {status === 'success' && (
            <p className="text-green-400 text-sm">Message sent! I&apos;ll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm">Something went wrong. Try copying my email instead.</p>
          )}
        </form>
      </div>
    </section>
  );
}

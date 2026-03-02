const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Docker",
  "Tailwind CSS",
  "REST APIs",
  "Sanity CMS",
  "Git",
  "AWS",
  "Axios",
  "Vercel",
  "Material UI",
  "Framer Motion",

];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(43,59,67,0.1)] backdrop-blur-sm p-8 md:p-12">
        <h2 className="mb-6 text-3xl font-bold text-[#fafafa]">About Me</h2>

        <p className="mb-8 max-w-2xl leading-relaxed text-[rgba(250,250,250,0.55)]">
          I&apos;m a developer who loves turning complex problems into clean,
          user-friendly solutions. With a background in both front-end and
          back-end development, I enjoy owning features end-to-end and
          collaborating with teams to ship products people actually want to use.
        </p>

        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[rgba(250,250,250,0.55)]">
          Technologies
        </h3>

        <ul aria-label="Technical skills" className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-[rgba(255,255,255,0.08)] px-4 py-1.5 text-sm text-[#fafafa]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

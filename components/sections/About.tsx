"use client";
import { motion } from "framer-motion";

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

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <motion.div
        className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(43,59,67,0.1)] backdrop-blur-sm p-8 md:p-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        <motion.h2
          variants={fadeUp}
          className="mb-6 text-3xl font-bold text-[#fafafa]"
        >
          About Me
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-2 max-w-2xl leading-relaxed text-muted">
          I&apos;m a junior full-stack developer who loves turning complex problems into clean,
          user-friendly solutions. After working as a freelance on various projects for the past two years, I&apos;m looking to transition into a full-time role. I enjoy owning features end-to-end and
          collaborating with teams to ship products people actually want to use.
        </motion.p>
        <motion.p variants={fadeUp} className="mb-8 max-w-2xl leading-relaxed text-muted">
          Currently based in Brooklyn, NY. Open to opportunities in Chile (Central or South), New York, and remote.
        </motion.p>

        <motion.h3
          variants={fadeUp}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted"
        >
          Technologies
        </motion.h3>

        <motion.ul
          aria-label="Technical skills"
          className="flex flex-wrap gap-2"
          variants={containerVariants}
        >
          {skills.map((skill) => (
            <motion.li
              key={skill}
              variants={itemVariants}
              className="rounded-full border border-[rgba(255,255,255,0.08)] px-4 py-1.5 text-sm text-[#fafafa]"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div variants={fadeUp} className="mt-8">
          <a
            href="/260405_Irene CV_2.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] px-5 py-2.5 text-sm font-medium text-[#fafafa] transition-colors hover:bg-[rgba(255,255,255,0.08)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

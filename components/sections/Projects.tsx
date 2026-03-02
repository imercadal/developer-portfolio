import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 className="mb-12 text-3xl font-bold text-[#fafafa]">Projects</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

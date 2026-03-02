import type { Project } from "@/data/projects";

function toVimeoEmbedUrl(url: string): string {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match ? `https://player.vimeo.com/video/${match[1]}?autoplay=1&loop=1&muted=1` : url;
}

export default function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  repoUrl,
  vimeoUrl,
  videoSrc,
  imageSrc,
}: Project) {
  return (
    <article
      aria-label={title}
      className="flex flex-col gap-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(43,59,67,0.1)] p-6 backdrop-blur-sm"
    >
      {vimeoUrl && (
        <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={toVimeoEmbedUrl(vimeoUrl)}
            title={`Demo video for ${title}`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      )}

      {!vimeoUrl && videoSrc && (
        <video
          controls
          autoPlay
          preload="metadata"
          aria-label={`Demo video for ${title}`}
          className="w-full rounded-lg"
        >
          <source src={encodeURI(videoSrc)} />
          Your browser does not support the video tag.
        </video>
      )}

      {!vimeoUrl && !videoSrc && imageSrc && (
        <img
          src={imageSrc}
          alt={`Screenshot of ${title}`}
          className="w-full rounded-lg object-cover"
        />
      )}

      <h3 className="text-xl font-semibold text-[#fafafa]">{title}</h3>

      <p className="text-sm leading-relaxed text-[rgba(250,250,250,0.55)]">
        {description}
      </p>

      <ul aria-label="Technologies used" className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-1 text-xs text-[rgba(250,250,250,0.55)]"
          >
            {tag}
          </li>
        ))}
      </ul>

      {(liveUrl || repoUrl) && (
        <div className="mt-auto flex gap-3 pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${title}`}
              className="rounded-lg border border-[rgba(255,255,255,0.08)] px-4 py-2 text-sm text-[#fafafa] transition-colors hover:bg-white/10"
            >
              Go to site
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Source code for ${title}`}
              className="rounded-lg border border-[rgba(255,255,255,0.08)] px-4 py-2 text-sm text-[#fafafa] transition-colors hover:bg-white/10"
            >
              Source Code
            </a>
          )}
        </div>
      )}
    </article>
  );
}

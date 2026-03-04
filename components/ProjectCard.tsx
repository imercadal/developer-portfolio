"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";
import MediaModal from "@/components/MediaModal";

function toVimeoCardUrl(url: string): string {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match
    ? `https://player.vimeo.com/video/${match[1]}?background=1&autoplay=1&loop=1&muted=1&controls=0`
    : url;
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
  const [isOpen, setIsOpen] = useState(false);
  const hasMedia = Boolean(vimeoUrl || videoSrc || imageSrc);

  return (
    <>
      <article
        aria-label={title}
        className="flex flex-col gap-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(43,59,67,0.1)] p-6 backdrop-blur-sm"
      >
        {hasMedia && (
          <button
            type="button"
            aria-label={`View ${title} media full size`}
            onClick={() => setIsOpen(true)}
            className="group relative w-full cursor-pointer rounded-lg"
          >
            {/* Hover hint overlay */}
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-black/30">
              <span className="text-white text-sm font-medium">Click to expand</span>
            </div>

            {/* Vimeo: ambient/silent loop, no controls */}
            {vimeoUrl && (
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src={toVimeoCardUrl(vimeoUrl)}
                  title={`Demo video for ${title}`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  tabIndex={-1}
                />
              </div>
            )}

            {/* Local video: muted loop, no controls */}
            {!vimeoUrl && videoSrc && (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`Demo video for ${title}`}
                className="pointer-events-none w-full rounded-lg"
                tabIndex={-1}
              >
                <source src={encodeURI(videoSrc)} />
              </video>
            )}

            {/* Image */}
            {!vimeoUrl && !videoSrc && imageSrc && (
              <Image
                src={imageSrc}
                alt={`Screenshot of ${title}`}
                width={800}
                height={450}
                className="pointer-events-none w-full rounded-lg object-cover"
              />
            )}
          </button>
        )}

        <h3 className="text-xl font-semibold text-[#fafafa]">{title}</h3>

        <p className="text-sm leading-relaxed text-muted">
          {description}
        </p>

        <ul aria-label="Technologies used" className="flex justify-center flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        {(liveUrl || repoUrl) && (
          <div className="mt-auto flex justify-around gap-3 pt-2">
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

      <MediaModal
        title={title}
        vimeoUrl={vimeoUrl}
        videoSrc={videoSrc}
        imageSrc={imageSrc}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

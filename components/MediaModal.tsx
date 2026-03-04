"use client";

import Image from "next/image";
import { useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MediaModalProps {
  title: string;
  vimeoUrl?: string;
  videoSrc?: string;
  imageSrc?: string;
  isOpen: boolean;
  onClose: () => void;
}

function toVimeoModalUrl(url: string): string {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match ? `https://player.vimeo.com/video/${match[1]}?autoplay=1` : url;
}

export default function MediaModal({
  title,
  vimeoUrl,
  videoSrc,
  imageSrc,
  isOpen,
  onClose,
}: MediaModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock + focus on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // ESC key handler
  useEffect(() => {
    if (!isOpen) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-[4px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
            aria-hidden="true"
          />

          {/* Dialog panel */}
          <motion.div
            role="dialog"
            aria-label={`${title} — expanded media`}
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 z-[10000] w-[90vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(136,219,255,0.1)] p-0 text-[#fafafa]"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] px-6 py-4">
              <h3 className="text-lg font-semibold text-[#fafafa]">{title}</h3>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close media viewer"
                onClick={onClose}
                className="rounded-lg p-2 text-muted transition-colors hover:bg-white/10 hover:text-[#fafafa]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Modal media */}
            <div className="p-6">
              {vimeoUrl && (
                <div
                  className="relative w-full overflow-hidden rounded-lg"
                  style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    src={isOpen ? toVimeoModalUrl(vimeoUrl) : undefined}
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
                </video>
              )}
              {!vimeoUrl && !videoSrc && imageSrc && (
                <Image
                  src={imageSrc}
                  alt={`Screenshot of ${title}`}
                  width={1200}
                  height={675}
                  className="w-full rounded-lg object-contain"
                />
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

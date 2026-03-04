"use client";

import Image from "next/image";
import { useRef, useEffect, useCallback } from "react";

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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Sync isOpen → showModal()/close() + body scroll lock + focus
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Sync native ESC close event back to React state
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handle = () => {
      onClose();
      document.body.style.overflow = "";
    };
    dialog.addEventListener("close", handle);
    return () => dialog.removeEventListener("close", handle);
  }, [onClose]);

  // Close when click lands on backdrop (outside dialog content)
  const handleDialogClick = useCallback(
    (e: React.MouseEvent<HTMLDialogElement>) => {
      const rect = dialogRef.current?.getBoundingClientRect();
      if (!rect) return;
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <dialog
      ref={dialogRef}
      aria-label={`${title} — expanded media`}
      aria-modal="true"
      onClick={handleDialogClick}
      className="w-[90vw] max-w-5xl rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(136,219,255,0.1)] p-0 text-[#fafafa]"
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
    </dialog>
  );
}

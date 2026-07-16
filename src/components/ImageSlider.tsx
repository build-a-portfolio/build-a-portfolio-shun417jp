import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, type KeyboardEvent } from "react";

type Props = {
  images: string[];
  alt: string;
  aspectRatioClassName?: string;
};

export function ImageSlider({
  images,
  alt,
  aspectRatioClassName = "aspect-video",
}: Props) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  if (!images || images.length === 0) {
    return (
      <div
        className={`w-full bg-[var(--bg-section)] flex items-center justify-center ${aspectRatioClassName}`}
      >
        <span className="text-xs text-[var(--text-secondary)] font-mono">
          No Image
        </span>
      </div>
    );
  }

  const hasMultiple = images.length > 1;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!hasMultiple) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${aspectRatioClassName} group/slider rounded-t-2xl focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2`}
      tabIndex={hasMultiple ? 0 : -1}
      onKeyDown={handleKeyDown}
      aria-label={`${alt}の画像スライダー。キーボードの左右キーで操作可能です`}
    >
      {/* Images container */}
      <div
        className="absolute inset-0 flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={src} className="h-full w-full shrink-0">
            <img
              src={src}
              alt={`${alt} - 画像 ${i + 1}`}
              className="h-full w-full object-cover select-none"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur-xs opacity-0 group-hover/slider:opacity-100 focus-visible:opacity-100 transition hover:bg-black/60 focus:outline-none"
            aria-label="前の画像を表示"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur-xs opacity-0 group-hover/slider:opacity-100 focus-visible:opacity-100 transition hover:bg-black/60 focus:outline-none"
            aria-label="次の画像を表示"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/35 px-2 py-1 backdrop-blur-xs">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "bg-[var(--accent)] w-3"
                    : "bg-white/40 hover:bg-white/80 w-1.5"
                }`}
                aria-label={`画像 ${i + 1} に切り替え`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

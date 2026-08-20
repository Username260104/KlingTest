"use client";

import { useEffect, useState } from "react";
import { repeatForStrip, useInfiniteStrip } from "./useInfiniteStrip";

type Slide = { src: string; alt: string };

const slides: Slide[] = [
  { src: "/gallery/hero-road-pov-v5.jpg", alt: "해안 도로를 달리는 차량 시점 영상 스틸" },
  { src: "/gallery/hero-forest-photo-v3.jpg", alt: "안개 낀 숲을 담은 영상 스틸" },
  { src: "/gallery/kling-opening-party.jpg", alt: "Kling AI 오프닝 파티 현장" },
  { src: "/gallery/hero-coast-person-v4.jpg", alt: "해안 절벽에 선 인물을 담은 영상 스틸" },
  { src: "/gallery/hero-mountain-photo-v2.jpg", alt: "설산 능선을 담은 영상 스틸" },
];

const loop = repeatForStrip(slides);

export function GalleryCarousel() {
  const [zoomed, setZoomed] = useState<Slide | null>(null);
  const scrollerRef = useInfiniteStrip<HTMLUListElement>({
    setSize: slides.length,
    anchorIndex: Math.floor(slides.length / 2),
  });

  // 열려 있는 동안 Esc로 닫고, 뒤쪽 페이지는 스크롤되지 않게 한다.
  useEffect(() => {
    if (!zoomed) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomed(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [zoomed]);

  return (
    <div className="strip-frame">
      <ul className="gallery-strip" ref={scrollerRef} aria-label="현장 및 제작 이미지">
        {loop.map(({ item, copy, index }) => (
          <li
            key={`${copy}-${index}`}
            // 첫 묶음만 읽히게 하고 나머지 반복분은 보조기기에서 숨긴다.
            aria-hidden={copy === 0 ? undefined : "true"}
          >
            <button
              type="button"
              className="gallery-shot"
              onClick={() => setZoomed(item)}
              tabIndex={copy === 0 ? undefined : -1}
              aria-label={copy === 0 ? `${item.alt} 크게 보기` : undefined}
            >
              <img
                src={item.src}
                alt={copy === 0 ? item.alt : ""}
                draggable={false}
                loading="lazy"
              />
            </button>
          </li>
        ))}
      </ul>
      <span className="strip-hint strip-hint-left" aria-hidden="true" />
      <span className="strip-hint strip-hint-right" aria-hidden="true" />

      {zoomed ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={zoomed.alt}
          onClick={() => setZoomed(null)}
        >
          <img
            src={zoomed.src}
            alt={zoomed.alt}
            onClick={(event) => event.stopPropagation()}
            draggable={false}
          />
        </div>
      ) : null}
    </div>
  );
}

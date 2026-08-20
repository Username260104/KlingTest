"use client";

import { useEffect, useRef } from "react";

// TODO: kling-opening-party.jpg 는 교체용 플레이스홀더입니다. 실제 현장 사진으로 덮어써야 합니다.
const slides = [
  { src: "/gallery/hero-road-pov-v5.jpg", alt: "해안 도로를 달리는 차량 시점 영상 스틸" },
  { src: "/gallery/hero-forest-photo-v3.jpg", alt: "안개 낀 숲을 담은 영상 스틸" },
  { src: "/gallery/kling-opening-party.jpg", alt: "Kling AI 오프닝 파티 현장" },
  { src: "/gallery/hero-coast-person-v4.jpg", alt: "해안 절벽에 선 인물을 담은 영상 스틸" },
  { src: "/gallery/hero-mountain-photo-v2.jpg", alt: "설산 능선을 담은 영상 스틸" },
];

const anchorIndex = Math.floor(slides.length / 2);

export function GalleryCarousel() {
  const scrollerRef = useRef<HTMLUListElement>(null);

  // 가운데 이미지를 처음 화면 중앙에 맞춰 둔다.
  // 사용자가 한 번이라도 스크롤한 뒤에는 위치를 건드리지 않는다.
  useEffect(() => {
    const scroller = scrollerRef.current;
    const anchor = scroller?.children[anchorIndex] as HTMLElement | undefined;
    if (!scroller || !anchor) return;

    let touched = false;
    const markTouched = () => {
      touched = true;
    };

    const center = () => {
      if (touched) return;
      scroller.scrollLeft =
        anchor.offsetLeft - (scroller.clientWidth - anchor.clientWidth) / 2;
    };

    center();
    // 이미지 로딩이나 리사이즈로 폭이 바뀌면 다시 맞춘다.
    const observer = new ResizeObserver(center);
    observer.observe(scroller);
    scroller.addEventListener("pointerdown", markTouched);
    scroller.addEventListener("wheel", markTouched, { passive: true });
    scroller.addEventListener("touchstart", markTouched, { passive: true });

    return () => {
      observer.disconnect();
      scroller.removeEventListener("pointerdown", markTouched);
      scroller.removeEventListener("wheel", markTouched);
      scroller.removeEventListener("touchstart", markTouched);
    };
  }, []);

  // 마우스 사용자를 위한 드래그 스크롤 (터치·트랙패드는 네이티브 스크롤 사용).
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let pointerId: number | null = null;
    let startX = 0;
    let startScroll = 0;
    let dragged = false;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startScroll = scroller.scrollLeft;
      dragged = false;
      scroller.setPointerCapture(pointerId);
      scroller.dataset.dragging = "true";
    };

    const onPointerMove = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 3) dragged = true;
      scroller.scrollLeft = startScroll - delta;
    };

    const endDrag = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return;
      scroller.releasePointerCapture(pointerId);
      pointerId = null;
      delete scroller.dataset.dragging;
    };

    const onClick = (event: MouseEvent) => {
      if (dragged) event.preventDefault();
    };

    scroller.addEventListener("pointerdown", onPointerDown);
    scroller.addEventListener("pointermove", onPointerMove);
    scroller.addEventListener("pointerup", endDrag);
    scroller.addEventListener("pointercancel", endDrag);
    scroller.addEventListener("click", onClick, true);

    return () => {
      scroller.removeEventListener("pointerdown", onPointerDown);
      scroller.removeEventListener("pointermove", onPointerMove);
      scroller.removeEventListener("pointerup", endDrag);
      scroller.removeEventListener("pointercancel", endDrag);
      scroller.removeEventListener("click", onClick, true);
    };
  }, []);

  return (
    <ul className="gallery-strip" ref={scrollerRef} aria-label="현장 및 제작 이미지">
      {slides.map((slide) => (
        <li key={slide.src}>
          <img src={slide.src} alt={slide.alt} draggable={false} loading="lazy" />
        </li>
      ))}
    </ul>
  );
}

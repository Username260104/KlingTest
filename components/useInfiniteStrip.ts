"use client";

import { useEffect, useRef } from "react";

export const STRIP_COPIES = 4;

/** 같은 묶음을 여러 벌 이어 붙인 배열을 만든다. */
export function repeatForStrip<T>(items: T[]) {
  return Array.from({ length: STRIP_COPIES }, (_, copy) =>
    items.map((item, index) => ({ item, copy, index })),
  ).flat();
}

type Options = {
  /** 한 묶음의 아이템 수 */
  setSize: number;
  /** 처음 화면 중앙에 둘 아이템 (묶음 내 인덱스) */
  anchorIndex: number;
  /** 화면 중앙에 가장 가까운 아이템이 바뀔 때 호출 (반복분을 포함한 전체 인덱스) */
  onCenterChange?: (index: number) => void;
};

/**
 * 가로 스크롤 스트립을 무한 루프처럼 동작시킨다.
 * 스크롤 위치가 한 묶음 폭을 벗어나면 그만큼 되감아, 어느 방향으로도 끝에 닿지 않는다.
 */
export function useInfiniteStrip<T extends HTMLElement>({
  setSize,
  anchorIndex,
  onCenterChange,
}: Options) {
  const ref = useRef<T>(null);
  const centerCallback = useRef(onCenterChange);

  useEffect(() => {
    centerCallback.current = onCenterChange;
  }, [onCenterChange]);

  useEffect(() => {
    const scroller = ref.current;
    if (!scroller) return;

    const items = scroller.children;
    const first = items[0] as HTMLElement | undefined;
    if (!first || items.length < setSize * 2) return;

    let setWidth = (items[setSize] as HTMLElement).offsetLeft - first.offsetLeft;
    let settled = false;
    let lastCenter = -1;

    const recenter = () => {
      if (settled) return;
      const anchor = items[setSize + anchorIndex] as HTMLElement | undefined;
      if (!anchor || anchor.clientWidth === 0) return;
      setWidth = (items[setSize] as HTMLElement).offsetLeft - first.offsetLeft;
      scroller.scrollLeft =
        anchor.offsetLeft - (scroller.clientWidth - anchor.clientWidth) / 2;
      reportCenter();
    };

    // 드래그 상태 (마우스 사용자용)
    let pointerId: number | null = null;
    let startX = 0;
    let startScroll = 0;
    let dragged = false;

    const wrap = () => {
      if (setWidth <= 0) return;
      let shift = 0;
      // 빠르게 튕겼을 때 여러 묶음을 건너뛸 수 있으므로 범위에 들어올 때까지 되감는다.
      while (scroller.scrollLeft + shift < setWidth) shift += setWidth;
      while (scroller.scrollLeft + shift >= setWidth * 2) shift -= setWidth;
      if (shift === 0) return;
      scroller.scrollLeft += shift;
      if (pointerId !== null) startScroll += shift;
    };

    const reportCenter = () => {
      if (!centerCallback.current) return;
      const middle = scroller.scrollLeft + scroller.clientWidth / 2;
      let bestIndex = 0;
      let bestDistance = Infinity;
      for (let i = 0; i < items.length; i += 1) {
        const item = items[i] as HTMLElement;
        const distance = Math.abs(item.offsetLeft + item.clientWidth / 2 - middle);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      }
      // 화면에 실제로 가운데 있는 그 카드만 활성화되도록 전체 인덱스를 넘긴다.
      if (bestIndex !== lastCenter) {
        lastCenter = bestIndex;
        centerCallback.current(bestIndex);
      }
    };

    let frame = 0;
    const onScroll = () => {
      settled = true;
      wrap();
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        reportCenter();
      });
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      settled = true;
      pointerId = event.pointerId;
      startX = event.clientX;
      startScroll = scroller.scrollLeft;
      dragged = false;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) <= 3) return;

      // 실제로 끌기 시작한 뒤에야 포인터를 캡처한다.
      // 누르자마자 캡처하면 click 이벤트가 스크롤러로 리타깃되어
      // 안쪽 버튼(이미지 확대 등)의 클릭이 사라진다.
      if (!dragged) {
        dragged = true;
        scroller.setPointerCapture(pointerId);
        scroller.dataset.dragging = "true";
      }

      scroller.scrollLeft = startScroll - delta;
      wrap();
      reportCenter();
    };

    const endDrag = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return;
      if (scroller.hasPointerCapture(pointerId)) {
        scroller.releasePointerCapture(pointerId);
      }
      pointerId = null;
      delete scroller.dataset.dragging;
    };

    const onClick = (event: MouseEvent) => {
      // 드래그로 끝난 동작이면 안쪽 클릭 핸들러까지 막는다.
      if (!dragged) return;
      event.preventDefault();
      event.stopPropagation();
    };

    recenter();
    const observer = new ResizeObserver(recenter);
    observer.observe(scroller);

    scroller.addEventListener("scroll", onScroll, { passive: true });
    scroller.addEventListener("pointerdown", onPointerDown);
    scroller.addEventListener("pointermove", onPointerMove);
    scroller.addEventListener("pointerup", endDrag);
    scroller.addEventListener("pointercancel", endDrag);
    scroller.addEventListener("click", onClick, true);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      scroller.removeEventListener("scroll", onScroll);
      scroller.removeEventListener("pointerdown", onPointerDown);
      scroller.removeEventListener("pointermove", onPointerMove);
      scroller.removeEventListener("pointerup", endDrag);
      scroller.removeEventListener("pointercancel", endDrag);
      scroller.removeEventListener("click", onClick, true);
    };
  }, [setSize, anchorIndex]);

  return ref;
}

"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

// TODO: 실제 고객사·협력사로 교체할 것. 아래 5곳은 레이아웃 확인용 예시이며 실존하는 기업이 아닙니다.
// 대외 공개 전 반드시 실제 거래처와 로고 사용 허락을 받은 목록으로 대체해야 합니다.
const partners = [
  {
    company: "노르드컴퍼니",
    logo: "/logos/nord.svg",
    industry: "브랜드 마케팅",
    usage: "월 정기 공급",
  },
  {
    company: "스택레인",
    logo: "/logos/stacklane.svg",
    industry: "SaaS",
    usage: "API 연동",
  },
  {
    company: "필름앤코",
    logo: "/logos/filmco.svg",
    industry: "영상 제작",
    usage: "프로젝트 단위 공급",
  },
  {
    company: "오브릿지",
    logo: "/logos/obridge.svg",
    industry: "커머스 플랫폼",
    usage: "API 연동",
  },
  {
    company: "리버사이드미디어",
    logo: "/logos/riverside.svg",
    industry: "콘텐츠 스튜디오",
    usage: "대량 사용 계약",
  },
];

export function PartnerCarousel() {
  const [active, setActive] = useState(0);
  const [shift, setShift] = useState(0);
  const regionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const last = partners.length - 1;

  const go = useCallback(
    (next: number) => {
      setActive(Math.min(Math.max(next, 0), last));
    },
    [last],
  );

  // 활성 카드의 왼쪽 모서리를 셸 왼쪽 선에 맞추되, 마지막 카드가 오른쪽 끝에 닿으면 더 밀지 않는다.
  useLayoutEffect(() => {
    const track = trackRef.current;
    const viewport = track?.parentElement;
    if (!track || !viewport) return;

    const update = () => {
      const card = track.children[active] as HTMLElement | undefined;
      if (!card) return;
      const maxShift = Math.max(track.scrollWidth - viewport.clientWidth, 0);
      setShift(Math.min(card.offsetLeft, maxShift));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [active]);

  useEffect(() => {
    const region = regionRef.current;
    if (!region) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActive((current) => Math.max(current - 1, 0));
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActive((current) => Math.min(current + 1, last));
      }
    };

    region.addEventListener("keydown", onKeyDown);
    return () => region.removeEventListener("keydown", onKeyDown);
  }, [last]);

  return (
    <div
      className="partner-carousel"
      ref={regionRef}
      role="group"
      aria-roledescription="캐러셀"
      aria-label="고객사 및 협력사"
      tabIndex={0}
    >
      <div className="partner-viewport">
        <ul
          className="partner-track"
          ref={trackRef}
          style={{ "--shift": `${shift}px` } as React.CSSProperties}
        >
          {partners.map((item, index) => (
            <li
              key={item.company}
              className="partner-card"
              data-active={index === active ? "true" : undefined}
            >
              {/* 실제 고객사 로고로 교체할 자리 */}
              <img
                className="partner-logo"
                src={item.logo}
                alt={`${item.company} 로고`}
                width={132}
                height={28}
              />
              <p className="partner-name">{item.company}</p>
              <p className="partner-meta">
                <span>{item.industry}</span>
                <span aria-hidden="true">·</span>
                <span>{item.usage}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="partner-controls">
        <button
          type="button"
          className="partner-arrow"
          onClick={() => go(active - 1)}
          disabled={active === 0}
          aria-label="이전 고객사 보기"
        >
          <span aria-hidden="true">←</span>
        </button>
        <div className="partner-dots">
          {partners.map((item, index) => (
            <button
              key={item.company}
              type="button"
              onClick={() => go(index)}
              data-active={index === active ? "true" : undefined}
              aria-label={`${item.company} 보기`}
              aria-current={index === active ? "true" : undefined}
            />
          ))}
        </div>
        <button
          type="button"
          className="partner-arrow"
          onClick={() => go(active + 1)}
          disabled={active === last}
          aria-label="다음 고객사 보기"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

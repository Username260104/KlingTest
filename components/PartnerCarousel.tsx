"use client";

import { useState } from "react";
import { repeatForStrip, useInfiniteStrip } from "./useInfiniteStrip";

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

const anchorIndex = Math.floor(partners.length / 2);
const loop = repeatForStrip(partners);

export function PartnerCarousel() {
  // 두 번째 묶음의 가운데 카드가 시작 위치다.
  const [centered, setCentered] = useState(partners.length + anchorIndex);
  const scrollerRef = useInfiniteStrip<HTMLUListElement>({
    setSize: partners.length,
    anchorIndex,
    onCenterChange: setCentered,
  });

  return (
    <div className="strip-frame">
      <ul className="partner-strip" ref={scrollerRef} aria-label="고객사 및 협력사">
        {loop.map(({ item, copy, index }, domIndex) => (
          <li
            key={`${copy}-${index}`}
            className="partner-card"
            data-active={domIndex === centered ? "true" : undefined}
            aria-hidden={copy === 0 ? undefined : "true"}
          >
            <img
              className="partner-logo"
              src={item.logo}
              alt={copy === 0 ? `${item.company} 로고` : ""}
              width={132}
              height={28}
              draggable={false}
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
      <span className="strip-hint strip-hint-left" aria-hidden="true" />
      <span className="strip-hint strip-hint-right" aria-hidden="true" />
    </div>
  );
}

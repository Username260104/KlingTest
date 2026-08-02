import type { Metadata } from "next";
import Link from "next/link";
import {
  ContentNeeded,
  PageIntro,
  SectionHeading,
} from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "지원 모델",
  description: "Kling과 Seedance 모델 비교 화면 프로토타입",
};

const comparison = [
  ["핵심 메시지", "광고·제품 영상의 모션 연출", "콘텐츠 제작·자동화 활용"],
  ["추천 활용", "제품 컷, 브랜드 필름, 프리비주얼", "숏폼, 콘텐츠 제작, 대량 생성"],
  ["입력 방식", "[지원 입력 방식 확인]", "[지원 입력 방식 확인]"],
  ["영상 길이", "[공급 가능 범위 확인]", "[공급 가능 범위 확인]"],
  ["해상도", "[공급 가능 범위 확인]", "[공급 가능 범위 확인]"],
  ["API 기능", "[제공 API 확인]", "[제공 API 확인]"],
  ["과금 단위", "[크레딧 기준 확인]", "[크레딧 기준 확인]"],
  ["기술지원", "[지원 범위 확인]", "[지원 범위 확인]"],
];

const selections = [
  {
    index: "A",
    title: "제품 이미지를 움직이고 싶을 때",
    body: "이미지 기반 제품·브랜드 영상이 중심이라면 Kling의 공급 사양을 먼저 비교합니다.",
  },
  {
    index: "B",
    title: "다양한 숏폼을 반복 제작할 때",
    body: "콘텐츠 제작과 자동화가 목적이라면 Seedance의 API 범위와 과금 방식을 확인합니다.",
  },
  {
    index: "C",
    title: "아직 모델이 정해지지 않았을 때",
    body: "월 생성량, 평균 길이, 사용 목적을 기준으로 두 모델을 함께 비교 상담합니다.",
  },
];

export default function ModelsPage() {
  return (
    <>
      <PageIntro
        index="01 / MODELS"
        eyebrow="KLING + SEEDANCE"
        title="모델 선택에 필요한 정보만 나란히."
        description="이 페이지는 두 모델의 우열을 정하는 곳이 아니라, 고객이 자신의 제작 목적에 맞는 모델을 빠르게 찾도록 돕는 비교 화면입니다."
      />

      <section className="subpage-section page-shell">
        <SectionHeading
          eyebrow="MODEL COMPARISON"
          title="같은 기준으로 비교하는 모델 정보"
          description="대괄호 항목은 실제 공급 계약과 API 사양이 확인되면 채워질 자리입니다."
        />
        <div className="compare-grid" role="table" aria-label="Kling과 Seedance 비교">
          <div className="compare-cell label" role="columnheader">COMPARE</div>
          <div className="compare-cell head" role="columnheader">
            <span>MODEL 01</span>
            <strong>Kling</strong>
          </div>
          <div className="compare-cell head accent-head" role="columnheader">
            <span>MODEL 02</span>
            <strong>Seedance</strong>
          </div>
          {comparison.map(([label, kling, seedance]) => (
            <div key={label} style={{ display: "contents" }}>
              <div className="compare-cell label" role="rowheader">{label}</div>
              <div className="compare-cell" role="cell">
                {kling.startsWith("[") ? <span className="placeholder-value">{kling}</span> : kling}
              </div>
              <div className="compare-cell" role="cell">
                {seedance.startsWith("[") ? <span className="placeholder-value">{seedance}</span> : seedance}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="subpage-section section-tint">
        <div className="page-shell">
          <SectionHeading
            eyebrow="QUICK GUIDE"
            title="어떤 상황에 어떤 모델을 먼저 볼까?"
          />
          <div className="selection-grid">
            {selections.map((item) => (
              <article className="selection-card" key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="button-row">
            <Link href="/contact?model=both" className="button button-primary">
              문의하기 ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="subpage-section page-shell">
        <ContentNeeded
          title="모델 페이지에 채워야 할 실제 자료"
          items={[
            "모델별 공식 소개 문구와 사용 가능한 로고",
            "제공 가능한 입력 방식·길이·해상도·API 기능",
            "모델별 크레딧 또는 과금 산정 기준",
            "상업적 이용과 생성 결과물 관련 안내",
            "실제 제작 사례와 영상 샘플 각 2개 이상",
          ]}
        />
      </section>
    </>
  );
}

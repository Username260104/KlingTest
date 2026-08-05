import type { Metadata } from "next";
import Link from "next/link";
import {
  ContentNeeded,
  PageIntro,
  SectionHeading,
} from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "Kling 크레딧 안내",
  description: "기업 고객의 Kling 크레딧 필요 수량 상담에 필요한 정보 안내",
};

const comparison = [
  ["사용 목적", "광고·제품·숏폼 등", "주요 제작 유형"],
  ["예상 생성량", "프로젝트 또는 월간 예상 건수", "대략적인 범위도 가능"],
  ["평균 영상 조건", "길이·해상도·주요 옵션", "확인 가능한 항목만 전달"],
  ["현재 이용 현황", "Kling 사용 여부와 보유 크레딧", "처음 이용하는 경우 미정"],
  ["구매 희망 시기", "즉시·단기·장기 검토", "예상 일정"],
  ["필요 크레딧", "예상 수량 또는 미정", "상담 과정에서 구체화"],
];

const selections = [
  {
    index: "A",
    title: "초기 테스트를 준비할 때",
    body: "테스트할 콘텐츠 유형과 예상 생성 횟수를 기준으로 필요한 크레딧 규모를 확인합니다.",
  },
  {
    index: "B",
    title: "프로젝트 사용량을 준비할 때",
    body: "제작 일정과 예상 영상 수, 평균 생성 조건을 정리하면 공급가 안내가 빨라집니다.",
  },
  {
    index: "C",
    title: "필요 수량이 아직 정해지지 않았을 때",
    body: "사용 목적과 대략적인 생성량만 알려주셔도 문의를 시작할 수 있습니다.",
  },
];

export default function ModelsPage() {
  return (
    <>
      <PageIntro
        index="03 / CREDIT GUIDE"
        eyebrow="KLING CREDIT GUIDE"
        title="필요한 크레딧 규모를 확인하는 기준."
        description="정확한 수량을 미리 알지 못해도 괜찮습니다. 사용 목적과 예상 생성량을 바탕으로 문의에 필요한 정보를 정리할 수 있습니다."
      />

      <section className="subpage-section page-shell">
        <SectionHeading
          eyebrow="INQUIRY CHECKLIST"
          title="크레딧 공급 문의에 필요한 정보"
          description="확인 가능한 항목만 준비하면 예상 필요 수량과 기업 공급가 상담을 시작할 수 있습니다."
        />
        <div className="compare-grid" role="table" aria-label="Kling 크레딧 공급 문의 정보">
          <div className="compare-cell label" role="columnheader">CHECK</div>
          <div className="compare-cell head" role="columnheader">
            <span>WHAT TO CHECK</span>
            <strong>확인 항목</strong>
          </div>
          <div className="compare-cell head accent-head" role="columnheader">
            <span>WHAT TO SHARE</span>
            <strong>문의 정보</strong>
          </div>
          {comparison.map(([label, check, share]) => (
            <div key={label} style={{ display: "contents" }}>
              <div className="compare-cell label" role="rowheader">{label}</div>
              <div className="compare-cell" role="cell">{check}</div>
              <div className="compare-cell" role="cell">{share}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="subpage-section section-tint">
        <div className="page-shell">
          <SectionHeading
            eyebrow="QUICK GUIDE"
            title="사용 상황별로 무엇을 준비하면 될까요?"
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
            <Link href="/contact" className="button button-primary">
              크레딧 공급 문의 ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="subpage-section page-shell">
        <ContentNeeded
          title="문의 전에 확인하면 좋은 정보"
          items={[
            "Kling 크레딧의 주요 사용 목적",
            "프로젝트 또는 월간 예상 생성량",
            "평균 영상 길이와 해상도",
            "현재 보유 크레딧과 추가 필요 수량",
            "구매를 희망하는 시기",
          ]}
        />
      </section>
    </>
  );
}

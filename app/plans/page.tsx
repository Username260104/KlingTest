import type { Metadata } from "next";
import Link from "next/link";
import {
  ContentNeeded,
  PageIntro,
  SectionHeading,
} from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "계약·도입",
  description: "AI 영상 모델 계약 방식과 도입 절차 프로토타입",
};

const plans = [
  {
    index: "01",
    title: "테스트·PoC",
    price: "별도 문의",
    body: "내부 검토나 소규모 프로젝트를 위한 테스트 사용량 상담 영역입니다.",
    value: "poc",
  },
  {
    index: "02",
    title: "프로젝트 크레딧",
    price: "맞춤 견적",
    body: "캠페인이나 제작 프로젝트에 필요한 만큼 크레딧을 공급하는 방식입니다.",
    value: "project",
  },
  {
    index: "03",
    title: "월 사용량 계약",
    price: "사용량별 할인",
    body: "월 예상 생성량을 기준으로 구간별 단가와 초과 사용량을 협의합니다.",
    value: "monthly",
    featured: true,
  },
  {
    index: "04",
    title: "기업 맞춤 계약",
    price: "별도 협의",
    body: "대량 사용, 복수 모델, 연동 지원이 필요한 기업을 위한 개별 계약입니다.",
    value: "enterprise",
  },
];

const steps = [
  ["01", "상담·견적 요청", "회사와 담당자, 사용 목적을 간단히 남깁니다."],
  ["02", "사용량 확인", "월 생성 규모와 평균 영상 조건을 확인합니다."],
  ["03", "모델·계약 제안", "적합 모델과 크레딧 또는 월 계약 방식을 제안합니다."],
  ["04", "계약·결제", "국내 계약과 원화 결제 조건을 확정합니다."],
  ["05", "사용권 제공", "API 사용권 또는 크레딧을 제공합니다."],
  ["06", "연동·지원", "API 연결과 운영 중 기술 문의를 지원합니다."],
];

export default function PlansPage() {
  return (
    <>
      <PageIntro
        index="02 / PLANS"
        eyebrow="CONTRACT + ONBOARDING"
        title="고정 가격표보다 사용 방식에 맞는 계약."
        description="1차 사이트에서는 온라인 결제 없이 네 가지 계약 구조를 보여주고, 상담 후 별도 견적으로 연결합니다."
      />

      <section className="subpage-section page-shell">
        <SectionHeading
          eyebrow="PLANS"
          title="규모에 따라 달라지는 네 가지 방식"
          description="가격 숫자는 공급 단가와 정책이 확정된 후 입력합니다. 현재는 화면 구조와 선택 흐름을 확인합니다."
        />
        <div className="plan-grid">
          {plans.map((plan) => (
            <article className={`plan-card${plan.featured ? " featured" : ""}`} key={plan.index}>
              <span>{plan.index}</span>
              <h3>{plan.title}</h3>
              <strong className="price-placeholder">{plan.price}</strong>
              <p>{plan.body}</p>
              <Link href={`/contact?type=quote&plan=${plan.value}`} className="text-link">
                이 방식으로 문의 →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="subpage-section process-section">
        <div className="page-shell">
          <SectionHeading eyebrow="ONBOARDING" title="도입 과정은 여섯 단계로 단순하게" />
          <div className="support-grid">
            {steps.map(([index, title, body]) => (
              <article className="support-card" key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="subpage-section page-shell">
        <ContentNeeded
          title="계약 페이지에 채워야 할 실제 기준"
          items={[
            "테스트 제공 여부와 최소·최대 사용량",
            "크레딧 산정 방식과 유효기간",
            "월 최소 사용량과 대량 할인 기준",
            "부가세, 초과 사용, 환불·취소 원칙",
            "견적 유효기간과 도입 예상 소요시간",
          ]}
        />
      </section>
    </>
  );
}

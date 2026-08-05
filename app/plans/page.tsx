import type { Metadata } from "next";
import Link from "next/link";
import {
  ContentNeeded,
  PageIntro,
  SectionHeading,
} from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "크레딧 공급 방식",
  description: "기업의 Kling 크레딧 사용 상황과 공급 문의 절차 안내",
};

const plans = [
  {
    index: "01",
    title: "초기 테스트",
    price: "필요 수량 상담",
    body: "Kling을 처음 검토하는 기업이 테스트 목적과 예상 생성량을 기준으로 문의하는 방식입니다.",
    value: "test",
  },
  {
    index: "02",
    title: "프로젝트 사용",
    price: "수량별 안내",
    body: "캠페인이나 제작 프로젝트에 필요한 예상 크레딧 수량을 기준으로 공급가를 확인합니다.",
    value: "project",
  },
  {
    index: "03",
    title: "정기적 사용",
    price: "구매 계획 상담",
    body: "반복적으로 Kling 크레딧을 사용하는 기업이 예상 구매 주기와 수량을 전달하는 방식입니다.",
    value: "recurring",
    featured: true,
  },
  {
    index: "04",
    title: "대량 사용",
    price: "별도 문의",
    body: "많은 크레딧이 필요한 기업이 예상 사용량과 구매 시기를 기준으로 공급가를 문의합니다.",
    value: "large",
  },
];

const steps = [
  ["01", "문의하기", "회사 정보와 담당자, Kling 크레딧 사용 목적을 남깁니다."],
  ["02", "사용량 확인", "예상 생성량과 평균 영상 조건을 확인합니다."],
  ["03", "필요 수량 정리", "예상 필요 크레딧 또는 대략적인 사용 규모를 구체화합니다."],
  ["04", "공급가 안내", "확인된 수량을 기준으로 기업 고객 대상 공급가를 안내합니다."],
  ["05", "공급 조건 확인", "크레딧 수량과 공급 시기 등 필요한 조건을 확인합니다."],
  ["06", "크레딧 공급", "확인된 내용에 따라 Kling 크레딧을 공급합니다."],
];

export default function PlansPage() {
  return (
    <>
      <PageIntro
        index="04 / CREDIT SUPPLY"
        eyebrow="B2B CREDIT SUPPLY"
        title="사용 계획에 맞는 Kling 크레딧 공급."
        description="초기 테스트부터 프로젝트, 정기적 사용과 대량 사용까지 예상 필요 수량을 바탕으로 기업 공급가를 문의할 수 있습니다."
      />

      <section className="subpage-section page-shell">
        <SectionHeading
          eyebrow="USE CASES"
          title="기업의 네 가지 사용 상황"
          description="고정된 계약 상품이 아니라 크레딧을 사용하는 목적과 예상 수량을 구분해 문의를 준비하는 기준입니다."
        />
        <div className="plan-grid">
          {plans.map((plan) => (
            <article className={`plan-card${plan.featured ? " featured" : ""}`} key={plan.index}>
              <span>{plan.index}</span>
              <h3>{plan.title}</h3>
              <strong className="price-placeholder">{plan.price}</strong>
              <p>{plan.body}</p>
              <Link href={`/contact?use=${plan.value}`} className="text-link">
                이 상황으로 문의 →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="subpage-section process-section">
        <div className="page-shell">
          <SectionHeading eyebrow="SUPPLY PROCESS" title="문의부터 크레딧 공급까지" />
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
          title="공급 문의에 준비하면 좋은 정보"
          items={[
            "예상 필요 크레딧 또는 생성량",
            "Kling 크레딧의 주요 사용 목적",
            "구매를 희망하는 시기",
            "일회성 또는 반복 사용 여부",
            "회사와 담당자 연락 정보",
          ]}
        />
      </section>
    </>
  );
}

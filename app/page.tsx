import type { Metadata } from "next";
import Link from "next/link";
import { ContentNeeded, SectionHeading } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Kling 국내 공식 총판",
  description:
    "Kling 본사와 직접 계약한 국내 공식 총판이 기업 고객에게 Kling 크레딧을 경쟁력 있는 가격으로 공급합니다.",
};

const usageTags = [
  "예상 생성량",
  "영상 길이·해상도",
  "사용 목적",
  "필요 크레딧 수량",
];

const supplyTags = [
  "초기 테스트",
  "프로젝트 사용",
  "정기적 사용",
  "대량 사용 문의",
];

const trustItems = [
  {
    index: "01",
    label: "OFFICIAL DISTRIBUTOR",
    title: "Kling 국내 공식 총판",
    body: "Kling의 국내 공식 총판으로서 기업 고객에게 크레딧을 공급합니다.",
  },
  {
    index: "02",
    label: "DIRECT CONTRACT",
    title: "Kling 본사 직접 계약",
    body: "Kling 본사와 직접 체결한 계약을 기반으로 공급합니다.",
  },
  {
    index: "03",
    label: "B2B CREDIT SUPPLY",
    title: "기업 고객 대상 공급",
    body: "필요한 크레딧 수량을 확인한 뒤 기업 공급가를 안내합니다.",
  },
];

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

const disclosureRows = [
  ["공급 지위", "Kling 국내 공식 총판"],
  ["계약 관계", "Kling 본사 직접 계약"],
  ["공급 대상", "기업 고객"],
  ["공급 상품", "Kling 크레딧"],
  ["가격 안내", "예상 필요 수량 확인 후 안내"],
];

const scopes = [
  {
    index: "01",
    title: "Kling 크레딧 공급",
    body: "Kling 본사와의 직접 계약을 기반으로 Kling 크레딧을 공급합니다.",
  },
  {
    index: "02",
    title: "기업 고객 대상",
    body: "개인이 아닌 기업 고객을 대상으로 크레딧 공급 문의를 받습니다.",
  },
  {
    index: "03",
    title: "기업 공급가 안내",
    body: "예상 필요 수량과 구매 희망 시기를 확인한 뒤 공급가를 안내합니다.",
  },
];

export default function Home() {
  return (
    <>
      <section
        className="official-hero"
        aria-labelledby="official-hero-title"
        data-hero-version="forest-v3"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 44%, rgb(116 255 82 / 8%), transparent 32rem), linear-gradient(180deg, rgb(4 5 5 / 24%) 0%, rgb(4 5 5 / 42%) 56%, rgb(4 5 5 / 76%) 100%), url("/hero-forest-photo-v3.jpg")',
        }}
      >
        <div className="official-hero-content">
          <p className="official-hero-label">ENTRESOL · KOREA</p>
          <h1 id="official-hero-title">Kling 국내 공식 총판</h1>
          <p className="official-hero-subtitle">
            기업 고객을 위한 Kling 크레딧을 경쟁력 있는 가격으로
          </p>
          <Link href="/contact" className="official-inquiry-button">
            크레딧 공급 문의 <span aria-hidden="true">↗</span>
          </Link>
          <p className="official-hero-note">
            필요한 크레딧 수량을 알려주시면 기업 공급가를 안내합니다.
          </p>
        </div>
      </section>

      <section className="supply-section page-shell" aria-labelledby="supply-title">
        <div className="simplified-heading">
          <span>FLEXIBLE SUPPLY</span>
          <h2 id="supply-title">기업의 사용 계획에 맞춰 공급합니다</h2>
          <p>
            예상 사용량과 제작 계획, 구매 시기를 확인한 뒤 필요한 크레딧 규모와
            기업 고객 대상 공급가를 안내합니다.
          </p>
        </div>

        <div className="supply-option-grid">
          <article className="supply-option-card">
            <div className="supply-card-top">
              <span>01 / CREDIT VOLUME</span>
              <b aria-hidden="true">↗</b>
            </div>
            <h3>필요한 크레딧 규모</h3>
            <p>
              예상 생성량과 평균 영상 조건, 사용 목적을 확인해 문의에 필요한
              크레딧 수량을 구체화합니다.
            </p>
            <ul>
              {usageTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>

          <article className="supply-option-card supply-option-accent">
            <div className="supply-card-top">
              <span>02 / SUPPLY TYPE</span>
              <b aria-hidden="true">↗</b>
            </div>
            <h3>기업별 공급 방식</h3>
            <p>
              초기 테스트, 프로젝트 운영, 정기적 사용과 대량 사용 등 기업의
              구매 목적과 수량에 맞춰 공급가를 안내합니다.
            </p>
            <ul>
              {supplyTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        </div>
        <div className="button-row">
          <Link href="#credit-guide" className="button button-secondary">
            크레딧 수량 안내
          </Link>
          <Link href="#supply-types" className="button button-secondary">
            공급 방식 보기
          </Link>
        </div>
      </section>

      <section className="business-trust-section" aria-labelledby="business-trust-title">
        <div className="page-shell">
          <div className="simplified-heading trust-heading">
            <span>VERIFIED SUPPLY RELATIONSHIP</span>
            <h2 id="business-trust-title">확인된 공급 관계를 투명하게 안내합니다</h2>
          </div>
          <div className="business-trust-grid">
            {trustItems.map((item) => (
              <article key={item.index}>
                <div>
                  <span>{item.index}</span>
                  <small>{item.label}</small>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="credit-guide"
        className="subpage-section page-shell landing-anchor-section"
        aria-labelledby="credit-guide-title"
      >
        <SectionHeading
          id="credit-guide-title"
          eyebrow="KLING CREDIT GUIDE"
          title="필요한 크레딧 규모를 확인하는 기준"
          description="정확한 수량을 미리 알지 못해도 괜찮습니다. 확인 가능한 항목만 준비하면 예상 필요 수량과 기업 공급가 상담을 시작할 수 있습니다."
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

      <section className="subpage-section section-tint landing-section-band">
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
          <div className="landing-checklist">
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
          </div>
        </div>
      </section>

      <section
        id="supply-types"
        className="subpage-section page-shell landing-anchor-section"
        aria-labelledby="supply-types-title"
      >
        <SectionHeading
          id="supply-types-title"
          eyebrow="B2B CREDIT SUPPLY"
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

      <section className="subpage-section process-section landing-section-band">
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

      <section
        id="official-distributor"
        className="company-official-hero page-shell landing-anchor-section"
        aria-labelledby="official-distributor-title"
      >
        <span className="company-page-index">OFFICIAL DISTRIBUTOR</span>
        <div>
          <p>OFFICIAL DISTRIBUTOR · KOREA</p>
          <h2 id="official-distributor-title">Kling 본사와 직접 계약한 국내 공식 총판</h2>
          <span>
            Kling 본사와의 직접 계약을 기반으로 기업 고객에게 Kling 크레딧을 공급합니다.
          </span>
        </div>
      </section>

      <section className="company-status-section">
        <div className="page-shell company-status-grid">
          <article className="company-status-primary">
            <span>PARTNER STATUS</span>
            <h2>Kling 국내 공식 총판</h2>
            <p>공식 총판 지위로 기업 고객에게 Kling 크레딧을 공급합니다.</p>
          </article>
          <article>
            <span>DIRECT CONTRACT</span>
            <h2>Kling 본사 직접 계약</h2>
            <p>Kling 본사와 직접 체결한 계약을 기반으로 공급합니다.</p>
          </article>
        </div>
      </section>

      <section className="company-disclosure-section page-shell">
        <div className="simplified-heading">
          <span>BUSINESS DISCLOSURE</span>
          <h2>확정된 공급 정보</h2>
          <p>공식 지위와 공급 대상, 공급 상품을 간결하게 안내합니다.</p>
        </div>
        <div className="company-disclosure-table">
          {disclosureRows.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="company-scope-section">
        <div className="page-shell">
          <div className="simplified-heading">
            <span>CREDIT SUPPLY</span>
            <h2>크레딧 공급 안내</h2>
          </div>
          <div className="company-scope-grid">
            {scopes.map((scope) => (
              <article key={scope.index}>
                <span>{scope.index}</span>
                <h3>{scope.title}</h3>
                <p>{scope.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-inquiry-section page-shell" aria-labelledby="final-inquiry-title">
        <div>
          <span>START A CONVERSATION</span>
          <h2 id="final-inquiry-title">예상 사용량과 구매 계획을 알려주세요</h2>
          <p>필요한 Kling 크레딧 규모와 기업 고객 대상 공급가를 안내합니다.</p>
        </div>
        <Link href="/contact" className="official-inquiry-button">
          크레딧 공급 문의 <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}

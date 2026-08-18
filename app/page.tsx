import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "기업용 Kling 크레딧 공급",
  description:
    "기업의 사용 목적과 예상 규모를 확인해 필요한 Kling 크레딧과 기업 공급가, 공급 절차를 안내합니다.",
};

const relationshipItems = [
  { index: "01", label: "OFFICIAL DISTRIBUTOR", title: "Kling 국내 공식 총판" },
  { index: "02", label: "DIRECT CONTRACT", title: "Kling 본사 직접 계약" },
  { index: "03", label: "B2B CREDIT SUPPLY", title: "기업 고객 대상 크레딧 공급" },
];

const useCases = [
  {
    index: "01",
    title: "초기 테스트",
    body: "Kling을 처음 검토하는 기업이 테스트할 콘텐츠 유형과 예상 생성량을 기준으로 필요한 크레딧 규모를 상담하는 상황입니다.",
    value: "test",
  },
  {
    index: "02",
    title: "프로젝트 사용",
    body: "캠페인이나 제작 프로젝트의 일정, 예상 영상 수와 생성 조건을 바탕으로 필요한 크레딧과 공급가를 확인하는 상황입니다.",
    value: "project",
  },
  {
    index: "03",
    title: "정기적 사용",
    body: "반복적으로 Kling 크레딧을 사용하는 기업이 예상 구매 주기와 사용 규모를 바탕으로 구매 계획을 상담하는 상황입니다.",
    value: "recurring",
  },
  {
    index: "04",
    title: "대량 사용",
    body: "많은 크레딧이 필요한 기업이 예상 사용량과 구매 희망 시기를 기준으로 공급 조건을 문의하는 상황입니다.",
    value: "large",
  },
];

const guideItems = [
  { index: "01", title: "사용 목적", body: "광고 시안, 제품·브랜드 영상, 소셜 숏폼, 프리비주얼 등" },
  { index: "02", title: "예상 생성량", body: "프로젝트 또는 월간 예상 건수, 모르면 ‘미정’" },
  { index: "03", title: "평균 영상 조건", body: "길이·해상도·주요 옵션 중 확인 가능한 항목" },
  { index: "04", title: "현재 이용 현황", body: "Kling 사용 여부와 보유 크레딧, 처음이면 ‘미정’" },
  { index: "05", title: "구매 희망 시기", body: "즉시·단기·장기 검토 또는 ‘미정’" },
  { index: "06", title: "예상 필요 크레딧", body: "알고 있는 경우만 기재하고 상담 중 구체화 가능" },
];

const supplySteps = [
  { index: "01", title: "기업 문의 접수", body: "회사 정보와 담당자, 사용 목적 또는 사용 상황을 남깁니다." },
  { index: "02", title: "사용량 및 필요 수량 상담", body: "예상 생성량과 영상 조건을 확인해 필요한 크레딧 또는 대략적인 규모를 정리합니다." },
  { index: "03", title: "공급가 및 조건 안내", body: "확인된 규모를 바탕으로 기업 공급가와 필요한 조건을 안내합니다." },
  { index: "04", title: "크레딧 공급", body: "합의된 내용과 공급 시기에 따라 Kling 크레딧을 공급합니다." },
];

export default function Home() {
  return (
    <>
      <section className="b2b-hero" aria-labelledby="b2b-hero-title">
        <div className="page-shell b2b-hero-grid">
          <div className="b2b-hero-copy">
            <p className="b2b-kicker">ENTRESOL · KLING FOR BUSINESS</p>
            <h1 id="b2b-hero-title">기업을 위한 Kling 크레딧 공급</h1>
            <p className="b2b-hero-lead">
              기업의 사용 목적과 예상 규모, 구매 시점을 확인해 필요한 Kling
              크레딧과 기업 공급가, 공급 절차를 안내합니다.
            </p>
            <div className="b2b-hero-actions">
              <Link href="/contact" className="b2b-button b2b-button-primary">
                기업 공급가 문의 <span aria-hidden="true">↗</span>
              </Link>
              <Link href="#inquiry-guide" className="b2b-button b2b-button-secondary">
                문의 준비 정보 보기 <span aria-hidden="true">↓</span>
              </Link>
            </div>
            <p className="b2b-hero-note">
              <span aria-hidden="true">●</span>
              정확한 크레딧 수량을 몰라도 문의할 수 있습니다.
            </p>
          </div>

          <div className="b2b-hero-visual" aria-hidden="true">
            <div className="b2b-frame b2b-frame-a">
              <span>INPUT / 01</span><i /><small>BRAND FILM</small>
            </div>
            <div className="b2b-frame b2b-frame-b">
              <span>GENERATE / 02</span><div className="b2b-frame-pulse" /><small>KLING WORKFLOW</small>
            </div>
            <div className="b2b-frame b2b-frame-c">
              <span>OUTPUT / 03</span><i /><small>BUSINESS READY</small>
            </div>
            <p>IDEA → MOTION → DELIVERY</p>
          </div>
        </div>
      </section>

      <section id="official-relationship" className="b2b-section b2b-relationship" aria-labelledby="official-relationship-title">
        <div className="page-shell">
          <div className="b2b-section-heading b2b-section-heading-wide">
            <p>OFFICIAL SUPPLY RELATIONSHIP</p>
            <h2 id="official-relationship-title">공식 공급 관계를 투명하게 안내합니다</h2>
            <span>
              HRC ENT는 Kling 본사와 직접 계약한 국내 공식 총판으로서 기업 고객을
              대상으로 Kling 크레딧 공급을 안내합니다.
            </span>
          </div>
          <div className="b2b-relationship-grid">
            {relationshipItems.map((item) => (
              <article key={item.index}>
                <div><span>{item.index}</span><small>{item.label}</small></div>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="b2b-section page-shell" aria-labelledby="use-cases-title">
        <div className="b2b-section-heading">
          <p>B2B USE CASES</p>
          <h2 id="use-cases-title">기업의 네 가지 사용 상황</h2>
          <span>기업의 현재 사용 단계와 예상 규모에 맞춰 상담을 시작할 수 있습니다.</span>
        </div>
        <div className="b2b-use-grid">
          {useCases.map((item) => (
            <article key={item.index}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <Link href={`/contact?use=${item.value}`}>이 상황으로 문의 <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section id="inquiry-guide" className="b2b-section b2b-guide" aria-labelledby="inquiry-guide-title">
        <div className="page-shell">
          <div className="b2b-section-heading b2b-section-heading-wide">
            <p>CREDIT INQUIRY GUIDE</p>
            <h2 id="inquiry-guide-title">문의 전에 확인하면 좋은 정보</h2>
            <span>
              정확한 크레딧 수량을 미리 알지 못해도 괜찮습니다. 확인 가능한 정보만
              준비하면 상담을 시작할 수 있습니다.
            </span>
          </div>
          <div className="b2b-guide-grid">
            {guideItems.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <div><h3>{item.title}</h3><p>{item.body}</p></div>
              </article>
            ))}
          </div>
          <Link href="/contact" className="b2b-button b2b-button-primary b2b-guide-cta">
            수량을 몰라도 문의하기 <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section id="supply-process" className="b2b-section page-shell" aria-labelledby="supply-process-title">
        <div className="b2b-section-heading">
          <p>SUPPLY PROCESS</p>
          <h2 id="supply-process-title">문의부터 크레딧 공급까지</h2>
        </div>
        <ol className="b2b-process-grid">
          {supplySteps.map((step) => (
            <li key={step.index}>
              <span>{step.index}</span><h3>{step.title}</h3><p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="b2b-final page-shell" aria-labelledby="b2b-final-title">
        <div>
          <p>START A CONVERSATION</p>
          <h2 id="b2b-final-title">정확한 수량을 몰라도 문의할 수 있습니다</h2>
          <span>사용 목적과 예상 규모를 확인해 필요한 Kling 크레딧과 기업 공급가를 안내합니다.</span>
        </div>
        <Link href="/contact" className="b2b-button b2b-button-primary">
          기업 공급가 문의 <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}

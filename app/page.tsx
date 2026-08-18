import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "기업용 Kling 크레딧 공급",
  description:
    "Kling 크레딧 구매를 검토 중인 기업을 위한 문의 페이지입니다. 필요한 수량이 정해지지 않아도 상담할 수 있습니다.",
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
    body: "Kling을 처음 사용한다면, 만들고 싶은 콘텐츠와 테스트 횟수부터 알려주세요.",
    cta: "초기 테스트 문의하기",
    value: "test",
  },
  {
    index: "02",
    title: "프로젝트 사용",
    body: "캠페인 일정과 제작할 영상 수를 바탕으로 프로젝트에 필요한 크레딧을 계산합니다.",
    cta: "프로젝트 사용 문의하기",
    value: "project",
  },
  {
    index: "03",
    title: "정기적 사용",
    body: "매달 필요한 크레딧과 구매 주기를 기준으로 구매 계획을 세웁니다.",
    cta: "정기 사용 문의하기",
    value: "recurring",
  },
  {
    index: "04",
    title: "대량 사용",
    body: "대규모 제작을 앞두고 있다면 예상 사용량과 필요한 시기를 알려주세요.",
    cta: "대량 사용 문의하기",
    value: "large",
  },
];

const guideItems = [
  { index: "01", title: "사용 목적", body: "광고 시안, 제품·브랜드 영상, 소셜 숏폼, 프리비주얼" },
  { index: "02", title: "예상 생성량", body: "프로젝트 전체 또는 한 달 동안 만들 영상 수" },
  { index: "03", title: "평균 영상 조건", body: "영상 길이와 해상도, 사용할 주요 옵션" },
  { index: "04", title: "현재 사용 현황", body: "Kling 사용 여부와 남아 있는 크레딧" },
  { index: "05", title: "구매 희망 시기", body: "크레딧 구매를 원하는 시기" },
  { index: "06", title: "예상 필요 크레딧", body: "알고 있는 수량, 모르면 미정" },
];

const supplySteps = [
  { index: "01", title: "문의 접수", body: "회사 정보와 사용 목적을 남겨주세요." },
  { index: "02", title: "사용량 확인", body: "어떤 영상을 얼마나 만들지 확인하고, 필요한 크레딧을 함께 계산합니다." },
  { index: "03", title: "공급가 안내", body: "확인한 사용량을 기준으로 공급가와 구매 조건을 알려드립니다." },
  { index: "04", title: "크레딧 공급", body: "수량과 일정을 확정한 뒤 Kling 크레딧을 공급합니다." },
];

export default function Home() {
  return (
    <>
      <section
        className="official-hero b2b-road-hero"
        aria-labelledby="b2b-hero-title"
        data-hero-version="road-v5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 44%, rgb(1 18 28 / 30%), transparent 34rem), linear-gradient(180deg, rgb(2 18 26 / 24%) 0%, rgb(2 18 26 / 32%) 56%, rgb(2 18 26 / 48%) 100%), url("/hero-road-pov-v5.jpg")',
        }}
      >
        <div className="official-hero-content">
          <p className="official-hero-label">ENTRESOL · KLING FOR BUSINESS</p>
          <h1 id="b2b-hero-title">기업을 위한 Kling 크레딧 공급</h1>
          <p className="official-hero-subtitle b2b-road-hero-lead">
            소규모 테스트부터 대규모 프로젝트까지. 사용량과 일정에 맞춰 필요한
            Kling 크레딧을 공급합니다.
          </p>
          <Link href="/contact" className="official-inquiry-button">
            공급가 문의하기 <span aria-hidden="true">↗</span>
          </Link>
          <p className="official-hero-note">필요한 크레딧 수량을 아직 몰라도 괜찮습니다.</p>
        </div>
      </section>

      <section id="official-relationship" className="b2b-section b2b-relationship" aria-labelledby="official-relationship-title">
        <div className="page-shell">
          <div className="b2b-section-heading b2b-section-heading-wide">
            <p>OFFICIAL SUPPLY</p>
            <h2 id="official-relationship-title">Kling 크레딧, 공식 경로로 공급합니다</h2>
            <span>공급 주체는 HRC ENT이며, 기업 고객을 대상으로 합니다.</span>
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
          <p>USE CASES</p>
          <h2 id="use-cases-title">어떤 방식으로 사용하실 예정인가요?</h2>
          <span>가장 가까운 항목을 선택해 주세요. 세부 수량은 상담하면서 정할 수 있습니다.</span>
        </div>
        <div className="b2b-use-grid">
          {useCases.map((item) => (
            <article key={item.index}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <Link href={`/contact?use=${item.value}`}>{item.cta} <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section id="inquiry-guide" className="b2b-section b2b-guide" aria-labelledby="inquiry-guide-title">
        <div className="page-shell">
          <div className="b2b-section-heading b2b-section-heading-wide">
            <p>INQUIRY GUIDE</p>
            <h2 id="inquiry-guide-title">이 정도만 알려주시면 됩니다</h2>
            <span>모든 항목을 정확히 알 필요는 없습니다. 지금 확인되는 내용만 준비해 주세요.</span>
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
            공급가 문의하기 <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section id="supply-process" className="b2b-section page-shell" aria-labelledby="supply-process-title">
        <div className="b2b-section-heading">
          <p>SUPPLY PROCESS</p>
          <h2 id="supply-process-title">문의 후에는 이렇게 진행됩니다</h2>
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
          <p>CONTACT</p>
          <h2 id="b2b-final-title">필요한 크레딧부터 함께 계산해 보세요</h2>
          <span>무엇을 만들지, 언제 필요한지만 알려주세요.</span>
        </div>
        <Link href="/contact" className="b2b-button b2b-button-primary">
          공급가 문의하기 <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}

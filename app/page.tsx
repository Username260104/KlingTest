import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "기업용 Kling 크레딧 공급",
  description:
    "테스트 도입부터 대량 구매까지, 기업의 사용 규모와 일정에 맞는 Kling 크레딧 공급 조건을 상담합니다.",
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
    body: "제작할 콘텐츠와 테스트 횟수를 바탕으로 도입에 필요한 시작 규모를 함께 정합니다.",
    cta: "초기 테스트 문의",
    value: "test",
  },
  {
    index: "02",
    title: "프로젝트 사용",
    body: "제작 일정과 영상 수, 생성 조건을 기준으로 프로젝트에 필요한 공급 규모를 산정합니다.",
    cta: "프로젝트 사용 문의",
    value: "project",
  },
  {
    index: "03",
    title: "정기적 사용",
    body: "월간 사용량과 구매 주기를 기준으로 지속 가능한 크레딧 운영 계획을 세웁니다.",
    cta: "정기적 사용 문의",
    value: "recurring",
  },
  {
    index: "04",
    title: "대량 사용",
    body: "대규모 제작에 필요한 사용량과 구매 일정을 바탕으로 공급 조건을 협의합니다.",
    cta: "대량 사용 문의",
    value: "large",
  },
];

const guideItems = [
  { index: "01", title: "사용 목적", body: "광고 시안, 제품·브랜드 영상, 소셜 숏폼, 프리비주얼" },
  { index: "02", title: "예상 생성량", body: "프로젝트 전체 또는 월간 생성 건수" },
  { index: "03", title: "평균 영상 조건", body: "영상 길이, 해상도, 주요 생성 옵션" },
  { index: "04", title: "현재 사용 현황", body: "Kling 사용 여부와 현재 보유 크레딧" },
  { index: "05", title: "구매 희망 시기", body: "도입 희망 시기 또는 구매 일정" },
  { index: "06", title: "예상 필요 크레딧", body: "알고 있는 범위만 기재, 미정 가능" },
];

const supplySteps = [
  { index: "01", title: "문의 접수", body: "회사 정보와 사용 목적을 남겨주세요." },
  { index: "02", title: "사용 규모 상담", body: "생성량과 영상 조건을 바탕으로 크레딧 규모를 정리합니다." },
  { index: "03", title: "공급 조건 제안", body: "정리된 규모를 기준으로 기업 공급가와 조건을 제안합니다." },
  { index: "04", title: "크레딧 공급", body: "협의한 수량과 일정에 따라 Kling 크레딧을 공급합니다." },
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
            테스트 도입부터 대량 구매까지, 사용 규모와 일정에 맞춰 Kling
            크레딧과 공급 조건을 제안합니다.
          </p>
          <Link href="/contact" className="official-inquiry-button">
            기업 공급가 문의 <span aria-hidden="true">↗</span>
          </Link>
          <p className="official-hero-note">필요 수량이 정해지지 않아도 상담을 시작할 수 있습니다.</p>
        </div>
      </section>

      <section id="official-relationship" className="b2b-section b2b-relationship" aria-labelledby="official-relationship-title">
        <div className="page-shell">
          <div className="b2b-section-heading b2b-section-heading-wide">
            <p>OFFICIAL SUPPLY</p>
            <h2 id="official-relationship-title">기업 도입을 위한 공식 공급 체계</h2>
            <span>HRC ENT의 계약 관계와 기업 대상 공급 범위는 다음과 같습니다.</span>
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
          <h2 id="use-cases-title">도입 단계에 맞는 네 가지 공급 상담</h2>
          <span>첫 테스트부터 정기·대량 사용까지, 현재 계획에 가까운 유형을 선택하세요.</span>
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
            <h2 id="inquiry-guide-title">상담에 필요한 정보는 간단합니다</h2>
            <span>아는 항목만 준비하면 됩니다. 크레딧 규모는 상담 과정에서 함께 구체화합니다.</span>
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
            기업 공급가 문의 <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section id="supply-process" className="b2b-section page-shell" aria-labelledby="supply-process-title">
        <div className="b2b-section-heading">
          <p>SUPPLY PROCESS</p>
          <h2 id="supply-process-title">문의부터 공급까지, 네 단계로 진행합니다</h2>
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
          <h2 id="b2b-final-title">프로젝트에 맞는 공급 조건을 확인하세요</h2>
          <span>필요 수량이 정해지지 않았다면 사용 목적과 구매 일정부터 알려주세요.</span>
        </div>
        <Link href="/contact" className="b2b-button b2b-button-primary">
          기업 공급가 문의 <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}

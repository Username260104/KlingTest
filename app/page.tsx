import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "국내 공식 총판",
  description:
    "기업용 AI 영상 생성 크레딧을 국내 계약과 원화 결제로 공급합니다.",
};

const specificationTags = [
  "Kling·Seedance 선택",
  "프로젝트별 생성량",
  "API·크레딧 공급",
  "기술지원 범위",
];

const contractTags = [
  "선불 크레딧",
  "프로젝트 계약",
  "월 사용량 계약",
  "기업별 맞춤 계약",
];

const trustItems = [
  {
    index: "01",
    label: "JOINT VENTURE",
    title: "한·중 합작법인",
    body: "중국 현지 공급 네트워크와 국내 기업 거래 구조를 함께 운영합니다.",
  },
  {
    index: "02",
    label: "LOCAL CONTRACT",
    title: "국내 계약·원화 결제",
    body: "해외 결제 절차 없이 국내 법인과 계약하고 원화로 정산합니다.",
  },
  {
    index: "03",
    label: "TAX INVOICE",
    title: "세금계산서 발행 가능",
    body: "국내 기업 회계 처리에 필요한 세금계산서를 발행합니다.",
  },
];

export default function Home() {
  return (
    <>
      <section className="official-hero" aria-labelledby="official-hero-title">
        <div className="official-hero-content">
          <p className="official-hero-label">AI VIDEO SUPPLY · KOREA</p>
          <h1 id="official-hero-title">국내 공식 총판</h1>
          <p className="official-hero-subtitle">
            기업용 크레딧을 기준가 대비 <strong>최대 30%</strong> 할인된 금액으로
          </p>
          <Link href="/contact" className="official-inquiry-button">
            문의하기 <span aria-hidden="true">↗</span>
          </Link>
          <p className="official-hero-note">
            적용 모델, 사용량과 계약 조건에 따라 할인 범위가 달라질 수 있습니다.
          </p>
        </div>
      </section>

      <section className="supply-section page-shell" aria-labelledby="supply-title">
        <div className="simplified-heading">
          <span>FLEXIBLE SUPPLY</span>
          <h2 id="supply-title">기업이 원하는 방식으로 공급합니다</h2>
          <p>
            정해진 상품에 맞추는 대신 필요한 영상 생성 환경과 실제 계약 구조를 기준으로
            공급 조건을 구성합니다.
          </p>
        </div>

        <div className="supply-option-grid">
          <article className="supply-option-card">
            <div className="supply-card-top">
              <span>01 / SPECIFICATION</span>
              <b aria-hidden="true">↗</b>
            </div>
            <h3>원하는 사양</h3>
            <p>
              필요한 모델, 생성량, 영상 규격과 API 연동 범위에 맞춰 공급 조건을
              구성합니다.
            </p>
            <ul>
              {specificationTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>

          <article className="supply-option-card supply-option-accent">
            <div className="supply-card-top">
              <span>02 / CONTRACT</span>
              <b aria-hidden="true">↗</b>
            </div>
            <h3>원하는 계약 형태</h3>
            <p>
              테스트 크레딧부터 프로젝트 계약, 월 사용량 계약과 대량 사용 협의까지
              기업 상황에 맞춰 제안합니다.
            </p>
            <ul>
              {contractTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="business-trust-section" aria-labelledby="business-trust-title">
        <div className="page-shell">
          <div className="simplified-heading trust-heading">
            <span>LOCAL BUSINESS READY</span>
            <h2 id="business-trust-title">국내 기업 거래에 필요한 조건을 갖췄습니다</h2>
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

      <section className="final-inquiry-section page-shell" aria-labelledby="final-inquiry-title">
        <div>
          <span>START A CONVERSATION</span>
          <h2 id="final-inquiry-title">필요한 사양과 계약 조건을 알려주세요</h2>
          <p>예상 사용량과 활용 목적을 확인한 뒤 적합한 모델과 공급 조건을 제안합니다.</p>
        </div>
        <Link href="/contact" className="official-inquiry-button">
          문의하기 <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}

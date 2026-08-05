import type { Metadata } from "next";
import Link from "next/link";

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

export default function Home() {
  return (
    <>
      <section className="official-hero" aria-labelledby="official-hero-title">
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
          <Link href="/models" className="button button-secondary">
            크레딧 수량 안내
          </Link>
          <Link href="/plans" className="button button-secondary">
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

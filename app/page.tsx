import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kling 국내 공식 총판",
  description:
    "Kling 본사와 직접 계약한 국내 공식 총판이 기업 고객에게 Kling 크레딧을 경쟁력 있는 가격으로 공급합니다.",
};

const directContractTags = [
  "국내 공식 총판",
  "Kling 본사 직접 계약",
  "Kling 크레딧 공급",
  "기업 고객 대상",
];

const pricingTags = [
  "예상 수량 확인",
  "기업 공급가",
  "필요 시기 확인",
  "문의 후 안내",
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
          <h2 id="supply-title">기업 고객을 위한 Kling 크레딧 공급</h2>
          <p>
            Kling 본사와의 직접 계약을 기반으로 필요한 크레딧 수량을 확인하고
            기업 고객에게 적용되는 공급가를 안내합니다.
          </p>
        </div>

        <div className="supply-option-grid">
          <article className="supply-option-card">
            <div className="supply-card-top">
              <span>01 / DIRECT CONTRACT</span>
              <b aria-hidden="true">↗</b>
            </div>
            <h3>Kling 본사 직접 계약</h3>
            <p>
              Kling 본사와 직접 체결한 계약을 기반으로 기업 고객에게
              Kling 크레딧을 공급합니다.
            </p>
            <ul>
              {directContractTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>

          <article className="supply-option-card supply-option-accent">
            <div className="supply-card-top">
              <span>02 / B2B PRICING</span>
              <b aria-hidden="true">↗</b>
            </div>
            <h3>기업 공급가 안내</h3>
            <p>
              필요한 크레딧 수량과 구매 희망 시기를 확인한 뒤
              기업 고객 대상 공급가를 안내합니다.
            </p>
            <ul>
              {pricingTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
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
          <h2 id="final-inquiry-title">필요한 Kling 크레딧 수량을 알려주세요</h2>
          <p>회사 정보와 예상 필요 수량을 확인한 뒤 기업 공급가를 안내합니다.</p>
        </div>
        <Link href="/contact" className="official-inquiry-button">
          크레딧 공급 문의 <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}

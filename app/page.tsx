import type { Metadata } from "next";
import Link from "next/link";
import { PartnerCarousel } from "../components/PartnerCarousel";

export const metadata: Metadata = {
  title: "Kling 공식 파트너, Entresol",
  description:
    "Kling 크레딧 구매를 검토 중인 기업을 위한 문의 페이지입니다. 필요한 수량이 정해지지 않아도 상담할 수 있습니다.",
};

const relationshipItems = [
  { index: "01", label: "운영사", title: "HRC ENT (법인 설립 후 내용 채우기)" },
  { index: "02", label: "계약", title: "Kling 본사와 공식 파트너 계약을 체결했습니다" },
  { index: "03", label: "공급 범위", title: "Kling API와 크레딧을 국내 기업에 직접 공급합니다" },
];

const contractTerms = [
  {
    index: "01",
    title: "기준가 대비 할인된 Unit 단가",
    body: "사용량에 맞춘 단가와 동시 생성 개수 제한까지 협의할 수 있습니다.",
  },
  {
    index: "02",
    title: "국내 법인과 직접 계약",
    body: "해외 결제 절차 없이 원화로 정산하고, 세금계산서를 발행합니다.",
  },
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
          <h1 id="b2b-hero-title">Kling 공식 파트너, Entresol</h1>
          <p className="official-hero-subtitle b2b-road-hero-lead">
            기업 전용 조건으로 API를 제공합니다
          </p>
          <Link href="/contact" className="official-inquiry-button">
            문의하기 <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section id="official-relationship" className="b2b-section b2b-relationship" aria-labelledby="official-relationship-title">
        <div className="page-shell">
          <div className="b2b-section-heading b2b-section-heading-wide">
            <p>OFFICIAL PARTNER</p>
            <h2 id="official-relationship-title">Kling 크레딧, 검증된 경로로 제공합니다</h2>
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
          <p>CONTRACT TERMS</p>
          <h2 id="use-cases-title">Entresol에서만 가능한 조건</h2>
        </div>
        <div className="b2b-use-grid">
          {contractTerms.map((item) => (
            <article key={item.index}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="partners" className="b2b-section b2b-partners" aria-labelledby="partners-title">
        <div className="page-shell">
          <div className="b2b-section-heading b2b-section-heading-center">
            <p>PARTNERS &amp; CLIENTS</p>
            <h2 id="partners-title">함께하고 있는 기업</h2>
            <span>브랜드와 제작사, 플랫폼까지 각자의 방식으로 Kling을 공급받고 있습니다.</span>
          </div>
          <PartnerCarousel />
        </div>
      </section>

      <section className="b2b-final-cta page-shell">
        <Link href="/contact" className="b2b-button b2b-button-primary">
          문의하기 <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}

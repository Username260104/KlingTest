import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "공식 총판 안내",
  description: "Kling 본사 직접 계약과 국내 공식 총판 지위, 기업 고객 대상 크레딧 공급 안내",
};

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

export default function CompanyPage() {
  return (
    <>
      <section className="company-official-hero page-shell">
        <span className="company-page-index">01 / OFFICIAL DISTRIBUTOR</span>
        <div>
          <p>OFFICIAL DISTRIBUTOR · KOREA</p>
          <h1>Kling 본사와 직접 계약한 국내 공식 총판</h1>
          <span>
            Kling 본사와의 직접 계약을 기반으로 기업 고객에게
            Kling 크레딧을 공급합니다.
          </span>
        </div>
      </section>

      <section className="company-status-section">
        <div className="page-shell company-status-grid">
          <article className="company-status-primary">
            <span>PARTNER STATUS</span>
            <h2>Kling 국내 공식 총판</h2>
            <p>
              공식 총판 지위로 기업 고객에게 Kling 크레딧을 공급합니다.
            </p>
          </article>
          <article>
            <span>DIRECT CONTRACT</span>
            <h2>Kling 본사 직접 계약</h2>
            <p>
              Kling 본사와 직접 체결한 계약을 기반으로 공급합니다.
            </p>
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

      <section className="final-inquiry-section page-shell company-inquiry" aria-labelledby="company-inquiry-title">
        <div>
          <span>CONTACT</span>
          <h2 id="company-inquiry-title">Kling 크레딧 공급 조건을 확인하세요</h2>
          <p>필요한 크레딧 수량을 알려주시면 기업 공급가를 안내합니다.</p>
        </div>
        <Link href="/contact" className="official-inquiry-button">
          크레딧 공급 문의 <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}

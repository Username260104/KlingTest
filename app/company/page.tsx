import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "회사·파트너",
  description: "국내 공식 총판의 법인 구조, 계약 주체와 공급 범위 안내",
};

const disclosureRows = [
  ["법인 형태", "한·중 합작법인"],
  ["공급 지위", "국내 공식 총판"],
  ["계약 주체", "국내 법인"],
  ["결제 방식", "원화 결제"],
  ["회계 처리", "세금계산서 발행"],
  ["지원 언어", "한국어"],
];

const scopes = [
  {
    index: "01",
    title: "모델·크레딧 공급",
    body: "Kling과 Seedance의 기업용 크레딧 및 API 사용 범위를 상담합니다.",
  },
  {
    index: "02",
    title: "국내 계약·정산",
    body: "국내 법인 계약, 원화 결제와 세금계산서 발행 구조로 진행합니다.",
  },
  {
    index: "03",
    title: "도입·연동 지원",
    body: "필요 사양과 사용량을 확인하고 API 연동 및 운영 문의를 지원합니다.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="company-official-hero page-shell">
        <span className="company-page-index">01 / COMPANY &amp; PARTNER</span>
        <div>
          <p>OFFICIAL DISTRIBUTOR · KOREA</p>
          <h1>국내 계약과 공급을 책임지는 파트너</h1>
          <span>
            공식 총판 지위와 한·중 합작법인의 공급 네트워크를 기반으로 기업 고객의
            계약부터 정산, 도입 지원까지 연결합니다.
          </span>
        </div>
      </section>

      <section className="company-status-section">
        <div className="page-shell company-status-grid">
          <article className="company-status-primary">
            <span>PARTNER STATUS</span>
            <h2>국내 공식 총판</h2>
            <p>
              기업용 AI 영상 생성 모델과 크레딧을 국내 계약 구조로 공급합니다.
            </p>
          </article>
          <article>
            <span>CORPORATE STRUCTURE</span>
            <h2>한·중 합작법인</h2>
            <p>
              중국 현지 공급 네트워크와 국내 기업 거래 체계를 함께 운영합니다.
            </p>
          </article>
        </div>
      </section>

      <section className="company-disclosure-section page-shell">
        <div className="simplified-heading">
          <span>BUSINESS DISCLOSURE</span>
          <h2>계약과 정산 구조</h2>
          <p>기업 고객이 거래 전에 확인할 핵심 조건을 간결하게 공개합니다.</p>
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
            <span>SUPPLY &amp; SUPPORT</span>
            <h2>공급과 지원 범위</h2>
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
          <h2 id="company-inquiry-title">공급 범위와 계약 조건을 확인하세요</h2>
          <p>필요한 모델과 예상 사용량을 알려주시면 기업별 조건을 안내합니다.</p>
        </div>
        <Link href="/contact" className="official-inquiry-button">
          문의하기 <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}

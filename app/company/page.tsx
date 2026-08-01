import type { Metadata } from "next";
import {
  ContentNeeded,
  PageIntro,
  SectionHeading,
} from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "회사·파트너",
  description: "회사 정보와 파트너 관계 안내 화면 프로토타입",
};

const companyFacts = [
  ["회사명", "[국내 계약 주체 회사명]"],
  ["대표자", "[대표자명]"],
  ["사업자등록번호", "[000-00-00000]"],
  ["주소", "[회사 주소]"],
  ["대표 연락처", "[전화번호]"],
  ["이메일", "[대표 이메일]"],
  ["결제 주체", "[원화 결제·세금계산서 발행 주체]"],
  ["지원 시간", "[평일 00:00–00:00]"],
];

const supports = [
  ["01", "계약·결제 안내", "국내 계약, 원화 결제, 세금계산서 발행 범위를 명확히 표시합니다."],
  ["02", "모델·사용량 상담", "목적과 월 생성량을 기준으로 모델과 계약 방식을 함께 검토합니다."],
  ["03", "API 연동 지원", "인증, 요청, 오류 대응 등 실제 제공 가능한 기술지원 범위를 표시합니다."],
];

export default function CompanyPage() {
  return (
    <>
      <PageIntro
        index="03 / COMPANY"
        eyebrow="TRUST + DISCLOSURE"
        title="무엇을 누구와 계약하는지 명확하게."
        description="B2B 고객이 계약 전에 확인해야 하는 국내 사업자 정보, 파트너 관계, 공급 범위와 지원 책임을 한 페이지에 정리합니다."
      />

      <section className="subpage-section page-shell">
        <SectionHeading
          eyebrow="COMPANY INFORMATION"
          title="국내 계약 주체 정보"
          description="아래 대괄호 영역에 실제 사업자 정보를 입력하면 됩니다."
        />
        <div className="company-facts">
          {companyFacts.map(([label, value]) => (
            <div className="fact-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="subpage-section section-tint">
        <div className="page-shell partner-panel">
          <div className="partner-visual">
            <strong>CONTRACT SCOPE</strong>
          </div>
          <div className="partner-copy">
            <span className="eyebrow">PARTNER STATUS</span>
            <h2>파트너 관계와 공급 범위가 들어갈 자리</h2>
            <p>
              Kling·Seedance 운영사와의 실제 계약상 지위, 국내 공급 가능 지역,
              제공 가능한 모델과 API, 브랜드 사용 권한을 정확한 문구로 표시합니다.
            </p>
            <div className="notice-box">
              현재는 공식 총판·독점 파트너 같은 표현을 사용하지 않습니다. 계약서와
              브랜드 승인이 확인된 뒤 승인된 명칭과 로고로 교체합니다.
            </div>
          </div>
        </div>
      </section>

      <section className="subpage-section page-shell">
        <SectionHeading eyebrow="SUPPORT SCOPE" title="고객에게 약속할 지원 범위" />
        <div className="support-grid">
          {supports.map(([index, title, body]) => (
            <article className="support-card" key={index}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="subpage-section page-shell">
        <ContentNeeded
          title="회사 페이지 공개 전 필요한 자료"
          items={[
            "법정 회사명·대표자·사업자번호·주소",
            "계약·결제·세금계산서 발행 주체",
            "Kling·Seedance와의 정확한 계약상 명칭",
            "공급 가능한 지역·모델·API 범위",
            "로고와 모델명 사용 승인 자료",
            "기술지원 시간·채널·담당 범위",
          ]}
        />
      </section>
    </>
  );
}

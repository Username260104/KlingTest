import type { Metadata } from "next";
import Link from "next/link";
import { ContentNeeded, SectionHeading } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Kling·Seedance 국내 B2B 도입",
  description:
    "광고대행사와 영상제작사를 위한 AI 영상 생성 모델 공급 서비스 프론트엔드 프로토타입",
};

const services = [
  {
    number: "01",
    title: "API·크레딧 공급",
    body: "프로젝트 테스트부터 월 단위 대량 사용까지 필요한 방식으로 사용량을 제안합니다.",
  },
  {
    number: "02",
    title: "국내 계약·원화 결제",
    body: "해외 결제 대신 국내 계약, 원화 정산, 세금계산서 발행 구조를 안내합니다.",
  },
  {
    number: "03",
    title: "도입·연동 상담",
    body: "제작 목적과 예상 생성량을 확인하고 적합한 모델과 연동 방식을 함께 정리합니다.",
  },
  {
    number: "04",
    title: "한국어 기술지원",
    body: "API 연결과 운영 과정의 문의를 국내 업무시간 기준으로 지원하는 구조입니다.",
  },
];

const useCases = [
  "광고 시안 제작",
  "제품·브랜드 영상",
  "소셜 숏폼",
  "콘티·프리비주얼",
  "대량 콘텐츠 제작",
  "AI 영상 서비스 개발",
];

const steps = [
  "상담·견적 요청",
  "사용 목적 확인",
  "모델·계약 제안",
  "계약·원화 결제",
  "API·크레딧 제공",
  "연동·기술지원",
];

export default function Home() {
  return (
    <>
      <section className="hero page-shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot" /> 광고대행사·영상제작사를 위한 B2B 도입
          </div>
          <h1>
            글로벌 AI 영상 모델을
            <span>국내 계약으로.</span>
          </h1>
          <p className="hero-lead">
            Kling과 Seedance 도입에 필요한 계약, 결제, 사용량 공급과
            기술지원을 한 곳에서 상담하세요.
          </p>
          <div className="button-row">
            <Link href="/contact?type=quote" className="button button-primary">
              기업 견적 요청 <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/models" className="button button-secondary">
              모델 비교 보기 <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="prototype-note">
            현재 화면은 구조와 분위기 확인용 프로토타입입니다.
          </p>
        </div>

        <div className="hero-console" aria-label="AI 영상 생성 공급 흐름 예시">
          <div className="console-top">
            <span>VIDEO MODEL ROUTER</span>
            <span className="console-status">READY</span>
          </div>
          <div className="console-canvas">
            <div className="frame frame-one">
              <span>01 / INPUT</span>
              <strong>PRODUCT IMAGE</strong>
            </div>
            <div className="motion-line" />
            <div className="frame frame-two">
              <span>02 / MODEL</span>
              <strong>KLING · SEEDANCE</strong>
            </div>
            <div className="frame frame-output">
              <div className="play-mark">▶</div>
              <span>GENERATED PREVIEW</span>
              <strong>00:05</strong>
            </div>
          </div>
          <div className="console-bottom">
            <span>KRW BILLING</span>
            <span>KOREAN SUPPORT</span>
            <span>API ACCESS</span>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="page-shell trust-grid">
          <span>국내 사업자 계약</span>
          <span>원화 결제</span>
          <span>세금계산서</span>
          <span>한국어 상담</span>
          <span>대량 사용 협의</span>
        </div>
      </section>

      <section className="section page-shell">
        <SectionHeading
          eyebrow="WHAT WE PROVIDE"
          title="해외 모델을 국내 업무에 연결하는 방식"
          description="기능 소개보다 실제 도입 과정에서 기업이 필요로 하는 공급과 지원 구조를 먼저 보여줍니다."
        />
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="card-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="page-shell">
          <SectionHeading
            eyebrow="SUPPORTED MODELS"
            title="두 모델, 하나의 국내 도입 창구"
            description="모델의 세부 사양은 공급 범위가 확정된 후 채우고, 지금은 선택 구조와 시각적 느낌을 확인합니다."
            action={{ label: "상세 비교 보기", href: "/models" }}
          />
          <div className="model-grid">
            <article className="model-card model-dark">
              <div className="model-card-top">
                <span className="model-index">MODEL 01</span>
                <span className="model-state">API</span>
              </div>
              <h3>Kling</h3>
              <p>제품 이미지, 광고 시안, 브랜드 영상의 모션 연출을 위한 소개 영역입니다.</p>
              <ul className="tag-list">
                <li>Image to Video</li>
                <li>Text to Video</li>
                <li>Commercial</li>
              </ul>
              <Link href="/contact?type=quote&model=kling" className="text-link light-link">
                Kling 견적 화면 보기 →
              </Link>
            </article>
            <article className="model-card model-accent">
              <div className="model-card-top">
                <span className="model-index">MODEL 02</span>
                <span className="model-state">API</span>
              </div>
              <h3>Seedance</h3>
              <p>콘텐츠 제작, 다양한 연출, 영상 생성 자동화를 위한 소개 영역입니다.</p>
              <ul className="tag-list">
                <li>Content</li>
                <li>Automation</li>
                <li>Social Video</li>
              </ul>
              <Link href="/contact?type=quote&model=seedance" className="text-link">
                Seedance 견적 화면 보기 →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section page-shell split-section">
        <div>
          <SectionHeading
            eyebrow="USE CASES"
            title="제작 현장에서 바로 이해되는 활용 분야"
            description="업종보다 실제 제작 업무를 기준으로 메시지를 구성합니다."
          />
        </div>
        <div className="use-case-list">
          {useCases.map((item, index) => (
            <div className="use-case-row" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
              <span aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="page-shell">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="문의부터 연동까지, 여섯 단계"
            action={{ label: "계약 방식 보기", href: "/plans" }}
          />
          <ol className="process-grid">
            {steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section page-shell">
        <ContentNeeded
          title="이 첫 화면에 최종적으로 필요한 내용"
          items={[
            "확정된 회사명과 브랜드 로고",
            "실제 계약·공급 가능한 모델 및 API 범위",
            "국내 계약·원화 결제·지원 가능 범위",
            "사용 가능한 생성 영상 또는 이미지 2~4개",
            "담당자 연락처와 상담 회신 기준",
          ]}
        />
      </section>

      <section className="final-cta">
        <div className="page-shell final-cta-inner">
          <div>
            <span className="eyebrow inverse">START A CONVERSATION</span>
            <h2>프로젝트 규모에 맞는 도입 방식을 확인하세요.</h2>
          </div>
          <Link href="/contact?type=quote" className="button button-accent">
            견적 요청 화면으로 <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}

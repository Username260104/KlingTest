import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "../../components/ContactForm";
import { PageIntro } from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "문의하기",
  description: "AI 영상 모델의 사양, 사용량과 기업 계약 조건 문의",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        index="04 / CONTACT"
        eyebrow="CONTACT"
        title="필요한 사양과 계약 조건을 알려주세요."
        description="예상 사용량과 활용 목적을 확인한 뒤 적합한 모델과 공급 조건을 제안합니다."
      />

      <section className="subpage-section page-shell contact-layout">
        <aside className="contact-aside">
          <span className="eyebrow">BUSINESS INQUIRY</span>
          <h2>기업 문의를 한 번에</h2>
          <p>
            필요한 모델, 생성량, 계약 형태와 기술지원 범위를 남겨주세요.
            확인 후 기업 상황에 맞는 공급 조건을 안내합니다.
          </p>
          <span className="prototype-badge">현재는 입력 흐름 확인용 프로토타입입니다</span>
        </aside>
        <Suspense fallback={<div className="contact-form">폼을 준비하고 있습니다.</div>}>
          <ContactForm />
        </Suspense>
      </section>
    </>
  );
}

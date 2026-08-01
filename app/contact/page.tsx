import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "../../components/ContactForm";
import { PageIntro } from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "상담·견적 요청",
  description: "AI 영상 모델 도입 상담 및 기업 견적 요청 화면 프로토타입",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        index="04 / CONTACT"
        eyebrow="CONSULTATION + QUOTE"
        title="필요한 모델과 사용량을 알려주세요."
        description="실제 접수 기능이 없는 프론트엔드 화면입니다. 필드 구성, 입력 흐름과 완료 화면의 느낌을 확인할 수 있습니다."
      />

      <section className="subpage-section page-shell contact-layout">
        <aside className="contact-aside">
          <span className="eyebrow">FRONTEND ONLY</span>
          <h2>상담과 견적을 하나의 화면으로</h2>
          <p>
            버튼을 어디서 눌렀는지에 따라 문의 유형과 모델이 미리 선택됩니다.
            실제 제작 시에는 이 화면에 접수 저장과 담당자 알림만 연결하면 됩니다.
          </p>
          <span className="prototype-badge">실제 데이터는 전송되지 않습니다</span>
        </aside>
        <Suspense fallback={<div className="contact-form">폼을 준비하고 있습니다.</div>}>
          <ContactForm />
        </Suspense>
      </section>
    </>
  );
}

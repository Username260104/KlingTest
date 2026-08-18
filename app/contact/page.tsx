import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "../../components/ContactForm";
import { PageIntro } from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "기업 공급가 문의",
  description:
    "기업용 Kling 크레딧의 도입 규모와 공급 조건을 상담합니다.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        index="CONTACT / B2B"
        eyebrow="CONTACT"
        title="기업용 Kling 크레딧 공급 상담"
        description="사용 목적과 구매 일정을 알려주세요. 필요 수량은 미정이어도 됩니다."
      />

      <section className="subpage-section page-shell contact-layout">
        <aside className="contact-aside">
          <span className="eyebrow">INQUIRY GUIDE</span>
          <h2>기본 정보만으로 상담을 시작할 수 있습니다</h2>
          <p>
            필수 항목을 먼저 작성하고, 사용 규모와 구매 일정은 아는 범위에서
            추가해 주세요.
          </p>
          <span className="prototype-badge">
            화면 검토용 프로토타입입니다. 입력 내용은 전송하거나 저장하지 않습니다.
          </span>
        </aside>
        <Suspense fallback={<div className="contact-form">문의 양식을 불러오는 중입니다.</div>}>
          <ContactForm />
        </Suspense>
      </section>
    </>
  );
}

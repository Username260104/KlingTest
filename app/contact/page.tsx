import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "../../components/ContactForm";
import { PageIntro } from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "기업용 Kling 크레딧 공급 문의",
  description:
    "정확한 크레딧 수량을 몰라도 시작할 수 있는 기업용 Kling 크레딧 공급 문의입니다.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        index="02 / CONTACT"
        eyebrow="CONTACT"
        title="기업용 Kling 크레딧 공급을 문의하세요"
        description="정확한 크레딧 수량을 몰라도 문의할 수 있습니다. 사용 목적과 예상 규모를 확인해 필요한 크레딧과 기업 공급가를 안내합니다."
      />

      <section className="subpage-section page-shell contact-layout">
        <aside className="contact-aside">
          <span className="eyebrow">B2B CREDIT INQUIRY</span>
          <h2>아는 정보부터 편하게 남겨주세요</h2>
          <p>
            회사 정보와 문의 내용을 먼저 남기고, 사용 상황이나 예상 규모는
            선택 정보에서 추가할 수 있습니다.
          </p>
          <span className="prototype-badge">
            현재는 입력 흐름 확인용 프로토타입이며 실제 문의가 전송되지 않습니다.
          </span>
        </aside>
        <Suspense fallback={<div className="contact-form">폼을 준비하고 있습니다.</div>}>
          <ContactForm />
        </Suspense>
      </section>
    </>
  );
}

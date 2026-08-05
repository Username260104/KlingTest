import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "../../components/ContactForm";
import { PageIntro } from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "Kling 크레딧 공급 문의",
  description: "기업 고객 대상 Kling 크레딧 공급가 문의",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        index="02 / CONTACT"
        eyebrow="CONTACT"
        title="Kling 크레딧 공급을 문의하세요."
        description="회사 정보와 예상 필요 수량을 남겨주시면 기업 공급가를 안내합니다."
      />

      <section className="subpage-section page-shell contact-layout">
        <aside className="contact-aside">
          <span className="eyebrow">CREDIT INQUIRY</span>
          <h2>Kling 크레딧 문의를 한 번에</h2>
          <p>
            회사 정보와 필요한 크레딧 수량, 구매 희망 시기를 남겨주세요.
            확인 후 기업 고객 대상 공급가를 안내합니다.
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

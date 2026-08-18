import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "../../components/ContactForm";
import { PageIntro } from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "Kling 크레딧 공급가 문의",
  description:
    "Kling 크레딧 구매를 검토 중이라면 사용 목적과 구매 일정을 알려주세요. 필요한 수량은 나중에 정해도 됩니다.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        index="CONTACT / B2B"
        eyebrow="CONTACT"
        title="Kling 크레딧 공급 문의"
        description="필요한 수량을 아직 모르셔도 괜찮습니다. 사용 목적과 구매 일정을 남겨주세요."
      />

      <section className="subpage-section page-shell contact-layout">
        <aside className="contact-aside">
          <span className="eyebrow">INQUIRY GUIDE</span>
          <h2>알고 계신 내용만 적어주세요</h2>
          <p>
            회사 정보와 문의 내용을 먼저 작성해 주세요. 사용량이나 구매 시기가
            정해지지 않았다면 비워두셔도 됩니다.
          </p>
          <span className="prototype-badge">
            현재는 화면 확인용 프로토타입입니다. 입력하신 내용은 전송되거나 저장되지 않습니다.
          </span>
        </aside>
        <Suspense fallback={<div className="contact-form">문의 양식을 불러오고 있습니다.</div>}>
          <ContactForm />
        </Suspense>
      </section>
    </>
  );
}

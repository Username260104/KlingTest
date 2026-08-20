import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Kling API 공급가 문의",
  description:
    "Kling API 도입을 검토 중이라면 사용 목적과 도입 일정을 알려주세요. 필요한 사용량은 나중에 정해도 됩니다.",
};

const supplySteps = [
  { index: "01", title: "문의 접수", body: "회사 정보와 사용 목적을 남겨주세요." },
  { index: "02", title: "사용량 확인", body: "어떤 영상을 얼마나 만들지 확인하고, 필요한 크레딧을 함께 계산합니다." },
  { index: "03", title: "가격 안내", body: "사용량에 맞는 가격과 구매 조건을 안내합니다." },
  { index: "04", title: "크레딧 지급", body: "수량과 일정을 확정하면 Kling 크레딧을 지급합니다." },
];

export default function ContactPage() {
  return (
    <>
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

      <section id="supply-process" className="b2b-section page-shell" aria-labelledby="supply-process-title">
        <div className="b2b-section-heading">
          <p>PROCESS</p>
          <h2 id="supply-process-title">문의 후에는 이렇게 진행됩니다</h2>
        </div>
        <ol className="b2b-process-grid">
          {supplySteps.map((step) => (
            <li key={step.index}>
              <span>{step.index}</span><h3>{step.title}</h3><p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

"use client";

import { FormEvent, InvalidEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

const validUsageValues = ["test", "project", "recurring", "large"];

type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const requiredMessages: Record<string, string> = {
  company: "회사명을 입력해 주세요.",
  name: "담당자명을 입력해 주세요.",
  email: "업무용 이메일을 입력해 주세요.",
  inquiryType: "문의 유형을 선택해 주세요.",
  message: "문의 내용을 입력해 주세요.",
  privacyConsent: "개인정보 수집·이용 동의가 필요합니다.",
};

function handleInvalid(event: InvalidEvent<FormControl>) {
  const field = event.currentTarget;
  const message =
    field.name === "email" && field.validity.typeMismatch
      ? "업무용 이메일 형식을 확인해 주세요."
      : requiredMessages[field.name] ?? "필수 항목을 확인해 주세요.";
  field.setCustomValidity(message);
}

function clearValidation(event: FormEvent<FormControl>) {
  event.currentTarget.setCustomValidity("");
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const requestedUsage = searchParams.get("use") ?? "";
  const hasPresetUsage = validUsageValues.includes(requestedUsage);
  const [submitted, setSubmitted] = useState(false);
  const [usage, setUsage] = useState(hasPresetUsage ? requestedUsage : "undecided");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <div>
          <div className="success-mark" aria-hidden="true">✓</div>
          <h2>입력하신 내용을 확인했습니다</h2>
          <p>현재 프로토타입에서는 실제 문의가 전송되지 않습니다.</p>
          <button className="b2b-button b2b-button-secondary" type="button" onClick={() => setSubmitted(false)}>
            입력 내용 수정하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form b2b-contact-form" onSubmit={handleSubmit}>
      <section className="form-section">
        <div className="form-section-title">
          <span>01</span>
          <h2>문의 정보</h2>
        </div>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="company">회사명 <span className="required">*</span></label>
            <input id="company" name="company" placeholder="회사명을 입력해 주세요" required onInvalid={handleInvalid} onInput={clearValidation} />
          </div>
          <div className="field">
            <label htmlFor="name">담당자명 <span className="required">*</span></label>
            <input id="name" name="name" placeholder="담당자명을 입력해 주세요" required onInvalid={handleInvalid} onInput={clearValidation} />
          </div>
          <div className="field">
            <label htmlFor="email">업무용 이메일 <span className="required">*</span></label>
            <input id="email" name="email" type="email" placeholder="name@company.com" required onInvalid={handleInvalid} onInput={clearValidation} />
          </div>
          <div className="field">
            <label htmlFor="inquiryType">문의 유형 <span className="required">*</span></label>
            <select id="inquiryType" name="inquiryType" defaultValue="" required onInvalid={handleInvalid} onInput={clearValidation}>
              <option value="" disabled>문의 유형을 선택해 주세요</option>
              <option>크레딧 공급가 문의</option>
              <option>도입·사용 상담</option>
              <option>결제 및 구매 서류</option>
              <option>사업 제휴</option>
              <option>기타 문의</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="message">문의 내용 <span className="required">*</span></label>
            <textarea
              id="message"
              name="message"
              placeholder="사용 목적과 궁금한 점을 적어주세요. 필요한 수량을 아직 모르셔도 괜찮습니다."
              required
              onInvalid={handleInvalid}
              onInput={clearValidation}
            />
          </div>
        </div>
      </section>

      <details className="optional-fields" open>
        <summary onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>
          <span>추가 정보 (선택)</span>
          <small>알고 계신 항목만 작성해 주세요</small>
        </summary>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="contactId">연락처</label>
            <input id="contactId" name="contactId" placeholder="전화번호를 입력해 주세요" />
          </div>
          <div className="field">
            <label htmlFor="industry">업종</label>
            <input id="industry" name="industry" placeholder="예: 광고·마케팅, 콘텐츠 제작" />
          </div>
          <div className="field full">
            <label htmlFor="companyUrl">회사 홈페이지 또는 제품 링크</label>
            <input id="companyUrl" name="companyUrl" type="url" placeholder="https://" />
          </div>
          <div className="field">
            <label htmlFor="usage">사용 상황</label>
            <select id="usage" name="usage" value={usage} onChange={(event) => setUsage(event.target.value)}>
              <option value="undecided">미정</option>
              <option value="test">초기 테스트</option>
              <option value="project">프로젝트 사용</option>
              <option value="recurring">정기적 사용</option>
              <option value="large">대량 사용</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="purpose">주요 사용 목적</label>
            <select id="purpose" name="purpose" defaultValue="undecided">
              <option value="undecided">미정</option>
              <option>영상 생성</option>
              <option>이미지 생성</option>
              <option>광고·브랜드 영상</option>
              <option>소셜 숏폼</option>
              <option>프리비주얼</option>
              <option>기타</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="experience">Kling 사용 현황</label>
            <select id="experience" name="experience" defaultValue="not-used">
              <option value="not-used">아직 사용하지 않음</option>
              <option>Kling 웹사이트에서 사용 중</option>
              <option>API 테스트 경험 있음</option>
              <option>API를 제품에 연동해 사용 중</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="scale">예상 사용량</label>
            <input id="scale" name="scale" placeholder="예: 월 100건, 100,000 크레딧, 미정" />
          </div>
          <div className="field">
            <label htmlFor="timeline">구매 희망 시기</label>
            <select id="timeline" name="timeline" defaultValue="undecided">
              <option value="undecided">미정</option>
              <option>즉시</option>
              <option>1개월 이내</option>
              <option>3개월 이내</option>
              <option>장기 검토</option>
            </select>
          </div>
        </div>
      </details>

      <label className="agreement">
        <input type="checkbox" name="privacyConsent" required onInvalid={handleInvalid} onInput={clearValidation} />
        <span>
          [필수] 상담을 위한 개인정보 수집·이용에 동의합니다.
          <small> 정식 동의문은 실제 문의 기능을 연결할 때 제공됩니다.</small>
        </span>
      </label>
      <button className="submit-button" type="submit">
        입력 내용 확인하기 <span aria-hidden="true">↗</span>
      </button>
      <p className="form-prototype-note">입력하신 내용은 전송되거나 저장되지 않습니다.</p>
    </form>
  );
}

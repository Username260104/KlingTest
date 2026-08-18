"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

const validUsageValues = ["test", "project", "recurring", "large"];

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
          <h2>문의 입력 내용을 확인했습니다.</h2>
          <p>프로토타입에서는 실제 문의가 전송되지 않습니다.</p>
          <button className="b2b-button b2b-button-secondary" type="button" onClick={() => setSubmitted(false)}>
            폼 다시 보기
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
          <h2>필수 정보</h2>
        </div>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="company">회사명 <span className="required">*</span></label>
            <input id="company" name="company" placeholder="회사명을 입력해 주세요." required />
          </div>
          <div className="field">
            <label htmlFor="name">담당자명 <span className="required">*</span></label>
            <input id="name" name="name" placeholder="담당자 성함을 입력해 주세요." required />
          </div>
          <div className="field">
            <label htmlFor="email">업무용 이메일 <span className="required">*</span></label>
            <input id="email" name="email" type="email" placeholder="name@company.com" required />
          </div>
          <div className="field">
            <label htmlFor="inquiryType">문의 유형 <span className="required">*</span></label>
            <select id="inquiryType" name="inquiryType" defaultValue="" required>
              <option value="" disabled>선택해 주세요.</option>
              <option>크레딧 공급가·도입 상담</option>
              <option>결제·기업 구매 서류</option>
              <option>사업 협력</option>
              <option>기타</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="message">문의 내용 또는 사용 시나리오 <span className="required">*</span></label>
            <textarea
              id="message"
              name="message"
              placeholder="사용 목적, 주요 요구사항 또는 궁금한 내용을 알려주세요. 정확한 크레딧 수량은 몰라도 괜찮습니다."
              required
            />
          </div>
        </div>
      </section>

      <details className="optional-fields" open={hasPresetUsage || undefined}>
        <summary>
          <span>선택 정보 추가</span>
          <small>사용 상황·예상 규모·구매 시기 등</small>
        </summary>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="contactId">연락처 또는 WeChat ID</label>
            <input id="contactId" name="contactId" placeholder="연락 가능한 정보를 입력해 주세요." />
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
            <label htmlFor="purpose">필요 기능 또는 사용 목적</label>
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
            <label htmlFor="experience">현재 Kling 사용 경험</label>
            <select id="experience" name="experience" defaultValue="not-used">
              <option value="not-used">아직 사용해 보지 않음</option>
              <option>웹사이트에서만 사용해 봄</option>
              <option>API를 호출해 테스트해 봄</option>
              <option>제품에 API를 통합해 사용 중</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="scale">예상 사용 규모</label>
            <input id="scale" name="scale" placeholder="예: 월 100건, 100,000 크레딧 또는 미정" />
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
        <input type="checkbox" name="privacyConsent" required />
        <span>
          [필수] 상담을 위한 개인정보 수집·이용에 동의합니다.
          <small> 실제 수집 항목·목적·보유기간은 확정 문구 제공 전까지 프로토타입 안내 상태입니다.</small>
        </span>
      </label>
      <button className="submit-button" type="submit">
        기업 공급가 문의하기 <span aria-hidden="true">↗</span>
      </button>
      <p className="form-prototype-note">입력한 정보는 외부로 전송되거나 저장되지 않습니다.</p>
    </form>
  );
}

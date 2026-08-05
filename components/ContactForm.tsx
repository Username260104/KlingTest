"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <div>
          <div className="success-mark">✓</div>
          <h2>문의 입력 화면을 확인했습니다.</h2>
          <p>
            현재 프로토타입에서는 실제 문의가 전송되지 않습니다.
            운영 전환 시 접수 결과와 예상 회신 시간을 이곳에 표시합니다.
          </p>
          <button className="button button-secondary" type="button" onClick={() => setSubmitted(false)}>
            폼 다시 보기
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <section className="form-section">
        <div className="form-section-title">
          <span>01</span>
          <h2>기본 정보</h2>
        </div>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="company">회사명 <span className="required">*</span></label>
            <input id="company" name="company" placeholder="회사명을 입력하세요" required />
          </div>
          <div className="field">
            <label htmlFor="name">담당자명 <span className="required">*</span></label>
            <input id="name" name="name" placeholder="성함을 입력하세요" required />
          </div>
          <div className="field">
            <label htmlFor="email">이메일 <span className="required">*</span></label>
            <input id="email" name="email" type="email" placeholder="name@company.com" required />
          </div>
          <div className="field">
            <label htmlFor="phone">연락처</label>
            <input id="phone" name="phone" type="tel" placeholder="010-0000-0000" />
          </div>
        </div>
      </section>

      <section className="form-section">
        <div className="form-section-title">
          <span>02</span>
          <h2>크레딧 공급 정보</h2>
        </div>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="credits">예상 필요 크레딧 <span className="required">*</span></label>
            <input
              id="credits"
              name="credits"
              placeholder="예: 100,000 크레딧 또는 미정"
              required
            />
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
          <div className="field">
            <label htmlFor="purpose">사용 목적 <span className="required">*</span></label>
            <select id="purpose" name="purpose" required defaultValue="">
              <option value="" disabled>선택하세요</option>
              <option>광고 시안</option>
              <option>제품·브랜드 영상</option>
              <option>소셜 숏폼</option>
              <option>프리비주얼</option>
              <option>대량 콘텐츠 제작</option>
              <option>기타 기업용 영상 제작</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="message">문의 내용 <span className="required">*</span></label>
            <textarea
              id="message"
              name="message"
              placeholder="필요한 크레딧 수량과 문의 사항을 간단히 적어주세요."
              required
            />
          </div>
        </div>
      </section>

      <label className="agreement">
        <input type="checkbox" required />
        <span>[필수] 상담을 위한 개인정보 수집·이용에 동의합니다. 실제 동의 문구와 보유기간은 추후 입력합니다.</span>
      </label>
      <button className="submit-button" type="submit">
        크레딧 공급 문의하기 ↗
      </button>
    </form>
  );
}

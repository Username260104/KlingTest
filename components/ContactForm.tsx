"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [model, setModel] = useState("undecided");
  const [plan, setPlan] = useState("undecided");

  useEffect(() => {
    const nextModel = searchParams.get("model");
    const nextPlan = searchParams.get("plan");

    if (["kling", "seedance", "both", "undecided"].includes(nextModel ?? "")) {
      setModel(nextModel ?? "undecided");
    }
    if (["poc", "project", "monthly", "enterprise", "undecided"].includes(nextPlan ?? "")) {
      setPlan(nextPlan ?? "undecided");
    }
  }, [searchParams]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <div>
          <div className="success-mark">✓</div>
          <h2>문의 입력이 완료되었습니다.</h2>
          <p>
            현재 프론트엔드 프로토타입에서는 실제 문의가 전송되지 않습니다.
            실제 운영 시 접수번호와 예상 회신 시간을 이곳에 표시합니다.
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
          <h2>도입 정보</h2>
        </div>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="model">희망 모델 <span className="required">*</span></label>
            <select id="model" value={model} onChange={(event) => setModel(event.target.value)}>
              <option value="undecided">미정</option>
              <option value="kling">Kling</option>
              <option value="seedance">Seedance</option>
              <option value="both">두 모델 모두</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="plan">희망 계약 방식</label>
            <select id="plan" value={plan} onChange={(event) => setPlan(event.target.value)}>
              <option value="undecided">미정</option>
              <option value="poc">테스트·PoC</option>
              <option value="project">프로젝트 크레딧</option>
              <option value="monthly">월 사용량 계약</option>
              <option value="enterprise">기업 맞춤 계약</option>
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
              <option>AI 영상 서비스 개발</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="volume">예상 월 생성량 <span className="required">*</span></label>
            <select id="volume" name="volume" required defaultValue="">
              <option value="" disabled>선택하세요</option>
              <option>테스트·PoC</option>
              <option>100건 미만</option>
              <option>100–499건</option>
              <option>500–1,999건</option>
              <option>2,000건 이상</option>
              <option>미정</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="message">문의 내용 <span className="required">*</span></label>
            <textarea id="message" name="message" placeholder="프로젝트와 필요한 지원 내용을 간단히 적어주세요." required />
          </div>
        </div>
      </section>

      <details className="optional-fields">
        <summary>선택 정보 추가</summary>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="budget">예상 월 예산</label>
            <select id="budget" name="budget" defaultValue="undecided">
              <option value="undecided">미정</option>
              <option>100만원 미만</option>
              <option>100만–499만원</option>
              <option>500만–999만원</option>
              <option>1,000만원 이상</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="integration">API 연동 필요 여부</label>
            <select id="integration" name="integration" defaultValue="undecided">
              <option value="undecided">미정</option>
              <option>필요</option>
              <option>불필요</option>
              <option>상담 후 결정</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="timeline">도입 희망 시기</label>
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
        <input type="checkbox" required />
        <span>[필수] 상담을 위한 개인정보 수집·이용에 동의합니다. 실제 동의 문구와 보유기간은 추후 입력합니다.</span>
      </label>
      <button className="submit-button" type="submit">
        문의하기 ↗
      </button>
    </form>
  );
}

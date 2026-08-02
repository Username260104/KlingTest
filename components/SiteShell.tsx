import Link from "next/link";

const navigation = [
  { label: "홈", href: "/" },
  { label: "회사·파트너", href: "/company" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <Link href="/" className="brand" aria-label="Entresol 홈">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Entresol</span>
        </Link>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="header-cta">
          문의하기 <span aria-hidden="true">↗</span>
        </Link>

        <details className="mobile-menu">
          <summary aria-label="메뉴 열기">MENU</summary>
          <nav aria-label="모바일 메뉴">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact">문의하기 ↗</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>Entresol</span>
          </div>
          <p>국내 공식 총판 · 기업용 크레딧 공급</p>
        </div>
        <div>
          <span className="footer-label">PAGES</span>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-label">CONTACT</span>
          <Link href="/contact">문의하기</Link>
          <span>[대표 이메일]</span>
          <span>[대표 전화]</span>
          <span>[회사 주소]</span>
        </div>
        <div>
          <span className="footer-label">LEGAL</span>
          <span>개인정보처리방침 · 후속</span>
          <span>서비스 이용안내 · 후속</span>
          <span>파트너 관계 문구 · 확정 필요</span>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>FRONTEND PROTOTYPE · 2026</span>
        <span>회사명 및 사업자 정보 입력 필요</span>
      </div>
    </footer>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action && (
        <Link href={action.href} className="text-link">
          {action.label} →
        </Link>
      )}
    </div>
  );
}

export function PageIntro({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro page-shell">
      <span className="page-index">{index}</span>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export function ContentNeeded({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <aside className="content-needed">
      <div>
        <span className="content-needed-label">CONTENT CHECK</span>
        <h2>{title}</h2>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span aria-hidden="true">○</span> {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

import Link from "next/link";

const navigation = [
  { label: "홈", href: "/" },
  { label: "공식 총판 안내", href: "/company" },
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
          크레딧 공급 문의 <span aria-hidden="true">↗</span>
        </Link>

        <details className="mobile-menu">
          <summary aria-label="메뉴 열기">MENU</summary>
          <nav aria-label="모바일 메뉴">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact">크레딧 공급 문의 ↗</Link>
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
          <p>Kling 국내 공식 총판 · 기업 고객 대상 크레딧 공급</p>
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
          <Link href="/contact">크레딧 공급 문의</Link>
        </div>
        <div>
          <span className="footer-label">SERVICE</span>
          <span>Kling 국내 공식 총판</span>
          <span>Kling 본사 직접 계약</span>
          <span>기업 고객 대상 크레딧 공급</span>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>© 2026 ENTRESOL</span>
        <span>KLING OFFICIAL DISTRIBUTOR · KOREA</span>
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

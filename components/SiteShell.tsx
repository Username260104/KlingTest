import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell header-inner landing-header">
        <Link href="/" className="brand" aria-label="Entresol 홈으로 이동">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Entresol</span>
        </Link>

        <Link href="/contact" className="header-cta">
          문의하기 <span aria-hidden="true">↗</span>
        </Link>
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
          <p>기업용 Kling 크레딧 공급</p>
        </div>
        <div>
          <span className="footer-label">CONTACT</span>
          <Link href="/contact">문의하기</Link>
        </div>
        <div>
          <span className="footer-label">POLICY</span>
          <span id="privacy-policy">개인정보처리방침 (준비 중)</span>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>© 2026 ENTRESOL</span>
        <span>KLING FOR BUSINESS</span>
      </div>
    </footer>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={id}>{title}</h2>
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

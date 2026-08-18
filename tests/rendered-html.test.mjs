import assert from "node:assert/strict";
import { stat } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

const routes = [
  ["/", "기업을 위한 Kling 크레딧 공급"],
  ["/contact", "기업용 Kling 크레딧 공급을 문의하세요"],
];

for (const [pathname, expectedText] of routes) {
  test(`${pathname} renders the revised prototype`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, new RegExp(expectedText));
    assert.match(html, /Entresol/);
    assert.doesNotMatch(html, /codex-preview/);
  });
}

const mergedRoutes = [
  ["/models", "#inquiry-guide"],
  ["/plans", "#use-cases"],
  ["/company", "#official-relationship"],
];

for (const [pathname, anchor] of mergedRoutes) {
  test(`${pathname} redirects to a valid revised landing section`, async () => {
    const response = await render(pathname);
    assert.ok([307, 308].includes(response.status));
    assert.match(response.headers.get("location") ?? "", new RegExp(`${anchor}$`));
  });
}

test("the landing page follows the specified seven-part flow", async () => {
  const response = await render("/");
  const html = await response.text();
  const orderedCopy = [
    "기업을 위한 Kling 크레딧 공급",
    "공식 공급 관계를 투명하게 안내합니다",
    "기업의 네 가지 사용 상황",
    "문의 전에 확인하면 좋은 정보",
    "문의부터 크레딧 공급까지",
    "정확한 수량을 몰라도 문의할 수 있습니다",
    "site-footer",
  ];

  let previous = -1;
  for (const copy of orderedCopy) {
    const position = html.indexOf(copy);
    assert.ok(position > previous, `${copy} should appear in the specified order`);
    previous = position;
  }

  for (const use of ["test", "project", "recurring", "large"]) {
    assert.match(html, new RegExp(`href="/contact\\?use=${use}"`));
  }

  assert.match(html, /id="inquiry-guide"/);
  assert.match(html, /id="use-cases"/);
  assert.match(html, /id="official-relationship"/);
  assert.doesNotMatch(
    html,
    /경쟁력 있는 가격|국내 최초|독점|hero-road-pov|QUICK GUIDE|CONTENT CHECK|PARTNER STATUS|확정된 공급 정보|크레딧 공급 안내/,
  );

  const footer = html.match(/<footer[\s\S]*?<\/footer>/)?.[0] ?? "";
  assert.doesNotMatch(footer, /공식 총판|본사 직접 계약/);
});

test("the contact form keeps only the agreed fields required", async () => {
  const response = await render("/contact");
  const html = await response.text();

  for (const field of ["company", "name", "email", "inquiryType", "message", "privacyConsent"]) {
    assert.match(html, new RegExp(`name="${field}"[^>]*required|required=""[^>]*name="${field}"`));
  }

  for (const optionalField of ["contactId", "industry", "companyUrl", "usage", "purpose", "experience", "scale", "timeline"]) {
    assert.match(html, new RegExp(`name="${optionalField}"`));
  }

  assert.match(html, /<details class="optional-fields">/);
  assert.match(html, /value="undecided" selected="">미정/);
  assert.doesNotMatch(html, /예상 구매 예산|Kling ID|API 월간 예산|예산 구간/);
  assert.doesNotMatch(html, /<form[^>]+action=/);
});

const presetUsage = [
  ["test", "초기 테스트"],
  ["project", "프로젝트 사용"],
  ["recurring", "정기적 사용"],
  ["large", "대량 사용"],
];

for (const [value, label] of presetUsage) {
  test(`?use=${value} opens optional fields and selects ${label}`, async () => {
    const response = await render(`/contact?use=${value}`);
    const html = await response.text();
    assert.match(html, /<details class="optional-fields" open="">/);
    assert.match(html, new RegExp(`value="${value}" selected="">${label}`));
  });
}

test("unknown use values fall back to an unopened undecided state", async () => {
  const response = await render("/contact?use=unknown");
  const html = await response.text();
  assert.match(html, /<details class="optional-fields">/);
  assert.match(html, /value="undecided" selected="">미정/);
});

test("the project includes the finished social preview image", async () => {
  const asset = await stat(new URL("../public/og-entresol-b2b.png", import.meta.url));
  assert.ok(asset.size > 100_000, "social preview should be a production image");
});

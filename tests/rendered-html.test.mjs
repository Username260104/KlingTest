import assert from "node:assert/strict";
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
  ["/", "Kling 국내 공식 총판"],
  ["/contact", "Kling 크레딧 공급을 문의하세요"],
];

for (const [pathname, expectedText] of routes) {
  test(`${pathname} renders the prototype page`, async () => {
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
  ["/models", "#credit-guide"],
  ["/plans", "#supply-types"],
  ["/company", "#official-distributor"],
];

for (const [pathname, anchor] of mergedRoutes) {
  test(`${pathname} redirects to its section on the landing page`, async () => {
    const response = await render(pathname);
    assert.ok([307, 308].includes(response.status));
    assert.match(response.headers.get("location") ?? "", new RegExp(`${anchor}$`));
  });
}

test("the single landing page contains the full service and distributor content", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.match(html, /크레딧 공급 문의/);
  assert.match(html, /id="credit-guide"/);
  assert.match(html, /id="supply-types"/);
  assert.match(html, /id="official-distributor"/);
  assert.match(html, /필요한 크레딧 규모를 확인하는 기준/);
  assert.match(html, /기업의 네 가지 사용 상황/);
  assert.match(html, /Kling 본사 직접 계약/);
  assert.match(html, /기업 고객 대상/);
  assert.match(html, /크레딧 수량 안내/);
  assert.match(html, /공급 방식 보기/);
  assert.doesNotMatch(html, /href="\/company"/);
  assert.doesNotMatch(html, /href="\/models"/);
  assert.doesNotMatch(html, /href="\/plans"/);
  assert.doesNotMatch(html, /기업 견적 요청/);
});

test("public pages do not expose services outside the confirmed scope", async () => {
  const forbiddenCopy =
    /Seedance|API·크레딧|API 연동|API 사용권|한·중 합작법인|원화 결제|세금계산서|기술지원|원하는 사양|월 사용량 계약/;

  for (const pathname of ["/", "/models", "/plans", "/company", "/contact"]) {
    const response = await render(pathname);
    const html = await response.text();
    assert.doesNotMatch(html, forbiddenCopy, `${pathname} contains out-of-scope copy`);
  }
});

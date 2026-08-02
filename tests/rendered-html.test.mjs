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
  ["/models", "모델 선택에 필요한 정보만"],
  ["/plans", "고정 가격표보다 사용 방식에 맞는 계약"],
  ["/company", "국내 계약과 공급을 책임지는 파트너"],
  ["/contact", "필요한 사양과 계약 조건을 알려주세요"],
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

test("primary navigation and inquiry copy are simplified", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.match(html, /홈/);
  assert.match(html, /회사·파트너/);
  assert.match(html, /문의하기/);
  assert.doesNotMatch(html, /지원 모델/);
  assert.doesNotMatch(html, /계약·도입/);
  assert.doesNotMatch(html, /기업 견적 요청/);
  assert.doesNotMatch(html, /Kling and Seedance/);
});

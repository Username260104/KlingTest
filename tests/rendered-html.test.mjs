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
  ["/", "글로벌 AI 영상 모델을"],
  ["/models", "모델 선택에 필요한 정보만"],
  ["/plans", "고정 가격표보다 사용 방식에 맞는 계약"],
  ["/company", "무엇을 누구와 계약하는지"],
  ["/contact", "필요한 모델과 사용량을 알려주세요"],
];

for (const [pathname, expectedText] of routes) {
  test(`${pathname} renders the prototype page`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, new RegExp(expectedText));
    assert.match(html, /AI VIDEO SUPPLY/);
    assert.doesNotMatch(html, /codex-preview/);
  });
}

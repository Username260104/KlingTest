# Kling 기반 다크 디자인 토큰

기준 화면: Kling Creative Studio의 영상 생성 UI  
확인일: 2026-08-01  
적용 범위: 색상, 표면, 테두리, 그림자, 모서리, 기본 글자 크기, 버튼 그라디언트

Kling 로고나 고유 심볼은 복제하지 않고, UI 시스템의 시각 토큰만 B2B 랜딩사이트 구조에 맞게 적용한다.

## 핵심 색상

| 용도 | 원본 토큰 | 값 |
|---|---|---|
| 전체 배경 | `--color-bg-page` | `#0a0a0a` |
| 1차 표면 | `--color-bg-primary` | `#111214` |
| 2차 표면 | `--color-bg-secondary` | `#1a1c1f` |
| 3차 표면 | `--color-bg-tertiary` | `#1f2124` |
| 팝오버 표면 | `--color-bg-popover` | `#2d2f33` |
| 컨테이너 테두리 | `--color-border-container` | `#242629` |
| 컴포넌트 테두리 | `--color-border-component` | `#3a3c3d` |
| 호버 테두리 | `--color-border-hover` | `#76787a` |
| 기본 텍스트 | `--color-text-1` | `#f9fbfc` |
| 보조 텍스트 | `--color-text-2` | `#b6bbc2` |
| 비강조 텍스트 | `--color-text-3` | `#777e85` |
| 비활성 텍스트 | `--color-text-4` | `#595d61` |
| 핵심 강조색 | `--color-theme-2` | `#74ff52` |
| 강조 호버 | `--color-theme-hover` | `#9fff75` |
| 링크 | `--color-fill-link` | `#5cbeff` |
| 오류 | `--color-fill-error` | `#f04b22` |

## 핵심 버튼

```css
linear-gradient(
  90deg,
  #29cc49 0%,
  #51e02d 24%,
  #74ff52 76%,
  #99eb2f 100%
)
```

버튼 글자는 검정색, 기본 높이는 38~48px, 모서리는 8px을 사용한다.

## 표면과 모서리

- 작은 컨트롤: 8px
- 콘텐츠 카드: 10~12px
- 큰 모델·파트너 패널: 16px
- 필 또는 상태 배지: 999px
- 기본 컨테이너 그림자: `0 4px 40px rgb(0 0 0 / 40%)`
- 작은 컴포넌트 그림자: `0 2px 16px rgb(0 0 0 / 24%)`

## 타이포그래피 적용

원본 UI는 14px을 기본 크기로 사용한다. 한국어 환경에서는 다음 순서로 적용한다.

```css
"PingFang SC", "Pretendard", "Noto Sans KR",
"Apple SD Gothic Neo", Arial, sans-serif
```

제품 UI의 작은 크기를 그대로 랜딩페이지 제목에 적용하지 않고, 본문·메뉴·폼에는 원본 스케일을 유지하면서 랜딩페이지 제목만 크게 확장한다.

## 적용 원칙

- 배경과 카드가 모두 검정에 묻히지 않도록 `#0a0a0a → #111214 → #1a1c1f` 순서로 깊이를 만든다.
- 초록색은 주요 CTA, 선택 상태, 중요한 숫자에만 제한한다.
- 대부분의 테두리는 `#242629`, 입력과 강조 카드는 `#3a3c3d`를 사용한다.
- 카드 호버는 큰 움직임 대신 1~3px 이동과 테두리 밝기 변화만 사용한다.
- 기존 Kling 로고, 고유 심볼, 제품 스크린샷은 사용하지 않는다.

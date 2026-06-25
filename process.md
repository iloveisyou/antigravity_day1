# 프로젝트 개발 및 대화 프로세스 기록 (Process Journal)

본 문서는 프로젝트 개발 시작부터 현재까지 진행된 사용자(USER)와 AI(Antigravity) 간의 모든 대화 히스토리 및 개발 의사결정 과정을 상세하게 기록하고 관리하는 일지입니다.

---

## 📅 개발 타임라인 및 작업 상세

### 🟢 1단계: 브라우저 상호작용 분석 및 기능 검증
* **사용자 요청**: 작성된 코드를 브라우저에서 구동하여 화면 캡처 및 작동 결과(3D 카드 기울임, 마우스 글로우 추적 효과 등) 공유.
* **조치 내용**: 에이전트 브라우저를 통해 마우스 좌표와 연동된 CSS 변수(--mouse-x, --mouse-y) 추적 글로우와 입체적인 틸트 효과, 버튼 클릭 시 파티클 스파클 비산 애니메이션의 연동 상태를 확인하고 상세 보고서를 작성함.

### 🟢 2단계: 메인 타이틀 문구 교체
* **사용자 요청**: 타이틀 문구 "내 첫 번째 아이디어S"를 "오늘도 힘내세요!"로 변경.
* **조치 내용**: [index.html](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/index.html) 파일을 수정하여 메인 헤딩 텍스트를 업데이트하고 브라우저에서 검증 후 스크린샷과 함께 결과를 보고함.

### 🟢 3단계: 로컬 웹 서버 구동
* **사용자 요청**: 프로젝트를 브라우저로 띄워 볼 수 있도록 로컬 서버 구동 요청.
* **조치 내용**: Python 빌트인 HTTP 서버 모듈을 사용해 `python3 -m http.server 8000` 백그라운드 태스크를 실행하고 로컬 접속 주소를 공유함.

### 🟢 4단계: 타이틀 폰트 크기 및 색상 수정
* **사용자 요청**: 타이틀 문장의 폰트 크기를 `40px`로 키우고 맑은 화이트 톤 색상으로 변경.
* **조치 내용**: [styles.css](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/styles.css)에서 `.main-title`에 지정되어 있던 텍스트 투명 채우기 및 배경 그라데이션을 걷어내고, `font-size: 40px` 및 `color: oklch(99% 0.003 345)`의 맑은 화이트 톤과 부드러운 드롭 섀도를 입힘.

### 🟢 5단계: 로컬 화면에 브라우저 연동
* **사용자 요청**: 사용자가 타이틀을 "오늘도 힘내세요!!"로 업데이트한 뒤, 변경된 사항을 로컬 기본 브라우저 화면에 직접 띄워달라고 요청.
* **조치 내용**: macOS 셸 명령 `open http://localhost:8000`을 실행하여 사용자의 로컬 환경 브라우저에 해당 페이지를 자동으로 띄워 확인하도록 처리함.

### 🟢 6단계: 비주얼 테마 대개편 및 "다음 문장 보기" 버튼 추가
* **사용자 요청**: 
  - 밝은 회색의 그라데이션 배경을 적용하고, 글자색(맑은 화이트)과 조화롭게 어우러지도록 전체적으로 완성도 높은 디자인으로 업그레이드 요청.
  - 설명 문장 아래에 붉은색 계열의 "다음 문장 보기" 버튼 추가 요청.
* **조치 내용**:
  - 밝은 회색 그라데이션 배경(`#f8f9fa` ~ `#e9ecef`)에서 맑은 화이트 글자가 안 보일 위험을 해결하기 위해, 카드를 고급스러운 **다크 글래스모피즘(Dark Glassmorphism)**(`rgba(18, 18, 24, 0.72)`) 스타일로 리디자인하여 대비를 극대화함.
  - [index.html](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/index.html)에 `js-next-btn` 버튼을 추가하고 코랄-레드 그라데이션을 부여함.
  - 버튼 클릭 시 여러 개의 영감 가득한 문장들이 자연스러운 페이드아웃/페이드인 애니메이션 효과와 함께 로테이션되는 동적 JavaScript 로직 구축.

### 🟢 7단계: 산출물 프로젝트 폴더 직접 관리화
* **사용자 요청**: 결과 보고서 파일(`walkthrough.md`)을 로컬 프로젝트 폴더 내부에 직접 저장하고 관리할 것을 요청.
* **조치 내용**: 아티팩트 디렉토리에만 보존되던 `walkthrough.md` 파일을 사용자의 프로젝트 폴더 하위에 직접 생성 및 이전함.

### 🟢 8단계: 타이틀 문장 4종 고정 및 버튼 테마 동적 연동
* **사용자 요청**: 
  - "다음 문장 보기" 클릭 시 설명 문구가 아닌 메인 타이틀이 "오늘도 힘내세요!!", "오늘도 해냈어요!", "조금씩 나아지고 있어요.", "이대로 계속 가봅시다." 총 4가지 후보군으로 순환하도록 변경 요청.
  - 타이틀 텍스트가 바뀔 때마다 버튼의 색상을 문장에 맞춰 노란색, 주황색, 초록색, 빨간색으로 변경 요청.
* **조치 내용**:
  - [script.js](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/script.js)에서 타이틀 요소를 타겟팅하도록 로테이션 로직 수정.
  - CSS에 각 상태에 매칭되는 클래스(`theme-red`, `theme-yellow`, `theme-orange`, `theme-green`)를 구성하여 버튼의 배경 그라데이션과 그림자 및 광원 효과를 매칭시킴.
  - 클릭 이벤트 직후 생성되는 파티클 스파클 이펙트의 색상까지 다음에 로드될 버튼 테마 컬러와 일치하도록 고도화함.

### 🟢 9단계: Git 원격 저장소 푸시
* **사용자 요청**: 개발이 완료된 소스 코드 변경사항들을 원격 저장소에 푸시 요청.
* **조치 내용**: `git add . && git commit`을 통해 변경된 파일들([index.html](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/index.html), [styles.css](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/styles.css), [script.js](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/script.js), [walkthrough.md](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/walkthrough.md))을 스테이징하고 커밋한 뒤 `git push origin main`으로 원격지에 무사히 등록 완료.

### 🟢 10단계: npm start 에러 해결 및 3단 레이아웃 개편
* **사용자 요청**: 
  - 터미널에서 `npm start` 시 발생한 에러 화면(Missing script: "start")을 공유하여 조치 요청.
  - 화면을 헤더(서비스 타이틀 / 파란색 배경), 본문(중앙 정렬), 푸터(저작권 / 회색 배경)의 3단 구역으로 분할해 달라고 요청.
* **조치 내용**:
  - `start` 및 `dev` 스크립트를 통해 로컬 웹 서버를 손쉽게 켤 수 있도록 [package.json](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/package.json) 파일을 생성하여 해결함.
  - `body`에 `flex-direction: column` 레이아웃을 도입하고, 파란색 헤더와 실버-그레이 푸터 스타일을 디자인하여 본문 영역(`.viewport-wrapper`)이 남은 뷰포트 영역을 채우면서 카드를 정중앙에 고정하도록 스타일 구조를 개편함.

### 🟢 11단계: 본문 2단 섹션 분할 및 AI 프로필 사진이 탑재된 사용자 후기 추가
* **사용자 요청**: 본문을 '핵심 기능 소개'와 '사용자 후기' 2개 섹션으로 분리하고, 가상의 후기 2개 및 실제 AI로 생성한 사용자 프로필 사진 추가 요청.
* **조치 내용**:
  - `generate_image`를 가동하여 사실적인 인물 이미지인 `user_profile_1` (디자이너) 및 `user_profile_2` (개발자) 사진을 고해상도로 획득함.
  - 프로젝트 내에 `images/` 폴더를 생성해 [user1.png](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/images/user1.png), [user2.png](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/images/user2.png)로 배치 완료.
  - 본문 레이아웃을 반응형 2열 Flex Grid 구조(`flex-wrap: wrap`)로 개편하여 데스크톱에선 좌우 나란히 배치되고 모바일에선 위아래로 정렬되게 설계함.
  - 후기 카드는 본문 카드와 통일감을 형성하는 다크 글래스모피즘 카드로 스타일링했으며, 마우스 호버 시 카드 부양 애니메이션 및 테두리 조명 효과를 가미해 프리미엄 비주얼을 구축함.

### 🟢 12단계: 연한 녹색 테마 및 본문 세로형 2단 레이아웃 개편
* **사용자 요청**:
  - 전체 서비스에 색상 테마 적용: 주 색상은 연한 녹색, 보조 색상은 주 색상에 어울리는 어두운 계열로 컬러 스킴 구성.
  - 버튼 기본 색상은 주 색상, 호버 색상은 보조 색상으로 적용.
  - 가로로 배치되어 있던 첫 번째 섹션(기능 카드)과 두 번째 섹션(사용자 후기)을 세로로 세워서 나열하도록 구성.
* **조치 내용**:
  - [styles.css](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/styles.css)를 수정하여 주 색상(`--color-accent-primary: #69db7c`) 및 어두운 보조 색상(`--color-accent-dark: #1e2d24`) 변수를 정의하고, 배경 앰비언트 글로우 및 카드를 그린-다크 톤으로 피토톤 최적화함.
  - 헤더의 파란 배경 그라데이션을 연한 녹색 그라데이션으로 교체하고 텍스트에 어두운 보조 색상을 얹어 시인성을 극대화함.
  - 기본 "시작하기" 버튼의 평소 색상을 연한 녹색으로, 마우스 호버 시 어두운 딥 그린으로 반전되도록 스타일링함.
  - 본문 컨테이너(`.viewport-wrapper`)를 `flex-direction: column`으로 수정하여 기능 카드와 후기 섹션이 세로로 정렬되도록 레이아웃 변경 완료.

### 🟢 13단계: 전역 폰트 Pretendard 변경 및 타이포그래피 굵기 튜닝
* **사용자 요청**:
  - 전체 폰트를 한글 가독성이 좋은 것으로 교체.
  - 제목은 굵게, 본문은 일반 굵기로 정리.
* **조치 내용**:
  - [index.html](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/index.html)에서 Noto Sans KR 폰트 구글 링크를 걷어내고, 한글 가독성이 극대화된 현대적인 Pretendard 폰트 패키지 CDN 링크를 연동함.
  - [styles.css](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/styles.css)의 `--font-family` 정의에 Pretendard 글꼴 패키지를 바인딩하여 전역에 렌더링되게 적용함.
  - 설명 문구(`.description`) 및 후기 본문(`.testimonial-text`)의 굵기를 기존 얇은 두께(`300`)에서 표준 가독성 두께(`400`)로 조정하여 본문 시인성을 크게 개선하고, 메인 제목 등은 `700`~`800` 두께를 고수해 가독성 위계를 정립함.

### 🟢 14단계: 헤더 타이틀 번개 아이콘 추가 및 색상 정렬
* **사용자 요청**:
  - 헤더 제목 왼쪽에 작은 아이콘(별 또는 번개) 추가.
  - 아이콘 색상은 제목과 동일하게 세팅.
* **조치 내용**:
  - [index.html](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/index.html)의 헤더 타이틀 `h2.header-title` 내부에 인라인 번개 SVG 아이콘(`svg.header-icon`)을 추가함.
  - [styles.css](file:///Users/iloveisyou/Desktop/Project/AI/antigravity/day1/styles.css)를 수정하여 `header-title`에 `display: inline-flex`와 `align-items: center` 및 `gap: 0.5rem`을 지정하여 텍스트와 아이콘이 가로로 이쁘게 흐르도록 정렬함.
  - `header-icon`에 `color: currentColor`를 바인딩하여 텍스트의 어두운 보조 색상(`#1e2d24`)을 그대로 공유해 동일한 컬러 스킴이 매칭되게 튜닝 완료함.

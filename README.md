# react-disney-app

---

react 프레임워크로 만든 디즈니 플러스 클로닝 애플리케이션 입니다.

로그인 페이지, 메인페이지, 검색 페이지, 영화 상세 페이지로 구성되어 있으며,

firebase를 이용한 구글 로그인을 통해 메인 페이지로 접근 가능하고, [TMDB](https://www.themoviedb.org/) API를 기반으로 영화 정보를 제공합니다.

\*\* 본 사이트는 상업적인 목적이 없습니다.

![disney-main](https://github.com/mangojang/react-disney-app/assets/42363123/9e4e6cce-e263-4f7f-ad7a-58bb165bbfd5)

## 배포 주소

---

> https://react-disney-app.vercel.app/

## 시작 가이드

---

### Requirements

- Node v16 이상

### Installation

```bash
git clone https://github.com/mangojang/react-disney-app.git
```

### Start

```bash
npm install
npm run dev
```

### build

```bash
npm run build
```

## 기술 스택

---

- React
- Typescript
- Next.js
- Redux
- RTK(Redux Toolkit), RTK-query
- SCSS
- Vercel
- firebase authentication

## 주요 기능

---

주요 기능은 다음과 같습니다

- 로그인 / 로그아웃
  - firebase authentication을 이용한 구글 로그인 / 로그 아웃
  - 로그인 성공 시, 메인 페이지 접근 가능
  - SSR(Server Side renderring)을 이용하여 로그인 여부 파악
  ![disney-login](https://github.com/mangojang/react-disney-app/assets/42363123/e8addd96-90e3-4f16-a31e-2447ea15eb8b)
  ![disney-logout](https://github.com/mangojang/react-disney-app/assets/42363123/db8423be-7b89-4aaa-a568-e4e5ef3c5ccf)
- 메인 페이지
  - RTK query를 사용하여 영화 정보를 가져옴.
  - 로딩 중일 경우, 스켈레톤 UI 적용
  - 상단 배너
    - 비디오 정보가 있을 경우, play 버튼 노출. 클릭 시, 유투브 동영상 재생
      ![disney-main-2](https://github.com/mangojang/react-disney-app/assets/42363123/37fa7234-856c-43eb-8972-d31a6781c464)
  - 장르 별 영화
    - [swiper](https://swiperjs.com/)를 이용한 슬라이드 구현
      ![disney-main-4](https://github.com/mangojang/react-disney-app/assets/42363123/917b7358-1099-4b97-829a-088209584be3)
    - 클릭 시, 모달 창으로 영화 정보 제공
      - useRef, useOnClickOutside 훅을 통해 모달 창 바깥을 클릭 시, 모달 창 닫기 구현.
      ![disney-main-5](https://github.com/mangojang/react-disney-app/assets/42363123/446866c5-a4fd-43ea-bcd9-ad56571c9cb6)
- 검색
  - 검색 창 입력 시, 라우터 이동을 통한 검색 결과 제공
    - useDebounce 훅을 통해 debouncing 구현
  - RTK query를 사용하여 검색 결과, 로딩 중, 결과 없는 경우를 표현
  - 검색 결과 클릭 시, 상세 정보 페이지로 이동.
  ![disney-search-1](https://github.com/mangojang/react-disney-app/assets/42363123/3b02be64-a56c-43bf-8bf7-76dc08e4cea3)
- 상세 정보 페이지
  - 영화 상세 정보를 제공.
  - getServerSideProps를 이용하여 SSR 적용
  - 상세 정보에 따른 메타 태그 변경
  ![disney-detail-1](https://github.com/mangojang/react-disney-app/assets/42363123/a464182f-1fcc-4aef-a5ed-4a671f365bcf)

## Contact

---

mangojang : mangojang994@gmail.com

## License

---

MIT License

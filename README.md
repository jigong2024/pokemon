# 포켓몬 도감 프로젝트

이 프로젝트는 React를 사용하여 구현된 포켓몬 도감 웹 애플리케이션입니다. 사용자는 다양한 포켓몬 정보를 열람하고 상세 정보를 확인할 수 있습니다.

## 프로젝트 구조

```
src/
├── App.jsx
├── components/
│ ├── Dashboard.jsx
│ ├── PokemonList.jsx
│ └── PokemonCard.jsx
├── context/
│ └── PokemonContext.jsx
├── pages/
│ ├── Home.jsx
│ ├── Dex.jsx
│ └── PokemonDetail.jsx
└── store/
├── actions.js
├── reducers.js
└── index.js
```

### 주요 컴포넌트 및 기능

#### App.jsx

- Redux store 관리
- 라우팅 설정
- Context API 설정
- 애플리케이션 진입점

#### Page

- Home: 메인 페이지
- Dex: 포켓몬 목록 페이지
- PokemonDetail: 개별 포켓몬 상세 정보 페이지

#### 컴포넌트

- Dashboard: 대시보드 UI
- PokemonList: 포켓몬 목록 표시
- PokemonCard: 개별 포켓몬 카드 UI

#### 상태 관리

- Redux를 사용한 전역 상태관리
- Context API를 통한 포켓몬 데이터 공유

#### 기술 스택

- React
- Redux
- React Router
- Context API
- Styled Components
- SweetAlert

import html from 'assets/skills/html.png';
import css from 'assets/skills/css.png';
import js from 'assets/skills/js.png';
import react from 'assets/skills/react.png';
import nodejs from 'assets/skills/nodejs.png';
import mongodb from 'assets/skills/mongodb.png';

import spongetalk from 'assets/spongetalk.png';
import momentum from 'assets/momentum.png';
import wetube from 'assets/wetube.png';
import movieapp from 'assets/movieapp.png';
import trashcan from 'assets/trashcan.png';
import boxmarket from 'assets/boxmarket.png';
import thunderinfo from 'assets/thunderinfo.png';
import todaydate from 'assets/todaydate.png';

import backdrop from 'assets/backdrop.jpg';
import profile from 'assets/profile.jpg';

export const preloadImage = [
  html,
  css,
  js,
  react,
  nodejs,
  mongodb,
  spongetalk,
  momentum,
  wetube,
  movieapp,
  trashcan,
  boxmarket,
  thunderinfo,
  todaydate,
  backdrop,
  profile,
];

export const data = {
  backdrop: backdrop,
  profile: profile,
  project: [
    {
      id: 0,
      name: '박스마켓',
      skill: [html, css, js, nodejs, mongodb],
      description:
        '서버 사이드 렌더링 방식으로 CRUD 기능이 구현된 웹 페이지를 제작해보려는 목표를 가지고 개발하였습니다.',
      feature: [
        '✔ SSR 방식의 CRUD 구현',
        '✔ passport.js를 이용한 로그인 구현',
        '✔ multer S3를 이용한 aws 업로드',
        '✔ 카카오 맵 API 활용',
      ],
      image: boxmarket,
      gitUrl: 'https://github.com/RHU5/seconde-hand-store-2021-side',
      demoUrl: 'https://shstore.herokuapp.com/',
      gif: 'https://user-images.githubusercontent.com/75672249/117532289-a72bb180-b021-11eb-8fda-55b9a091321c.gif',
    },
    {
      id: 1,
      name: '오늘의 데이트',
      skill: [html, css, js, react, nodejs, mongodb],
      description:
        '클라이언트와 서버를 구분하여 비동기 통신을 통해 CRUD 기능이 구현된 SPA 웹 페이지를 제작해보려는 목표를 가지고 개발하였습니다.',
      feature: [
        '✔ CSR 방식의 CRUD가 구현된 SPA',
        '✔ passport.js를 이용한 로그인 구현',
        '✔ multer S3를 이용한 aws 업로드',
      ],
      image: todaydate,
      gitUrl: 'https://github.com/RHU5/today-date-side',
      demoUrl: 'https://today-date.herokuapp.com/',
      gif: 'https://user-images.githubusercontent.com/75672249/129146361-8196e146-fe4c-46ce-a631-5a6d43d7b779.gif',
    },
  ],
  study: [
    {
      id: 0,
      name: '스폰지밥톡',
      skill: [html, css],
      image: spongetalk,
      gitUrl: 'https://github.com/RHU5/kokoa-clone-2021',
      demoUrl: 'https://rhu5.github.io/kokoa-clone-2021/',
    },
    {
      id: 1,
      name: '모멘텀',
      skill: [html, css, js],
      image: momentum,
      gitUrl: 'https://github.com/RHU5/momentum-clone-2021',
      demoUrl: 'https://rhu5.github.io/momentum-clone-2021/',
    },
    {
      id: 2,
      name: '위튜브',
      skill: [html, css, js, nodejs, mongodb],
      image: wetube,
      gitUrl: 'https://github.com/RHU5/wetube-clone-2021',
      demoUrl: 'https://obscure-everglades-55462.herokuapp.com/',
    },
    {
      id: 3,
      name: '영화 정보 사이트',
      skill: [html, css, js, react],
      image: movieapp,
      gitUrl: 'https://github.com/RHU5/movie-app-2021',
      demoUrl: 'https://rhu5.github.io/movie-app-2021/',
    },
    {
      id: 4,
      name: '감정 쓰레기통',
      skill: [html, css, js, react],
      image: trashcan,
      gitUrl: 'https://github.com/RHU5/emotion-trash-can-2021-side',
      demoUrl: 'https://rhu5.github.io/emotion-trash-can-2021-side/',
    },
    {
      id: 5,
      name: '썬더 인포',
      skill: [html, css, js, react],
      image: thunderinfo,
      gitUrl: 'https://github.com/RHU5/nomflix-clone-2021',
      demoUrl: 'https://trusting-jennings-569099.netlify.app/#/',
    },
  ],
};

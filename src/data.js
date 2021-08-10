import html from 'assets/html.png';
import css from 'assets/css.png';
import js from 'assets/js.png';
import react from 'assets/react.png';
import nodejs from 'assets/nodejs.png';
import mongodb from 'assets/mongodb.png';
import spongetalk from 'assets/spongetalk.png';
import momentum from 'assets/momentum.png';
import wetube from 'assets/wetube.png';
import movieapp from 'assets/movieapp.png';
import trashcan from 'assets/trashcan.png';
import boxmarket from 'assets/boxmarket.png';
import thunderinfo from 'assets/thunderinfo.png';
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
        '박스마켓은 "기존 중고 거래 사이트에 직거래 장소를 지도로 표시할 수 있는 기능이 있으면 어떨까?" 라는 생각에서 출발하였습니다.',
      feature: [
        '✔ Express를 이용한 서버 생성',
        '✔ MongoDB로 유저 및 게시글 관리',
        '✔ passport.js를 이용한 로그인 구현',
        '✔ multer S3를 이용한 aws 업로드',
        '✔ 카카오 맵 API 활용',
        '✔ MVC 패턴 활용',
      ],
      image: boxmarket,
      gitUrl: 'https://github.com/RHU5/seconde-hand-store-2021-side',
      demoUrl: 'https://shstore.herokuapp.com/',
      gif: 'https://user-images.githubusercontent.com/75672249/117532289-a72bb180-b021-11eb-8fda-55b9a091321c.gif',
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
      id: 2,
      name: '썬더 인포',
      skill: [html, css, js, react],
      image: thunderinfo,
      gitUrl: 'https://github.com/RHU5/nomflix-clone-2021',
      demoUrl: 'https://trusting-jennings-569099.netlify.app/#/',
    },
  ],
};

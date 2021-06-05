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
];

export const data = {
  project: [
    {
      id: 0,
      name: '박스마켓',
      skill: [html, css, js, nodejs, mongodb],
      description:
        '박스마켓은 "기존 중고 거래 사이트에 직거래 장소를 지도로 표시할 수 있는 기능이 있으면 어떨까?" 라는 생각에서 출발하였습니다.',
      image: boxmarket,
      gitUrl: 'https://github.com/RHU5/seconde-hand-store-2021-side',
      demoUrl: 'https://shstore.herokuapp.com/',
      gif: 'https://user-images.githubusercontent.com/75672249/117532289-a72bb180-b021-11eb-8fda-55b9a091321c.gif',
    },
    {
      id: 1,
      name: '감정 쓰레기통',
      skill: [html, css, js, react],
      description:
        '감정 쓰레기통은 자신이 가진 스트레스와 불안감 등 여러 힘든 감정이 생긴 원인을 글로 작성해보는 시간을 가지고 힘든 감정과 연관된 사진이 있다면 이를 불 태우는 과정을 거쳐 마음의 위로를 얻기 위한 사이트입니다.',
      image: trashcan,
      gitUrl: 'https://github.com/RHU5/emotion-trash-can-2021-side',
      demoUrl: 'https://rhu5.github.io/emotion-trash-can-2021-side/',
      gif: 'https://user-images.githubusercontent.com/75672249/120601312-bc5ef900-c484-11eb-9cf5-87b6ea0d3add.gif',
    },
    {
      id: 2,
      name: '썬더 인포',
      skill: [html, css, js, react],
      description:
        '썬더 인포는 themoviedb api를 사용하여 영화에 대한 정보를 제공해주는 사이트입니다.',
      image: thunderinfo,
      gitUrl: 'https://github.com/RHU5/nomflix-clone-2021',
      demoUrl: 'https://trusting-jennings-569099.netlify.app/#/',
      gif: 'https://user-images.githubusercontent.com/75672249/120606267-f7aff680-c489-11eb-9f7f-66a3823bbcb0.gif',
    },
  ],
  study: [
    {
      id: 0,
      name: '스폰지밥톡',
      skill: [html, css],
      description: '스폰지밥톡',
      image: spongetalk,
      gitUrl: 'https://github.com/RHU5/kokoa-clone-2021',
      demoUrl: 'https://rhu5.github.io/kokoa-clone-2021/',
    },
    {
      id: 1,
      name: '모멘텀',
      skill: [html, css, js],
      description: '모멘텀',
      image: momentum,
      gitUrl: 'https://github.com/RHU5/momentum-clone-2021',
      demoUrl: 'https://rhu5.github.io/momentum-clone-2021/',
    },
    {
      id: 2,
      name: '위튜브',
      skill: [html, css, js, nodejs, mongodb],
      description: '위튜브',
      image: wetube,
      gitUrl: 'https://github.com/RHU5/wetube-clone-2021',
      demoUrl: 'https://obscure-everglades-55462.herokuapp.com/',
    },
    {
      id: 3,
      name: '영화 정보 사이트',
      skill: [html, css, js, react],
      description: '영화 정보 사이트',
      image: movieapp,
      gitUrl: 'https://github.com/RHU5/movie-app-2021',
      demoUrl: 'https://rhu5.github.io/movie-app-2021/',
    },
  ],
};

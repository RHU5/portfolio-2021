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

const Data = {
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
    },
    {
      id: 1,
      name: '감정 쓰레기통',
      skill: [html, css, js, react],
      description: '감정 쓰레기통',
      image: trashcan,
      gitUrl: 'https://github.com/RHU5/emotion-trash-can-2021-side',
      demoUrl: 'https://rhu5.github.io/emotion-trash-can-2021-side/',
    },
    {
      id: 2,
      name: '썬더 인포',
      skill: [html, css, js, react],
      description: '썬더 인포',
      image: thunderinfo,
      gitUrl: 'https://github.com/RHU5/nomflix-clone-2021',
      demoUrl: 'https://trusting-jennings-569099.netlify.app/#/',
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

export default Data;

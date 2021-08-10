import styled from 'styled-components';
import PropTypes from 'prop-types';

const S = {};

S.Section = styled.div`
  padding: 100px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(168, 168, 168, 1) 100%
  );

  @media (max-width: 770px) {
    padding: 100px 20px;
  }
`;

S.Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  border-bottom: 5px solid black;
  padding-bottom: 20px;
  margin-bottom: 80px;
  @media (max-width: 770px) {
    margin-bottom: 30px;
    font-size: 30px;
  }
`;

S.Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }
`;

S.Image = styled.img`
  width: 40%;
  max-width: 300px;
  margin-right: 30px;

  border-radius: 20px;

  @media (max-width: 770px) {
    margin-right: 0px;
    margin-bottom: 30px;
    width: 100%;
  }
`;

S.Introduce = styled.p`
  width: 60%;
  max-width: 700px;
  line-height: 1.7;
  white-space: pre-line;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

const WhoIAm = ({ profile }) => {
  return (
    <S.Section>
      <S.Title>Who I AM</S.Title>
      <S.Content>
        <S.Image src={profile} alt="" />
        <S.Introduce>
          {`안녕하세요. 프론트엔드 개발자로 성장하고 싶은 지원자 류현욱입니다.
          제가 프로그래밍 세계의 관심을 가지게 된 건 학부 전공을 통해 로우
          레벨의 언어를 다루면서 시작되었습니다. 문제를 해결해나가는 과정은
          즐거움과 어려움이 공존했고, 문제를 해결했을 때에 느껴지는 뿌듯함이
          프로그래밍의 매력적인 점이라고 생각합니다.

          전공과 흥미를 살려 반도체 장비 SW 팀에 입사하였으나 제 생각과 상이한
          업무 환경이었습니다. 많은 고민을 하다가 알게 된 것이 웹
          개발자였습니다. 재직 중 HTML, CSS, Javascript를 배우면서 흥미를 가지게
          되어 도전을 결심하고 퇴사하였습니다.

          백엔드는 node.js 환경에서 Express 프레임워크를 이용해 서버를 생성한
          후, MVC 패턴으로 프로젝트를 제작해본 경험이 있습니다. Model은
          MongoDB를 이용해 데이터 모델을 간단하게 작성하고, View는 Pug 템플릿
          엔진을, Control은 Javascript를 이용하였습니다. Express 라우터 기능을
          통해 들어오는 GET 요청은 필요한 데이터를 보내주고, POST 요청은 내부
          데이터를 수정하는 방식으로 진행했습니다.

          프론트엔드는 React를 이용해 프로젝트를 제작해본 경험이 있습니다.
          Container / Presenter 패턴을 이용해 로직과 뷰를 구분하였고, 클래스형
          컴포넌트, Hooks을 이용한 함수형 컴포넌트를 사용했습니다. Axios
          라이브러리를 이용해 openAPI 데이터를 비동기로 가져와 화면에 뿌려주고,
          styled-components 라이브러리를 이용하여 UI를 작성했습니다.

          두 가지 간단한 프로젝트를 경험해보면서 웹의 전체적인 흐름을 익힐 수
          있었습니다. 그리고 저의 강점을 발견할 수 있었습니다. 모르는 개념이
          나오면 체인식으로 파고드는 것입니다. 모르는 개념 속에 또 모르는 것이
          존재하기에 이를 하나씩 알아가는 편입니다.

          위 경험을 바탕으로 백엔드보다 데이터를 시각화시키는 일의 흥미가
          더 생겨 프론트엔드를 희망하게 되었습니다. 앞으로는 사용자 경험을
          향상시킬 수 있는 능력을 가진 깔끔한 코드를 작성하는 개발자로 성장하고
          싶습니다.`}
        </S.Introduce>
      </S.Content>
    </S.Section>
  );
};

WhoIAm.propTypes = {
  profile: PropTypes.string.isRequired,
};

export default WhoIAm;

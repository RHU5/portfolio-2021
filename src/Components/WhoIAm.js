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
          안녕하세요. 프론트엔드 개발자로 성장하고 싶은 지원자
          류현욱입니다. 제가 프로그래밍의 관심을 가지게 된 건 학부
          전공을 통해 로우 레벨의 언어를 다루면서 시작되었습니다.
          문제를 해결해나가는 과정은 즐거움과 어려움이 공존했고,
          문제를 해결했을 때에 느껴지는 뿌듯함이 프로그래밍의 매력적인
          점이라고 생각합니다.
          <br />
          <br />
          전공과 흥미를 살려 반도체 장비 SW 팀에 입사하였으나 제
          생각과 상이한 업무 환경이었습니다. 많은 고민을 하다가 알게
          된 것이 웹 개발자였습니다. 재직 중 HTML, CSS, Javascript를
          배우면서 흥미를 가지게 되어 도전을 결심하고 퇴사하였습니다.
          <br />
          <br />
          개인적으로 개발환경부터 배포까지 진행해보면서 프론트엔드에
          더 관심을 가지게 되었고, 이 과정 속에서 모르는 것이 생기면
          알려고 노력하는 제 모습을 보면서 하나의 장점을 발견했습니다.
          이를 바탕으로 저는 사용자 경험을 개선하기 위해 노력하는
          개발자가 되어 마주치는 문제들을 하나씩 해결해나가고
          싶습니다.
        </S.Introduce>
      </S.Content>
    </S.Section>
  );
};

WhoIAm.propTypes = {
  profile: PropTypes.string.isRequired,
};

export default WhoIAm;

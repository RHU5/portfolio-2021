import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
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

const Title = styled.h3`
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

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
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

const Text = styled.p`
  width: 60%;
  max-width: 700px;
  line-height: 1.7;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

const WhoIAm = ({ profile }) => {
  return (
    <Box>
      <Title>Who I AM</Title>
      <Content>
        <Image src={profile} alt="" />
        <Text>
          저는 전공을 통해 프로그래밍을 처음 경험하고 흥미를 느꼈습니다. 흥미와
          전공을 살려 반도체 장비 SW팀에 입사하였으나 생각했던 것과는 다른 업무
          환경으로 인해 많은 고민을 하다가 웹 개발자에 대해 알게 되었습니다.
          직장을 다니며 공부를 하다가 도전을 결심하고 퇴사 후 독학하였습니다.
          <br />
          <br />
          클론코딩을 통해 웹에 전체적인 구성을 익히고 부족한 부분이나 이론에
          대해서는 PoiemaWeb, javascript.info, MDN, Google, 공식 문서를 참조하여
          알아나갔습니다. SSR과 CSR(SPA)를 직접 구현해보고 사용자 경험을
          개선하는 과정이 흥미로워서 프론트 엔드를 희망하게 되었습니다.
          <br />
          <br />
          프론트 엔드 개발자로 성장하게 된다면 사용자에게 필요한 데이터만
          보여주어 첫 로딩 시간을 줄이려는 고민, 이미지 로드 시 미리
          로드해놓음으로써 로드 시간을 줄이려는 고민 등 사용자 경험 개선과 웹
          사이트 최적화에 대해 고민하는 개발자로 성장하겠습니다.
        </Text>
      </Content>
    </Box>
  );
};

WhoIAm.propTypes = {
  profile: PropTypes.string.isRequired,
};

export default WhoIAm;

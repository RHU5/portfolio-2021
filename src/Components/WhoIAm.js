import React from 'react';
import styled from 'styled-components';

import profile from 'assets/profile.jpg';

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
  margin-bottom: 30px;
  @media (max-width: 770px) {
    font-size: 30px;
  }
`;

const Content = styled.div`
  display: flex;
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

const WhoIAm = () => {
  return (
    <Box>
      <Title>Who I AM</Title>
      <Content>
        <Image src={profile} alt="" />
        <Text>
          Q. 웹 개발자를 희망하게 된 계기는 무엇인가요?
          <br />
          <br />
          저는 전공이 메카트로닉스공학과였습니다. 전공이 로봇과 관련되어 있어
          기계, 전기, 프로그래밍을 모두 접할 기회가 있었습니다. 그 중에서도 제가
          흥미를 가졌던 분야는 프로그래밍이었습니다. 좀 더 알고 싶고 저를 의자에
          오래 앉을 수 있도록 해준 이 프로그래밍을 직업으로 삼으면 어떨까? 라는
          생각을 가지게 되었습니다. 이 생각을 바탕으로 반도체 장비 SW 설계
          직무로 회사에 입사하였으나 제가 생각했던 업무와 상이하여 많은 고민을
          하게 되었습니다. 이후 웹 개발자로 취업한 친구가 만든 웹 사이트를 보게
          되었고 저도 이러한 웹 사이트를 만들어보고 싶다는 생각이 들었습니다.
          그래서 용기를 가지고 퇴사를 결심한 후 웹 프로그래밍 공부를 시작하게
          되었습니다.
          <br />
          <br />
          Q. 왜 프론트엔드인가요?
          <br />
          <br /> 웹의 기초인 HTML5, CSS3, Javascript 를 공부하기 시작하면서 웹
          개발자에서도 퍼블리셔, 프론트엔드, 백엔드 등 다양한 종류의 직무가
          있다는 것을 알았습니다. 간단하게라도 직접 경험해보면서 방향을 잡으려고
          했습니다. HTML과 CSS로 정적인 사이트도 만들어보고, Node.js와 MongoDB를
          이용해 서버 사이드 렌더링 사이트를 제작해보고, React를 통해 클라이언트
          사이드 렌더링 사이트를 만들어보았습니다. 이 경험을 통해서 서버에서
          보내온 데이터를 사용자에게 필요한 데이터만 뽑아 보여주고 DOM 제어를
          통해 웹을 구성하는 것이 성취감도 높고 주변 사람들에게 결과물을
          보여주어 돌아오는 반응을 통해 뿌듯함을 느낄 수 있었습니다. 그래서 저는
          프론트엔드 직무를 희망하게 되었습니다.
        </Text>
      </Content>
    </Box>
  );
};

export default WhoIAm;

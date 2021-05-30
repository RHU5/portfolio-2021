import React from 'react';
import styled from 'styled-components';

import profile from 'assets/profile.jpg';

const Box = styled.div`
  /* min-height: 70vh; */
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

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h3`
  font-size: 50px;
  margin-bottom: 50px;
  font-weight: 600;
  @media (max-width: 770px) {
    font-size: 25px;
  }
  border-bottom: 8px solid black;
  padding-bottom: 10px;
`;

const Image = styled.img`
  margin-right: 30px;
  border-radius: 10%;
  width: 40%;
  max-width: 300px;
  @media (max-width: 770px) {
    margin-bottom: 30px;
    width: 100%;
  }
`;

const Text = styled.p`
  width: 60%;
  max-width: 700px;
  line-height: 1.5;
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
          안녕하세요. 오징어입니다.안녕하세요. 오징어입니다.안녕하세요.
          오징어입니다.안녕하세요. 오징어입니다.안녕하세요.
          오징어입니다.안녕하세요. 오징어입니다.안녕하세요.
          오징어입니다.안녕하세요. 오징어입니다.안녕하세요.
          오징어입니다.안녕하세요. 오징어입니다.안녕하세요.
          오징어입니다.안녕하세요. 오징어입니다.안녕하세요. 오징어입니다.
        </Text>
      </Content>
    </Box>
  );
};

export default WhoIAm;

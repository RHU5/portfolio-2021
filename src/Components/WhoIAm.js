import React from 'react';
import styled from 'styled-components';

import profile from 'assets/profile.jpg';

const Box = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Title = styled.h3`
  font-size: 50px;
  margin-bottom: 50px;
`;

const Image = styled.img`
  margin-right: 30px;
  border-radius: 10%;
  width: 300px;
`;

const Text = styled.p`
  width: 500px;
  line-height: 1.5;
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

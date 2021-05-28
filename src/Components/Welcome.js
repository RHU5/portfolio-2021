import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: relative;
  height: calc(100vh - 60px);
  padding: 10px 100px;
  display: flex;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 40px;
`;
const Image = styled.img``;

const Welcome = () => {
  return (
    <Box>
      <Title>
        안녕하세요.
        <br />
        프론트엔드 개발 직무에 지원하게 된 류현욱입니다.
      </Title>
      <Image src="#" alt="#" />
    </Box>
  );
};

export default Welcome;

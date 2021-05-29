import React from 'react';
import styled, { keyframes } from 'styled-components';

import backdrop from 'assets/backdrop.jpg';

const blink = keyframes`
\ 0% {
  opacity: 0;
}
\ 10% {
  opacity: 0.7;
}
\ 30% {
  opacity: 0.1;
}
\ 50% {
  opacity: 0.6;
}
\ 70% {
  opacity: 0.3;
}
\ 100% {
  opacity: 1;
}
`;

const moveUpToDown = keyframes`
  \ 0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  \ 100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Box = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backdrop});
  background-size: cover;
  min-width: 1385px;
`;
const Title = styled.h3`
  font-size: 50px;
  line-height: 1.5;
  position: relative;
  opacity: 0;
  animation: ${blink} 1s 0.5s ease-in-out forwards;
`;

const Icon = styled.i`
  /* display: block; */
  position: absolute;
  bottom: 30px;
  font-size: 30px;
  animation: ${moveUpToDown} 2s ease-out 5;
  cursor: pointer;
  :hover {
    font-size: 40px;
    transition: font-size 0.1s linear;
  }
`;

const Welcome = () => {
  return (
    <Box>
      <Title>
        안녕하세요.
        <br />
        프론트엔드 개발 직무에 지원하게 된 류현욱입니다.
      </Title>
      <Icon className="fas fa-arrow-circle-down"></Icon>
    </Box>
  );
};

export default Welcome;

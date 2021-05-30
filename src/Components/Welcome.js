import React, { useRef } from 'react';
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
  justify-content: center;
  align-items: center;
  background-image: url(${backdrop});
  background-size: cover;
  background-position: top;
  position: relative;
  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 90%
    );
    width: 100%;
    height: 10em;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 100px;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 600;
  line-height: 2;
  text-align: center;
  opacity: 0;
  animation: ${blink} 1s 0.5s ease-in-out forwards;
  @media (max-width: 770px) {
    font-size: 30px;
  }
`;

const Icon = styled.i`
  position: absolute;
  bottom: 30px;
  font-size: 30px;
  animation: ${moveUpToDown} 2s ease-out 5;
  cursor: pointer;
  :hover {
    font-size: 40px;
    transition: font-size 0.1s linear;
  }
  z-index: 1;
`;

const Welcome = () => {
  const section = useRef();

  const handleClick = ({ current }) => {
    window.scroll({
      top: current.clientHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box ref={section}>
      <Content>
        <Title>
          Portfolio of applicant
          <br />
          preparing
          <br />
          Front-end developer.
        </Title>
        <Icon
          onClick={() => handleClick(section)}
          className="fas fa-arrow-circle-down"
        ></Icon>
      </Content>
    </Box>
  );
};

export default Welcome;

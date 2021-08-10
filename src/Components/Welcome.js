import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

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

const S = {};

S.Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 60px);

  position: relative;

  background-image: url(${({ backdrop }) => backdrop});
  background-size: cover;
  background-position: top;

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

    height: 10em;
    width: 100%;
  }
`;

S.Message = styled.h1`
  white-space: pre-line;
  font-size: 38px;
  font-weight: 700;
  line-height: 2;
  text-align: center;
  opacity: 0;
  animation: ${blink} 1s 0.5s ease-in-out forwards;

  @media (max-width: 770px) {
    font-size: 30px;
  }
`;

S.Icon = styled.i`
  position: absolute;
  bottom: 30px;
  z-index: 1;

  font-size: 30px;
  cursor: pointer;
  animation: ${moveUpToDown} 2s ease-out 5;

  :hover {
    font-size: 40px;
    transition: font-size 0.1s linear;
  }
`;

const Welcome = ({ backdrop }) => {
  const section = useRef();

  const handleClick = ({ current }) => {
    window.scroll({
      top: current.clientHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.Section ref={section} backdrop={backdrop}>
      <S.Message>
        {`Portfolio of applicant
        preparing
        Front-end developer.`}
      </S.Message>
      <S.Icon
        onClick={() => handleClick(section)}
        className="fas fa-arrow-circle-down"
      ></S.Icon>
    </S.Section>
  );
};

Welcome.propTypes = {
  backdrop: PropTypes.string.isRequired,
};

export default Welcome;

import React from 'react';
import styled, { keyframes } from 'styled-components';

const stretchdelay = keyframes` 
  \ 0% { 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  
  \ 20% { 
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
  \ 40%{ 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  
  \ 100%{ 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  
  `;

const Spinner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Rect = styled.div`
  background-color: #333;
  height: 100px;
  width: 20px;
  display: inline-block;
  animation: ${stretchdelay} 1.2s infinite ease-in-out;
  :nth-child(2) {
    animation-delay: -1.1s;
  }
  :nth-child(3) {
    animation-delay: -1s;
  }
  :nth-child(4) {
    animation-delay: -0.9s;
  }
  :nth-child(5) {
    animation-delay: -0.8s;
  }
  :not(:last-child) {
    margin-right: 5px;
  }
`;

const Loader = () => {
  return (
    <Spinner>
      <Rect></Rect>
      <Rect></Rect>
      <Rect></Rect>
      <Rect></Rect>
      <Rect></Rect>
    </Spinner>
  );
};

export default Loader;

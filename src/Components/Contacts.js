import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  /* height: 50vh; */
  padding: 100px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(61, 61, 61, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  @media (max-width: 770px) {
    padding: 100px 20px;
  }
`;

const Title = styled.h3`
  color: white;
  font-size: 50px;
  margin-bottom: 50px;
  font-weight: 600;
  @media (max-width: 770px) {
    font-size: 25px;
  }
  border-bottom: 8px solid white;
  padding-bottom: 10px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 30px;
    color: white;
    :first-child {
      margin-bottom: 40px;
    }
  }
`;

const Contacts = () => {
  return (
    <Box>
      <Title>Contacts</Title>
      <Contents>
        <span>💌 gusdnr814@naver.com</span>
        <span>📞 010-9177-1139</span>
      </Contents>
    </Box>
  );
};

export default Contacts;

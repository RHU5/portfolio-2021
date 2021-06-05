import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
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
  font-size: 50px;
  font-weight: 700;
  border-bottom: 5px solid white;
  padding-bottom: 20px;
  margin-bottom: 80px;
  color: white;
  @media (max-width: 770px) {
    font-size: 30px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 30px;
    color: white;
    :first-child {
      margin-bottom: 30px;
    }
    @media (max-width: 770px) {
      font-size: 18px;
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

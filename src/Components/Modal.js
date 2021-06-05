import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 8px 8px 6px 3px rgba(50, 50, 50, 1);
  position: relative;
  top: -30px;
  padding: 20px;
  @media (max-width: 770px) {
    padding: 10px;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  margin-bottom: 20px;
  width: 800px;
  max-height: 400px;
  @media (max-width: 770px) {
    width: 360px;
  }
`;

const LinkBox = styled.div`
  margin-bottom: 30px;
  @media (max-width: 770px) {
    margin-bottom: 20px;
  }
`;

const Link = styled.a`
  font-size: 30px;
  :hover {
    color: red;
  }
  @media (max-width: 770px) {
    font-size: 20px;
  }
`;

const Divider = styled.span`
  font-size: 30px;
  padding: 0px 10px;
  @media (max-width: 770px) {
    font-size: 20px;
  }
`;

const Text = styled.p`
  line-height: 2;
  width: 800px;
  font-size: 18px;
  @media (max-width: 770px) {
    width: 360px;
  }
`;

const Modal = ({ gitUrl, demoUrl, description, gif }) => {
  return (
    <Box>
      <ImageBox>
        <Image src={gif} alt="" />
      </ImageBox>
      <LinkBox>
        <Link href={gitUrl} target="_blank" rel="noreferrer">
          Git Link
        </Link>
        <Divider>|</Divider>
        <Link href={demoUrl} target="_blank" rel="noreferrer">
          Demo Link
        </Link>
      </LinkBox>
      <Text>{description}</Text>
    </Box>
  );
};

export default Modal;

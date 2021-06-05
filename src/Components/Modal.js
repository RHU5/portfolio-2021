import React from 'react';
import styled from 'styled-components';

const BackDrop = styled.div`
  position: fixed;
  top: 60px;
  left: 0px;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 8px 8px 6px 3px rgba(50, 50, 50, 1);
  position: relative;
  top: -30px;
  width: 50%;
  max-height: 80%;
  padding: 30px;
  overflow-x: auto;
  @media (max-width: 770px) {
    padding: 10px;
    width: 95%;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
`;

const LinkBox = styled.div`
  width: 100%;
  padding: 20px 0px 10px;
  font-size: 30px;
  @media (max-width: 770px) {
    padding: 10px 0px 5px;
    font-size: 15px;
  }
`;

const Link = styled.a`
  :hover {
    color: red;
  }
`;

const Divider = styled.span`
  padding: 0px 10px;
`;

const Text = styled.p`
  width: 100%;
  line-height: 2;
  font-size: 20px;
  @media (max-width: 770px) {
    font-size: 10px;
  }
`;

const Modal = ({ closeModal, gitUrl, demoUrl, description, gif }) => {
  return (
    <BackDrop onClick={closeModal}>
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
    </BackDrop>
  );
};

export default Modal;

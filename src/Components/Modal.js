import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 8px 8px 6px 3px rgba(50, 50, 50, 1);
  position: relative;
  top: -30px;
  padding: 20px;
  width: 50%;
  max-height: 80%;
  overflow-x: auto;
  @media (max-width: 770px) {
    padding: 10px;
    width: 80%;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  margin-bottom: 20px;
  width: 100%;
`;

const LinkBox = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const Link = styled.a`
  font-size: 1.5vw;
  :hover {
    color: red;
  }
`;

const Divider = styled.span`
  font-size: 1.5vw;
  padding: 0px 10px;
`;

const Text = styled.p`
  width: 100%;
  line-height: 2;
  font-size: 1.5vw;
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

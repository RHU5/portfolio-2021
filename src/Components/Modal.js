import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    padding: 20px;
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
  padding: 20px 0px 20px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 49%;
  padding: 5px 0px;
  background-color: #ff9f43;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  box-shadow: inset 0px -3px #ffbe76;
  :hover {
    background-color: #f0932b;
  }
  :active {
    box-shadow: inset 0px 3px #ffbe76;
  }
  @media (max-width: 770px) {
  }
`;

const Link = styled.a`
  display: block;
  width: 100%;
`;

const Divider = styled.span`
  padding: 0px 10px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.span`
  margin-bottom: 20px;
`;
const Summary = styled.span`
  margin-bottom: 20px;
  line-height: 1.5;
`;
const Feature = styled.span`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Modal = ({ closeModal, description, feature, gitUrl, demoUrl, gif }) => {
  return (
    <BackDrop onClick={closeModal}>
      <Box>
        <ImageBox>
          <Image src={gif} alt="" />
        </ImageBox>
        <LinkBox>
          <Button>
            <Link href={gitUrl} target="_blank" rel="noreferrer">
              Git
            </Link>
          </Button>
          <Divider></Divider>
          <Button>
            <Link href={demoUrl} target="_blank" rel="noreferrer">
              Demo
            </Link>
          </Button>
        </LinkBox>
        <TextBox>
          <SubTitle>💬 개요</SubTitle>
          <Summary>{description}</Summary>
          <SubTitle>✨ 특징</SubTitle>
          {feature.map((text, index) => (
            <Feature key={index}>{text}</Feature>
          ))}
        </TextBox>
      </Box>
    </BackDrop>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  feature: PropTypes.array.isRequired,
  gitUrl: PropTypes.string.isRequired,
  demoUrl: PropTypes.string.isRequired,
  gif: PropTypes.string.isRequired,
};

export default Modal;

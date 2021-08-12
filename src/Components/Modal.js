import styled from 'styled-components';
import PropTypes from 'prop-types';

const S = {};

S.BackDrop = styled.div`
  position: fixed;
  top: 60px;
  left: 0px;
  z-index: 1;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
`;

S.ModalContainer = styled.div`
  position: relative;
  top: -30px;

  width: 50%;
  max-height: 80%;
  padding: 30px;

  background-color: white;
  border-radius: 10px;
  box-shadow: 8px 8px 6px 3px rgba(50, 50, 50, 1);
  overflow-x: auto;

  @media (max-width: 770px) {
    padding: 20px;
    width: 95%;
  }
`;

S.Gif = styled.img`
  width: 100%;
`;

S.LinkBox = styled.div`
  width: 100%;
  padding: 20px 0px 20px;

  display: flex;
  justify-content: space-between;
`;

S.Button = styled.button`
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

S.Link = styled.a`
  display: block;
  width: 100%;
`;

S.Divider = styled.span`
  padding: 0px 10px;
`;

S.TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

S.SubTitle = styled.span`
  margin-bottom: 20px;
`;

S.Summary = styled.span`
  margin-bottom: 20px;
  line-height: 1.5;
`;
S.Feature = styled.span`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Modal = ({
  closeModal,
  description,
  feature,
  gitUrl,
  demoUrl,
  gif,
}) => {
  return (
    <S.BackDrop onClick={closeModal}>
      <S.ModalContainer>
        <S.Gif src={gif} alt="" />
        <S.LinkBox>
          <S.Button>
            <S.Link href={gitUrl} target="_blank" rel="noreferrer">
              Git
            </S.Link>
          </S.Button>
          <S.Divider></S.Divider>
          <S.Button>
            <S.Link href={demoUrl} target="_blank" rel="noreferrer">
              Demo
            </S.Link>
          </S.Button>
        </S.LinkBox>
        <S.TextBox>
          <S.SubTitle>
            🎫 테스트 아이디: test@test.com / 1234
          </S.SubTitle>
          <S.SubTitle>💬 개요</S.SubTitle>
          <S.Summary>{description}</S.Summary>
          <S.SubTitle>✨ 특징</S.SubTitle>
          {feature.map((text, index) => (
            <S.Feature key={index}>{text}</S.Feature>
          ))}
        </S.TextBox>
      </S.ModalContainer>
    </S.BackDrop>
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

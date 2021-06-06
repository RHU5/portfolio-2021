import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
  padding: 100px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(112, 112, 112, 1) 0%,
    rgba(61, 61, 61, 1) 100%
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
  margin-bottom: 30px;
  color: white;
  @media (max-width: 770px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  margin-bottom: 50px;
  line-height: 2;
  color: white;
  font-size: 18px;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  max-width: 500px;
  margin-bottom: 30px;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

const Arrow = styled.div`
  i {
    font-size: 30px;
    color: white;
    text-shadow: 1px 1px 5px black;
    cursor: pointer;
  }
  i:hover {
    color: rgb(200, 200, 200);
  }
`;

const DotBox = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
`;

const Dot = styled.div`
  background-color: #b2bec3;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  box-shadow: inset -1px -1px 3px black;
  cursor: pointer;
  :nth-child(${({ current }) => current + 1}) {
    background-color: white;
    box-shadow: inset 1px 1px 3px black;
  }
`;

const ProjectItem = styled.div`
  border-radius: 10px;
  background-color: black;
  box-shadow: 8px 8px 6px 3px rgba(50, 50, 50, 1);
  width: 50%;
  max-width: 500px;
  min-width: 330px;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

const ImageUrl = styled.img`
  width: 100%;
  border-top: 5px solid #636e72;
  border-bottom: 5px solid #636e72;
  margin-bottom: 10px;
`;

const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.span`
  display: block;
  padding: 25px 20px 15px;
  font-size: 20px;
  color: white;
`;

const LinkBox = styled.div`
  padding: 25px 20px 15px;
`;

const Link = styled.a`
  font-size: 20px;
  color: white;
  :not(:last-child) {
    margin-right: 10px;
  }
  :hover {
    color: #f0932b;
  }
`;

const IconBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9%, 10%));
  gap: 10px;
  padding: 10px 20px 20px;
`;

const Icon = styled.img`
  width: 100%;
  background-color: white;
  border-radius: 5px;
`;

const HowToStudy = ({ study }) => {
  const [currentPos, setCurrentPos] = useState(0);

  const increasePos = () => {
    if (currentPos >= study.length - 1) {
      setCurrentPos(0);
      return;
    }
    setCurrentPos(currentPos + 1);
  };

  const decreasePos = () => {
    if (currentPos <= 0) {
      setCurrentPos(study.length - 1);
      return;
    }
    setCurrentPos(currentPos - 1);
  };

  return (
    <Box>
      <Title>How To Study</Title>
      <Description>
        저는 여러 로드맵을 참고하여 HTML, CSS, Javascript를 우선적으로 공부하고
        이후에 Node.js, MongoDB, React를 학습하였습니다. 클론 코딩을 통해
        웹사이트를 직접 제작해보면서 실행환경 설정, 배포, 디자인 패턴에 대해
        경험해볼 수 있었습니다. 이론적인 부분에 있어서는 모르는 개념이 생길
        때마다 PoiemaWeb, javascript.info, Google을 참조하여 공부했습니다.
        두루뭉술하게 이해된 개념을 잡기 위해 블로그에 정리하면서 내 것으로
        만들도록 노력했습니다.
      </Description>
      <ProjectList>
        <ProjectNav>
          <Arrow onClick={decreasePos}>
            <i className="fas fa-arrow-circle-left"></i>
          </Arrow>
          <DotBox>
            <Dot current={currentPos} onClick={() => setCurrentPos(0)}></Dot>
            <Dot current={currentPos} onClick={() => setCurrentPos(1)}></Dot>
            <Dot current={currentPos} onClick={() => setCurrentPos(2)}></Dot>
            <Dot current={currentPos} onClick={() => setCurrentPos(3)}></Dot>
          </DotBox>
          <Arrow onClick={increasePos}>
            <i className="fas fa-arrow-circle-right"></i>
          </Arrow>
        </ProjectNav>
        <ProjectItem>
          <NameBox>
            <Name>{study[currentPos].name}</Name>
            <LinkBox>
              <Link
                href={study[currentPos].gitUrl}
                target="_blank"
                rel="noreferrer"
              >
                Git
              </Link>
              <Link
                href={study[currentPos].demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </Link>
            </LinkBox>
          </NameBox>
          <IconBox>
            {study[currentPos].skill.map((icon, index) => (
              <Icon key={index} src={icon} alt="" />
            ))}
          </IconBox>
          <ImageUrl src={study[currentPos].image} />
        </ProjectItem>
      </ProjectList>
    </Box>
  );
};

HowToStudy.propTypes = {
  study: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      skill: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      gitUrl: PropTypes.string.isRequired,
      demoUrl: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default HowToStudy;

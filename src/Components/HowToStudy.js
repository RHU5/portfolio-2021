import React, { useState } from 'react';
import styled from 'styled-components';

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
  margin-bottom: 50px;
  font-weight: 600;
  @media (max-width: 770px) {
    font-size: 25px;
  }
  border-bottom: 8px solid black;
  padding-bottom: 10px;
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
  @media (max-width: 770px) {
    width: 100%;
  }
  margin-bottom: 30px;
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
  background-color: black;
  border-radius: 10px;
  box-shadow: 8px 8px 6px 3px rgba(50, 50, 50, 1);
  width: 50%;
  max-width: 500px;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  border-top: 5px solid #636e72;
  border-bottom: 5px solid #636e72;
  margin-bottom: 10px;
`;

const Name = styled.span`
  display: block;
  padding: 30px 20px;
  font-size: 30px;
  color: white;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px 20px 20px;
`;

const Icon = styled.img`
  display: block;
  width: 50px;
  :not(:last-child) {
    margin-right: 10px;
  }
  background-color: white;
  border-radius: 10px;
  padding: 5px;
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
      <ProjectList>
        <ProjectNav>
          <Arrow onClick={decreasePos}>
            <i class="fas fa-arrow-circle-left"></i>
          </Arrow>
          <DotBox>
            <Dot current={currentPos} onClick={() => setCurrentPos(0)}></Dot>
            <Dot current={currentPos} onClick={() => setCurrentPos(1)}></Dot>
            <Dot current={currentPos} onClick={() => setCurrentPos(2)}></Dot>
            <Dot current={currentPos} onClick={() => setCurrentPos(3)}></Dot>
          </DotBox>
          <Arrow onClick={increasePos}>
            <i class="fas fa-arrow-circle-right"></i>
          </Arrow>
        </ProjectNav>
        <ProjectItem>
          <Name>{study[currentPos].name}</Name>
          <IconBox>
            {study[currentPos].skill.map((icon, index) => (
              <Icon key={index} src={icon} alt="" />
            ))}
          </IconBox>
          <Image src={study[currentPos].image} />
        </ProjectItem>
        {/* {study.map((project) => (
          <ProjectItem key={project.id}>
            <Name>{project.name}</Name>
            <Image src={project.image} />
            <IconBox>
              {project.skill.map((icon, index) => (
                <Icon key={index} src={icon} alt="" />
              ))}
            </IconBox>
          </ProjectItem>
        ))} */}
      </ProjectList>
    </Box>
  );
};

export default HowToStudy;

import React from 'react';
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

const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ProjectItem = styled.li`
  background-color: black;
  border-radius: 10px;
  flex: 1 0 30%;
  max-width: 500px;
  margin: 10px;
  box-shadow: 8px 8px 6px 3px rgba(50, 50, 50, 1);
`;

const Image = styled.img`
  width: 100%;
  border-top: 5px solid #636e72;
  border-bottom: 5px solid #636e72;
`;

const Name = styled.span`
  display: block;
  padding: 30px 20px;
  font-size: 30px;
  color: white;
`;

const IconBox = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
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
  return (
    <Box>
      <Title>How To Study</Title>
      <ProjectList>
        {study.map((project) => (
          <ProjectItem key={project.id}>
            <Name>{project.name}</Name>
            <Image src={project.image} />
            <IconBox>
              {project.skill.map((icon, index) => (
                <Icon key={index} src={icon} alt="" />
              ))}
            </IconBox>
          </ProjectItem>
        ))}
      </ProjectList>
    </Box>
  );
};

export default HowToStudy;

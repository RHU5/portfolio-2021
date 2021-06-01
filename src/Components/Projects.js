import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from './Modal';

const Box = styled.div`
  /* min-height: 100vh; */
  padding: 100px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    rgba(168, 168, 168, 1) 0%,
    rgba(112, 112, 112, 1) 100%
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
`;

const ProjectItem = styled.li`
  background-color: black;
  border-radius: 10px;
  flex: 1 0 30%;
  max-width: 500px;
  margin: 10px;
  box-shadow: 8px 8px 6px 3px rgba(50, 50, 50, 1);
  position: relative;
  :hover::after {
    font-size: 30px;
    content: '자세히 보기';
    color: white;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(50, 50, 50, 0.8);
    border-radius: 10px;
    opacity: 1;
    cursor: pointer;
  }
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

const ModalBox = styled.div`
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

const Projects = ({ projects }) => {
  const [currentPos, setCurrentPos] = useState(null);

  const openModal = (index) => {
    setCurrentPos(index);
  };

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      setCurrentPos(null);
    }
  };

  return (
    <Box>
      <Title>Projects</Title>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectItem key={project.id} onClick={() => openModal(index)}>
            <Name>{project.name}</Name>
            <Image src={project.image} />
            <IconBox>
              {project.skill.map((icon, index) => (
                <Icon key={index} src={icon} alt="" />
              ))}
            </IconBox>
          </ProjectItem>
        ))}
        {currentPos !== null && (
          <ModalBox onClick={closeModal}>
            <Modal
              gitUrl={projects[currentPos].gitUrl}
              demoUrl={projects[currentPos].demoUrl}
              description={projects[currentPos].description}
            />
          </ModalBox>
        )}
      </ProjectList>
    </Box>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      skill: PropTypes.array,
      description: PropTypes.string,
      image: PropTypes.string,
      gitUrl: PropTypes.string,
      demoUrl: PropTypes.string,
    }),
  ),
};

export default Projects;

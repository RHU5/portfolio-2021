import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from './Modal';

const Box = styled.div`
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
  font-weight: 700;
  border-bottom: 5px solid black;
  padding-bottom: 20px;
  margin-bottom: 80px;
  @media (max-width: 770px) {
    margin-bottom: 30px;
    font-size: 30px;
  }
`;

const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
  justify-content: center;
  gap: 30px;
  width: 100%;
`;

const ProjectItem = styled.li`
  border-radius: 10px;
  background-color: black;
  box-shadow: 8px 8px 6px 3px rgba(50, 50, 50, 1);
  position: relative;
  :hover::after {
    content: '자세히 보기';
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
    color: white;
    opacity: 1;
    font-size: 30px;
    cursor: pointer;
  }
`;

const Name = styled.span`
  display: block;
  padding: 30px 20px 20px;
  font-size: 30px;
  color: white;
  @media (max-width: 770px) {
    font-size: 23px;
  }
`;

const Image = styled.img`
  width: 100%;
  border-top: 5px solid #636e72;
  border-bottom: 5px solid #636e72;
`;

const IconBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13%, auto));
  gap: 10px;
  padding: 10px 20px 20px;
`;

const Icon = styled.img`
  width: 100%;
  background-color: white;
  border-radius: 5px;
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
          <Modal
            closeModal={closeModal}
            gitUrl={projects[currentPos].gitUrl}
            demoUrl={projects[currentPos].demoUrl}
            description={projects[currentPos].description}
            gif={projects[currentPos].gif}
          />
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

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from './Modal';

const S = {};

S.Section = styled.section`
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

S.Title = styled.h1`
  padding-bottom: 20px;
  margin-bottom: 80px;

  font-size: 50px;
  font-weight: 700;
  border-bottom: 5px solid black;

  @media (max-width: 770px) {
    margin-bottom: 30px;
    font-size: 30px;
  }
`;

S.ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
  justify-content: center;
  gap: 30px;

  width: 100%;
`;

S.ProjectItem = styled.li`
  position: relative;

  border-radius: 10px;
  background-color: black;
  box-shadow: 8px 8px 6px 3px rgba(50, 50, 50, 1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

S.ProjectName = styled.span`
  display: block;
  padding: 25px 20px 15px;
  font-size: 20px;
  color: white;
`;

S.ProjectImage = styled.img`
  width: 100%;
  border-top: 5px solid #636e72;
  border-bottom: 5px solid #636e72;
`;

S.IconBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9%, 10%));
  gap: 10px;
  padding: 20px;
`;

S.Icon = styled.img`
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
    <S.Section>
      <S.Title>Projects</S.Title>
      <S.ProjectList>
        {projects.map((project, index) => (
          <S.ProjectItem
            key={project.id}
            onClick={() => openModal(index)}
          >
            <S.ProjectName>{project.name}</S.ProjectName>
            <S.ProjectImage src={project.image} />
            <S.IconBox>
              {project.skill.map((icon, index) => (
                <S.Icon key={index} src={icon} alt="" />
              ))}
            </S.IconBox>
          </S.ProjectItem>
        ))}
        {currentPos !== null && (
          <Modal
            closeModal={closeModal}
            description={projects[currentPos].description}
            feature={projects[currentPos].feature}
            gitUrl={projects[currentPos].gitUrl}
            demoUrl={projects[currentPos].demoUrl}
            gif={projects[currentPos].gif}
          />
        )}
      </S.ProjectList>
    </S.Section>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      skill: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
      feature: PropTypes.array.isRequired,
      image: PropTypes.string.isRequired,
      gitUrl: PropTypes.string.isRequired,
      demoUrl: PropTypes.string.isRequired,
      gif: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Projects;

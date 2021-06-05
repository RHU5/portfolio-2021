import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
// Components
import Welcome from 'Components/Welcome';
import WhoIAm from 'Components/WhoIAm';
import Projects from 'Components/Projects';
import HowToStudy from 'Components/HowToStudy';
import Contacts from 'Components/Contacts';
// Data
import { preloadImage, data } from 'data';
import Loader from 'Components/Loader';

const Box = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
  background-color: #f5f6fa;
  box-shadow: 0px 1px 3px black;
  @media (max-width: 770px) {
    padding: 0px 20px;
  }
`;

const List = styled.ul`
  display: flex;
  height: 60px;
  min-width: 615px;
  @media (max-width: 770px) {
    position: absolute;
    top: 60px;
    left: 0px;
    height: auto;
    min-width: 0px;
    flex-direction: column;
    width: 100%;
    background-color: #f5f6fa;
    opacity: 0.5px;
    display: ${({ isOn }) => (isOn ? 'display' : 'none')};
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    box-shadow: inset -4px -4px #d1d8e0;
    transition: box-shadow 0.2s linear;
  }
  :nth-child(${({ selected }) => selected}) {
    box-shadow: inset -4px -4px #d1d8e0;
  }
  @media (max-width: 770px) {
    padding: 10px 20px;
  }
`;

const IconList = styled.ul`
  display: flex;
  align-items: center;
`;

const IconItem = styled.li`
  :first-child {
    display: none;
  }
  padding: 0px 10px;
  font-size: 30px;
  cursor: pointer;
  :hover {
    font-size: 35px;
    transition: font-size 0.1s linear;
  }
  @media (max-width: 770px) {
    :first-child {
      display: inline;
    }
  }
`;

const Wrapper = styled.div``;

const Home = () => {
  const info = data;
  const [isOn, setIsOn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const section = useRef([]);

  useEffect(() => {
    const newImage = new Image();
    preloadImage.forEach((image) => (newImage.src = image));
    newImage.onload = () => {
      setIsLoading(false);
    };
  });

  const handleClick = (current) => {
    window.scroll({
      top: current.offsetTop - 60,
      left: 0,
      behavior: 'smooth',
    });
  };

  const displayToggle = (isOn) => {
    setIsOn(!isOn);
  };

  return (
    <>
      <Box>
        <List isOn={isOn}>
          {['Welcome', 'Who I Am', 'Projects', 'How To Study', 'Contacts'].map(
            (title, index) => (
              <Item
                key={index}
                onClick={() => handleClick(section.current[index])}
              >
                {title}
              </Item>
            ),
          )}
        </List>
        <IconList>
          <IconItem>
            <i onClick={() => displayToggle(isOn)} className="fas fa-bars"></i>
          </IconItem>
          <IconItem>
            <a href="https://github.com/RHU5" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </IconItem>
          <IconItem>
            <a
              href="https://velog.io/@gusdnr814"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-blogger"></i>
            </a>
          </IconItem>
        </IconList>
      </Box>
      {isLoading ? (
        <Loader />
      ) : (
        [
          <Welcome />,
          <WhoIAm />,
          <Projects projects={info.project} />,
          <HowToStudy study={info.study} />,
          <Contacts />,
        ].map((item, index) => (
          <Wrapper
            key={index}
            ref={(element) => (section.current[index] = element)}
          >
            {item}
          </Wrapper>
        ))
      )}
    </>
  );
};

export default Home;

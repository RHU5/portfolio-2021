import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
// Components
import Welcome from 'Components/Welcome';
import WhoIAm from 'Components/WhoIAm';
import Projects from 'Components/Projects';
import HowToStudy from 'Components/HowToStudy';
import Contacts from 'Components/Contacts';
import Loader from 'Components/Loader';
// Data
import { preloadImage, data } from 'data';
import Header from 'Components/Header';

const S = {};

S.Wrapper = styled.div``;

const Home = () => {
  const info = data;
  const [isLoading, setIsLoading] = useState(true);
  const section = useRef([]);

  useEffect(() => {
    preloadImage.forEach((image) => (new Image().src = image));
    window.addEventListener('load', () => setIsLoading(false));
    return () => {
      window.removeEventListener('load', () => setIsLoading(false));
    };
  });

  return (
    <>
      <Header ref={section} />
      {isLoading ? (
        <Loader />
      ) : (
        [
          <Welcome backdrop={info.backdrop} />,
          <WhoIAm profile={info.profile} />,
          <Projects projects={info.project} />,
          <HowToStudy study={info.study} />,
          <Contacts />,
        ].map((item, index) => (
          <S.Wrapper
            key={index}
            ref={(element) => (section.current[index] = element)}
          >
            {item}
          </S.Wrapper>
        ))
      )}
    </>
  );
};

export default Home;

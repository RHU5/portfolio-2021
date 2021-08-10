import { forwardRef, useState } from 'react';
import styled from 'styled-components';

const S = {};

S.Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;

  width: 100%;
  height: 60px;
  padding: 0px 50px;

  display: flex;
  justify-content: space-between;

  background-color: #f5f6fa;
  box-shadow: 0px 1px 3px black;

  @media (max-width: 770px) {
    padding: 0px 20px;
  }
`;

S.NavList = styled.ul`
  display: flex;

  height: 60px;
  min-width: 615px;

  @media (max-width: 770px) {
    position: absolute;
    top: 60px;
    left: 0px;

    width: 100%;
    height: auto;
    min-width: 0px;

    flex-direction: column;

    background-color: #f5f6fa;
    opacity: 0.5px;
    display: ${({ isOn }) => (isOn ? 'display' : 'none')};
  }
`;

S.NavItem = styled.li`
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

S.IconList = styled.ul`
  display: flex;
  align-items: center;
`;

S.IconItem = styled.li`
  padding: 0px 10px;

  font-size: 30px;
  cursor: pointer;

  :first-child {
    display: none;
  }

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

function Header(__, ref) {
  const [isOn, setIsOn] = useState(false);

  const displayToggle = (isOn) => {
    setIsOn(!isOn);
  };

  const handleClick = (current) => {
    window.scroll({
      top: current.offsetTop - 60,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <S.Header>
      <S.NavList isOn={isOn}>
        {[
          'Welcome',
          'Who I Am',
          'Projects',
          'How To Study',
          'Contacts',
        ].map((title, index) => (
          <S.NavItem
            key={index}
            onClick={() => handleClick(ref.current[index])}
          >
            {title}
          </S.NavItem>
        ))}
      </S.NavList>
      <S.IconList>
        <S.IconItem>
          <i
            onClick={() => displayToggle(isOn)}
            className="fas fa-bars"
          ></i>
        </S.IconItem>
        <S.IconItem>
          <a
            href="https://github.com/RHU5"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </S.IconItem>
        <S.IconItem>
          <a
            href="https://velog.io/@gusdnr814"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-blogger"></i>
          </a>
        </S.IconItem>
      </S.IconList>
    </S.Header>
  );
}

export default forwardRef(Header);

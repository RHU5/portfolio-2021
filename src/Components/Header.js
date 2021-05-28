import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: #f3a683;
  box-shadow: 0px 1px 3px black;
  z-index: 100;
  display: flex;
  padding: 0px 50px;
`;

const List = styled.ul`
  width: 80%;
  display: flex;
  align-items: center;
  height: 60px;
  min-width: 600px;
`;

const Item = styled.li`
  :not(:last-child) {
    margin-right: 30px;
  }
  color: white;
  font-weight: 600;
  font-size: 20px;
`;

const IconList = styled.ul`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const IconItem = styled.li`
  :not(:last-child) {
    margin-right: 25px;
  }
  font-size: 30px;
  color: white;
`;

const Header = () => {
  return (
    <Box>
      <List>
        <Item>Welcome</Item>
        <Item>Who I Am</Item>
        <Item>Projects</Item>
        <Item>How To Study</Item>
        <Item>Contact</Item>
      </List>
      <IconList>
        <IconItem>
          <i className="fab fa-github"></i>
        </IconItem>
        <IconItem>
          <i className="fab fa-blogger"></i>
        </IconItem>
      </IconList>
    </Box>
  );
};

export default Header;

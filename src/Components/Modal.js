import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 8px 8px 6px 3px rgba(50, 50, 50, 1);

  /* width: 800px; */
  /* height: 500px; */
`;

const Modal = ({ gitUrl, demoUrl, description }) => {
  return (
    <Box>
      <div>
        <a href={gitUrl} target="_blank" rel="noreferrer">
          Git Link
        </a>
        <a href={demoUrl} target="_blank" rel="noreferrer">
          Demo Link
        </a>
      </div>
      <p>{description}</p>
    </Box>
  );
};

export default Modal;

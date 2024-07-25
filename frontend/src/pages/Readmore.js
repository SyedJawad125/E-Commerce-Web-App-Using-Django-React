import React, { useState } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Container = styled.div`
  margin: 20px;
  font-family: Arial, sans-serif;
`;

const Text = styled.p`
  display: inline;
  transition: max-height 0.5s ease;
  overflow: hidden;
  max-height: ${(props) => (props.isExpanded ? 'none' : '3em')};
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 50px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Readmore = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <Text isExpanded={isExpanded}>
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </Text>
      <Button onClick={toggleReadMore}>
        {isExpanded ? (
          <>
            Read Less <i className="fas fa-chevron-up"></i>
          </>
        ) : (
          <>
            Read More <i className="fas fa-chevron-down"></i>
          </>
        )}
      </Button>
    </Container>
  );
};

export default Readmore;

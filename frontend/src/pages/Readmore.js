import React, { useState } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Container = styled.div`
  margin: 20px;
  font-family: Arial, sans-serif;
`;

const ScrollableText = styled.div`
  max-height: ${(props) => (props.isExpanded ? '200px' : '3em')}; /* Adjust the max-height as needed */
  overflow: hidden;
  transition: max-height 0.5s ease;
  padding-right: ${(props) => (props.isExpanded ? '10px' : '0')};
  overflow-y: ${(props) => (props.isExpanded ? 'scroll' : 'hidden')};
  position: relative;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }

  &::-webkit-scrollbar-thumb {
    background: #888; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
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
      <ScrollableText isExpanded={isExpanded}>
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </ScrollableText>
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

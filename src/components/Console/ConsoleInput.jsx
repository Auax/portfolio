import React from 'react';
import styled from "styled-components";


const ConsoleContainer = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.5em;
  text-align: left;
  display: flex;
  background: #010A25FF;
  padding: 5px 15px;
  border-radius: 10px;
  text-shadow: 0 10px 10px rgba(0, 0, 0, 0.12);
`;

const Input = styled.input`
  color: rgba(245, 245, 245, 0.9);
  background: transparent;
  outline: none;
  margin-left: 6px;
`;

const ConsoleInput = () => {
    return (
        <ConsoleContainer>
            <span className="text-green-400">auax@root:~$</span>
            <Input placeholder="Write here"/>
        </ConsoleContainer>
    );
};

export default ConsoleInput;
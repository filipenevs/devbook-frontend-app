import React from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
  margin: 2rem 0;
`;

const Label = styled.label`
  display: block;
  font-size: 1.5rem;
  padding-bottom: 0.25rem;
`;

const InputArea = styled.input`
  width: 100%;
  display: block;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1.15rem;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 5px;
  background-color: rgb(230, 230, 230);
  transition: 150ms;

  &:hover {
    border-color: rgb(200, 200, 200);
  }

  &:focus {
    outline: none;
    border-color: var(--mainColor);
    background-color: rgb(255, 255, 255);
  }
`;

const Error = styled.p`
  color: rgb(220, 0, 0);
  margin-top: 0.25rem;
`;

const Input = ({ label, id, type, value, error, onChange, onBlur }) => {
  return (
    <FormGroup>
      <Label htmlFor={id}>{label}</Label>
      <InputArea
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={error && { borderColor: 'rgb(220, 0, 0)' }}
      ></InputArea>
      <Error>{error}</Error>
    </FormGroup>
  );
};

export default Input;

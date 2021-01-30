import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  font-size: 1.15rem;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  transition: 100ms all ease;
  min-width: 7.5rem;

  &:hover {
    outline: none;
    background-color: var(--mainColor);
    border-color: rgb(100, 100, 100);
    color: rgb(255, 255, 255);
  }

  &:focus {
    outline: none;
    border-color: var(--mainColor);
  }
`;

export default Button;

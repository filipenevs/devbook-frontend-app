import styled from 'styled-components';

const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;

  &::after {
    display: block;
    content: '';
    background-color: var(--mainColor);
    border-radius: 2px;
    height: 4px;
    z-index: -1;
  }
`;

export default Title;

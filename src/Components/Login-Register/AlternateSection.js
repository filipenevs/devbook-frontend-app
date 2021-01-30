import styled from 'styled-components';

const AlternateSection = styled.div`
  margin-top: 2rem;

  &::before {
    display: block;
    content: '';
    background-color: var(--mainColor);
  }

  &::before {
    width: 100%;
    height: 1px;
    margin: 0 auto;
  }

  & > div {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

export default AlternateSection;

import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const TitleDiv = styled.div`
  margin: 3rem 0;
`;

const Home = () => {
  return (
    <section className="container translateAnimation">
      <TitleDiv>
        <Title>Publications</Title>
      </TitleDiv>
    </section>
  );
};

export default Home;

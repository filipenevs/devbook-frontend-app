import React from 'react';
import styled from 'styled-components';

const FooterBase = styled.footer`
  background-color: rgb(250, 250, 250);
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.1);
  padding: 2rem 0;

  & > div {
    text-align: center;
    font-weight: bold;
  }
`;

const Footer = () => {
  return (
    <FooterBase>
      <div className="container">DevBook - Alguns Direitos Reservados</div>
    </FooterBase>
  );
};

export default Footer;

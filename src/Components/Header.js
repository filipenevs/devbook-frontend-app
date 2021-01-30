import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../Assets/logo.svg';
import Button from './Button';

const HeaderBase = styled.header`
  width: 100%;
  background-color: rgb(250, 250, 250);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0px;
  z-index: 10;
`;

const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
`;

const LogoResized = styled(Logo)`
  width: 4rem;
  height: 4rem;
`;

const Header = () => {
  return (
    <HeaderBase>
      <Nav className="container">
        <Link to="/">
          <LogoResized />
        </Link>
        <Link to="/login">
          <Button>LOGIN</Button>
        </Link>
      </Nav>
    </HeaderBase>
  );
};

export default Header;

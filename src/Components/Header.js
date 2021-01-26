import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../Assets/logo.svg';
import Button from './Form/Button';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>
        <Link to="/login">
          <Button>LOGIN</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

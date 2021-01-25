import React from 'react';
import styles from './Title.module.css';

const Title = ({ children }) => {
  return <span className={styles.text}>{children}</span>;
};

export default Title;

import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, name, type, value, error, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
      />
      <p className={styles.error}>{error && ''}</p>
    </div>
  );
};

export default Input;

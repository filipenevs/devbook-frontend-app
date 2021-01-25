import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, id, type, value, error, onChange, onBlur }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        className={`${styles.input} ${error && styles.inputError}`}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <p className={styles.error}>{true && error}</p>
    </div>
  );
};

export default Input;

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
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={error && { borderColor: 'rgb(220, 0, 0)' }}
      />
      <p className={styles.error}>{true && error}</p>
    </div>
  );
};

export default Input;

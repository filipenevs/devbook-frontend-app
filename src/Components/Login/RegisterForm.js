import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RegisterForm.module.css';
import useForm from '../../Hooks/useForm';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Title from '../Title';

const RegisterForm = () => {
  const name = useForm('name');
  const email = useForm('email');
  const password = useForm('password');

  function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate() && name.validate()) {
      alert('signing');
    }
  }

  return (
    <div className={styles.formDiv}>
      <Title>Register</Title>
      <form onSubmit={handleSubmit}>
        <Input label="Name" id="name" type="text" {...name} />
        <Input label="Email" id="email" type="email" {...email} />
        <Input label="Password" id="password" type="password" {...password} />
        <Button>Sign Up</Button>
      </form>
      <div className={styles.loginSection}>
        <div className={styles.loginText}>Already have an account?</div>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import useForm from '../../Hooks/useForm';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Title from '../Title';

const LoginForm = () => {
  const email = useForm('email');
  const password = useForm('password');

  function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      alert('logging');
    }
  }

  return (
    <div className={styles.formDiv}>
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <Input label="Email" id="email" type="email" {...email} />
        <Input label="Password" id="password" type="password" {...password} />
        <Button>Sign In</Button>
      </form>
      <div className={styles.registerSection}>
        <div className={styles.registerText}>Not have an account yet?</div>
        <Link to="/login/register">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RegisterPage.module.css';
import useForm from '../../Hooks/useForm';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Title from '../Title';

const RegisterForm = () => {
  const name = useForm('name');
  const email = useForm('email');
  const password = useForm('password');

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name.validate() && email.validate() && password.validate()) {
      alert('signing');
    }
  }

  return (
    <div className="container">
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
            <Button onClick={scrollTop}>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

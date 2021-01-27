import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import useForm from '../../Hooks/useForm';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Title from '../Title';

const LoginForm = () => {
  const email = useForm('email');
  const password = useForm('password');

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      alert('logging');
    }
  }

  return (
    <section className="container translateAnimation">
      <div className={styles.formDiv}>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Input label="Email" id="email" type="email" {...email} />
          <Input label="Password" id="password" type="password" {...password} />
          <Button>Sign In</Button>
        </form>
        <div className={styles.registerSection}>
          <div className={styles.registerText}>Not have an account yet?</div>
          <Link to="/register">
            <Button onClick={scrollTop}>Register</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;

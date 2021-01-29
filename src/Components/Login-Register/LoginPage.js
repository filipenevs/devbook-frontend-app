import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import useForm from '../../Hooks/useForm';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Title from '../Title';
import { AUTH_POST } from '../../Api/user';

const LoginForm = () => {
  const email = useForm('email');
  const password = useForm('password');

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      const { url, options } = AUTH_POST({
        email: email.value,
        password: password.value,
      });

      /* EN: In the future they will be more beautiful Modals
       * PT-BR: Futuramente serão modais mais bonitos aqui
       */
      const response = await fetch(url, options);
      const responseJson = await response.json();
      if (response.status === 200) {
        alert('logging');
        console.log(responseJson);
      } else {
        alert(responseJson.error);
      }
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

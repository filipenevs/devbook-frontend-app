import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RegisterPage.module.css';
import useForm from '../../Hooks/useForm';
import Input from '../Form/Input';
import Button from '../Button';
import Title from '../Title';
import { USER_POST } from '../../Api/user';

const RegisterForm = () => {
  const name = useForm('name');
  const email = useForm('email');
  const password = useForm('password');

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (name.validate() && email.validate() && password.validate()) {
      const { url, options } = USER_POST({
        name: name.value,
        email: email.value,
        password: password.value,
      });

      /* EN: In the future they will be more beautiful Modals
       * PT-BR: Futuramente serão modais mais bonitos aqui
       */
      const response = await fetch(url, options);
      const responseJson = await response.json();
      if (response.status === 201) {
        alert('registered');
        console.log(responseJson);
      } else {
        alert(responseJson.error);
      }
    }
  }

  return (
    <section className="container translateAnimation">
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
    </section>
  );
};

export default RegisterForm;

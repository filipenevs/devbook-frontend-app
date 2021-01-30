import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import FormDiv from './FormDiv';
import Input from '../Form/Input';
import Button from '../Button';
import Title from '../Title';
import AlternateSection from './AlternateSection';
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
      <FormDiv>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Input label="Email" id="email" type="email" {...email} />
          <Input label="Password" id="password" type="password" {...password} />
          <Button>Sign In</Button>
        </form>
        <AlternateSection>
          <div>Not have an account yet?</div>
          <Link to="/register">
            <Button onClick={scrollTop}>Register</Button>
          </Link>
        </AlternateSection>
      </FormDiv>
    </section>
  );
};

export default LoginForm;

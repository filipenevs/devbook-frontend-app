import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('submited');
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}></form>
      <Link to="/login/register">Cadastrar-se</Link>
    </div>
  );
};

export default LoginForm;

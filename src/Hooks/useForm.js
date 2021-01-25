import React from 'react';

const validation = {
  name: {
    regex: /^[a-záàâãéèêíïóôõöúçñ ]{8,100}$/i,
    message: 'Enter a valid name',
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i,
    message: 'Enter a valid email',
  },
  password: {
    regex: /^.{8,16}$/,
    message: 'Enter a valid password (min 8, max 16)',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Enter a value');
      return false;
    } else if (validation[type] && !validation[type].regex.test(value)) {
      setError(validation[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    validate: () => validate(value),
    onChange,
    onBlur: () => validate(value),
  };
};

export default useForm;

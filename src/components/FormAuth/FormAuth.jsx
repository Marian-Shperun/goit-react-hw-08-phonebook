import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { register, logIn } from 'globalState/auth/operations';

import { InputLabel, Input, FormControl } from '@mui/material';

import PropTypes from 'prop-types';
import { PersonIcon, AlternateEmailIcon, VpnKeyIcon } from '../IconsApp';
import { FormAuthent, IconFormAuth, BlockBtns } from './FormAuth.styled';

const FormAuth = ({ formRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitFornAuth = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (formRegister) {
      if (validateForm()) return;
      dispatch(
        register({
          name,
          email,
          password,
        })
      );
      navigate('/');
    } else {
      if (validateForm()) return;
      dispatch(
        logIn({
          email,
          password,
        })
      );
      navigate('/');
    }
    form.reset();
  };

  function validateForm() {
    if (email === '' || password === '') {
      alert('Enter data');
      return true;
    } else if (password.length < 7) {
      alert('unreliable password');
      return true;
    }
  }
  
  return (
    <FormAuthent className="form" onSubmit={handleSubmitFornAuth}>
      {formRegister && (
        <FormControl>
          <InputLabel htmlFor="name" sx={{ pl: 2 }}>
            User name
          </InputLabel>
          <Input
            name="name"
            type="text"
            placeholder="Name"
            onChange={event => setName(event.target.value)}
          />
          <IconFormAuth>
            <PersonIcon sx={{ mr: 1, fontSize: 18 }} />
          </IconFormAuth>
        </FormControl>
      )}

      <FormControl>
        <InputLabel htmlFor="email" sx={{ pl: 2 }}>
          Email address
        </InputLabel>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
        />
        <IconFormAuth>
          <AlternateEmailIcon sx={{ mr: 1, fontSize: 18 }} />
        </IconFormAuth>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="password" sx={{ pl: 2 }}>
          Password
        </InputLabel>

        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
        />
        <IconFormAuth>
          <VpnKeyIcon sx={{ mr: 1, fontSize: 18 }} />
        </IconFormAuth>
      </FormControl>

      <BlockBtns>
        {formRegister ? (
          <button type="submit">Registration</button>
        ) : (
          <button type="submit">Sing in</button>
        )}
        {formRegister ? (
          <NavLink to="/login">Log in</NavLink>
        ) : (
          <NavLink to="/register">Registration</NavLink>
        )}
      </BlockBtns>
    </FormAuthent>
  );
};
export default FormAuth;

FormAuth.propTypes = {
  register: PropTypes.bool,
};

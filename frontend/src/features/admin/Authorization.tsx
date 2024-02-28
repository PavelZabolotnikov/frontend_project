import React, { useCallback, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { login, resetAuthError } from './authSlice';
import css from './admin.module.css';

function Authorization(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const messageError = useSelector((state: RootState) => state.admin.authError);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
    dispatch(resetAuthError());
  };

  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPassword(event.target.value);
    dispatch(resetAuthError());
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    dispatch(login({ email, password })).then((dispathResult) => {
      if (login.fulfilled.match(dispathResult)) {
        navigate('/admin/event');
      }
    });
  };

  return (
    <Container className={css.form}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>
        <div style={{ fontSize: '18px', color: 'red' }}>{messageError}</div>
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    </Container>
  );
}

export default Authorization;

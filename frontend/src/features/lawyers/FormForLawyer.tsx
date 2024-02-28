import React, { memo, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAppDispatch } from '../../store';

import { loadTg } from './lawyerSlice';

function FormForLawyer({
  setShowForm,
}: {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const [showError, setShowError] = useState(false);

  const [inputName, setInputName] = useState('');
  const [inputSpeciality, setInputSpeciality] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputAbout, setInputAbout] = useState('');
  const dispatch = useAppDispatch();
  const handlerName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputName(e.target.value);
  };

  const handlerSpeciality: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputSpeciality(e.target.value);
  };

  const handlerPhone: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputPhone(e.target.value);
  };

  const handlerEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputEmail(e.target.value);
  };

  const handlerAbout: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputAbout(e.target.value);
  };

  const telegram: React.FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();
    if (
      inputName &&
      inputSpeciality &&
      inputPhone &&
      inputAbout &&
      inputEmail
    ) {
      dispatch(
        loadTg({
          inputName,
          inputSpeciality,
          inputPhone,
          inputAbout,
          inputEmail,
        }),
      );
      setShowForm((p) => !p);
    } else {
      setShowError(true);
    }
  };

  return (
    <Form className="form-for-lawyer" onSubmit={telegram}>
      <Form.Control
        value={inputName}
        onChange={handlerName}
        type="text"
        size="sm"
        placeholder="ФИО"
      />
      <Form.Control
        value={inputSpeciality}
        onChange={handlerSpeciality}
        type="text"
        size="sm"
        placeholder="Направление деятельности"
      />
      <Form.Control
        value={inputPhone}
        onChange={handlerPhone}
        type="phone"
        size="sm"
        placeholder="Номер телефона"
      />
      <Form.Control
        value={inputEmail}
        onChange={handlerEmail}
        size="sm"
        type="email"
        placeholder="Email"
      />
      <Form.Label style={{ fontSize: '12px' }}>О себе</Form.Label>
      <Form.Control
        value={inputAbout}
        onChange={handlerAbout}
        as="textarea"
        rows={2}
      />
      {showError && <div style={{ fontSize: '12px' }}>Заполните все поля!</div>}
      <Button className="button-blue" type="submit">
        Отправить анкету
      </Button>
    </Form>
  );
}

export default memo(FormForLawyer);

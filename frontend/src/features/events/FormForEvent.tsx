import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function FormForEvent({
  onSubmitForm,
  onClose,
}: {
  onSubmitForm: React.FormEventHandler<HTMLFormElement>;
  onClose: () => void;
}): JSX.Element {
  const [inputName, setInputName] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const handlerName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputName(event.target.value);
  };
  const handlerPhone: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputPhone(event.target.value);
  };
  const handlerEmail: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputEmail(event.target.value);
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <select className="form-select" aria-label="Select Event">
        <option selected>Выберите мероприятие</option>
        <option value="1">
          Договор без дефектов: юридические техники составления и оформления
        </option>
        <option value="2">
          БАНКРОТСТВО В 2023 ГОДУ: НОВЕЛЛЫ ЗАКОНОДАТЕЛЬСТВА, ПРАВОПРИМЕНИТЕЛЬНАЯ
          И СУДЕБНАЯ ПРАКТИКА
        </option>
        <option value="3">
          ПРОЦЕССУАЛЬНЫЕ ПРАВИЛА СУДЕБНОГО РАЗБИРАТЕЛЬСТВА И КАК ИХ ИСПОЛЬЗОВАТЬ
          НА ПРАКТИКЕ
        </option>
        <option value="4">Лекция</option>
      </select>
      <select className="form-select" aria-label="Select Tarif">
        <option selected>Выберите тариф</option>
        <option value="1">Тариф Simple</option>
        <option value="2">Тариф Basic</option>
        <option value="3">Тариф Pro</option>
      </select>
      <Form.Control
        value={inputName}
        onChange={handlerName}
        size="lg"
        type="text"
        placeholder="ФИО"
        required
      />
      <Form.Control
        value={inputPhone}
        onChange={handlerPhone}
        size="lg"
        type="phone"
        placeholder="Номер телефона"
        required
      />
      <Form.Control
        value={inputEmail}
        onChange={handlerEmail}
        size="lg"
        type="email"
        placeholder="Email"
        required
      />
      <Button className="button-orange" type="submit" onClick={onClose}>
        Записаться
      </Button>
    </Form>
  );
}

export default FormForEvent;

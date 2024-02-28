import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAppDispatch } from '../../store';
import { changeEventCard } from './eventSlice';
import EventChange from './types/EventChange';

type FormEventProps = {
  changeCard: EventChange;
  onCloseForm: () => void;
};

function FormEventCgange({
  changeCard,
  onCloseForm,
}: FormEventProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleData: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setDate(event.target.value);
  };

  const handleAddress: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setAddress(event.target.value);
  };

  const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setDescription(event.target.value);
  };

  const onChange: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(
      changeEventCard({
        id: changeCard.id,
        date: date !== '' ? new Date(date) : changeCard.date,
        address: address.length > 0 ? address : changeCard.address,
        title: title.length > 0 ? title : changeCard.title,
        description:
          description.length > 0 ? description : changeCard.description,
      }),
    );
    setAddress('');
    setTitle('');
    setDescription('');
    onCloseForm();
  };

  return (
    <Container>
      <h3>Изменить мероприятие</h3>
      <Form onSubmit={onChange}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="date"
            name="data"
            defaultValue={changeCard.date?.toString().slice(0, 10)}
            onChange={handleData}
            placeholder="Дата"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="address"
            defaultValue={changeCard.address}
            onChange={handleAddress}
            placeholder="Адрес"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="title"
            defaultValue={changeCard.title}
            onChange={handleTitle}
            placeholder="Тема"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            as="textarea"
            rows={5}
            name="description"
            defaultValue={changeCard.description}
            onChange={handleDescription}
            placeholder="Описание"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Сохранить
        </Button>
      </Form>
    </Container>
  );
}

export default FormEventCgange;

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAppDispatch } from '../../store';
import { createEvent } from './eventSlice';

type FormEventProps = {
  onBtn: () => void;
};

function FormEventCreate({ onBtn }: FormEventProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState<File | undefined>();

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

  const handlePhoto: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files) {
      setPhoto(event.target.files[0]);
    }
  };

  const onCreate: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (photo && date && address && title && description) {
      dispatch(
        createEvent({
          date: new Date(date),
          address,
          title,
          description,
          photo,
        }),
      );
    }
    setAddress('');
    setTitle('');
    setDescription('');
    setPhoto(undefined);
    onBtn();
  };

  return (
    <Container>
      <h3>Добавить мероприятие</h3>
      <Form onSubmit={onCreate}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="date"
            name="data"
            defaultValue={date}
            onChange={handleData}
            placeholder="Дата"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="address"
            defaultValue={address}
            onChange={handleAddress}
            placeholder="Адрес"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="title"
            defaultValue={title}
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
            defaultValue={description}
            onChange={handleDescription}
            placeholder="Описание"
          />
        </Form.Group>
        <>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={handlePhoto}
              type="file"
              name="photo"
              placeholder="Выберите фото"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Добавить
          </Button>
        </>
      </Form>
    </Container>
  );
}

export default FormEventCreate;

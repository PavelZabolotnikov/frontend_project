import React, { useCallback, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAppDispatch } from '../../store';
import { createLawyer } from '../lawyers/lawyerSlice';

type FormLawyerProps = {
  onBtn: () => void;
};

function FormLawyerCreate({ onBtn }: FormLawyerProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [fullname, setFullname] = useState('');
  const [price, setPrice] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState<File>();

  const handleFullName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFullname(event.target.value);
    },
    [],
  );

  const handlePrice = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPrice(event.target.value);
    },
    [],
  );

  const handleSpeciality = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSpeciality(event.target.value);
    },
    [],
  );

  const handleExperience = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setExperience(event.target.value);
    },
    [],
  );

  const handleDescription = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
    },
    [],
  );

  const handlePhone = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPhone(event.target.value);
    },
    [],
  );

  const handleEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const handlePhoto = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        setPhoto(event.target.files[0]);
      }
    },
    [],
  );

  const handleCreateLawyer: React.FormEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();
    if (photo) {
      dispatch(
        createLawyer({
          full_name: fullname,
          price,
          experience,
          speciality,
          description,
          photo,
          email,
          phone,
        }),
      );
    }
    setFullname('');
    setPrice('');
    setDescription('');
    setExperience('');
    setSpeciality('');
    setEmail('');
    setPhone('');
    setPhoto(undefined);
    onBtn();
  };

  return (
    <Container>
      <h3>Добавить юриста</h3>
      <Form onSubmit={handleCreateLawyer}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="fullName"
            defaultValue={fullname}
            onChange={handleFullName}
            placeholder="ФИО"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="number"
            name="price"
            defaultValue={price}
            onChange={handlePrice}
            placeholder="Цена"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="speciality"
            defaultValue={speciality}
            onChange={handleSpeciality}
            placeholder="Специальность"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="number"
            name="experience"
            defaultValue={experience}
            onChange={handleExperience}
            placeholder="Работаю с ... года"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="description"
            as="textarea"
            rows={5}
            defaultValue={description}
            onChange={handleDescription}
            placeholder="Описание"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="email"
            defaultValue={email}
            onChange={handleEmail}
            placeholder="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="phone"
            defaultValue={phone}
            onChange={handlePhone}
            placeholder="Телефон"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="file"
            name="photo"
            onChange={handlePhoto}
            placeholder="Выберите фото"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Добавить
        </Button>
      </Form>
    </Container>
  );
}

export default FormLawyerCreate;

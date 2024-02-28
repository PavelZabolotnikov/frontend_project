import React, { useCallback, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAppDispatch } from '../../store';
import LawyerChange from './types/LawyerChange';
import { changeLawyerCard } from '../lawyers/lawyerSlice';

type FormLawyerProps = {
  changeCard: LawyerChange;
  onCloseForm: () => void;
};

function FormLawyerChange({
  changeCard,
  onCloseForm,
}: FormLawyerProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [fullname, setFullname] = useState('');
  const [price, setPrice] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

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

  const handleChangeLawyer: React.FormEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();
    dispatch(
      changeLawyerCard({
        id: changeCard.id,
        full_name: fullname.length > 0 ? fullname : changeCard.full_name,
        price: price.length > 0 ? price : changeCard.price,
        experience: experience.length > 0 ? experience : changeCard.experience,
        speciality: speciality.length > 0 ? speciality : changeCard.speciality,
        description:
          description.length > 0 ? description : changeCard.description,
        email: email.length > 0 ? email : changeCard.email,
        phone: phone.length > 0 ? phone : changeCard.phone,
      }),
    );
    setFullname('');
    setPrice('');
    setDescription('');
    setExperience('');
    setSpeciality('');
    setEmail('');
    setPhone('');
    onCloseForm();
  };

  return (
    <Container>
      <h3>Изменить карточку юриста</h3>
      <Form onSubmit={handleChangeLawyer}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="fullName"
            defaultValue={changeCard.full_name}
            onChange={handleFullName}
            placeholder="ФИО"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="number"
            name="price"
            defaultValue={changeCard.price}
            onChange={handlePrice}
            placeholder="Цена"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="speciality"
            defaultValue={changeCard.speciality}
            onChange={handleSpeciality}
            placeholder="Специальность"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="number"
            name="experience"
            defaultValue={changeCard.experience}
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
            defaultValue={changeCard.description}
            onChange={handleDescription}
            placeholder="Описание"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="email"
            defaultValue={changeCard.email}
            onChange={handleEmail}
            placeholder="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="phone"
            defaultValue={changeCard.phone}
            onChange={handlePhone}
            placeholder="Телефон"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Сохранить
        </Button>
      </Form>
    </Container>
  );
}

export default FormLawyerChange;

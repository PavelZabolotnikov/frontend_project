import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import ReactStars from 'react-stars';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '../../store';
import { createFeedback } from './feedbackSlice';

function FeedbackForm(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const [showError, setShowError] = useState(false);

  const [feedbackName, setFeedbackName] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputAboutFeedback, setInputAboutFeedback] = useState('');
  const [stars, setStars] = useState<number | undefined>();

  const handlerSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (
      feedbackName &&
      inputDate &&
      inputPhone &&
      inputEmail &&
      inputAboutFeedback &&
      stars
    ) {
      dispatch(
        createFeedback({
          feedbackName,
          inputDate,
          inputPhone,
          inputEmail,
          inputAboutFeedback,
          lawyer_id: Number(id),
          stars,
        }),
      );
      toast('Ваш отзыв успешно отправлен!');
      setFeedbackName('');
      setInputDate('');
      setInputPhone('');
      setInputEmail('');
      setInputAboutFeedback('');
    } else {
      setShowError(true);
    }
  };

  const handlerName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFeedbackName(e.target.value);
  };

  const handlerDate: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputDate(e.target.value.toString());
  };

  const handlerPhone: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputPhone(e.target.value);
  };

  const handlerEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputEmail(e.target.value);
  };

  const handlerAboutFeedback: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setInputAboutFeedback(e.target.value);
  };

  const ratingChanged = (newRating: number): void => {
    setStars(newRating);
  };

  return (
    <Container>
      <Form className="feedback-form" onSubmit={handlerSubmit}>
        <h5>Оставьте свой отзыв здесь:</h5>
        <Form.Control
          value={feedbackName}
          onChange={handlerName}
          type="text"
          placeholder="ФИО"
          size="sm"
        />
        <Form.Label style={{ fontSize: '14px' }}>Дата визита</Form.Label>
        <Form.Control
          value={inputDate}
          onChange={handlerDate}
          type="date"
          className="input-date"
          size="sm"
        />
        <Form.Control
          value={inputPhone}
          onChange={handlerPhone}
          type="phone"
          placeholder="Номер телефона"
          size="sm"
        />
        <Form.Control
          value={inputEmail}
          onChange={handlerEmail}
          type="email"
          placeholder="Email"
          size="sm"
        />
        <Form.Label style={{ fontSize: '14px' }}>
          Расскажите о вашем опыте
        </Form.Label>
        <Form.Control
          value={inputAboutFeedback}
          onChange={handlerAboutFeedback}
          as="textarea"
          rows={2}
        />
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={40}
          color2="#f28b64"
        />

        {showError && (
          <div style={{ fontSize: '14px' }}>Заполните все поля!</div>
        )}
        <div>
          <Button className="button-orange" type="submit">
            Оставить отзыв
          </Button>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{ fontSize: '20px', height: '100px', width: '400px' }}
          />
        </div>
      </Form>
    </Container>
  );
}

export default FeedbackForm;

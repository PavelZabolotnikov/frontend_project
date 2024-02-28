import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ICreatePayment } from '@a2seven/yoo-checkout';
import { Button, Form } from 'react-bootstrap';
import * as apiMoney from './apiMoney';
import { RootState, useAppDispatch } from '../../store';
import { loadEvent } from '../adminEvents/eventSlice';

export default function Api(): JSX.Element {
  const [src, setSrc] = useState('');

  const navPay = useNavigate();

  async function pay(): Promise<void> {
    apiMoney.loadMoney().then((data) => {
      setSrc(data);
    });
    navPay(src);
    // window.location.assign(src)
  }

  const events = useSelector((store: RootState) => store.eventList.eventList);

  const dispatch = useAppDispatch();

  const sortedEvents = useMemo(
    () =>
      [...events]
        .filter((event) => new Date(event.date) > new Date())
        .sort((a, b) => +new Date(a.date) - +new Date(b.date)),
    [events],
  );

  useEffect(() => {
    dispatch(loadEvent());
  }, [dispatch]);

  return (
    <Form action="http://localhost:4000/api/money" className="modal-form">
      <Form.Select name="mer" className="form-select" aria-label="Select Event">
        <option>Выберите мероприятие</option>
        {sortedEvents.map((el) => (
          <option key={el.id} value={el.title}>
            {`${el.title} ${el.date.toString().slice(0, 10)}`}
          </option>
        ))}
      </Form.Select>
      <Form.Select
        name="price"
        className="form-select"
        aria-label="Select Tarif"
      >
        <option>Выберите тариф</option>
        <option value="800">Тариф Simple - 800 руб.</option>
        <option value="1500">Тариф Basic - 1500 руб.</option>
        <option value="6000">Тариф Pro - 6000</option>
      </Form.Select>
      
      <Form.Control
        name='inputPhoneUser'
        type="number"
        placeholder="Введите номер телефона"
      />
      <Form.Control
        name='inputNameUser'
        type="text"
        placeholder="Введите ФИО"
      />
      
      <Button className="button-orange" type="submit">
        Оплатить
      </Button>
    </Form>
  );
}

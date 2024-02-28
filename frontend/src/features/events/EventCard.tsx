/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
} from '@pbe/react-yandex-maps';
import { Container, Button, Modal } from 'react-bootstrap';
import { RootState } from '../../store';
import Tarifs from '../tarif/Tarifs';
import Api from '../money/Api';
import css from './Events.module.css';
import ContactsForQuestions from './ContactsForQuesеions';

function EventCard(): JSX.Element {
  const nav = useNavigate();
  const id = useParams();
  const [showForm, setShowForm] = useState(false);

  const handleClose = (): void => setShowForm(false);

  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = useSelector((store: RootState) => store.eventList.eventList);
  const event = events.find((el) => el.id === Number(id.id));

  const geoCode = (ymaps: any): void => {
    ymaps
      .load('geocode')
      .then(() => ymaps.geocode(event?.address))
      .then((result: any) => {
        setCoordinates(result.geoObjects.get(0).geometry.getCoordinates());
      });
  };

  const handleClick = (): void => {
    setShowForm((p) => !p);
  };

  return (
    <Container className={css.outerContainer}>
      <Container className={css.container}>
        <Container className={css.containerColumn}>
          <h1 className={css.header}>{event?.title.toUpperCase()}</h1>
          <div className={css.containerText}>
            <p>{event?.description}</p>
            <p>
              Адрес мероприятия:
              <br />
              <b>{event?.address}</b>
            </p>
            <p>
              Дата проведения: <b>{event?.date.toString().slice(0, 10)}</b>{' '}
            </p>
          </div>
          <Tarifs />
          <Container className={css.contacts}>
            <ContactsForQuestions />
          </Container>
          <Button className={css.buttonPay} onClick={handleClick}>
            Записаться на мероприятие
          </Button>

          <Modal
            show={showForm}
            onHide={handleClose}
            className={css.modal}
            size="lg"
            centered
          >
            <Modal.Header>
              <Modal.Title>Выберите тариф и мероприятие</Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Modal.Header>
            <Modal.Body>
              <Api />
            </Modal.Body>
          </Modal>
        </Container>
        <Container className={css.imgContainer}>
          <img className={css.img} src={event?.photo} alt="eventPhoto" />
        </Container>
      </Container>

      <Container className={css.map}>
        <YMaps
          enterprise
          query={{
            apikey: '3ffd02ca-c72d-48a9-a01d-0162a040aa08',
          }}
        >
          <Map
            onLoad={geoCode}
            className={css.map}
            state={{
              center: coordinates,
              zoom: 18,
            }}
          >
            <Placemark geometry={coordinates} />
            <FullscreenControl options={{ float: 'left' }} />
          </Map>
        </YMaps>
      </Container>
    </Container>
  );
}

export default EventCard;

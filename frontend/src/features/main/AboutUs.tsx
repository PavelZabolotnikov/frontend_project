import React from 'react';
import { Container, Image, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function AboutUs(): JSX.Element {
  const darkTheme = useSelector(
    (store: RootState) => store.lawyers.setDarkTheme,
  );

  return (
    <Container
      className={
        darkTheme
          ? 'container-header dark-color-1'
          : 'container-header ligth-color-1'
      }
    >
      <Container className="container-flex-row">
        <Card.Text className="header-text-main pravo-i-levo">
          ПРАВО. И ЛЕВО.
        </Card.Text>
        <Card.Text className="header-text">
          Правовой научпоп, где о праве рассказывают доступным языком.
          <br />
          <br />
          Лекции о праве и сервис по поиску специалиста.
        </Card.Text>
      </Container>
      <Image className="img-head" src="/SVG/header.svg" alt="svg" />
    </Container>
  );
}

export default AboutUs;

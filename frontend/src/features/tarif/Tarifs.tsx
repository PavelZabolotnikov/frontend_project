import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import css from './Tarifs.module.css';

function Tarifs(): JSX.Element {
  const tarifs = useSelector((state: RootState) => state.tarifState.tarifs);

  const darkTheme = useSelector(
    (store: RootState) => store.lawyers.setDarkTheme,
  );

  return (
    <Container className={darkTheme ? css.darkContainer : css.container}>
      {/* {tarifs.map((tarif) => (
        <Card className={css.card} key={tarif.id}>
          <h3 className={css.title}>{tarif.title}</h3>
          <p className={css.text}>{tarif.description}</p>
          <p className={css.price}>
            Цена: <b>{tarif.price} руб.</b>
          </p>
        </Card>
      ))} */}
      <Card className={css.card}>
        <h3 className={css.title}>Тариф Simple</h3>
        <div className={css.text}>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Лекция</ListGroup.Item>
            <ListGroup.Item>Карточки-памятки по теме лекции</ListGroup.Item>
            <ListGroup.Item>
              Скидка 15% на всё меню в день мероприятия
            </ListGroup.Item>
          </ListGroup>
        </div>
        <p className={css.price}>
          Цена: <b>800 руб.</b>
        </p>
      </Card>
      <Card className={css.card}>
        <h3 className={css.title}>Тариф Basic</h3>
        <div className={css.text}>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Тариф Simple</ListGroup.Item>
            <ListGroup.Item>Возможность задать лектору вопрос</ListGroup.Item>
            <ListGroup.Item>
              Участие в разборе кейсов на after-party
            </ListGroup.Item>
          </ListGroup>
        </div>
        <p className={css.price}>
          Цена: <b>1500 руб.</b>
        </p>
      </Card>
      <Card className={css.card}>
        <h3 className={css.title}>Тариф Pro</h3>
        <div className={css.text}>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Тариф Simple и Basic</ListGroup.Item>
            <ListGroup.Item>Любой напиток и блюдо в подарок</ListGroup.Item>
            <ListGroup.Item>
              Индивидуальная консультация адвоката
            </ListGroup.Item>
          </ListGroup>
        </div>
        <p className={css.price}>
          Цена: <b>6000 руб.</b>
        </p>
      </Card>
    </Container>
  );
}

export default Tarifs;

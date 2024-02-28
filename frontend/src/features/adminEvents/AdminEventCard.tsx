import React, { memo, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import type Event from './types/Event';
import css from '../admin/admin.module.css';

type AdminEventCardProps = {
  card: Event;
  onRemove: (id: number) => void;
  onChange: (id: number) => void;
};

function AdminEventCard({
  card,
  onRemove,
  onChange,
}: AdminEventCardProps): JSX.Element {
  const handleRemove: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      onRemove(card.id);
    }, [card.id, onRemove]);

  const handleChange: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      onChange(card.id);
      window.scrollTo(0, 0);
    }, [card.id, onChange]);

  return (
    <Card className={css.card}>
      <Card.Img variant="top" src={card.photo} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
        <Card.Text>
          Адрес проведения:
          <br />
          {card.address}
        </Card.Text>
        <Card.Text>
          Дата мероприятия:
          <br />
          {card.date.toString().slice(0, 10)}
        </Card.Text>
      </Card.Body>
      <Button
        variant="outline-danger"
        className={css.btn}
        onClick={handleRemove}
      >
        Удалить
      </Button>
      <Button
        variant="outline-primary"
        className={css.btn}
        onClick={handleChange}
      >
        Изменить
      </Button>
    </Card>
  );
}

export default memo(AdminEventCard);

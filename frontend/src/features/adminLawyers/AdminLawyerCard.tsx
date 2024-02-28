import React, { memo, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Lawyer from '../lawyers/types/Lawyer';
import css from '../admin/admin.module.css';

type AdminLawyerCardProps = {
  card: Lawyer;
  onRemove: (id: number) => void;
  onChange: (id: number) => void;
};

function AdminLawyerCard({
  card,
  onRemove,
  onChange,
}: AdminLawyerCardProps): JSX.Element {


  
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
      <Card.Img variant="top" src={String(card.photo)} />
      <Card.Body>
        <Card.Title>
          ФИО юриста:
          <br />
          {card.full_name}
        </Card.Title>
        <Card.Text>{card.description}</Card.Text>
        <Card.Text>
          Направление деятельности:
          <br />
          {card.speciality}
        </Card.Text>
        <Card.Text>Опыт работы с {card.experience} года</Card.Text>
        <Card.Text>
          Контакты:
          <br />
          Телефон: {card.phone}
          <br />
          Email: {card.email}
        </Card.Text>
        <Card.Text>Цена консультации за час: от {card.price} руб.</Card.Text>
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

export default memo(AdminLawyerCard);

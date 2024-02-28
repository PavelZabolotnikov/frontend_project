import React, { memo, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';
import Feedback from '../lawyerProfile/types/Feedback';
import css from '../admin/admin.module.css';

type AdminFeedbackCardProps = {
  card: Feedback;
  onRemove: (id: number) => void;
  onChange: (card: Feedback) => void;
};

function AdminFeedbackCard({
  card,
  onRemove,
  onChange,
}: AdminFeedbackCardProps): JSX.Element {
  const handleRemove: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      onRemove(card.id);
    }, [card.id, onRemove]);

  const handleTrue: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      onChange(card);
    }, [card, onChange]);

  return (
    <Card className={css.card}>
      <Card.Body>
        <Card.Title>
          Имя клиента:
          <br />
          {card.full_name}
        </Card.Title>
        <Card.Text>{card.content}</Card.Text>
        <Card.Text>
          Дата консультации с юристом:
          <br />
          {card.date}
        </Card.Text>
        <div>
          Оценка:
          <ReactStars
            count={5}
            value={card.stars}
            size={20}
            edit={false}
            color2="red"
          />
        </div>
        <Card.Text>Email: {card.email}</Card.Text>
        <Card.Text>Телефон: {card.phone}</Card.Text>
        <Card.Title>
          Имя юриста:
          <br />
          {card.Lawyer.full_name}
        </Card.Title>
      </Card.Body>
      {card.accepted ? (
        <Button
          variant="outline-danger"
          className={css.btn}
          onClick={handleRemove}
        >
          Удалить
        </Button>
      ) : (
        <>
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
            onClick={handleTrue}
          >
            Проверен
          </Button>
        </>
      )}
    </Card>
  );
}

export default AdminFeedbackCard;

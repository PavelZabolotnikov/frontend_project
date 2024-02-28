import React from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import ReactStars from 'react-stars';
import Lawyer from './types/Lawyer';

export default function OneLawyers({
  oneLawyers,
  rating,
}: {
  oneLawyers: Lawyer;
  rating: number;
}): JSX.Element {
  return (
    <Card className="all-lawyers-cards">
      <NavLink to={`/lawyers/${oneLawyers.id}`}>
        <div className="all-lawyers-cards-img">
          <Card.Img src={String(oneLawyers.photo)} />
        </div>
        <Card.Body className="card-lawyer-small">
          <Card.Title className="all-lawyers-title">
            {oneLawyers.full_name}
          </Card.Title>
          <ReactStars
            className="rating"
            count={5}
            value={rating}
            size={20}
            edit={false}
          />
          <Card.Text>Направления работы: {oneLawyers.speciality}</Card.Text>
          <Card.Text>
            Цена за час от <b>{oneLawyers.price}</b> руб.
          </Card.Text>
        </Card.Body>
      </NavLink>
    </Card>
  );
}

import React, { memo } from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactStars from 'react-stars';
import Lawyer from './types/Lawyer';
import css from './lawyers.module.css';
import { RootState } from '../../store';

function OneLawyer({
  oneLawyer,
  rating,
}: {
  oneLawyer: Lawyer;
  rating: number;
}): JSX.Element {
  const darkTheme = useSelector(
    (store: RootState) => store.lawyers.setDarkTheme,
  );

  return (
    <Card className={darkTheme ? css.darkContainer : css.containerCards}>
      <NavLink to={`/lawyers/${oneLawyer.id}`} className="card-link">
        <div className={css.containerCardsImg}>
          <Card.Img src={String(oneLawyer.photo)} />
        </div>
        <Card.Body
          className={
            darkTheme ? css.containerDarkCardsInner : css.containerCardsInner
          }
        >
          <Card.Title className={css.title}>{oneLawyer.full_name}</Card.Title>
          <ReactStars count={5} value={rating} size={20} edit={false} />
          <Card.Text>Направления работы: {oneLawyer.speciality}</Card.Text>
          <Card.Text>
            Цена за час от <b>{oneLawyer.price}</b> руб.
          </Card.Text>
        </Card.Body>
      </NavLink>
    </Card>
  );
}

export default memo(OneLawyer);

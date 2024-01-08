import React from 'react';
import p from './user-card.module.css';
import { Link } from 'react-router-dom';

export const UserCard = ({ id, name, username }) => {
  return (
    <div className={p.user__card}>
      <div className={p.user__main_info}>
        <div className={p.name}>Name: {name}</div>
        <div className={p.username}>Username: {username}</div>
        <div className={p.user__avatar}>
          <img src="https://i.pravatar.cc/200" alt="user avatar" />
        </div>
      </div>

      <Link className={p.links} to={`/catalog/${id}`}>Подробнее</Link>
    </div>
  );
};
import React from 'react';
import p from './header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={p.header}>
      <h1>Task 16: Router</h1>
      <div className={p.menu}>
        <Link to="/">Главная страница</Link>
        <Link to="/catalog">Пользователи</Link>
      </div>
    </header>
  );
};
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

export const Header = () => {
  return (
    <header className="header">
      <h1>Первая промежуточная аттестация</h1>
      <div className="menu">
        <Link to={AppRoute.Registration}>Регистрация</Link>
        <Link to={AppRoute.Login}>Вход</Link>
        {/* <Link to={AppRoute.Pilots}>Пилоты</Link> */}
        <Link to={AppRoute.About}>О сервисе</Link>
      </div>
    </header>
  );
};
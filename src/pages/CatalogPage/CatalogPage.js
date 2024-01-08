import React, { useState, useEffect } from 'react';
import p from './catalog.module.css';
import { UserCard } from '../../components/UserCard/UserCard';

export const CatalogPage = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsersData(data));
  }, []);

  return (
    <div className={p.catalog}>
      <h1 className={p.catalog__title}>Страница пользователей</h1>
      <div className={p.cards__wrapper}>
        {usersData.map((data) => (
          <UserCard
          key={data.id} 
          id={data.id} 
          name={data.name} 
          username={data.username} 
          />
        ))}
      </div>
    </div>
  );
};
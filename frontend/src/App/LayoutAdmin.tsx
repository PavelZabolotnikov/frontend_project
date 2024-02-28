import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderAdmin from './HeaderAdmin';

function LayoutAdmin(): JSX.Element {
  return (
    <div className="App">
      <HeaderAdmin />
      <Outlet />
    </div>
  );
}

export default LayoutAdmin;

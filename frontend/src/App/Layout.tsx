import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '../features/main/Footer';
import Header from '../features/main/Header';
import { RootState } from '../store';

function Layout(): JSX.Element {
  const darkTheme = useSelector(
    (store: RootState) => store.lawyers.setDarkTheme,
  );

  return (
    <Container className={darkTheme ? 'dark-color-2' : ''}>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default Layout;

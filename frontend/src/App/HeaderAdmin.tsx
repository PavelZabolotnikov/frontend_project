import React, { useCallback } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { logout } from '../features/admin/authSlice';
import { RootState, useAppDispatch } from '../store';

function HeaderAdmin(): JSX.Element {
  const admin = useSelector((state: RootState) => state.admin.admin);

  const dispath = useAppDispatch();

  const handleLogOut = useCallback((): void => {
    dispath(logout());
  }, [dispath]);

  return (
    <Container className="header header-main ligth-color-1">
      <Navbar className="header">
        <Container>
          <Navbar.Brand href="#home">ПРАВО. И ЛЕВО. Для админов.</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/admin/feedback">Отзывы</Nav.Link>
            <Nav.Link href="/admin/event">Мероприятия</Nav.Link>
            <Nav.Link href="/admin/lawyers">Юристы</Nav.Link>
            {admin ? (
              <Nav.Link href="/admin" onClick={handleLogOut}>
                Выйти
              </Nav.Link>
            ) : (
              <Nav.Link href="/admin" onClick={handleLogOut}>
                Войти
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default HeaderAdmin;

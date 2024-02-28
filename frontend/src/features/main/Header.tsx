import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { setDarkTheme } from '../lawyers/lawyerSlice';

function Header(): JSX.Element {
  const darkTheme = useSelector(
    (store: RootState) => store.lawyers.setDarkTheme,
  );

  const dispatch = useAppDispatch();

  const nav = useNavigate();

  const handleClick = (): void => {
    nav(-1);
  };

  const handlerTheme = (): void => {
    if (localStorage.theme === 'dark') {
      dispatch(setDarkTheme(false));
      localStorage.setItem('theme', 'ligth');
    } else {
      dispatch(setDarkTheme(true));
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <Container
      className={
        darkTheme ? 'header-main dark-color-1' : 'header-main ligth-color-1'
      }
    >
      <Navbar>
        <Container>
          <Nav
            className={
              darkTheme ? 'me-auto dark-color-1' : 'me-auto ligth-color-1'
            }
          >
            {window.location.pathname.match(/[0-9]/gm) && (
              <Nav.Link onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-backspace"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                  <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                </svg>
              </Nav.Link>
            )}
            <Nav.Link href="/" className="logo-font">
              ПРАВО. И ЛЕВО.
            </Nav.Link>
            <Nav.Link href="/lawyers">Подобрать юриста</Nav.Link>
            <Nav.Link href="/#event-ancor">Мероприятия</Nav.Link>
            <Nav.Link href="#law-ancor">Для юристов</Nav.Link>

            {darkTheme ? (
              <Nav.Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handlerTheme}
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-sun"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
              </Nav.Link>
            ) : (
              <Nav.Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handlerTheme}
                  width="32"
                  height="32"
                  fill="#acacac"
                  className="bi bi-brightness-high-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;

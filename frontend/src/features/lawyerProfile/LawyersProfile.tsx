import React, { useEffect } from 'react';
import { Card, Container, Image, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-stars';
import { RootState, useAppDispatch } from '../../store';
import { loadOneLawyer } from '../lawyers/lawyerSlice';
import FeedbackForm from './FeedbackForm';
import { loadFeedback } from './feedbackSlice';
import './styles-fb-and-profile.css';

function LawyerProfile(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const feedbackList = useSelector(
    (state: RootState) => state.feedback.feedbackList,
  );

  const oneLawyer = useSelector((state: RootState) => state.lawyers.oneLawyer);

  const darkTheme = useSelector(
    (store: RootState) => store.lawyers.setDarkTheme,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(loadOneLawyer(Number(id)));
    dispatch(loadFeedback(Number(id)));
  }, [dispatch, id]);

  return (
    <Container>
      {oneLawyer && (
        <div
          className={
            darkTheme ? 'one-lawyer-card dark-color-2' : 'one-lawyer-card'
          }
        >
          <img
            className="img-big-lawyer"
            src={String(oneLawyer.photo)}
            alt="lawyer"
          />
          <Card
            className={
              darkTheme
                ? 'text-center card-one-lawyer dark-color-1'
                : 'text-center card-one-lawyer'
            }
          >
            <Card.Title className="text-center big-ltr">
              {oneLawyer.full_name}
            </Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Направление деятельности:</ListGroup.Item>
              <ListGroup.Item>{oneLawyer.speciality}</ListGroup.Item>

              <ListGroup.Item>
                Опыт работы с {oneLawyer.experience} года
              </ListGroup.Item>
              <ListGroup.Item>
                Цена за час от {oneLawyer.price} руб.
              </ListGroup.Item>
            </ListGroup>
            <Card.Text>
              <b>{oneLawyer.description}</b>
            </Card.Text>
            <Card.Text>
              Контакты:
              <br />
              Телефон:{' '}
              <a className="link" href={`tel:${oneLawyer.phone}`}>
                {oneLawyer.phone}
              </a>
              <br />
              Email:{' '}
              <a className="link" href={`mailto:${oneLawyer.email}`}>
                {oneLawyer.email}
              </a>
            </Card.Text>
            <div>
              Рейтинг:
              <ReactStars
                count={5}
                value={
                  feedbackList.reduce((sum, el) => sum + el.stars, 0) /
                  feedbackList.length
                }
                size={50}
                edit={false}
                color2="#f28b64"
              />
            </div>
          </Card>
        </div>
      )}
      <Container className="container-lawyer-fb">
        <Container className="feedback-container">
          <h5>Отзывы:</h5>
          {feedbackList.map((el) => (
            <Card
              className={
                darkTheme ? 'dark-color-1 fb-card' : 'light-blue fb-card'
              }
              key={el.id}
            >
              <Card.Body>
                <ReactStars
                  count={5}
                  value={el.stars}
                  size={20}
                  edit={false}
                  color2="#f28b64"
                />
                {el.content}
              </Card.Body>
            </Card>
          ))}
        </Container>
        <FeedbackForm />
        <Image className="img-lawyer" src="/SVG/lawwyers-page.svg" />
      </Container>
    </Container>
  );
}

export default LawyerProfile;

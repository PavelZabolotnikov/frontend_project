import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper';
import { Container, Image } from 'react-bootstrap';
import { RootState, useAppDispatch } from '../../../store';
import { loadEvent } from '../../adminEvents/eventSlice';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

function Carousel(): JSX.Element {
  const events = useSelector((store: RootState) => store.eventList.eventList);

  const darkTheme = useSelector(
    (store: RootState) => store.lawyers.setDarkTheme,
  );

  const nav = useNavigate();

  const dispatch = useAppDispatch();

  const sortedEvents = useMemo(
    () =>
      [...events]
        .filter((event) => new Date(event.date) > new Date())
        .sort((a, b) => +new Date(a.date) - +new Date(b.date)),
    [events],
  );

  useEffect(() => {
    dispatch(loadEvent());
  }, [dispatch]);

  return (
    <Container
      className={
        darkTheme ? 'events-container dark-color-2' : 'events-container'
      }
    >
      <Image className="events-container-img" src="/SVG/events-header.svg" />
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {sortedEvents.map((event) => (
          <SwiperSlide
            key={event.id}
            className="carousel-item active"
            onClick={() => nav(`events/${event.id}`)}
          >
            <div
              className={darkTheme ? 'swiper-card dark-color-2' : 'swiper-card'}
            >
              <img
                className="swiper-card-img"
                src={`${event.photo}`}
                alt="First slide"
              />
              <div className="inner-swiper-card">
                <h2>{event.title}</h2>
                <br />
                <h5>Адрес: {event.address}</h5>
                <br />
                <h5>Дата проведения: {event.date.toString().slice(0, 10)}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Carousel;

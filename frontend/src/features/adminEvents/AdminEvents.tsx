import React, { useCallback, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import assert from 'assert';
import { RootState, useAppDispatch } from '../../store';
import FormEvent from './FormEvent';
import { loadEvent, removeEvent } from './eventSlice';
import AdminEventCard from './AdminEventCard';
import Event from './types/Event';
import css from '../admin/admin.module.css';

function AdminEvents(): JSX.Element {
  const dispatch = useAppDispatch();
  const [card, setCard] = useState<Partial<Event>>({});

  useEffect(() => {
    dispatch(loadEvent());
  }, [dispatch]);

  const admin = useSelector((state: RootState) => state.admin.admin);
  const events = useSelector((state: RootState) => state.eventList.eventList);

  const handleEventRemove = useCallback(
    (id: number): void => {
      dispatch(removeEvent(id));
    },
    [dispatch],
  );

  const handleChanheForm = (): void => {
    setCard({});
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleEventChange = (id: number) => {
    const event = events.find((el) => el.id === id);
    assert(event);

    setCard(event);
  };

  if (!admin) {
    return <Container>Ne admin</Container>;
  }

  return (
    <>
      <Container className={css.form}>
        {[
          <FormEvent
            key={card.id}
            changeCard={card}
            onCloseForm={handleChanheForm}
          />,
        ]}
      </Container>

      <Container className={css.container}>
        {events.map((el) => (
          <AdminEventCard
            key={el.id}
            card={el}
            onRemove={handleEventRemove}
            onChange={handleEventChange}
          />
        ))}
      </Container>
    </>
  );
}

export default AdminEvents;

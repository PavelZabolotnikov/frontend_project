import React, { useCallback, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import assert from 'assert';
import { RootState, useAppDispatch } from '../../store';
import { loadLawyers, removeLawyer } from '../lawyers/lawyerSlice';
import FormLawyer from './FormLawyers';
import AdminLawyerCard from './AdminLawyerCard';
import css from '../admin/admin.module.css';

function AdminLawyers(): JSX.Element {
  const dispatch = useAppDispatch();
  const [card, setCard] = useState({});

  useEffect(() => {
    dispatch(loadLawyers());
  }, [dispatch]);

  const admin = useSelector((state: RootState) => state.admin.admin);
  const lawyers = useSelector((state: RootState) => state.lawyers.lawyersList);

  const handleEventRemove = useCallback(
    (id: number): void => {
      dispatch(removeLawyer(id));
    },
    [dispatch],
  );

  const handleChanheForm = useCallback((): void => {
    setCard({});
  }, []);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleEventChange = useCallback(
    (id: number) => {
      const lawyer = lawyers.find((el) => el.id === id);
      assert(lawyer);
      setCard(lawyer);
    },
    [lawyers],
  );

  if (!admin) {
    return <Container>Ne admin</Container>;
  }
  return (
    <>
      <Container className={css.form}>
        <FormLawyer changeCard={card} onCloseForm={handleChanheForm} />
      </Container>

      <Container className={css.container}>
        {lawyers.map((el) => (
          <AdminLawyerCard
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

export default AdminLawyers;

import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Form } from 'react-bootstrap';
import { RootState, useAppDispatch } from '../../store';
import { loadLawyers } from './lawyerSlice';
import OneLawyers from './OneLawyer';
import Lawyer from './types/Lawyer';
import css from './lawyers.module.css';

function Lawyers(): JSX.Element {
  const dispatch = useAppDispatch();
  const [option, setOption] = useState('По специальности');
  const [filterOne, setFilterOne] = useState('По цене');

  const lawyersList = useSelector(
    (state: RootState) => state.lawyers.lawyersList,
  );

  useEffect(() => {
    dispatch(loadLawyers());
  }, [dispatch]);

  const filteredLawyers: Lawyer[] = useMemo(
    () =>
      lawyersList.filter((el) =>
        option !== 'По специальности' ? el.speciality.includes(option) : true,
      ),
    [lawyersList, option],
  );

  const filteredLawyersWithPrice: Lawyer[] = useMemo(() => {
    if (filterOne === 'minToMax') {
      return [...filteredLawyers].sort(
        (a, b) => Number(a.price) - Number(b.price),
      );
    }
    if (filterOne === 'maxToMin') {
      return [...filteredLawyers].sort(
        (a, b) => Number(b.price) - Number(a.price),
      );
    }
    return [...filteredLawyers];
  }, [filterOne, filteredLawyers]);

  const filters: string[] = useMemo(
    () =>
      Array.from(
        new Set([...lawyersList].map((el) => el.speciality.split(', ')).flat()),
      ),
    [lawyersList],
  );

  return (
    <>
      <h1 className={css.header}>Наши юристы</h1>
      <Container className={css.containerSelect}>
        <Form.Select onChange={(e) => setOption(e.target.value)}>
          <option>По специальности</option>
          {filters.map((el, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <option value={el} key={i}>
              {el}
            </option>
          ))}
        </Form.Select>
        <Form.Select onChange={(e) => setFilterOne(e.target.value)}>
          <option>По цене</option>
          <option value="minToMax">От меньшего к большему</option>
          <option value="maxToMin">От большего к меньшему</option>
        </Form.Select>
      </Container>

      <Container className={css.container}>
        {filteredLawyersWithPrice.map((lawyer) => (
          <OneLawyers
            key={lawyer.id}
            oneLawyer={lawyer}
            rating={
              lawyer.Feedbacks
                ? lawyer.Feedbacks.filter((el) => el.accepted === true).reduce(
                    (sum, el) => sum + el.stars,
                    0,
                  ) /
                  lawyer.Feedbacks.filter((el) => el.accepted === true).length
                : 5
            }
          />
        ))}
      </Container>
    </>
  );
}

export default Lawyers;

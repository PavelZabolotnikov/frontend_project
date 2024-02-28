import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import EventChange from './types/EventChange';
import FormEventCgange from './FormEventChange';
import FormEventCreate from './FormEventCreate';

type FormEventProps = {
  changeCard: EventChange;
  onCloseForm: () => void;
};

function FormEvent({ changeCard, onCloseForm }: FormEventProps): JSX.Element {
  const [btn, setBtn] = useState(false);
  const handleButton = (): void => {
    setBtn((prev) => !prev);
  };

  return (
    <>
      <Button variant="primary" type="submit" onClick={handleButton}>
        Окрыть форму
      </Button>
      {changeCard.id ? (
        <FormEventCgange changeCard={changeCard} onCloseForm={onCloseForm} />
      ) : (
        btn && <FormEventCreate onBtn={handleButton} />
      )}
    </>
  );
}

export default FormEvent;

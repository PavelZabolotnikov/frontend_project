import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import LawyerChange from './types/LawyerChange';
import FormLawyerChange from './FormLawyerChange';
import FormLawyerCreate from './FormLawyerCreate';

type FormLawyerProps = {
  changeCard: LawyerChange;
  onCloseForm: () => void;
};

function FormLawyer({ changeCard, onCloseForm }: FormLawyerProps): JSX.Element {
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
        <FormLawyerChange changeCard={changeCard} onCloseForm={onCloseForm} />
      ) : (
        btn && <FormLawyerCreate onBtn={handleButton} />
      )}
    </>
  );
}

export default FormLawyer;

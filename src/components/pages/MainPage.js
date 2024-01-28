import React, { useEffect } from 'react';
import musicians from '../../musicians.json'
import { addMusician } from '../../store/MusicianSlice/musicianSlice';
import { useDispatch } from 'react-redux';
import { MusiciansCards } from '../MusiciansCards/musiciansCards'; 

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addMusician(musicians));
  }, [dispatch]);

  return (
    <>
      <h3>Исполнители</h3>
      <MusiciansCards />
    </>
  );
};
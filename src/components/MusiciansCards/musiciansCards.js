import React from 'react';
import { useSelector } from 'react-redux';
import { getMusician } from '../../store/MusicianSelectors/musicianSelectors'; 
import { MusicianCard } from '../MovieCard/MovieCard';


export const MusiciansCards = () => {
  const musicians = useSelector(getMusician);

  return (
    <div>
      {musicians.length > 0 && musicians.map((musician) => 
      <MusicianCard 
      key={musician.musiciansID}
      musiciansData={musician} />)}
    </div>
  );
};
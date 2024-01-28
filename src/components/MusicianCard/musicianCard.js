import React from 'react';

export const MusicianCard = ({ musiciansData }) => {
  const { name, nickname, age, nativeTown, stile } = musiciansData;

  return (
    <div>
      <div >
      </div>
      <div >
        <div>
           <b>{nickname}</b>
        </div>
      </div>
      <div >
        <div>
          Имя: <b>{name}</b>
        </div>
        <div>
          Возраст: <b>{age}</b>
        </div>
        <div>
          Родной город: <b>{nativeTown}</b>
        </div>
        <div>
          Стиль: <b>{stile}</b>
        </div>
      </div>
    </div>
  );
};
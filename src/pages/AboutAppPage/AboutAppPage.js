import React from 'react';
import p from './about_app_page.module.css';

export const AboutAppPage = () => {
  return (
      <div className={p.about}>
        <h1>С помощью данного сайта можно посмотреть какие пилоты учавствовали в Российской Дрифт Серии Гран-При в 2023 году.</h1>
        <img
          src="https://yt3.googleusercontent.com/ytc/AGIKgqNuxhLYxtDVUo8THotN1lalvnPUKfUSj1S_hzCL=s900-c-k-c0x00ffffff-no-rj"
          alt="Конусай"
        />
      </div>
  );
};
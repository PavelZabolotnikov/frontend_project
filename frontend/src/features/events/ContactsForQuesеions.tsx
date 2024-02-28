import React, { useState } from 'react';
import css from './Events.module.css';

function ContactsForQuestions(): JSX.Element {
  return (
    <div className={css.contactsContainer}>
      <div>
        <img src="/SVG/ContactsLogo.svg" alt="eventPhoto" />
      </div>

      <div>
        <p>
          Возникли вопросы по мероприятию?
          <br />
          Наши контакты:
          <br />
          Телефон:{' '}
          <a className="link" href="tel:+7(906)155-63-32">
            +7 (906) 155-63-32
          </a>
          <br />
          Email:{' '}
          <a className="link" href="mailto:info@pravo-i-levo.ru">
            info@pravo-i-levo.ru
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactsForQuestions;

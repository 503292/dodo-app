import React from 'react';

import kilidorUrl from '../assets/image/inProgress/kolidor.png';

const ErrorPage = () => (
  <>
    <img
      src={kilidorUrl}
      alt="Україна понад усе)."
      style={{ borderRadius: '15px', width: '100%' }}
    />
    <h2>Сторінки наразі не є "404"</h2>
  </>
);

export default ErrorPage;

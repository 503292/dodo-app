import React from 'react';

import kilidorUrl from '../assets/image/inProgress/kolidor.png';

const ErrorPage = () => (
  <>
    <h2 style={{ display: 'inline-block', margin: '20px 0' }}>
      Love from Ukraine). UA. In progress ...
    </h2>
    <span
      style={{ padding: '10px', fontSize: '30px' }}
      role="img"
      aria-label="нема"
    >
      🌞
    </span>
    <img
      src={kilidorUrl}
      alt="Україна понад усе)."
      style={{ borderRadius: '15px', width: '100%' }}
    />
    <h2>Сторінки наразі ни є "404"</h2>
  </>
);

export default ErrorPage;

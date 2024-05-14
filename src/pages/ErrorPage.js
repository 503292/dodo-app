import React from 'react';

import kilidorUrl from '../assets/image/inProgress/kolidor.png';

const wrapImgCss = {
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 5px',
};
const imgCss = {
  borderRadius: '15px',
  width: '50%',
};

const messageCss = {
  textAlign: 'center',
  margin: 0,
  color: 'tomato',
};

const ErrorPage = () => (
  <>
    <div style={wrapImgCss}>
      <img src={kilidorUrl} alt="Україна понад усе)." style={imgCss} />
    </div>

    <h2 style={messageCss}>Сторінки наразі не є "404"</h2>
  </>
);

export default ErrorPage;

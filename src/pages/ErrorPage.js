import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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

const ErrorPage = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/empty');
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div style={wrapImgCss}>
        <img src={kilidorUrl} alt="Україна понад усе)." style={imgCss} />
      </div>

      <h2 style={messageCss}>Сторінки наразі не є "404"</h2>
    </>
  );
};

export default ErrorPage;

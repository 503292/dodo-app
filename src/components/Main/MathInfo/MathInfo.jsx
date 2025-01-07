import React from 'react';

import start from '../../../assets/image/mathInfo/1-start.png';
import game from '../../../assets/image/mathInfo/2-game.png';
import profile from '../../../assets/image/mathInfo/3-profile.png';

import css from './MathInfo.module.scss';
const about = {
  start: 'Початок гри самий захоплюючий.',
  game: 'Функціонал і налаштування',
  profile: 'Пофайл і налаштування',
};

const MathInfo = () => {
  return (
    <div className={css.wrap}>
      <InfoImage src={start} description={about.start} />
      <InfoImage src={game} description={about.game} />
      <InfoImage src={profile} description={about.profile} />
    </div>
  );
};

export default MathInfo;

const InfoImage = ({ src = '#', description = '4em' }) => {
  return (
    <>
      <div className={css.description}>{description}</div>
      <div className={css.wrapImg}>
        <img className={css.img} src={src} alt={src} />
      </div>
    </>
  );
};

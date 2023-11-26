import React, { useEffect, useState } from 'react';
import motivations from './motivations';

import { ReactComponent as Refresh } from '../../../assets/image/refresh.svg';
import BtnCopy from '../../commons/BtnCopy/BtnCopy';

import css from './Motivator.module.scss';

const Motivator = () => {
  const [motivationNumber, setMotivationNumber] = useState('');

  const loadNewMotivation = e => {
    if (e) {
      e.stopPropagation();
    }
    const randomNumber = arr => Math.floor(Math.random() * arr.length);
    const motivationNumber = String(randomNumber(motivations));
    setMotivationNumber(motivationNumber);
  };

  useEffect(e => {
    loadNewMotivation(e);
  }, []);

  let oneMotive = '';
  let oneAuthor = '';

  if (motivationNumber) {
    oneMotive = motivations?.[+motivationNumber]?.motivation;
    oneAuthor = motivations?.[+motivationNumber]?.author;
  }

  return (
    <>
      <div className={css.container}>
        <button
          type="button"
          className={css.btnRefresh}
          onClick={e => {
            loadNewMotivation(e);
          }}
          title="reload"
        >
          <Refresh className={css.refresh} />
        </button>

        <BtnCopy text={`${oneMotive} ${oneAuthor ? oneAuthor : '🙈 🙉 🙊'}`} />

        <p onClick={e => e.stopPropagation()} className={css.text}>
          {oneMotive}
        </p>
        {oneAuthor ? (
          <span className={css.author}>{oneAuthor}</span>
        ) : (
          <span role="img" aria-label="Monkey" className={css.author}>
            🙈 🙉 🙊
          </span>
        )}
      </div>
    </>
  );
};

export default Motivator;

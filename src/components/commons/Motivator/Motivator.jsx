import React, { useEffect, useState } from 'react';
import motivations from './motivations';

import { ReactComponent as Alatyr } from '../../../assets/image/alatyr.svg';
import { ReactComponent as Refresh } from '../../../assets/image/refresh.svg';
import { ReactComponent as Copy } from '../../../assets/image/copy.svg';

import copyText from '../../../utils/copyText';

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

  const handleCopy = e => {
    e.stopPropagation();
    copyText(
      `${motivations[motivationNumber].motivation} ${motivations[
        motivationNumber
      ].author ?? '🙈 🙉 🙊'}`,
    );
  };

  let oneMotive = '';
  let oneAuthor = '';

  if (motivationNumber) {
    oneMotive = motivations?.[+motivationNumber]?.motivation;
    oneAuthor = motivations?.[+motivationNumber]?.author;
  }

  return (
    <>
      <div className={css.container}>
        <Alatyr className={css.alatyr} />
        <button
          type="button"
          className={css.btnRefresh}
          onClick={e => {
            loadNewMotivation(e);
          }}
        >
          <Refresh className={css.refresh} />
        </button>
        <button
          type="button"
          className={css.btnCopy}
          onClick={e => {
            handleCopy(e);
          }}
        >
          <Copy className={css.copy} />
        </button>

        <p className={css.text}>{oneMotive}</p>
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

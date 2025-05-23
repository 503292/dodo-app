import React from 'react';
import { toastMessage } from '../Toast/Toast';

import { ReactComponent as Copy } from '../../../assets/image/copy.svg';
import copyText from '../../../utils/copyText';

import css from './BtnCopy.module.scss';

const BtnCopy = ({ text }) => {
  const handleCopy = e => {
    e.stopPropagation();
    copyText(text);
    toastMessage('Скопійовано');
  };

  return (
    <>
      <button
        title="copy"
        type="button"
        className={css.btnCopy}
        onClick={e => handleCopy(e)}
      >
        <Copy className={css.copy} />
      </button>
    </>
  );
};

export default BtnCopy;

import React, { useMemo } from 'react';
import css from './MathGame.module.scss';

const Footer = ({ userAnswer }) => {
  const isDisable = useMemo(() => userAnswer === '', [userAnswer]);

  return (
    <div className={css.footer}>
      <button
        type="submit"
        style={isDisable ? { background: 'transparent' } : {}}
        disabled={isDisable}
        className={`animateBtn`}
      >
        Відповісти
      </button>
    </div>
  );
};

export default Footer;

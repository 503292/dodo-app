import React, { useMemo } from 'react';
import css from './MathGame.module.scss';

const Footer = ({ count, userAnswer }) => {
  const isDisable = useMemo(() => userAnswer === '', [userAnswer]);

  return (
    <div className={css.footer}>
      <span>Лічильник: {count}</span>
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

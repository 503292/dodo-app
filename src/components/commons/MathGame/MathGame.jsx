import React, { useState, useMemo } from 'react';
// import second from '../';
import css from './MathGame.module.scss';

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const MathGame = () => {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const mathTask = useMemo(() => {
    const firstNum = randomIntFromInterval(1, 100);
    const secondNum = randomIntFromInterval(1, 100);
    setAnswer(firstNum + secondNum);
    return `${firstNum} + ${secondNum}`;
  }, [count]);

  function handleSubmit(e) {
    e.preventDefault();

    if (answer === +inputValue) {
      setCount(prev => (prev += 1));
      setInputValue('');
    } else {
      console.log('try one more');
    }
  }

  return (
    <form className={css.wrapGame} onSubmit={handleSubmit}>
      <p>Math Game</p>
      <p className={css.mathTask}>{mathTask}</p>
      <input
        type="number"
        inputMode="numeric"
        pattern="\d*"
        value={inputValue}
        onChange={e => setInputValue(+e.target.value)}
      />
      <button type="submit">Відповісти</button> <br />
      <button type="button" onClick={() => setInputValue('')}>
        Скинути
      </button>
      <div> Counter = {count}</div>
    </form>
  );
};

export default MathGame;

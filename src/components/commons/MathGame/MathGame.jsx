import React, { useState, useMemo, Fragment } from 'react';
import Divider from '../Divider/Divider';
import css from './MathGame.module.scss';

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const MathGame = () => {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [answersArr, setAnswersArr] = useState([1, 2, 3, 4]);

  const mathTask = useMemo(() => {
    const firstNum = randomIntFromInterval(0, 2);
    const secondNum = randomIntFromInterval(1, 2);
    setAnswer(firstNum + secondNum);
    return `${firstNum} + ${secondNum}`;
  }, [count]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(answer, '===', inputValue);
    validateAnswer();
  }

  const validateAnswer = () => {
    if (answer === +inputValue) {
      setCount(prev => (prev += 1));
      setInputValue('');
    } else {
      // TODO add toast (refact global)
      console.log('try one more');
    }
  };

  return (
    <form className={css.wrapGame} onSubmit={handleSubmit}>
      <h2>Math Game</h2>
      <div className={css.mathTask}>
        <p>
          {mathTask} <br /> =
        </p>
        <input
          type="number"
          inputMode="numeric"
          pattern="\d*"
          placeholder="?"
          value={inputValue}
          onChange={e => setInputValue(+e.target.value)}
        />
      </div>
      <Divider />

      <div className={css.wrapAnswers}>
        {answersArr.map((el, idx) => (
          <Fragment key={idx}>
            <AnswerBlock text={el} handleClick={setInputValue} />
          </Fragment>
        ))}
      </div>
      <Divider />
      <div className={css.footer}>
        <span>Лічильник: {count}</span>
        <button type="submit" className={`animateBtn`}>
          Відповісти
        </button>
      </div>
    </form>
  );
};

export default MathGame;

const AnswerBlock = ({ text, handleClick = () => {} }) => {
  // TODO generator random answer with include TRUE answer
  return (
    <button type="button" onClick={() => handleClick(text)}>
      {text} - // - TODO
    </button>
  );
};

{
  /* <div className={css.wrapBtns}>
        <button type="button" onClick={() => setInputValue('')}>
          Скинути
        </button>
        <button type="submit">Відповісти</button>
      </div> */
}

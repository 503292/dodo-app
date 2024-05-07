import { toastMessage } from '../Toast/Toast';

export function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getRandomAnswerArr = (min, max, answer = 5) => {
  // max plus answer
  const maxPlus = 2 * max;
  // generate index for true answer
  const randomIndexTrueAnswer = randomIntFromInterval(0, 3);
  //  generate answer array
  const answerArr = Array(4)
    .fill(0)
    .reduce((acc, _, idx) => {
      if (idx === randomIndexTrueAnswer) {
        acc.push(answer);
      } else {
        let randomNum;
        do {
          randomNum = randomIntFromInterval(min, maxPlus);
        } while (randomNum === answer || acc.includes(randomNum));
        acc.push(randomNum);
      }
      return acc;
    }, []);

  return answerArr;
};

export const generateMathTask = (min, max, setAnswer) => {
  const firstNum = randomIntFromInterval(min, max);
  const secondNum = randomIntFromInterval(min, max);
  setAnswer(firstNum + secondNum);
  return `${firstNum} + ${secondNum}`;
};

export const checkAnswer = (answer, inputValue, setCount, setInputValue) => {
  if (answer === +inputValue) {
    setCount(prev => (prev += 1));
    setInputValue('');
  } else {
    toastMessage(`${inputValue} ≠ ).`);
    // setCount(prev => (prev -= 1));
    setInputValue('');
  }
};

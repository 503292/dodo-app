import { toastMessage } from '../Toast/Toast';

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// TODO in progress '%', 'x²', '√² ' , '/'
function getMaxByOperator(max, operator) {
  switch (operator) {
    case '+':
      return max * 2;
    case '-':
      return max;
    case '*':
      return max * max;
  }
}

export const getRandomAnswerArr = (
  min = 0,
  max = 10,
  answer,
  operator = '+',
) => {
  const maxAnswer = getMaxByOperator(max, operator);
  // generate random index for true answer
  const index = randomIntFromInterval(0, 3);
  //  generate answer array
  const answerArr = Array(4)
    .fill(0)
    .reduce((acc, _, idx) => {
      if (idx === index) {
        acc.push(answer);
      } else {
        let randomNum;
        do {
          randomNum = randomIntFromInterval(min, maxAnswer);
        } while (randomNum === answer || acc.includes(randomNum));
        acc.push(randomNum);
      }
      return acc;
    }, []);

  return answerArr;
};

function answerTask(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;
    // TODO in progress '%', 'x²', '√² ' , '/'
    // case "/":
    //   return num1 / num2;

    default:
      return 0;
  }
}

export const generateMathTask = (min, max, setAnswer, operator = '+') => {
  const firstNum = randomIntFromInterval(min, max);
  const secondNum = randomIntFromInterval(min, max);
  const res = answerTask(firstNum, secondNum, operator);
  setAnswer(res);
  return `${firstNum} ${operator} ${secondNum}`;
};

export const checkAnswer = (
  answer,
  userAnswer,
  setCount,
  setUserAnswer,
  mathTask,
) => {
  if (answer === +userAnswer) {
    setCount(prev => (prev += 1));
    setUserAnswer('');
  } else {
    toastMessage(`${mathTask} ≠ ${userAnswer}`);
    // TODO ??? +- for this 🤔 🤨 🧐
    // setCount(prev => (prev -= 1));
    setUserAnswer('');
  }
};

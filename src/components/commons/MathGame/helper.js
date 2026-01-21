import SoundManager from './SoundManager';
export const checkAnswer = (correct, user, isSound) => {
  const isCorrect = correct === +user;

  if (isSound) SoundManager.play(isCorrect ? 'success' : 'error');

  return isCorrect;
};

export function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// TODO in progress '%', '√²'
function getMaxMinByOperator(operator = '+', range = [0, 10]) {
  let min_ = range[0];
  let max_ = range[1];
  const validMax = getMaxIgnoreMinus(min_, max_);

  switch (operator) {
    case '+':
      max_ = validMax * 2;
      break;
    case '-':
      max_ = validMax * 2;
      min_ = -(validMax * 2);
      break;
    case '×':
    case 'x²':
      max_ = validMax * validMax;
      min_ = -validMax * validMax;
      break;
    case 'x÷2':
      max_ = validMax / 2;
      min_ = -validMax / 2;
      break;
    default:
      max_ = validMax * validMax;
      min_ = -validMax * validMax;
  }

  return [min_, max_];
}
function getMaxIgnoreMinus(min, max) {
  if (min < 0 && Math.abs(min) >= max) {
    return Math.abs(min);
  }
  return max;
}

export const getRandomAnswerArr = (
  min = 0,
  max = 10,
  operator = '+',
  answer,
) => {
  // generate min_ & max_ for answer range
  const [min_, max_] = getMaxMinByOperator(operator, [min, max]);
  // generate random index for true answer
  const index = randomIntFromInterval(0, 3);
  //  fill answers array
  const answerArr = Array(4)
    .fill(0)
    .reduce((acc, _, idx) => {
      // logic for push true answer
      if (idx === index) {
        acc.push(answer);
      } else {
        let randomNum;
        do {
          randomNum = randomIntFromInterval(min_, max_);
          if (operator === 'x÷2' && !Number.isInteger(answer)) {
            // add .5 to randomNum if !isInteger
            randomNum += 0.5;
          }
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
    case '×':
      return num1 * num2;
    case 'x²':
      return num1 * num1;
    case 'x÷2':
      return num1 / 2;
    // TODO in progress '%', '√²'
    default:
      return 0;
  }
}

export const generateMathTask = (min = 0, max = 10, operator = '+') => {
  const firstNum = randomIntFromInterval(min, max);

  if (operator === 'x²') {
    return {
      question: `${firstNum}²`,
      answer: firstNum * firstNum,
    };
  }

  if (operator === 'x÷2') {
    return {
      question: `${firstNum} ÷ 2`,
      answer: firstNum / 2,
    };
  }

  const secondNum = randomIntFromInterval(min, max);

  return {
    question: `${firstNum} ${operator} ${secondNum}`,
    answer: answerTask(firstNum, secondNum, operator),
  };
};

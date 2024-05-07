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
  console.log(answerArr);
  return answerArr;
};

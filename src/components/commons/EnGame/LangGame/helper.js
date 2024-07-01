/* eslint-disable no-unused-vars */
// TODO

export const getNewWordsArr = (arr, startIndex, STEP_INCREMENT) => {
  if (arr.length < startIndex) {
    startIndex = 0;
  }
  return arr.slice(startIndex, startIndex + STEP_INCREMENT);
};

export const randomizeArray = array => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// From words arr get random 10 word and view
// save index words range in localStorage

// IN-PROGRESS
// TODO save index for reminder in local storage & add look in view // Refact view
// TODO  find filter input

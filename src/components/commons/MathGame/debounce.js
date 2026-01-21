export const debounce = (fn, delay = 300) => {
  let locked = false;

  return (...args) => {
    if (locked) return;

    locked = true;
    fn(...args);

    setTimeout(() => {
      locked = false;
    }, delay);
  };
};

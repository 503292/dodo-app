export const Priority = Object.freeze({
  LOW: 'низька',
  NORMAL: 'середня',
  HIGH: 'висока',
});

export const getColor = el => {
  switch (el) {
    case 'низька':
      return 'lowPriority';
    case 'висока':
      return 'highPriority';
    default:
      return 'normalPriority';
  }
};

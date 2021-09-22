export const Priority = Object.freeze({
  LOW: 'робота',
  NORMAL: 'відпочинок',
  HIGH: 'сьогодні',
  LONG: 'довготермінові цілі',
});

export const getColor = el => {
  switch (el) {
    case 'робота':
      return 'lowPriority';
    case 'сьогодні':
      return 'highPriority';
    case 'довготермінові цілі':
      return 'longPriority';
    default:
      return 'normalPriority';
  }
};

export const Priority = Object.freeze({
  LOW: 'завдання',
  NORMAL: 'відпочинок',
  HIGH: 'сьогодні',
  LONG: 'довготермінові цілі',
});

export const getColor = el => {
  switch (el) {
    case 'завдання':
      return 'normalPriority';
    case 'сьогодні':
      return 'highPriority';
    case 'довготермінові цілі':
      return 'longPriority';
    default:
      return 'lowPriority';
  }
};

// TODO obj priority
// const priority = {};

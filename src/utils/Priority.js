export const Priority = Object.freeze({
  LOW: 'ідея',
  NORMAL: 'план',
  HIGH: 'виконання',
  LONG: 'ціль',
});

export const getColor = el => {
  switch (el) {
    case 'план':
      return 'normalPriority';
    case 'виконання':
      return 'highPriority';
    case 'ціль':
      return 'longPriority';
    default:
      return 'lowPriority';
  }
};

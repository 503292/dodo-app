import { useState, useCallback, useEffect } from 'react';
import { countEventEmitter } from '../../../utils/eventEmitter';

const DEFAULT_COLOR = 'grey';

export const useBlink = (defaultColor, blinkColor) => {
  const [color, setColor] = useState(
    defaultColor ? defaultColor : DEFAULT_COLOR,
  );

  const doBlink = useCallback(() => {
    setColor(blinkColor ? blinkColor : '#87c33b'); // green
    setTimeout(() => {
      setColor(defaultColor ? defaultColor : DEFAULT_COLOR);
    }, 300);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    countEventEmitter.on('countChanged', doBlink);

    return () => {
      countEventEmitter.off('countChanged', doBlink);
    };
  }, [doBlink]);

  return color;
};

import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import css from './Carousel.module.scss';

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = newIndex => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const [startX, setStartX] = useState(null);

  const handleMouseDown = e => {
    setStartX(e.clientX);
  };

  const handleMouseUp = e => {
    startX >= e.clientX
      ? updateIndex(activeIndex + 1)
      : updateIndex(activeIndex - 1);
  };

  return (
    <div {...handlers} className={css.carousel}>
      <div
        className={css.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {React.Children.map(children, child => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div className={css.indicators}>
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const CarouselItem = ({ children, width }) => {
  return (
    <div className={css.carouselItem} style={{ width: width }}>
      {children}
    </div>
  );
};

export default Carousel;

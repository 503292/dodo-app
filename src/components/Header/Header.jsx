import React, { useEffect, useState } from 'react';
import NavbarTop from './NavbarTop/NavbarTop';
import isDay from '../../utils/isDay';

import css from './Header.module.scss';

const Header = () => {
  const [isDaytime, setIsDaytime] = useState(false);
  // Функція для зміни стану isDaytime
  const toggleDaytime = () => {
    const isSunShine = isDay();
    setIsDaytime(isSunShine);
  };

  useEffect(() => {
    toggleDaytime();
  }, []);

  // Оновлення стану isDaytime кожну хвилину
  useEffect(() => {
    const intervalId = setInterval(toggleDaytime, 60000); // Кожну хвилину
    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, []);

  const headerStyle = {
    backgroundColor: !isDaytime ? '#ffeb3b' : 'rgba(54, 73, 117, 0.9)',
    color: !isDaytime ? 'black' : 'white',
    position: 'relative',
  };

  // Стилі для зірок
  const starStyle = {
    content: '""',
    position: 'absolute',
    width: '5px',
    height: '5px',
    borderRadius: '50%',
  };

  function getRandom(min, max) {
    // Math.random() генерує випадкове число від 0 до 1 (не включаючи 1)
    // Тому ми додаємо 1 до результату, щоб включити максимальне значення (max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getRandomPosition = () => {
    const randomX = Math.random() * 100; // Випадкова позиція від 0% до 100%
    const randomY = Math.random() * 100; // Випадкова позиція від 0% до 100%
    const randomWH = getRandom(1, 5);
    return {
      top: `${randomY}%`,
      left: `${randomX}%`,
      width: `${randomWH}px`,
      height: `${randomWH}px`,
    };
  };

  const stars = Array.from({ length: 10 }, (_, i) => (
    <div
      className={css.dot}
      key={i}
      style={{
        ...starStyle,
        ...getRandomPosition(),
      }}
    ></div>
  ));

  return (
    <header style={headerStyle} className={`${css.wrapHeader}`}>
      <NavbarTop />
      {/* Зірки для нічного часу */}
      {/* {!isDaytime && <>{stars}</>} */}
      {isDaytime && <>{stars}</>}
    </header>
  );
};

export default Header;

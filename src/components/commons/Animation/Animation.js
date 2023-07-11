import React from 'react';
import Particles from 'react-particles-js';

// TODO in-progress
// import { fruits, parseAnimateItems } from './helper';

// Flowers
import flower1 from '../../../assets/image/flowers/flower1.png';
import flower2 from '../../../assets/image/flowers/flower2.png';
import flower3 from '../../../assets/image/flowers/flower3.png';
import flower4 from '../../../assets/image/flowers/flower4.png';
import flower5 from '../../../assets/image/flowers/flower5.png';
import flower6 from '../../../assets/image/flowers/flower6.png';

// Fruits
import apple from '../../../assets/image/fruit/apple.png';
import carrot from '../../../assets/image/fruit/carrot.png';
import cherry from '../../../assets/image/fruit/cherry.png';
import grape from '../../../assets/image/fruit/grape.png';
import lemon from '../../../assets/image/fruit/lemon.png';
import pear from '../../../assets/image/fruit/pear.png';
import pumpkin from '../../../assets/image/fruit/pumpkin.png';
import strawberry from '../../../assets/image/fruit/strawberry.png';
import watermelon from '../../../assets/image/fruit/watermelon.png';

// Autumn
import maple1 from '../../../assets/image/autumn/maple1.png';
import maple2 from '../../../assets/image/autumn/maple2.png';
import mushroom1 from '../../../assets/image/autumn/mushroom1.png';
import mushroom2 from '../../../assets/image/autumn/mushroom2.png';
import mushroom3 from '../../../assets/image/autumn/mushroom3.png';

import winter_1 from '../../../assets/image/winter/winter_1.png';
import winter_2 from '../../../assets/image/winter/winter_2.png';
import winter_3 from '../../../assets/image/winter/winter_3.png';
import winter_4 from '../../../assets/image/winter/winter_4.png';
import winter_5 from '../../../assets/image/winter/winter_5.png';
import winter_6 from '../../../assets/image/winter/winter_6.png';
import winter_7 from '../../../assets/image/winter/winter_7.png';
import winter_8 from '../../../assets/image/winter/winter_8.png';

// import css from './Animation.module.scss';

// spring
// summer
// autumn
// winter

const seasons = {
  spring: [
    { src: flower1, height: 20, width: 20 },
    { src: flower2, height: 20, width: 20 },
    { src: flower3, height: 20, width: 20 },
    { src: flower4, height: 20, width: 20 },
    { src: flower5, height: 20, width: 20 },
    { src: flower6, height: 20, width: 20 },
  ],
  summer: [
    { src: maple1, height: 20, width: 20 },
    { src: maple2, height: 20, width: 20 },
    { src: mushroom1, height: 20, width: 20 },
    { src: mushroom2, height: 20, width: 20 },
    { src: mushroom3, height: 20, width: 20 },
    { src: pumpkin, height: 20, width: 20 },
    { src: grape, height: 20, width: 20 },
    { src: apple, height: 20, width: 20 },
  ],
  autumn: [
    { src: apple, height: 20, width: 20 },
    { src: carrot, height: 20, width: 20 },
    { src: cherry, height: 20, width: 20 },
    { src: grape, height: 20, width: 20 },
    { src: lemon, height: 20, width: 20 },
    { src: pear, height: 20, width: 20 },
    { src: pumpkin, height: 20, width: 20 },
    { src: strawberry, height: 20, width: 20 },
    { src: watermelon, height: 20, width: 20 },
  ],
  winter: [
    { src: winter_1, height: 20, width: 20 },
    { src: winter_2, height: 20, width: 20 },
    { src: winter_3, height: 20, width: 20 },
    { src: winter_4, height: 20, width: 20 },
    { src: winter_5, height: 20, width: 20 },
    { src: winter_6, height: 20, width: 20 },
    { src: winter_7, height: 20, width: 20 },
    { src: winter_8, height: 20, width: 20 },
  ],
};

console.log(seasons, seasons);

const animation = {
  prop: {
    particles: {
      number: {
        value: 12,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: 'ffdd08',
      },
      shape: {
        type: 'image',
        stroke: {
          width: 25,
          color: '#fff',
        },
        polygon: {
          nb_sides: 5,
        },
        // =================== summer
        image: [
          { src: flower1, height: 20, width: 20 },
          { src: flower2, height: 20, width: 20 },
          { src: flower3, height: 20, width: 20 },
          { src: flower4, height: 20, width: 20 },
          { src: flower5, height: 20, width: 20 },
          { src: flower6, height: 20, width: 20 },
        ],
        // =================== autumn 2
        // image: [
        //   { src: maple1, height: 20, width: 20 },
        //   { src: maple2, height: 20, width: 20 },
        //   { src: mushroom1, height: 20, width: 20 },
        //   { src: mushroom2, height: 20, width: 20 },
        //   { src: mushroom3, height: 20, width: 20 },
        //   //
        //   { src: pumpkin, height: 20, width: 20 },
        //   { src: grape, height: 20, width: 20 },
        //   { src: apple, height: 20, width: 20 },
        // ],
        // =================== autumn
        // image: [
        //   { src: apple, height: 20, width: 20 },
        //   { src: carrot, height: 20, width: 20 },
        //   { src: cherry, height: 20, width: 20 },
        //   { src: grape, height: 20, width: 20 },
        //   { src: lemon, height: 20, width: 20 },
        //   { src: pear, height: 20, width: 20 },
        //   { src: pumpkin, height: 20, width: 20 },
        //   { src: strawberry, height: 20, width: 20 },
        //   { src: watermelon, height: 20, width: 20 },
        // ],
        // =================== winter
        // image: [
        // { src: winter_1, height: 20, width: 20 },
        // { src: winter_4, height: 20, width: 20 },
        // { src: winter_5, height: 20, width: 20 },
        // { src: winter_6, height: 20, width: 20 },
        // { src: winter_7, height: 20, width: 20 },
        // { src: winter_8, height: 20, width: 20 },
        // ],
      },

      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 1,
          sync: false,
        },
      },
      size: {
        value: 30,
        random: true,
        anim: {
          enable: true,
          speed: 5,
          size_min: 50,
          sync: false,
        },
      },
    },
  },
};

const Animation = () => (
  <>
    <Particles
      style={{
        position: 'absolute',
        zIndex: '-1',
      }}
      params={animation.prop}
    />
  </>
);

export default Animation;

import React from 'react';
import Particles from 'react-particles-js';

import flower1 from '../../../assets/image/flowers/flower1.png';
import flower2 from '../../../assets/image/flowers/flower2.png';
import flower3 from '../../../assets/image/flowers/flower3.png';
import flower4 from '../../../assets/image/flowers/flower4.png';
import flower5 from '../../../assets/image/flowers/flower5.png';
import flower6 from '../../../assets/image/flowers/flower6.png';

const animation = {
  prop: {
    particles: {
      number: {
        value: 13,
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
        image: [
          { src: flower1, height: 20, width: 20 },
          { src: flower2, height: 20, width: 20 },
          { src: flower3, height: 20, width: 20 },
          { src: flower4, height: 20, width: 20 },
          { src: flower5, height: 20, width: 20 },
          { src: flower6, height: 20, width: 20 },
        ],
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

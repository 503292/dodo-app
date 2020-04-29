import React from 'react';
import Particles from 'react-particles-js';

import flower from '../../assets/image/flower.png';

const animation = {
  prop: {
    particles: {
      number: {
        value: 40,
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
        image: {
          src: flower,
          width: 100,
          height: 100,
        },
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
          size_min: 25,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#008000',
        opacity: 0.5,
        width: 1,
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

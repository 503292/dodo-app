import React from 'react';

import VideoPlayer from '../../commons/VideoPlayer/VideoPlayer';
import BoxWithBorder from '../../commons/BoxWithBorder/BoxWithBorder';

import ukraineMapUrl from '../../../assets/image/UA/UkraineMap.jpg';

import css from './Country.module.scss';

const Country = () => {
  // TODO helper with key videos
  const videoUrl = 'https://www.youtube.com/embed/ZATdVxeksjU';

  return (
    <div className={css.wrapCountry}>
      <h3 className={css.title}>UA, Україна, Червоноград 80103</h3>
      <div className={css.wrapFielset}>
        <BoxWithBorder title="UA, Україна, Львів-Червоноград 80103">
          <div className={css.wrapMap}>
            <img src={ukraineMapUrl} alt="map" />
          </div>
        </BoxWithBorder>
      </div>

      <div className={css.wrapVideo}>
        <VideoPlayer url={videoUrl} />
      </div>
      <div className={css.wrapAudio}></div>
    </div>
  );
};

export default Country;

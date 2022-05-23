import React from 'react';

// import VideoPlayer from '../../commons/VideoPlayer/VideoPlayer';
import BoxWithBorder from '../../commons/BoxWithBorder/BoxWithBorder';

// import ukraineMapUrl from '../../../assets/image/UA/map_ukraine.jpg';
// import patelnyaMapUrl from '../../../assets/image/UA/map_patelnya.jpg';
import { ReactComponent as MapUa } from '../../../assets/image/logo/mapUa.svg';

import css from './Country.module.scss';

const Country = () => {
  // TODO helper with key videos
  // const videoUrl = 'https://www.youtube.com/embed/ZATdVxeksjU';

  return (
    <div className={css.wrapCountry}>
      <div className={css.wrapFielset}>
        <BoxWithBorder title="Карта України).">
          <div className={`${css.wrapMap} ${css.blueYellow}`}>
            <MapUa />
          </div>
        </BoxWithBorder>
        {/* <BoxWithBorder title="UA, Україна, Львів-Червоноград 80103">
          <div className={css.wrapMap}>
            <img src={ukraineMapUrl} alt="map" />
          </div>
        </BoxWithBorder>
        <BoxWithBorder title="Карта України (Пательня).">
          <div className={css.wrapMap}>
            <img src={patelnyaMapUrl} alt="map" />
          </div>
        </BoxWithBorder> */}
        <h3 className={css.title}>UA, Україна, Червоноград 80103</h3>
      </div>

      {/* <div className={css.wrapVideo}>
        <VideoPlayer url={videoUrl} />
      </div> */}
      <div className={css.wrapAudio}></div>
    </div>
  );
};

export default Country;

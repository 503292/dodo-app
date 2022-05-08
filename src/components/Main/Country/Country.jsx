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
      <BoxWithBorder title="UA, Україна, Львів-Червоноград 80103">
        <div className={css.wrapMap}>
          <img src={ukraineMapUrl} alt="map" />
          {/* <img src={ukraineMapUrl} alt="map" /> */}
        </div>
      </BoxWithBorder>

      <div className={css.wrapVideo}>
        <VideoPlayer url={videoUrl} />
      </div>
      <div className={css.wrapAudio}>
        {/* <audio
          className="nativeEmbedPlayerPid"
          id="pid_mwe_player_0"
          src="//upload.wikimedia.org/wikipedia/commons/6/6d/National_anthem_of_Ukraine%2C_instrumental.oga"
          style={{ width: '100%', height: '100%', zIndex: '1' }}
        ></audio> */}

        {/* <audio
          controls
          src="/upload.wikimedia.org/wikipedia/commons/6/6d/National_anthem_of_Ukraine%2C_instrumental.oga"
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio> */}
      </div>
    </div>
  );
};

export default Country;

import React from 'react';

import ukraineMapUrl from '../../../assets/image/UA/UkraineMap.jpg';

import css from './Country.module.scss';

const Country = () => {
  const videoUrl = 'https://www.youtube.com/embed/ZATdVxeksjU';

  return (
    <div className={css.wrapCountry}>
      <h3 className={css.title}>UA, Україна, Червоноград 80103</h3>
      <div className={css.wrapMap}>
        <img src={ukraineMapUrl} alt="map" />
      </div>

      <div className={css.wrapVideo}>
        <iframe
          title="video"
          src={`${videoUrl}?rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&enablejsapi=1&fs=1&cc_load_policy=1&autoplay=1`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
        />
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

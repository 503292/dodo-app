import React from 'react';

import css from './Country.module.scss';

const Country = () => {
  return (
    <div className={css.wrapCountry}>
      UA, Україна, Червоноград 80103
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

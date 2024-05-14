import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import BoxWithBorder from '../../commons/BoxWithBorder/BoxWithBorder';
import Motivator from '../../commons/Motivator/Motivator';
// import VideoPlayer from '../../commons/VideoPlayer/VideoPlayer';

import { ReactComponent as MapUa } from '../../../assets/image/logo/mapUa.svg';

import css from './Country.module.scss';

const Country = () => {
  // TODO helper with key videos
  // const videoUrl = 'https://www.youtube.com/embed/ZATdVxeksjU';

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={css.wrapCountry}>
      <div className={css.wrapFielset} onClick={e => handleClick(e)}>
        <BoxWithBorder>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className={`${css.wrapMap} ${css.blueYellow}`}>
              <MapUa />
            </div>
            <div className={`${css.backCard} ${css.blueYellow}`}>
              <Motivator />
            </div>
          </ReactCardFlip>
        </BoxWithBorder>

        <p className={css.location}>UA, Україна, Червоноград 80103</p>
      </div>

      {/* <div className={css.wrapVideo}>
        <VideoPlayer url={videoUrl} />
      </div> */}
      {/* <div className={css.wrapAudio}></div> */}
    </div>
  );
};

export default Country;

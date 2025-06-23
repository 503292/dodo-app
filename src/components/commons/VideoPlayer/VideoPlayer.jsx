import React from 'react';
import PropTypes from 'prop-types';

import css from './VideoPlayer.module.scss';
// TODO must be create VideoBtn

// TODO helper with key videos
// const videoUrl = 'https://www.youtube.com/embed/ZATdVxeksjU';

//  {/* <div className={css.wrapVideo}>
//     <VideoPlayer url={videoUrl} />
//   </div> */}

// .wrapVideo {
//   width: calc(100% + 10px);
//   height: 100%;
//   position: relative;
//   overflow: hidden;
//   background: #000;
//   min-height: 220px;
//   margin-left: -5px;

//   & > iframe {
//     height: 100%;
//     width: 100%;
//     border: none;
//     position: absolute;
//   }
// }

const VideoPlayer = ({ url }) => {
  return (
    <iframe
      className={css.wrapVideoPlayer}
      title="video"
      src={`${url}?rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&enablejsapi=1&fs=1&cc_load_policy=1&autoplay=0`}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
    />
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoPlayer;

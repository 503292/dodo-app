import React from 'react';
import PropTypes from 'prop-types';

import css from './VideoPlayer.module.scss';
// TODO must be create VideoBtn

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

PropTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoPlayer;

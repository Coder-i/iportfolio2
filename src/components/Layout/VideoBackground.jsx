import React from 'react';
import { VIDEO_URL } from '../../utils/constants';

const VideoBackground = () => (
  <div className="fixed inset-0">
    <video
      className="h-full w-full object-cover"
      src={VIDEO_URL}
      autoPlay
      muted
      loop
      playsInline
    />
    <div className="absolute inset-0 bg-black/75"></div>
  </div>
);

export default VideoBackground;
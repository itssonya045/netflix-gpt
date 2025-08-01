import React from 'react';
import { useSelector } from 'react-redux';
import useMovietailer from '../Hook/useMovietailer';

const VideoBackground = ({ movieid }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovietailer(movieid);

  if (!trailerVideo) return null; 

  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube video player"
        allow="autoplay; fullscreen"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoBackground;


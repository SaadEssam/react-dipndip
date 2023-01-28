import { React, useState, useRef } from 'react';
import './Intro.css';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import intro from '../../assets/intro.mp4';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className="app_video">
      <video 
        src={intro}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app_video-overlay flex_center">
        <div className="app_video-overlay_circle flex_center" onClick={handleVideo}>
          {playVideo 
            ? <AiFillPauseCircle />
            : <AiFillPlayCircle />}
        </div>
      </div>
    </div>
  );
}

export default Intro;
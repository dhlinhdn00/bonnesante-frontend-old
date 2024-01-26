import css from './VideoCamera.module.css'
import React from 'react'

function VideoCamera({ errorState, videoRef }) {
  return (
    <div id='video_camera' className={css.videoCamera}>
      <video
        id='videoElement'
        className={`${css.videoElement} ${errorState ? css.active : ''}`}
        ref={videoRef}
        autoPlay={true}
        muted={true}
        width={100}
        height={200}
      >
        <track kind='captions' />
      </video>
    </div>
  )
}
export default React.memo(VideoCamera)

import style from './LoadResult.module.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FaceDetectionComponent from '../../components/FaceDetection'
import HeaderBar from '../../components/HeaderBar/HeaderBar'

const LoadResult = () => {
  const [cancelState, setCancelState] = useState(false);
  const navigator = useNavigate();

  const handleCancel = () => {
    setCancelState(true);
    navigator(-1);
  };

  return (
    <div className={style.page}>
      <div className={style.container}>
        <HeaderBar />
        <div className={style.content}>
          <div className={style.header_content}>
            <h3>Just a few seconds</h3>
            <div className={style.snippet} data-title='dot-pulse'>
              <div className='stage'>
                <div className='dot-pulse'></div>
              </div>
            </div>
          </div>
          <FaceDetectionComponent cancelState={cancelState} />
          <h3>We are analyzing your measurement</h3>
          <button className={style.button} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
export default LoadResult

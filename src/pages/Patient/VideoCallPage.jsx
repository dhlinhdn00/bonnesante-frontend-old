import React, { Suspense, lazy } from 'react'
import style from './VideoCallPage.module.css'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Loading from '../../lazy/Loading'
import FindingDoctor from '../../lazy/FindingDoctor'
const VideoCallPage = () => {
  function delayForMeeting(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 5000);
    }).then(() => promise);
  };
  const Meeting = lazy(() => delayForMeeting(import('../../components/VideoCall/Meeting')));

  return (
    <div className={style.page}>
      <div className={style.container}>
        <HeaderBar />
        <div className={style.content}>
            <Suspense fallback={<FindingDoctor />}>
              <Meeting />
            </Suspense>
        </div>
      </div>
    </div>
  )
}
export default VideoCallPage;

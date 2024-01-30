import React, { useState } from 'react'
import style from './VideoCallPage.module.css'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import FindingDoctor from '../../lazy/FindingDoctor'
import Meeting from '../../components/Meeting/Meeting'
import { getDatabase, ref, set, onValue } from 'firebase/database'

const VideoCallPage = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const database = getDatabase();
  const requestId = 1;

  function setRequest() {
    set(ref(database, 'request/' + requestId), {
      status: !isAccepted,
    });
  }

  const requestRef = ref(database, 'request/' + requestId);

  onValue(requestRef, (snapshot) => {
    const requestInfo = snapshot.val();
    if (requestInfo.status !== isAccepted) {
      setIsAccepted(requestInfo.status);
    }
  });


  return (
    <div className={style.page}>
      <div className={style.container}>
        <HeaderBar />
        <button onClick={setRequest}>Set request</button>
        <div className={style.content}>
          {
            isAccepted ? <Meeting /> : <FindingDoctor />
          }
        </div>
      </div>
    </div>
  )
}
export default VideoCallPage;

import React from 'react';
import style from './Meeting.module.css';
import FaceDetectionComponent from '../FaceDetection';
import Meeting from './Meeting';

function MeetingUser() {

  const [stateMeasure, setStateMeasure] = React.useState(false);

  return (
    <div>
      <main>
        <Meeting role={0} meetingNumber='82216238185' passWord='NUzrk7' />
        {stateMeasure ? (
          <div className={style.meetingSDKElement}>
            <FaceDetectionComponent />
          </div>
        ) : (
          <div>
            {/* <button onClick={getMeasure}>Measure</button> */}
          </div>
        )}
      </main>
    </div>
  );
}
export default MeetingUser;
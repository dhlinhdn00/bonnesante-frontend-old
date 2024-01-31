import React from 'react';
import style from './Meeting.module.css';
import FaceDetectionComponent from '../FaceDetection';
import Meeting from './Meeting';
import { MeasureModal } from './MeasureModal';
import Modals from '../Modal/Modals';
import useResultsContext from '../../hooks/useResultsContext';

function MeetingUser() {

  const [stateMeasure, setStateMeasure] = React.useState(false);
  const { result } = useResultsContext();

  const getMeasure = () => {
    setStateMeasure(true);
  }

  return (
    <div>
      <main>
        <Meeting role={0} meetingNumber='82216238185' passWord='NUzrk7' />

        <Modals data={result} />

        {stateMeasure ? (
          <MeasureModal />
        ) : (
          <div>
            <button onClick={getMeasure}>Measure</button>
          </div>
        )}
      </main>
    </div>
  );
}
export default MeetingUser;
import React from 'react';
import style from './Meeting.module.css';
import FaceDetectionComponent from '../FaceDetection';
// import Meeting from './MeetingRoomDoctor';
import { MeasureModal } from './MeasureModal';
import Modals from '../Modal/Modals';

import useResultsContext from '../../hooks/useResultsContext';
import useUserContext from '../../hooks/useUserContext';

import MeetingRoomUser from './MeetingRoomUser';

function JoinMeetingUser() {

  const [stateMeasure, setStateMeasure] = React.useState(false);
  const { result } = useResultsContext();

  const { user } = useUserContext();

  const getMeasure = () => {
    setStateMeasure(true);
  }

  return (
    <div>
      <main>
        <MeetingRoomUser role={0} userID={user.id} />

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
export default JoinMeetingUser;
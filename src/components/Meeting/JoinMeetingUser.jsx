import React from 'react';
import style from './Meeting.module.css';
import FaceDetectionComponent from '../FaceDetection';
// import Meeting from './MeetingRoomDoctor';
import { MeasureModal } from './MeasureModal';
import Modals from '../Modal/Modals';

import useResultsContext from '../../hooks/useResultsContext';
import useUserContext from '../../hooks/useUserContext';

import MeetingRoomUser from './MeetingRoomUser';

import { ref, child, get, update, onValue } from "firebase/database";
import { database } from "../../services/firebase/config";

function MeetingUser() {

  const [stateMeasure, setStateMeasure] = React.useState(false);
  const { result, setResult } = useResultsContext();

  const { user } = useUserContext();

  const dbRef = ref(database);

  const getMeasure = () => {
    setStateMeasure(true);
  }

  onValue((child(dbRef, `result/${user.id}/result`)), (snapshot) => {
    const data = snapshot.val();

    if (result.isOutDated !== data.isOutDated) {
      setResult(data);
    }
  });


  return (
    <div>
      <main>
        <MeetingRoomUser role={0} userID={user.id} />

        <Modals data={result} isDataOutDated={result.isOutDated} />

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
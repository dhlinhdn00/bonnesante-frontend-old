import React, { useState } from 'react'
import style from './MeetingUser.module.css'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import FindingDoctor from '../../lazy/FindingDoctor'

import { ref, set, onValue, child } from 'firebase/database'
import { database } from '../../services/firebase/config'
import useUserContext from '../../hooks/useUserContext'
import MeetingRoomUser from '../../components/Meeting/MeetingRoomUser'

const MeetingUser = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const { user, saveUser } = useUserContext();
  const dbRef = ref(database);

  console.log(user.id)

  onValue((child(dbRef, `videoCall/${user.id}`)), (snapshot) => {
    const requestInfo = snapshot.val();
    console.log(requestInfo)
    if (requestInfo.isAccepted !== isAccepted) {
      setIsAccepted(requestInfo.isAccepted);
    }
  });


  return (
    <div className={style.page}>
      <div className={style.containerMeetingUser}>
        <HeaderBar />
        <div className={style.contentMeetingUser}>
          {
            isAccepted ? <MeetingRoomUser /> : <FindingDoctor />
          }
        </div>
      </div>
    </div>
  )
}
export default MeetingUser;

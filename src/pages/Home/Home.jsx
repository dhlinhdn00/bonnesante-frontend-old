import React from 'react'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import doctorIcon from '../../assets/images/doctor-icon-avatar-white_136162-58.png';
import scheduleIcon from '../../assets/images/schedule-icon.png';
import style from './Home.module.css'
import { Link } from 'react-router-dom';
import { ref, set, child } from "firebase/database";
import { database } from '../../services/firebase/config';
import { useNavigate } from 'react-router-dom';
import useUserContext from '../../hooks/useUserContext';

export default function Home() {
  const navigate = useNavigate();
  const { user, saveUser } = useUserContext();
  const dbRef = ref(database);
  const RequestVideoCall = () => {

    set(child(dbRef, `videoCall/` + user.id), {
      username: user.username,
      userID: user.id,
      isAccepted: false,
      isActive: true,
      doctorID: null,
      timeRequest: new Date().getTime(),
      timeAccepted: null,
      isMeeting: true
    })
      .then(() => {
        console.log('success')
        navigate('/patient/meeting')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <HeaderBar />
      </div>

      {!user.isStaff ? <Link className={style.start_measure} to="/add-data">
        <div className={style.text_overlay}>
          Start <br /> Measuring
        </div>
        <h1>Measure</h1>
      </Link> : <div></div>}

      <div className={style.card_options}>
        {!user.isStaff ?
          <button className={style.card} onClick={RequestVideoCall}>
            <img src={doctorIcon} alt="doctor icon" />
            <p>Make a VideoCall</p>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button> :
          <Link className={style.card} to="/checkScheduled">
            <img src={doctorIcon} alt="doctor icon" />
            <p>Check the schedule</p>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </Link>}

        {!user.isStaff ? <Link className={style.card} to="/history">
          <img src={scheduleIcon} alt="schedule icon" />
          <p>History</p>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link> : <div></div>}
      </div>
    </div>
  )
}

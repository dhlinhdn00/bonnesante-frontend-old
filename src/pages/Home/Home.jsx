import React from 'react'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import doctorIcon from '../../assets/images/doctor-icon-avatar-white_136162-58.png';
import scheduleIcon from '../../assets/images/schedule-icon.png';
import style from './Home.module.css'
import { Link } from 'react-router-dom';

export default function Home() {
  const userData = JSON.parse(localStorage.getItem('user'))

  return (
    <div className={style.container}>
      <div className={style.header}>
        <HeaderBar />
      </div>

      {!userData.isStaff ? <Link className={style.start_measure} to="/add-data">
        <div className={style.text_overlay}>
          Start <br /> Measuring
        </div>
        <h1>Measure</h1>
      </Link> : <div></div>}

      <div className={style.card_options}>
        {!userData.isStaff ? <Link className={style.card} to="patient/meeting">
          <img src={doctorIcon} alt="doctor icon" />
          <p>Make a VideoCall</p>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link> :
          <Link className={style.card} to="/checkScheduled">
            <img src={doctorIcon} alt="doctor icon" />
            <p>Check the schedule</p>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </Link>}

        <Link className={style.card} to="/result">
          <img src={scheduleIcon} alt="schedule icon" />
          <p>Make an Appointment</p>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
      </div>
    </div>
  )
}

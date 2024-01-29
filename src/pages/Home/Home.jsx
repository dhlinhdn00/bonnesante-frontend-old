import React from 'react'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import doctorIcon from '../../assets/images/doctor-icon-avatar-white_136162-58.png';
import scheduleIcon from '../../assets/images/schedule-icon.png';
import style from './Home.module.css'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <HeaderBar />
      </div>
      <Link className={style.start_measure} to="/add-data">
        <div className={style.text_overlay}>
          Start <br /> Measuring
        </div>
      </Link>
      <h1>Measure</h1>
      <div className={style.card_options}>
        <Link className={style.card} to="/patient/video-call">
          <img src={doctorIcon} alt="doctor icon" />
          <p>Make a VideoCall</p>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
        <Link className={style.card} to="/result">
          <img src={scheduleIcon} alt="schedule icon" />
          <p>Make a Appointment</p>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
      </div>
    </div>
  )
}

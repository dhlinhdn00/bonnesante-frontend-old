import style from './CheckScheduled.module.css'

import check from "../../../assets/icons/check.svg"

import React from 'react'
import HeaderBar from '../../../components/HeaderBar/HeaderBar'
import { Link } from 'react-router-dom'

export default function CheckScheduled() {
    return (
        <>
            <div className={style.header}>
                <HeaderBar />
            </div>
            <div className={style.container}>
                <h1 className={style.title}>Appointments are available</h1>

                <ul>
                    <li className={style.schedule}>Monday 29 January
                        <Link to="/doctor/videoCall">
                            <img src={check} alt="check" className={style.check} />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

import { ref, child, get, update, onValue } from "firebase/database";
import { database } from "../../../services/firebase/config";

import style from './CheckScheduled.module.css'

import check from "../../../assets/icons/check.svg"

import React, { useState, useEffect } from 'react'
import HeaderBar from '../../../components/HeaderBar/HeaderBar'
import { Link } from 'react-router-dom'


export default function CheckScheduled() {
    console.log("re render")
    const [schedules, setSchedules] = useState([{}])


    const dbRef = ref(database);

    onValue((child(dbRef, 'videoCall/')), (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        const schedulesArray = Object.values(data);

        if (schedulesArray.length !== schedules.length) {
            setSchedules(schedulesArray);
        }
    });


    // const handleConfirm = async (values) => {
    //     const userConfirmed = schedules.find((value) => value.userID === values.userID)

    //     console.log(userConfirmed)

    //     const updates = {
    //         [`videoCall/${userConfirmed.userID}/isAccepted`]: true
    //     };

    //     console.log(updates)
    //     // Get a reference to the database
    //     const dbRef = ref(database);

    //     // Update the specified location with the updates object
    //     try {
    //         await update(dbRef, updates);
    //         console.log(`User with ID ${userConfirmed.userID} has been confirmed.`);
    //     } catch (error) {
    //         console.error('Error updating user confirmation:', error);
    //     }
    // }

    return (
        <>
            <div className={style.header}>
                <HeaderBar />
            </div>
            <div className={style.container}>
                <h1 className={style.title}>Appointments are available</h1>

                <ul>
                    {schedules?.map((value, index) => {
                        return (<li key={index} className={style.schedule}>Monday 29 January {value.username}
                            <Link to="/doctor/meeting" state={{ userID: value.userID }}>
                                {/* <img src={check} alt="check" className={style.check} onClick={() => handleConfirm(value)} /> */}
                                <img src={check} alt="check" className={style.check} />
                            </Link>
                        </li>)
                    })}
                </ul>
            </div>
        </>
    )
}

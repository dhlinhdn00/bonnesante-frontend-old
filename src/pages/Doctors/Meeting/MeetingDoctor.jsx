import React from 'react'
import style from './MeetingDoctor.module.css'
import HeaderBar from '../../../components/HeaderBar/HeaderBar'

import Meeting from '../../../components/Meeting/JoinMeetingUser'
import JoinMeetingDoctor from '../../../components/Meeting/JoinMeetingDoctor'

const MeetingDoctor = () => {

    return (
        <div className={style.page}>
            <div className={style.container}>
                <HeaderBar />
                <div className={style.content}>
                    {/* <Meeting /> */}
                    <JoinMeetingDoctor />
                </div>
            </div>
        </div>
    )
}
export default MeetingDoctor;

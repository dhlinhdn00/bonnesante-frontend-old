import React from 'react'
import style from './VideoCallPage.module.css'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import FindingDoctor from '../../lazy/FindingDoctor'
import Meeting from '../../components/VideoCall/Meeting'

const VideoCall = () => {

    return (
        <div className={style.page}>
            <div className={style.container}>
                <HeaderBar />
                <div className={style.content}>
                    <Meeting />
                </div>
            </div>
        </div>
    )
}
export default VideoCall;

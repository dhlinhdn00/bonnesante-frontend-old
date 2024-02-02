import React from 'react';

import ModalDoctor from '../Modal/ModalDoctor';

import style from "./Meeting.module.css"
import MeetingRoomDoctor from './MeetingRoomDoctor';

function JoinMeetingDoctor() {

    // const [stateMeasure, setStateMeasure] = React.useState(false);

    return (
        <div className={style.containerMeetingDoctor}>

            <MeetingRoomDoctor role={1} />

            <ModalDoctor />
        </div>
    );
}
export default JoinMeetingDoctor;
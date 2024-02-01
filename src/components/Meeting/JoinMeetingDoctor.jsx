import React from 'react';

import Meeting from './Meeting';
import ModalDoctor from '../Modal/ModalDoctor';

import style from "./Meeting.module.css"

function JoinMeetingDoctor() {

    // const [stateMeasure, setStateMeasure] = React.useState(false);

    return (
        <div className={style.container}>

            <Meeting role={1} meetingNumber='83495564383' passWord='RP2tTE' />

            <ModalDoctor />
        </div>
    );
}
export default JoinMeetingDoctor;
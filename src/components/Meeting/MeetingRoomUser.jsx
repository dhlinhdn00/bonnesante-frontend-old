import style from './Meeting.module.css';

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import ZoomMtgEmbedded from '@zoom/meetingsdk/embedded';

import { ref, child, get, update, onValue } from "firebase/database";
import { database } from "../../services/firebase/config";

import { ZOOM_SIGN_URL } from '../../constants/values';
import ToastResult from './ToastResult';


function MeetingRoomUser({ role = 0, userID }) {

    //for meeting ended by doctor
    // const [stateMeeting, setStateMeeting] = React.useState(false);

    const [stateConnect, setStateConnect] = React.useState(false);

    const [isMeeting, setIsStateMeeting] = React.useState(true)

    const navigate = useNavigate();

    var authEndpoint = ZOOM_SIGN_URL
    var sdkKey = 'LPqZQdOeTCWdA5fspfFWmg'
    var meetingNumber = "7602498268"
    var passWord = "452002"
    var role = role
    var userName = 'Patient'
    var userEmail = ''
    var registrantToken = ''
    var zakToken = ''
    var leaveUrl = 'http://localhost:3000'

    const location = useLocation()

    const dbRef = ref(database);

    var client;

    function getSignature(e) {
        e.preventDefault();

        fetch(authEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                meetingNumber: meetingNumber,
                role: role
            })
        }).then(res => res.json())
            .then(response => {
                setStateConnect(true);
                startMeeting(response.signature)
            }).catch(error => {
                console.error(error)
            })
    }

    function startMeeting(signature) {
        // var client
        try {
            client = ZoomMtgEmbedded.destroyClient();
            client = ZoomMtgEmbedded.createClient();
        } catch (e) {
            client = ZoomMtgEmbedded.createClient();
        }

        let meetingSDKElement = document.getElementById('meetingSDKElement');

        console.log(meetingSDKElement)

        client.init({ zoomAppRoot: meetingSDKElement, language: 'en-US', patchJsMedia: true }).then(() => {
            client.join({
                signature: signature,
                sdkKey: sdkKey,
                meetingNumber: meetingNumber,
                password: passWord,
                userName: userName,
                userEmail: userEmail,
                tk: registrantToken,
                zak: zakToken
            }).then(async () => {
                // setStateMeeting(true);
                console.log('joined successfully')
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    // Tracking if the doctor has ended the meeting
    onValue((child(dbRef, `videoCall/${userID}`)), (snapshot) => {
        const requestInfo = snapshot.val();

        console.log(requestInfo)

        if (!requestInfo.isMeeting) {
            // alert("The meeting has ended, you will return to the home page")

            client = ZoomMtgEmbedded.destroyClient();
            setIsStateMeeting(false)

            navigate("/home")
        }
    });


    return (
        <div>
            {/* For Component View */}
            <div id="meetingSDKElement" className={style.meetingSDKElement}>
                {/* Zoom Meeting SDK Component View Rendered Here */}
            </div>

            <div>
                {stateConnect ? "" : <button onClick={getSignature}>{stateConnect ? "Connecting ..." : "Join Meeting"}</button>}
            </div>
        </div>
    );
}
export default MeetingRoomUser;
import style from './Meeting.module.css';

import React from 'react';
import { useLocation } from 'react-router-dom';

import ZoomMtgEmbedded from '@zoom/meetingsdk/embedded';

import { ref, child, get, update, onValue } from "firebase/database";
import { database } from "../../services/firebase/config";


import { ZOOM_SIGN_URL } from '../../constants/values';


function Meeting({ role = 0, meetingNumber = '82216238185', passWord = 'NUzrk7' }) {
    const [stateMeeting, setStateMeeting] = React.useState(false);

    const [stateConnect, setStateConnect] = React.useState(false);



    var authEndpoint = ZOOM_SIGN_URL
    var sdkKey = 'LPqZQdOeTCWdA5fspfFWmg'
    var meetingNumber = '82216238185'
    var passWord = 'NUzrk7'
    var role = role
    var userName = 'React'
    var userEmail = ''
    var registrantToken = ''
    var zakToken = ''
    var leaveUrl = 'http://localhost:3000'

    const location = useLocation()



    const handleConfirm = async () => {
        const { userID } = location.state

        console.log(userConfirmed)

        const updates = {
            [`videoCall/${userID}/isAccepted`]: true
        };

        console.log(updates)
        // Get a reference to the database
        const dbRef = ref(database);

        // Update the specified location with the updates object
        try {
            await update(dbRef, updates);
            console.log(`User with ID ${userConfirmed.userID} has been confirmed.`);
        } catch (error) {
            console.error('Error updating user confirmation:', error);
        }
    }

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

        var client
        try {
            client = ZoomMtgEmbedded.destroyClient();
            client = ZoomMtgEmbedded.createClient();
        } catch (e) {
            client = ZoomMtgEmbedded.createClient();
        }

        let meetingSDKElement = document.getElementById('meetingSDKElement');

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
                setStateMeeting(true);

                if (role === 1) {
                    await handleConfirm();
                }
                console.log('joined successfully')
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            console.log(error)
        })
    }

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
export default Meeting;
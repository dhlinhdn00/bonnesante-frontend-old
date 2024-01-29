import React from 'react';
import ZoomMtgEmbedded from '@zoom/meetingsdk/embedded';
import style from './Meeting.module.css';
import FaceDetectionComponent from '../FaceDetection';

function Meeting() {
  const [stateMeeting, setStateMeeting] = React.useState(false);
  const [stateMeasure, setStateMeasure] = React.useState(false);
  const [stateConnect, setStateConnect] = React.useState(false);

  const userData = JSON.parse(localStorage.getItem('user'))
  const client = ZoomMtgEmbedded.createClient();

  var authEndpoint = 'http://localhost:4000'
  var sdkKey = 'LPqZQdOeTCWdA5fspfFWmg'
  var meetingNumber = '82216238185'
  var passWord = 'NUzrk7'
  var role = 0
  var userName = 'React'
  var userEmail = ''
  var registrantToken = ''
  var zakToken = ''
  var leaveUrl = 'http://localhost:3000'

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
      }).then(() => {
        setStateMeeting(true);
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
      <main>
        {/* For Component View */}
        <div id="meetingSDKElement" className={style.meetingSDKElement}>
          {/* Zoom Meeting SDK Component View Rendered Here */}
        </div>
        {stateMeeting ? (
          <div>
            <button onClick={() => setStateMeasure(true)}>Measure</button>
          </div>
        ) : (
          <div>
            <button onClick={getSignature}>{stateConnect ? "Connecting ..." : "Join Meeting"}</button>
          </div>
        )}
        {!userData.isStaff && stateMeasure ? (
          <div className={style.meetingSDKElement}>
            <FaceDetectionComponent />
          </div>
        ) : (
          <div>
            {/* <button onClick={getMeasure}>Measure</button> */}
          </div>
        )}
      </main>
    </div>
  );
}
export default Meeting;
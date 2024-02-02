import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

const ToastResult = ({ isSuccess, show, setShow }) => {

    return (
        <Toast className="position-fixed top-0 start-50 translate-middle" onClose={() => setShow(false)} show={show} delay={3000} autohide bg={isSuccess ? "success" : "danger"}>
            <Toast.Header>
                <strong className="me-auto">Result</strong>
            </Toast.Header>
            <Toast.Body className="text-white">
                {isSuccess ? (
                    <div>
                        <p>Success</p>
                        <p>{"Measure successfully, check the result now!"}</p>
                    </div>
                ) : (
                    <div>
                        <p>Fail</p>
                        <p>Please try again</p>
                    </div>
                )}
            </Toast.Body>
        </Toast>
    );
}

export default ToastResult;
import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

const ToastResult = ({ isSuccess, show, setShow }) => {

    const toggleShow = () => setShow(!show);

    return (
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg={isSuccess ? "success" : "danger"}>
            <Toast.Header>
                <strong className="me-auto">Result</strong>
            </Toast.Header>
            <Toast.Body>
                {isSuccess ? (
                    <div>
                        <p>Success</p>
                        <p>Measure successfully, check the result now!</p>
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
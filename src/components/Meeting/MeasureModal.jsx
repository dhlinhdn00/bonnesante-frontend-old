import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import FaceDetectionComponent from '../FaceDetection';

export const MeasureModal = () => {
    const [show, setShow] = useState(true);

    return (
        <Modal show={show}>
            <Modal.Body >
                <FaceDetectionComponent setShow={setShow} isAddData={false} />
            </Modal.Body>
        </Modal>
    )
}

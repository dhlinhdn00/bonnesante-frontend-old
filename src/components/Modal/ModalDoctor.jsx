import { ref, child, onValue } from "firebase/database";
import { database } from "../../services/firebase/config";

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import useResultsContext from '../../hooks/useResultsContext';

import Modals from './Modals';

function ModalDoctor() {
    const { result, setResult } = useResultsContext()

    const location = useLocation()

    const { userID } = location.state

    const dbRef = ref(database);

    onValue((child(dbRef, `result/${userID}/result`)), (snapshot) => {
        const data = snapshot.val();

        if (result.resultId !== data.resultId) {
            setResult(data);
        }
    });

    return (
        <>
            <Modals data={result} isDataOutDated={result.isOutDated} />
        </>
    );
}

export default ModalDoctor;
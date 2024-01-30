import React, { Suspense, lazy } from 'react'
import style from './ListResult.module.css'
import { useNavigate } from 'react-router-dom'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import useResultsContext from '../../hooks/useResultsContext'
import Loading from '../../lazy/Loading'





function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 1000);
    }).then(() => promise);
};

const DataResult = lazy(() => delayForDemo(import('./DataResult')));

const ResultPage = () => {
    const navigate = useNavigate();
    const {result, setResult} = useResultsContext();
    return (
        <div className={style.page}>
            <div className={style.container}>
                <HeaderBar />
                <div className={style.loading_data}>
                    {result &&
                        (<Suspense fallback={<Loading />}>
                            <DataResult results={result} />
                        </Suspense>)
                    }
                </div>
                <button className={style.button} onClick={() => navigate('/add-data')}>
                    Continue Measurement
                </button>
            </div>
        </div>
    )
}
export default ResultPage;

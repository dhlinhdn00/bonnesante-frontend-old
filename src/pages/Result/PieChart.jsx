import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import useResultsContext from '../../hooks/useResultsContext';
ChartJS.register(ArcElement, Tooltip, Legend);


export function PieChart() {
    const {result, setResult} = useResultsContext();
    const [data, setData] = useState({
        labels: ['Normal', 'SVEB', 'VEB', 'FB'],
        datasets: [
            {
                backgroundColor: [
                    'rgb(76, 175, 80)',
                    'rgb(255, 206, 86)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 99, 132)',
                ],
                borderWidth: 1.5,
            },
        ],
    });

    useEffect(() => {
        if (result) {
            setData({
                ...data, datasets: [
                    { ...data.datasets[0], data: [result.diagnostic.normal, result.diagnostic.sveb, result.diagnostic.veb, result.diagnostic.fb] }
                ]
            })
        }
    }, [result]);

    return <><Pie data={data} />
        <p style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '20px' }}>
            Heart Arrythmia: {result.diagnostic.normal === 100 ? 'Normal' : 'Abnormal'}
        </p>
    </>;
}

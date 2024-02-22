import React from 'react'
import style from './ListResult.module.css'
import Icon from '@mdi/react'
import { mdiHeartPulse, mdiWater, mdiLungs } from '@mdi/js'
import ProgressBar from '@ramonak/react-progress-bar'
import Chart from './Chart'
import { PieChart } from './PieChart'

const DataResult = ({ data }) => {
  const { results } = data;

  console.log("results", results);

  return (
    <div className={style.data_container}>
      <h2>20 / 01 / 2024</h2>
      <div className={style.chart}>
        <Chart />
      </div>
      <div className={style.data_section}>
        <div className={style.data_item}>
          <Icon path={mdiLungs} size={1} />
          <p>Respiration</p>
          <div className={`${style.data_circle_overlay} ${style.yellow_overlay}`}>
            <div className={`${style.data_circle}  ${style.yellow}`}>
              <strong>{results.resp}</strong>BPM
            </div>
          </div>
        </div>
        <div className={style.data_item}>
          <Icon path={mdiHeartPulse} size={1} />
          <p>Heart Rate</p>
          <div
            className={`${style.data_circle_overlay} ${style.center_overlay} ${style.red_overlay}`}
          >
            <div className={`${style.data_circle} ${style.red} ${style.center}`}>
              <strong>{Math.round(results.heartrate)}</strong>BPM
            </div>
          </div>
        </div>
        <div className={style.data_item}>
          <Icon path={mdiWater} size={1} />
          <p>SpO2</p>
          <div className={`${style.data_circle_overlay} ${style.green_overlay}`}>
            <div className={`${style.data_circle} ${style.green}`}>
              <strong>Soon</strong>
            </div>
          </div>
        </div>
      </div>
      <div className={style.data_status_container}>
        <PieChart />
      </div>
    </div>
  )
}
export default DataResult

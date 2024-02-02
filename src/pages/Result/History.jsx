import React from 'react'
import style from './ListResult.module.css'
import { useNavigate } from 'react-router-dom'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import DataResult from './DataResult'
import useResultsContext from '../../hooks/useResultsContext'

const History = () => {
  let navigate = useNavigate();
  function renderData() { };

  const { result } = useResultsContext()

  return (
    <div className={style.page}>
      <div className={style.container}>
        <HeaderBar />
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className={style.content}
        >
          <SwiperSlide>
            <DataResult data={{ results: result }} />
          </SwiperSlide>
          <SwiperSlide>
            <DataResult data={{ results: result }} />
          </SwiperSlide>
          <SwiperSlide>
            <DataResult data={{ results: result }} />
          </SwiperSlide>
          <SwiperSlide>
            <DataResult data={{ results: result }} />
          </SwiperSlide>
        </Swiper>
        <button className={style.button} onClick={() => navigate('/add-data')}>
          Continue Measurement
        </button>
      </div>
    </div>
  )
}
export default History
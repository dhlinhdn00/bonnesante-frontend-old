import React from 'react'
import style from './ListResult.module.css'
import { useNavigate } from 'react-router-dom'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import DataResult from './DataResult'

const History = () => {
  let navigate = useNavigate();
  function renderData(){};
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
            <DataResult />
          </SwiperSlide>
          <SwiperSlide>
            <DataResult />
          </SwiperSlide>
          <SwiperSlide>
            <DataResult />
          </SwiperSlide>
          <SwiperSlide>
            <DataResult />
          </SwiperSlide>
          <SwiperSlide>
            <DataResult />
          </SwiperSlide>
          <SwiperSlide>
            <DataResult />
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
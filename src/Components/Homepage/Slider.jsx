import productsData from '../../data/productsData.json'
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import background1 from '../../img/backgroundImage.png'
import img1 from '../../img/image 2.png'
import SwiperItem from './SwiperItem'
import './slider.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules


export default function App() {
  return (
    <>
      <Swiper
  navigation={true}
  pagination={{ clickable: true }}
  modules={[Navigation, Pagination]}
  className="mySwiper"
>
  <SwiperSlide>
    <SwiperItem text={''} img={img1} background={background1} />
  </SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
</Swiper>
    </>
  );
}

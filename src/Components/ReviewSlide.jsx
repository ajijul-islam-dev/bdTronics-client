import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode,Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide_1 from '../assets/slides/slide_1.webp';
import slide_2 from '../assets/slides/slide_2.webp';
import slide_3 from '../assets/slides/slide_3.webp';
import ReviewCard from '../Components//ReviewCard.jsx'


const ReviewSlide = () => {
  return (
    <div className='my-3'>
      <Swiper
        modules={[Navigation,FreeMode]} // Include both Navigation and Pagination modules
        navigation
        FreeMode
        spaceBetween={10}
        slidesPerView={1.3}
       // onSlideChange={() => console.log('slide change')}
       // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          // Breakpoints for responsive settings
          320: {
            slidesPerView: 1.3, // 1 slide on small screens
          },
          576: {
            slidesPerView: 1.3, // 2 slides on tablets
            
          },
          768: {
            slidesPerView: 2.1, // 3 slides on medium devices
            
          },
          992: {
            slidesPerView: 3.1, // 4 slides on desktops
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3.1, // 5 slides on large desktops
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <ReviewCard/>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard/>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard/>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard/>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ReviewSlide
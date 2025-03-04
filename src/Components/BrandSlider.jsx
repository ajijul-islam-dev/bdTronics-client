import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode,Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import anycub from '../assets/brands/brand-anycub.webp';
import bambu from '../assets/brands/brand-bambu.webp';
import eve from '../assets/brands/brand-eve.webp';


const BrandSlider = () => {
  return (
    <div className='my-3'>
      <Swiper
        modules={[Navigation,FreeMode]} // Include both Navigation and Pagination modules
        navigation
        freeMode
        spaceBetween={10}
        slidesPerView={3}
       // onSlideChange={() => console.log('slide change')}
       // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          // Breakpoints for responsive settings
          320: {
            slidesPerView: 4.1, // 1 slide on small screens
          },
          576: {
            slidesPerView: 5.1, // 2 slides on tablets
            
          },
          768: {
            slidesPerView: 6.1, // 3 slides on medium devices
            
          },
          992: {
            slidesPerView: 8.1, // 4 slides on desktops
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 9, // 5 slides on large desktops
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <img className='h-16 w-full filter duration-300 grayscale hover:grayscale-0' src={eve} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-16 w-full filter duration-300 grayscale hover:grayscale-0' src={bambu} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-16 w-full filter duration-300 grayscale hover:grayscale-0' src={anycub} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-16 w-full filter duration-300 grayscale hover:grayscale-0' src={eve} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-16 w-full filter duration-300 grayscale hover:grayscale-0' src={eve} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-16 w-full filter duration-300 grayscale hover:grayscale-0' src={eve} alt="Slide 1" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BrandSlider
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide_1 from '../assets/slides/slide_1.webp';
import slide_2 from '../assets/slides/slide_2.webp';
import slide_3 from '../assets/slides/slide_3.webp';

const BannerSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay,Pagination]} // Include both Navigation and Pagination modules
        pagination={{ clickable: true }} // Enable clickable pagination dots
        spaceBetween={20}
        slidesPerView={1}
        autoplay
        //onSlideChange={() => console.log('slide change')}
      //  onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={slide_1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_3} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;

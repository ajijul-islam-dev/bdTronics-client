import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide_1 from "../assets/slides/slide_1.webp";
import slide_2 from "../assets/slides/slide_2.webp";
import slide_3 from "../assets/slides/slide_3.webp";
import ProductCard from "../Components/ProductCard.jsx";
import useAxios from "../hooks/useAxios";
import axios from "axios";

const BestSellerProducts = () => {
  const products = useAxios("/products/best");

  return (
    <div className="my-5">
      <Swiper
        modules={[Navigation, FreeMode]}
        navigation
        freeMode={true}
        spaceBetween={10}
        slidesPerView={2.1}
        breakpoints={{
          // Breakpoints for responsive settings
          320: {
            slidesPerView: 2.1, // 1 slide on small screens
          },
          576: {
            slidesPerView: 3.1, // 2 slides on tablets
          },
          768: {
            slidesPerView: 3.1, // 3 slides on medium devices
          },
          992: {
            slidesPerView: 4.1, // 4 slides on desktops
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 5, // 5 slides on large desktops
            spaceBetween: 30,
          },
        }}
      >
        {products?.map((product, i) => (
          <SwiperSlide key={i}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestSellerProducts;

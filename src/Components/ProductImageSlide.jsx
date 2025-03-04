import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectFade,
  Pagination,
  Autoplay,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import slide_1 from "../assets/slides/slide_1.webp";
import slide_2 from "../assets/slides/slide_2.webp";
import slide_3 from "../assets/slides/slide_3.webp";

const ProductImageSlide = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="space-y-3">
      <Swiper
        modules={[Navigation, EffectFade, Thumbs]}
        effect={"fade"}
        spaceBetween={20}
        slidesPerView={1}
        lazyPreloadPrevNext={true}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {product?.image_urls?.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              className="w-full"
              src={"https://placehold.co/600x400"}
              alt="Slide 1"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Thumbs]} // Include both Navigation and Pagination modules
        pagination={{ clickable: true }} // Enable clickable pagination dots
        spaceBetween={4}
        slidesPerView={4}
        autoplay
        watchSlidesProgress={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={setThumbsSwiper}
      >
        {product?.image_urls?.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              className="w-full h-full"
              src={"https://placehold.co/600x400"}
              alt="Slide 1"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageSlide;

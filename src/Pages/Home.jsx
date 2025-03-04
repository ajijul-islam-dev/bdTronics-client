import { useEffect } from "react";
import { Button } from "@mui/material";
import BannerSlider from "../Components/BannerSlider.jsx";
import TopCategories from "../Components/TopCategories.jsx";
import PopularCategories from "../Components/PopularCategories.jsx";
import BrandSlider from "../Components/BrandSlider.jsx";
import ContentSlide from "../Components/ContentSlider/ContentSlider.jsx";
import ReviewSlide from "../Components/ReviewSlide.jsx";
import BestSellerProducts from "../Components/BestSellerProducts.jsx";
import Drawer from "../Components/Drawer.jsx";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="px-2 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 md:my-20">
        <div className="md:col-span-6">
          <BannerSlider />
        </div>
        <div className="md:col-span-2">
          <TopCategories />
        </div>
      </div>
      <PopularCategories />
      <ContentSlide
        title="Shop by Brand"
        btnText="View All Brand"
        content={<BrandSlider />}
      />
      <ContentSlide
        title="Reviews from Our Customers"
        content={<ReviewSlide />}
      />
      <ContentSlide
        title="Best Seller Products"
        btnText="View All"
        content={<BestSellerProducts />}
      />
      <Link to="/about">go about</Link>
    </div>
  );
};

export default Home;

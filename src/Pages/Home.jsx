import {useEffect} from 'react'
import {Button} from '@mui/material'
import BannerSlider from '../Components/BannerSlider.jsx'
import TopCategories from'../Components/TopCategories.jsx'
import PopularCategories from '../Components/PopularCategories.jsx'
import BrandSlider from '../Components/BrandSlider.jsx'
import ContentSlide from '../Components/ContentSlider/ContentSlider.jsx'
import ReviewSlide from '../Components/ReviewSlide.jsx'
import BestSellerProducts from '../Components/BestSellerProducts.jsx'
import Drawer from '../Components/Drawer.jsx'
import {Link} from 'react-router'

const Home = () => {
  return (
    <div className='px-2 container mx-auto'>
      <BannerSlider/>
      <TopCategories/>
      <PopularCategories/>
      <ContentSlide title='Shop by Brand' btnText='View All Brand' content={<BrandSlider/>}/>
      <ContentSlide title='Reviews from Our Customers' content={<ReviewSlide/>}/>
     <ContentSlide title='Best Seller Products' btnText='View All' content={<BestSellerProducts/>}/>
     <Link to='/about'>go about</Link>
      
    </div>
  )
}

export default Home
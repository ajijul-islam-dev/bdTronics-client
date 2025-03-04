import React from 'react'
import CategoryCard from '../Components/CategoryCard.jsx'
import SeeAll from '../Components/SeeAll.jsx'

import category_1 from '../assets/popular_categories/charger.webp'
import category_2 from '../assets/popular_categories/cnc.webp'
import category_3 from '../assets/popular_categories/inverter.webp'
import category_4 from '../assets/popular_categories/components.webp'
import category_5 from '../assets/popular_categories/lifepo4.webp'
import category_6 from '../assets/popular_categories/meter-dso.webp'
import category_7 from '../assets/popular_categories/nuts-bolts.webp'
import category_8 from '../assets/popular_categories/cable-connector.webp'
import category_9 from '../assets/popular_categories/powertools.webp'


const PopularCategories = () => {
  return (
    <div>
      <div className='container mx-auto my-5'>
        <div className='flex items-center justify-between md:justify-start md:gap-10'>
          <h1 className='text-lg font-semibold'>Popular Categories</h1>
          <SeeAll/>
        </div>
        <div className='grid grid-cols-3 gap-5 md:gap-5 my-4'>
          <CategoryCard image={category_1}/>
          <CategoryCard image={category_2}/>
          <CategoryCard image={category_3}/>
          <CategoryCard image={category_4}/>
          <CategoryCard image={category_5}/>
          <CategoryCard image={category_7}/>
          <CategoryCard image={category_8}/>
          <CategoryCard image={category_9}/>
          <CategoryCard image={category_6}/>
        </div>
      </div>
    </div>
  )
}

export default PopularCategories
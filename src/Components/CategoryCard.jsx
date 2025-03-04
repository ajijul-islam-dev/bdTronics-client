import React from 'react'
import printer from '../assets/popular_categories/prototyping.webp'
import {Link} from 'react-router'
const CategoryCard = ({image}) => {
  return (
    <Link className='relative'>
      <img className='w-full h-full' src={image || printer}/>
      <h1 className='absolute bottom-1 left-0 right-0 mx-auto text-center text-xs md:text-md font-semibold'>Arduino & AI tools</h1>
    </Link>
  )
}

export default CategoryCard
import React from 'react'
import {Link} from 'react-router'
import metter from '../assets/top_categories/testmeter.webp'
import prototype from '../assets/top_categories/prototype.webp'

const TopCategories = () => {
  return (
    <div>
      <div className='my-2 grid grid-cols-2 gap-2 md:gap-5'>
        <Link to='/'>
          <img src={metter}/>
        </Link>
        <Link to='/'>
          <img src={prototype}/>
        </Link>
      </div>
    </div>
  )
}

export default TopCategories
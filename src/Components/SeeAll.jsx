import React from 'react'
import {Link} from 'react-router'
import { IoMdArrowDropright } from "react-icons/io";


const SeeAll = ({btnText}) => {
  return (
    <Link className='flex items-center justify-between text-sm bg-primary p-1 px-1.5 rounded'>
      <span>{btnText || 'View all categories'}</span>
      <IoMdArrowDropright/>
    </Link>
  )
}

export default SeeAll
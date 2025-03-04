import React from 'react'
import Rating from '@mui/material/Rating'
import { FcGoogle } from "react-icons/fc";
import Avatar from '@mui/material/Avatar'

const ReviewCard = () => {
  return (
    <div className='flex flex-col justify-between p-5 bg-white h-72 shadow rounded-xl'>
      <div>
        <div className='flex items-center justify-between'>
          <Rating name="half-rating" size='small' defaultValue={2.5} precision={0.5} />
          <span className='text-sm'>17 hours ago</span>
          <FcGoogle/>
        </div>
        <p className='text-sm my-3'>Genuine product. Working very good. Thanks BD Tronics for ensure Best Quality. </p>
      </div>
      <div className='flex gap-3 items-center align-sub'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <h3 className='font-semibold'>Azizul Islam</h3>
      </div>
    </div>
  )
}

export default ReviewCard
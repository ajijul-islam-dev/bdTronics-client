import React from 'react'
import product from '../assets/products/product_1.webp'
import { IoIosTrash } from "react-icons/io";
import { VscEdit } from "react-icons/vsc";
import {IconButton,Button,List} from '@mui/material'
import useCartsData from '../hooks/useCartsData.js'


const CartItem = ({cart}) => {
  
  const {handleCartRemove} = useCartsData();

  return (
    <div className='grid grid-cols-6 my-3 gap-2'>
      <div className='col-span-2'>
        <img className='w-full ' src={'https://placehold.co/600x400'}/>
      </div>
      <div className='col-span-4 items-center'>
        <h3> <strong>{cart?.quantity} X</strong>  {cart?.name} </h3>
        <p className='text-gray-500'>BTS-00004783</p>
        <strong>BDT {cart?.price}.00</strong>
        <div>
          <IconButton onClick={()=>handleCartRemove(cart)} color='primary' variant='outlined'>
            <IoIosTrash/>
          </IconButton>
          <IconButton color='primary' variant='outlined'>
            <VscEdit/>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default CartItem
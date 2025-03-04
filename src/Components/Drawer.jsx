import React from 'react'
import {Drawer,IconButton,Button} from '@mui/material'
import { IoIosClose } from "react-icons/io";
import CartItem from '../Components/CartItem.jsx'
import useCartsData from '../hooks/useCartsData.js'

const Drawers = ({isOpen,setIsOpen}) => {
  const {handleCart,cartItems} = useCartsData();
  const totalAmount = cartItems.reduce((amount,cart)=>{
    return amount + cart.price * cart.quantity
    //return unit * cart.quantity
  },0);
  
  return (
      <Drawer anchor='right' open={isOpen} onClose={()=>setIsOpen(false)}>
        <div className='relative w-screen md:w-[60vw]'>
          <div className='shadow'>
            <div className='fixed w-full bg-white z-10 shadow top-0 mx-auto flex items-center justify-between px-3 md:px-10 py-3'>
            <h1 className='text-2xl'>Menu</h1>
            <IconButton color='primary' variant='contained' onClick={()=> setIsOpen(false)}>
               <IoIosClose className='text-3xl'/>
            </IconButton>
          </div>
          </div>
          <div className='py-16 px-3 md:px-10'>
            
            {
              cartItems?.map((c,i)=> <CartItem cart={c} key={i}/> )
            }
          </div>
          <div className='shadow'>
            <div className='fixed w-full bg-white z-10 bottom-0 border-t mx-auto flex items-center justify-between px-3 md:px-10 py-3'>
              <p>Subtotal : BDT {totalAmount}.00</p>
              <div>
                <Button variant='contained' color='primary'> Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
  )
}

export default Drawers
import React from 'react'
import {Link} from'react-router'
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import MenuIcon from '../Components/MenuIcon.jsx'
import { VscAccount } from "react-icons/vsc";
import CartBtn from '../Components/CartBtn.jsx'

const BottomNav = () => {
  return (
    <div className='md:hidden fixed z-20 bottom-0 border-t w-full bg-white'>
      <div className='container mx-auto grid grid-cols-5 items-center justify-between py-3'>
        <Link className='text-2xl flex items-center justify-center' to='/'>
          <IoHomeOutline/>
        </Link>
        <Link className='text-2xl flex items-center justify-center' to='/'>
          <HiOutlinePhone/>
        </Link>
        <MenuIcon/>
        <Link className='text-2xl flex items-center justify-center' to='/'>
          <VscAccount/>
        </Link>
        <CartBtn/>
      </div>
    </div>
  )
}

export default BottomNav
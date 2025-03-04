import React from 'react'
import {Outlet} from 'react-router'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import BottomNav from'../Components/BottomNav.jsx'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <div className='px-2 my-16 md:container mx-auto'>
         <Outlet/>
      </div>
      <Footer/>
      <BottomNav/>
    </div>
  )
}

export default Layout
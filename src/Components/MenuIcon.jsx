import {useState,useEffect} from 'react'
import IconButton from '@mui/material/IconButton'
import { IoIosMenu } from "react-icons/io";
import MenuDrawer from '../Components/MenuDrawer.jsx'

const MenuIcon = () => {
  const [isOpen,setIsOpen] = useState(false);
   
  
  return (
    <>
      <IconButton onClick={()=> setIsOpen(true)}>
        <IoIosMenu/>
      </IconButton>
      <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default MenuIcon
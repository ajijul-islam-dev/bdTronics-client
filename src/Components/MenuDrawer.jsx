import {useState} from 'react'
import {Drawer,IconButton} from '@mui/material'
import { IoIosClose } from "react-icons/io";
import CartItem from '../Components/CartItem.jsx'
//import StarBorder from '@mui/icons-material/StarBorder';


import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';


const MenuDrawer = ({isOpen,setIsOpen}) => {

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
      <Drawer anchor='left' open={isOpen} onClose={()=>setIsOpen(false)}>
        <div className='relative w-screen md:w-[60vw]'>
          <div className='shadow'>
            <div className='fixed w-full bg-primary z-10 shadow top-0 mx-auto flex items-center justify-between px-3 md:px-10 py-1'>
            <h1 className='text-xl'>Shop by Category</h1>
            <IconButton  variant='contained' onClick={()=> setIsOpen(false)}>
               <IoIosClose className='text-3xl'/>
            </IconButton>
          </div>
        </div>
        <div className='my-16'>
          
        </div>
        </div>
      </Drawer>
  )
}

export default MenuDrawer
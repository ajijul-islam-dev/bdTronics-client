import {useState} from 'react';
import {Badge,IconButton} from'@mui/material';
import { IoCartOutline } from "react-icons/io5";
import Drawer from '../Components/Drawer.jsx'
import useCartsData from '../hooks/useCartsData.js'


const CartBtn = () => {
  const [isOpen,setIsOpen] = useState(false);
  const {handleCart,cartItems} = useCartsData();
  
  return (
    <div>
      <IconButton onClick={()=> setIsOpen(true)} className='text-2xl flex items-center justify-center'>
            <Badge badgeContent={cartItems?.length} color='primary'>
             <IoCartOutline/>
            </Badge>
      </IconButton>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
    
  )
}

export default CartBtn
import {useState,useEffect} from 'react'
import Rating from '@mui/material/Rating'
import CartBtn from '../Components/CartBtn.jsx'
import { IoCartOutline } from "react-icons/io5";
import {Button,IconButton} from '@mui/material'
import { IoIosHeartEmpty } from "react-icons/io";
import {Link} from 'react-router'
import useCartsData from '../hooks/useCartsData.js'

const ProductCard = ({product}) => {
  const [isVisible,setIsVisible] = useState(false);
  
  const {handleCart} = useCartsData();
  
  const handleFav = (e)=>{
    e.preventDefault();
    e.stopPropagation();
  }
  
  return (
    <Link
      to={`/product/${product.id}`}
      onMouseOver={()=> setIsVisible(true)} 
      onMouseOut={()=> setIsVisible(false)} 
      className='flex text-center flex-col justify-between p-3 bg-white shadow rounded relative'>
      <img className='w-full' src='https://placehold.co/600x400'/>
      <p className='text-sm'>{product.name || '1 x UNI-T UT33B+ Palm Size Digital Pocket Multimeter'}</p>
      <div className='text-center'>
        <Rating readOnly name="half-rating" size='small' defaultValue={product.rating} precision={0.5} />
      </div>
      <h4 className='text-sm'>BDT {Number.parseFloat(product.price) || '325.1'}</h4>
     { isVisible && <div className='w-full duration-300 bg-white absolute bottom-7 left-0 right-0 mx-auto pt-5 '>
        <Button onClick={(e)=>handleCart(e,product)} size='small' variant="contained" startIcon={<IoCartOutline/>}>
           Add to cart
        </Button>
        <div>
          <IconButton onClick={handleFav} aria-label="wish list">
              <IoIosHeartEmpty/>
          </IconButton>
        </div>
      </div>}
    </Link>
  )
}

export default ProductCard
import {useState,useEffect} from 'react'
import {useParams,useLocation} from 'react-router'
import useAxios from '../hooks/useAxios.js'
import ProductImageSlide from '../Components/ProductImageSlide.jsx'
import {Typography,Rating,Badge,Button} from '@mui/material'
import useCartsData from '../hooks/useCartsData.js'

const ProductDetails = () => {
  const {id} = useParams()
  const product = useAxios(`/product/${id}`);
  const {handleCart} = useCartsData();
  
  return (
    <div>
      <div>
        <ProductImageSlide product={product}/>
      </div>
      <div className='mt-3 mb-32 relative'>
        <Typography variant='h6'>{product?.name}</Typography>
        <div className='flex items-center justify-between'>
          {product?.rating &&<Rating readOnly name="half-rating"  defaultValue={product?.rating} precision={0.5} />}
          <div className='flex items-center gap-3'>
             <Badge size='lg' color='success' variant='dot'/>
             <span>In Stock</span>
          </div>
        </div>
      <form onSubmit={(e)=> handleCart(e,product,e.target.qty.value)} className='fixed grid grid-cols-6 left-0 right-0 mx-auto z-50 w-full bottom-16 px-3 py-2 bg-white border'>
        <div className='col-span-2 flex items-center gap-2'>
          <span className='text-sm'>Qty</span>
          <input name='qty' className='w-8 h-8 text-center outline-none border' type='number' defaultValue='1'/>
        </div>
        <div className='col-span-4 flex items-center justify-between '>
          <Button color='success' variant='contained'>Buy Now</Button>
          <Button  type='submit'  variant='contained'>Add to Cart</Button>
        </div>
        
        
      </form>
      </div>
    </div>
  )
}

export default ProductDetails
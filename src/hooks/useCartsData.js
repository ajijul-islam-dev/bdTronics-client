import {useContext} from 'react'
import {CartContext} from '../Providers/CartProvider.jsx'

const useCartsData = () => {
  const {handleCart,cartItems,handleCartRemove} = useContext(CartContext);
  return {
    handleCart,
    handleCartRemove,
    cartItems
  }
}

export default useCartsData
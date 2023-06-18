import React from 'react'
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useWishlist } from 'react-use-wishlist';



const WishListBtn = ({product}) => {
    const { addWishlistItem,removeWishlistItem,inWishlist } = useWishlist();

    const toggleWishlistItem = (myitem) => {
        if (inWishlist(myitem.id)) {
            removeWishlistItem(myitem.id)
        }
        else{
            addWishlistItem(myitem)
        }
    }

  return (
    <span><button className='btn  fw-lg' onClick={()=>toggleWishlistItem(product)}> 
        { inWishlist(product.id) ? <AiFillHeart className='text-info'/>  : <AiOutlineHeart/> }
    </button></span>
  )
}

export default WishListBtn
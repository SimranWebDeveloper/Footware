import React, { useEffect, useState }  from 'react'
import { useWishlist } from 'react-use-wishlist'
import SingleCard from '../product/SingleCard';
import { use } from 'i18next';



const WishList = () => {

   const wish=[];


    const { items,setWishlistItems }=useWishlist()
    
      items.map((element,index)=>{

         return !wish.includes(element.id) ? wish.push(element.id) : ''  ;
      })  
     

    const filterWishList = () => {
      let filter = wish.map((element) => {
        return items.find((e) => {
          return e.id === element;
        })
      });
      
      return filter;
    }
    
    
  


  return (
    <section className='wishlist-section '>
      <div className='container py-3'>
        <h3 className='text-center bg-info text-white py-3 '> Your wishlist</h3>
        <div className='row'>

          {
            (filterWishList()).map((element, index) => {
                return <SingleCard product={element}/>;
            })  
          }

        </div>
        <button className='btn btn-danger mt-3' onClick={()=>{setWishlistItems([])}}> Clear All wishlist</button>


      </div>

    </section>
  )
}

export default WishList
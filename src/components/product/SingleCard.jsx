import React from 'react'
import { NavLink } from 'react-router-dom'
import WishListBtn from '../WishListBtn'






const SingleCard = ({product}) => {
  return (
    <div className='col-12 col-sm-12 col-md-6 col-lg-3' data-aos="fade-right">
        <div className="card" style={{height:'100%'}}>
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
            </div>
            <div className='d-flex justify-content-around'>
              <span><NavLink  className='btn fw-semibold' to={`/product/${product.id}`}>read more.. </NavLink></span>
              <WishListBtn product={product}/>
            </div>

        </div>
    </div>
  )
}

export default SingleCard

import React from 'react'
import { NavLink } from 'react-router-dom'



const SingleCard = ({product}) => {
  return (
    <div className='col-12 col-sm-12 col-md-6 col-lg-3' data-aos="fade-right">
        <div className="card" style={{height:'100%'}}>
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
            </div>
            <NavLink  className='btn btn-danger'> ad to wish</NavLink>
        </div>
    </div>
  )
}

export default SingleCard

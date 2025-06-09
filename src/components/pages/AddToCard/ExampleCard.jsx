import React from 'react'
import { toast } from 'react-toastify'
import { useCart } from 'react-use-cart'


const ExampleCard = ({product}) => {
    const{addItem}=useCart()   



  return (
    <div className='col-12 col-sm-12 col-md-6 col-lg-4' data-aos="fade-left">
        <div className="card" style={{width: '100%',height:'750px'}}>
          <img src={product.image} className="card-img-top" alt={product.make_id} style={{height:'300px'}}/>
          <div className="card-body">
              <h5 className="card-title">Name: {product.make_id}</h5>
              <h5 className="card-title">Model: {product.model}</h5>
              <p className="card-text">Year: {product.year}</p>
              <p className="card-text">Color: {product.color}</p>
              <p className="card-text">Price: {product.price}</p>

              <p className="card-text">Description: {product.description}</p>
              <button className='btn btn-info fixed-bottom  mx-2' onClick={()=>{
                addItem(product)
                toast.success('elave olundu')
                }}>Add to card</button>
          </div>
        </div>

    </div>
  )
}

export default ExampleCard

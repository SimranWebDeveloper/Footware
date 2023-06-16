import React from 'react'

const DetailProductDesign = ({product}) => {
  return (
    <section className='DetailProductDesign' data-aos="fade-right">
        <div className=" d-lg-flex" >
            <div>
            <img src={product.image} className="" alt={product.name} />
            </div>
            <div className="">
                <h5 className="">{product.name}</h5>
                <p>{product.make_id}</p>
                <p>{product.make_id}</p>
                <p>{product.make_id}</p>
                <p>{product.make_id}</p>
                <p>{product.make_id}</p>
                <p>{product.make_id}</p>
                <p>{product.make_id}</p>
                
            </div>
        </div>
    </section>
  )
}

export default DetailProductDesign

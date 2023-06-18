import React from 'react'

const DetailProductDesign = ({product}) => {
  return (
    <section className='DetailProductDesign' data-aos="fade-right">
        <div className=" d-lg-flex" >
            <div>
            <img src={product.image} className="" alt={product.name} />
            </div>
            <div className="p-3">
                <h3 className="">{product.name}</h3>
                <p>{product.price}</p>
                <p>{product.des}</p>

                
            </div>
        </div>
    </section>
  )
}

export default DetailProductDesign

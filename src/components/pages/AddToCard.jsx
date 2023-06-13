import React from 'react'
import Cards from './AddToCard/Cards'
import { useCart } from 'react-use-cart'
import { AiFillDelete } from "react-icons/ai";
import { toast } from 'react-toastify';


const AddToCard = () => {
  const{items,cartTotal,totalUniqueItems,removeItem,updateItemQuantity,setItems,isEmpty}=useCart()
  // if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <section className='addtocard'>
     <Cards/>

     <hr />
     <div className='container'>

     
      <h2 className='bg-info text-white text-center py-2'>Cards added to basket</h2>
      {
        items.length==0 ? 'Your basket is empty' : (
          <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Model</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>

              {
                items.map((product,index)=>{
                  return (
                    <tr  key={index}>
                        <td>{product.id}</td>
                        <td><img src={product.image} alt={product.make_id} style={{height:'200px',width:'300px'}} /></td>
                        <td>{product.make_id}</td>
                        <td>{product.model}</td>
                        <td>{product.price*product.quantity}$</td>
                        <td>
                          <button className='btn btn-success me-1' onClick={()=>updateItemQuantity(product.id,product.quantity+1)}>+</button>
                          {product.quantity}
                          <button className='btn btn-danger ms-1' onClick={()=>updateItemQuantity(product.id,product.quantity-1)}>-</button>
                          </td>
                        <td><button className='btn' onClick={()=>{
                          removeItem(product.id)
                          toast.warning('the product deleted')
                          }}> <AiFillDelete className='fs-4 text-danger'/> </button></td>
                    </tr>

                  )
                })
              }

            <h2>{Math.round(cartTotal) }</h2>
            <p>{totalUniqueItems}</p>
            <button className='btn btn-success' onClick={()=>setItems([])}>Buy Now</button>

          </tbody>
        </table>
        )
      }

    </div>
    </section>
  )
}

export default AddToCard

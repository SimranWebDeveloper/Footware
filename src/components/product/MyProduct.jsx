import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import SingleCard from './SingleCard'
import AOS from 'aos';

const MyProduct = () => {
    const{data,setData}=useContext(GlobalContext)
    AOS.init({
      duration:1000,
    })
  return (
    <>
    <div className='container'>
        <div className='row g-3'>
            {
                data.map((element,index)=>{
                return  <SingleCard product={element} key={index} />
                })
            }
    </div>  
    </div>


    </>
  )
}

export default MyProduct

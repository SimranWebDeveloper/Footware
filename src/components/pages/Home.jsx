import React, { useContext } from 'react'
import Shoes from '../Shoes'
import BestApi from '../BestApi'
import MyProduct from '../product/MyProduct'
import Logo from '../Logo'
import OwnCarusel from '../OwnCarusel/OwnCarusel'




const Home = () => {

  return (
    <>
    <section className='home-section'>
  
    <Shoes/>
      <OwnCarusel/>
      <BestApi/>
      <MyProduct />
      <div className='text-center my-5'><button className='btn btn-secondary rounded-pill px-5 py-3 '>SHOP ALL PRODUCTS</button></div>
      <Logo/>
    </section>


    </>
  )
}

export default Home

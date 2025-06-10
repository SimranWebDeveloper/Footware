import React, { useContext, useEffect } from 'react'
import Shoes from '../Shoes'
import BestApi from '../BestApi'
import MyProduct from '../product/MyProduct'
import Logo from '../Logo'
import OwnCarusel from '../OwnCarusel/OwnCarusel'
import { useTranslation } from 'react-i18next'
import { GlobalContext } from '../context/GlobalState'




const Home = () => {

  const { t }=useTranslation()
  const{data,productCount,increaseProductCount,resetProductCount}=useContext(GlobalContext)
    useEffect(()=>{
      resetProductCount();
    },[])
  
  return (
    <>
    <section className='home-section'>
  
    <Shoes/>
      <OwnCarusel/>
      <BestApi/>
      <MyProduct />
      <div className='text-center my-5'>
        <button onClick={increaseProductCount} className={`btn btn-secondary rounded-pill px-5 py-3 ${productCount>(data.length-4) ? "d-none" :null} `}>{t("home.0")}</button>
        </div>
      <Logo/>
    </section>


    </>
  )
}

export default Home

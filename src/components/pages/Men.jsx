import React from 'react'
import Sneakers from '../../common/Sneakers'
import MyProduct from '../product/MyProduct'
import Logo from '../Logo'
import Slider from '../Slider'
import { useTranslation } from 'react-i18next'



const Men = () => {
  const {t}=useTranslation()
  return (
    <section className='men-section ' style={{padding:'1px'}} >
    
      <Slider/>
      <Sneakers/>
      <h5 className='text-center text-secondary my-4 fw-bold'>{t("sneakers.4")}</h5>
      <MyProduct/>

      <h5 className='text-center text-secondary mt-5 fw-bold'>{t("sneakers.5")}</h5>
      <Logo/>
    </section>
  )
}

export default Men

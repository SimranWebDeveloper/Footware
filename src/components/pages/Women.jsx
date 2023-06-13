import React from 'react'
import Sneakers from '../../common/Sneakers'
import MyProduct from '../product/MyProduct'
import Logo from '../Logo'
import Slider from '../Slider'
import { useTranslation } from 'react-i18next'

const Women = () => {
  const {t}=useTranslation()
  return (

    <section className='women-section'>
      <Slider/>
      <Sneakers/>
      <MyProduct/>
      <h5 className='text-center text-secondary mt-5 fw-bold'>{t("sneakers.5")}</h5>
      <Logo/>
    </section>
  )
}

export default Women

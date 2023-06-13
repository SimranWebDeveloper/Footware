import React from 'react'
import '../assets/sass/style.scss'
import { useTranslation } from 'react-i18next'

const BestApi = () => {
  const {t}=useTranslation()

  return (
    <section className='bestapi my-5'>
        <div className='container mt-5'>
        <p className='text-seller fw-semibold display-5 text-center'>{t("bestapi.0")}</p>

        </div>
    </section>
  )
}

export default BestApi

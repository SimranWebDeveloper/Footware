import React from 'react'
import '../assets/sass/style.scss'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n'

const Shoes = () => {
 const    {t} = useTranslation()

  return (
    <>
    <section className='shoes d-flex justify-content-center align-items-center flex-column'>

        <h2>{t("shop.0")}</h2>
        <p className='display-6'>{t("shop.1")}</p>
        <p className='display-5'>{t("shop.2")}</p>
        <p>{t("shop.3")}</p>

    </section>

    <section className='design d-flex justify-content-center align-items-center flex-column my-5'>
        <p className='display-5 fw-bold my-5'>{t("shop.4")}</p>

        <div className='container-fluid'>
            <div className='row g-3'>


                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                    <img src="https://preview.colorlib.com/theme/footwear/images/img_bg_3.jpg.webp" alt=""  className='design-image w-100'/>
                    <p className='display-6 fw-semibold text-center'>{t("shop.5")}</p>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                    <img src="https://preview.colorlib.com/theme/footwear/images/img_bg_2.jpg.webp" alt=""  className='design-image w-100'/>
                    <p className='display-6 fw-semibold text-center'>{t("shop.6")}</p>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Shoes

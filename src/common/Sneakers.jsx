import React from 'react'
import '../assets/sass/style.scss'
import { useTranslation } from 'react-i18next'

const Sneakers = () => {
  const {t}=useTranslation()

  return (
    <section className='sneakers'>


        <div className='container my-5'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <div id='sneakersImg' className='position-relative bg-info' >
                <img  src="https://preview.colorlib.com/theme/footwear/images/men.jpg" alt="" className='w-100 h-100'/>
                  <div className='position-absolute  top-0  start-0  w-100'>
                    <div className='p-5 text-center'>
                      <p className='text-light display-5 fw-semibold'>{t("sneakers.0")}</p>
                      <div className='text-center'><button className='btn btn-secondary rounded-pill px-5 py-3'><small>{t("sneakers.3")}</small></button></div>
                    </div>

                  </div>
              </div>
            </div>

            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <div id='sneakersImg' className='position-relative bg-info' >
                <img  src="https://preview.colorlib.com/theme/footwear/images/women.jpg" alt="" className='w-100 h-100'/>
                  <div className='position-absolute  top-0  start-0  w-100'>
                    <div className='p-5 text-center'>
                      <p className='text-light display-5 fw-semibold'>{t("sneakers.1")}</p>
                      <div className='text-center'><button className='btn btn-secondary rounded-pill px-5 py-3'><small>{t("sneakers.3")}</small></button></div>
                    </div>

                  </div>
              </div>
            </div>

            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <div id='sneakersImg' className='position-relative bg-info' >
                <img  src="https://preview.colorlib.com/theme/footwear/images/item-11.jpg" alt="" className='w-100 h-100'/>
                  <div className='position-absolute  top-0  start-0  w-100'>
                    <div className='p-5 text-center'>
                      <p className='text-light display-5 fw-semibold'>{t("sneakers.2")}</p>
                      <div className='text-center'><button className='btn btn-secondary rounded-pill px-5 py-3'><small>{t("sneakers.3")}</small></button></div>
                    </div>

                  </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  )
}

export default Sneakers

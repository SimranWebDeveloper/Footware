import React from 'react'
import '../../assets/sass/style.scss'
import { BiPlay } from "react-icons/bi";
import { useTranslation } from 'react-i18next';


const About = () => {
  const {t}=useTranslation()
  return (
    <section className='about'>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <div className='aboutImg position-relative'>
              <img src="https://preview.colorlib.com/theme/footwear/images/about.jpg.webp" alt="" className='w-100 h-100 z-0' />
              <div className='hoverImg position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center '>
                <button className='aboutBtn btn rounded-pill '>
                  <BiPlay className='pb-2 '/>
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <h5 className='display-6 fw-semibold'>{t("about.0")}</h5>
            <p className='text-secondary lh-lg'>{t("about.1")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

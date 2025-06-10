import React from 'react'
import '../../assets/sass/style.scss'
import { BiPlay } from "react-icons/bi";
import { useTranslation } from 'react-i18next';


const About = () => {
  const {t}=useTranslation()
  return (
    <section className='about'>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <div className='aboutImg position-relative'>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/864B4rzoPog?si=eYdPLBg_5xznuG8v"  allowfullscreen></iframe>    
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

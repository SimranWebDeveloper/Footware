import React from 'react'
import { useTranslation } from 'react-i18next'

const Advertising = () => {
  const {t}=useTranslation()
  return (
    <section className='advertising'>
      <div className="container-fluid d-flex justify-content-center align-items-center pt-3">
            <p className='fs-4'>{t("advertising.0")}</p>
      </div>
    </section>
  )
}

export default Advertising

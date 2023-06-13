import React from 'react'
import '../assets/sass/style.scss'

const Logo = () => {
  return (

      <section className='logo d-flex justify-content-center align-items-center'>
        <div className='container'>
            <div className='row'>

                <div className='col'>
                    <img src="https://preview.colorlib.com/theme/footwear/images/brand-1.jpg.webp" alt="" className='w-100'/>
                </div>
                <div className='col'>
                    <img src="https://preview.colorlib.com/theme/footwear/images/brand-2.jpg.webp" alt="" className='w-100'/>
                </div>
                <div className='col'>
                    <img src="https://preview.colorlib.com/theme/footwear/images/brand-3.jpg.webp" alt="" className='w-100'/>
                </div>
                <div className='col'>
                    <img src="https://preview.colorlib.com/theme/footwear/images/brand-4.jpg.webp" alt="" className='w-100'/>
                </div>
                <div className='col'>
                    <img src="https://preview.colorlib.com/theme/footwear/images/brand-5.jpg.webp" alt="" className='w-100'/>
                </div>

            </div>
        </div>
      </section>

  )
}

export default Logo

import React from 'react'
import '../assets/sass/style.scss'

import { Navigation, Pagination, Scrollbar,Autoplay,EffectFade , A11y } from 'swiper';

import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade';
import sliderData from '../data/SliderData';


const Slider = () => {
  return (

    <section className='slider'>
        <div className='container'>

        
            <Swiper className='my-5'
        // install Swiper modules
        modules={[Navigation, Autoplay,EffectFade, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop
        autoplay
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >

            {
                sliderData.map((element,index)=>{
                    return         <SwiperSlide key={element.id}><img src={element.image} alt="" className='object-fit-cover border rounded '/></SwiperSlide>
                })
            }
            </Swiper>
        </div>
    </section>
  )
}

export default Slider

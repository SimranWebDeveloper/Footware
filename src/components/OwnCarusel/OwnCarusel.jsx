import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from './img/img1.jpg'
import img2 from './img/img2.jfif'
import img3 from './img/img3.jfif'



const OwnCarousel = () => {
  return (
    <div className="container">
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div className="item">
          <h4><img src={img1} alt="" /></h4>
        </div>
        <div className="item">
        <h4><img src={img2} alt="" /></h4>
        </div>
        <div className="item">
        <h4><img src={img3} alt="" /></h4>
        </div>

        
      </OwlCarousel>
    </div>
  );
};

export default OwnCarousel;

import React, { Component } from 'react';
import '../../../styles/carousel-image.css';

const CarouseImages = ({active, typeCourse}) => {
    let images;
        switch (active) {
            case 0: images = {
                img1: 'images/capacitacion.jpg',
                img2: 'images/contactos.jpg',
                img3: 'images/capacitacion.jpg'
            }
            break;
            case 1: images = {
                img1: 'images/62.png',
                img2: 'images/43.png',
                img3: 'images/42.jpg',
            }
            break;
            case 2: images = {
                img1: 'images/18.jpg',
                img2: 'images/30.jpg',
                img3: 'images/31.jpg'
            }
            break;
            case 3: images = {
                img1: 'images/14.jpg',
                img2: 'images/20.jpg',
                img3: 'images/32.jpg'
            }
            break;
            case 4: images = {
                img1: 'images/66.png',
                img2: 'images/67.jpg',
                img3: 'images/66.png'
            }
            break;
        }
    
    return (
    <section  id="slides" className={active > 0 ? 'col-md-5 show' : 'col-md-5 hidden'}>
        <div className="slides-container">
              <div className="slide active">
                <img src={images.img1} alt="" className="img-responsive"/>
            
              </div>
              
              <div className="slide active">
                <img src={images.img2} alt="" className="img-responsive"/>
                 </div>
              
              {(images.img3) && <div className="slide active">
                <img src={images.img3} alt="" className="img-responsive"/>
                  </div>}
          </div>
          </section>
    );
}

export default CarouseImages;

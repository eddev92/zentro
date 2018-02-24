import React, { Component } from 'react';
import '../../../styles/carousel-image.css';

const CarouseImages = ({active}) => {
    console.log(active)
    let images;

    switch (active) {
        case 0: images = {
            img1: 'images/capacitacion.jpg',
            img2: 'images/contactos.jpg',
            img3: 'images/capacitacion.jpg'
        }
        break;
        case 1: images = {
            img1: 'images/capacitacion.jpg',
            img2: 'https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg',
            img3: 'https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg'
        }
        break;
        case 2: images = {
            img1: 'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg',
            img2: 'https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg',
            img3: 'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg'
        }
        break;
        case 3: images = {
            img1: 'images/contactos.jpg',
            img2: 'https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg',
            img3: 'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg'
        }
        break;
        case 4: images = {
            img1: 'https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg',
            img2: 'https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg',
            img3: 'https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg'
        }
        break;
    }
    return (
    <section  id="slides" className={active > 0 ? 'col-md-6 show' : 'col-md-6 hidden'}>
        <div className="slides-container">
              <div className="slide active">
                <img src={images.img1} alt="Fractales" className="img-responsive"/>
            
              </div>
              
              <div className="slide active">
                <img src={images.img2} alt="Estereoquímica" className="img-responsive"/>
                 </div>
              
              <div className="slide active">
                <img src={images.img3} alt="Rotenona" className="img-responsive"/>
                  </div>
          </div>
          </section>
    );
}

export default CarouseImages;

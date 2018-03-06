import React, { Component } from 'react';
import '../../../styles/carousel-capa.css';

const CarouselCapa = ({active}) => {
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
                img1: 'images/13A.jpg',
                img2: 'images/13.jpg',
                img3: 'images/18.jpg',
                img4: 'images/15.png',
                img5: 'images/16.png',
                img6: 'images/17.jpg'
            }
            break;
            case 2: images = {
                img1: 'images/39.png',
                img2: 'images/38.png',
                img3: 'images/37.jpg',
                img4: 'images/41.jpg',
                img5: 'images/42.jpg',
                img6: 'images/40.jpg',
            }
            break;
            case 3: images = {
                img1: 'images/63.jpg',
                img2: 'images/64.jpg',
                img3: 'images/65.gif',
                img4: 'images/63.jpg',
            }
            break;
            case 4: images = {
                img1: 'images/gestion1.jpg',
                img2: 'images/gestion2.jpg',
                img3: 'images/gestion3.jpg',
                img4: 'images/gestion1.jpg',
            }
            break;
            case 5: images = {
                img1: 'images/68A.jpg',
                img2: 'images/68B.jpg',
                img3: 'images/68A.jpg',
                img4: 'images/68B.jpg',
            }
            break;
        }
    
    return (
        <div class="slider capa">
            <ul>
            {images.img1 && <li><img src={images.img1} alt=""/> </li>}  
                {images.img2 && <li><img src={images.img2} alt=""/> </li>}  
                {images.img3 && <li><img src={images.img3} alt=""/> </li>}              
                {images.img4 && <li><img src={images.img4} alt=""/>
                </li>}          
                {images.img5 && <li><img src={images.img5} alt=""/>
                </li>}
                {images.img6 && <li><img src={images.img6} alt=""/>
                </li>}
            </ul>
        </div>
    );
}

export default CarouselCapa;

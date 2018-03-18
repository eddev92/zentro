import React, { Component } from 'react';
import '../../../styles/courses-content.css';

const Carousel = ({active}) => {
    let images;
        switch (active) {
            case 0: images = {
                img1: 'images/capacitacion.jpg',
                img2: 'images/contactos.jpg',
                img3: 'images/capacitacion.jpg'
            }
            break;
            case 1: images = {
                img1: 'images/4.jpg',
                img2: 'images/5.jpg',
                img3: 'images/6.jpg',
                img4: 'images/7.png',
                img5: 'images/8.png',
                img6: 'images/9.jpg'
            }
            break;
            case 2: images = {
                img1: 'images/10.jpg',
                img2: 'images/10A.jpg',
                img3: 'images/11.jpg',
                img4: 'images/12.jpg'
            }
            break;
            case 3: images = {
                img1: 'images/14.jpg',
                img2: 'images/20.jpg',
                img3: 'images/32.jpg'
            }
            break;
            case 4: images = {
                img1: 'images/66.jpg',
                img2: 'images/67.jpg',
                img3: ''
            }
            break;
        }
    
    return (
        <div class="slider">
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

export default Carousel;

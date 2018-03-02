import React, { Component } from 'react';
import '../../../styles/simple-carousel.css';

const CarouselSimple = ({galeryCourse}) => {
    console.log(galeryCourse)
    let images = {
        img1: 'images/capacitacion.jpg',
        img2: 'images/contactos.jpg',
        img3: 'images/capacitacion.jpg'
    };
        switch (galeryCourse) {
            case 0: images = {
                img1: 'images/capacitacion.jpg',
                img2: 'images/contactos.jpg',
                img3: 'images/capacitacion.jpg',
                title: ''
            }
            break;
            case 1: images = {
                img1: 'images/19.png',
                img2: 'images/20.jpg',
                img3: 'images/21.jpg',
            }
            break;
            case 2: images = {
                img1: 'images/10.jpg',
                img2: 'images/10A.jpg',
                img3: 'images/11.jpg',
                img4: 'images/12.jpg',
                title: ''
            }
            break;
            case 3: images = {
                img1: 'images/14.jpg',
                img2: 'images/20.jpg',
                img3: 'images/32.jpg',
                title: ''
            }
            break;
            case 4: images = {
                img1: 'images/66.jpg',
                img2: 'images/67.jpg',
                img3: '',
                title: ''
            }
            break;
            case 5: images = {
                img1: 'images/66.jpg',
                img2: 'images/67.jpg',
                img3: '',
                title: ''
            }
            break;
            case 6: images = {
                img1: 'images/66.jpg',
                img2: 'images/67.jpg',
                img3: '',
                title: ''
            }
            break;
            case 7: images = {
                img1: 'images/66.jpg',
                img2: 'images/67.jpg',
                img3: '',
                title: ''
            }
            break;
            case 8: images = {
                img1: 'images/66.jpg',
                img2: 'images/67.jpg',
                img3: '',
                title: ''
            }
            break;
            case 9: images = {
                img1: 'images/66.jpg',
                img2: 'images/67.jpg',
                img3: '',
                title: ''
            }
            break;
            case 10: images = {
                img1: 'images/66.jpg',
                img2: 'images/67.jpg',
                img3: '',
                title: ''
            }
            break;
            case 11: images = {
                img1: 'images/66.jpg',
                img2: 'images/67.jpg',
                img3: '',
                title: ''
            }
            break;
            case 12: images = {
                img1: 'images/66.jpg',
                img2: 'images/67.jpg',
                img3: '',
                title: ''
            }
            break;
        }
    
    return (
        // <div class="slider2">
        //     <ul>
        //     {images.img1 && <li><img src={images.img1} alt=""/> </li>}  
        //         {images.img2 && <li><img src={images.img2} alt=""/> </li>}  
        //         {images.img3 && <li><img src={images.img3} alt=""/> </li>}              
        //         {images.img4 && <li><img src={images.img4} alt=""/>
        //         </li>}          
        //         {images.img5 && <li><img src={images.img5} alt=""/>
        //         </li>}
        //         {images.img6 && <li><img src={images.img6} alt=""/>
        //         </li>}
        //     </ul>
        // </div>
        <div>
            <div className="row">
                {images.img1 && <div className="col-md-6">
                    <img src={images.img1} alt=""/>
                </div>}
                {images.img2 && <div className="col-md-6">
                    <img src={images.img2} alt=""/>
                </div>}
            </div>
            <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>

            </div>
        </div>
    );
}

export default CarouselSimple;

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
                img1: 'images/23.jpg',
                img2: 'images/22.png',
                img3: 'images/11.24',
                title: ''
            }
            break;
            case 3: images = {
                img1: 'images/27.jpg',
                img2: 'images/26.jpg',
                img3: 'images/25.png',
                title: ''
            }
            break;
            case 4: images = {
                img1: 'images/28A.jpg',
                img2: 'images/28.jpg',
                img3: 'images/30.jpg',
                img4: 'images/29.jpg',
                title: ''
            }
            break;
            case 5: images = {
                img1: 'images/31.jpg',
                img2: 'images/32.jpg',
                img3: 'images/33.jpg',
                title: ''
            }
            break;
            case 6: images = {
                img1: 'images/34.png',
                img2: 'images/35.jpg',
                img3: 'images/36.jpg',
                img3: 'images/37A.jpg',
                title: ''
            }
            break;
            case 7: images = {
                img1: 'images/43.png',
                img2: 'images/44.png',
                img3: 'images/45.png',
                title: ''
            }
            break;
            case 8: images = {
                img1: 'images/46.png',
                img2: 'images/47.jpg',
                img3: 'images/48.jpg',
                title: ''
            }
            break;
            case 9: images = {
                img1: 'images/49A.png',
                img2: 'images/49.jpg',
                img3: 'images/50A.png',
                img4: 'images/50.jpg',
                img5: 'images/51.png',
                img6: 'images/52.jpg',
                title: ''
            }
            break;
            case 10: images = {
                img1: 'images/53A.png',
                img2: 'images/53.jpg',
                img3: 'images/54.jpg',
                img4: 'images/55.png',
                title: ''
            }
            break;
            case 11: images = {
                img1: 'images/56A.png',
                img2: 'images/56.png',
                img3: 'images/57.png',
                img4: 'images/58A.png',
                img5: 'images/58.jpg',
                title: ''
            }
            break;
            case 12: images = {
                img1: 'images/59A.png',
                img2: 'images/59.png',
                img3: 'images/60.jpg',
                img4: 'images/61.jpg',
                img5: 'images/62.png',
                title: ''
            }
            break;
        }
    
    return (
        <div className="main">
            <div className="row">
                {images.img1 && <div className="col-md-6 item-galery">
                    <img src={images.img1} alt=""/>
                </div>}
                {images.img2 && <div className="col-md-6 item-galery">
                    <img src={images.img2} alt=""/>
                </div>}
            </div>
            <div className="row">
            {images.img3 && <div className="col-md-6 item-galery">
                    <img src={images.img3} alt=""/>
                </div>}
                {images.img4 && <div className="col-md-6 item-galery">
                    <img src={images.img4} alt=""/>
                </div>}

            </div>
            <div className="row">
            {images.img5 && <div className="col-md-6 item-galery">
                    <img src={images.img5} alt=""/>
                </div>}
                {images.img6 && <div className="col-md-6 item-galery">
                    <img src={images.img6} alt=""/>
                </div>}

            </div>
        </div>
    );
}

export default CarouselSimple;

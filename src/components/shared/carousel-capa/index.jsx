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
                img1: 'images/66.jpg',
                img2: 'images/67.jpg'
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
                {/* <li>
  <img src="http://dominicushoeve.com/wp-content/uploads/ktz/latest-high-resolution-wallpaper-1920x1080-70558-pictures-high-resolution-wallpaper-30whtvl34j4r12m8b0c1sa.jpg" alt=""/>
 </li>
				<li>
  <img src="http://youghaltennisclub.ie/wp-content/uploads/2014/06/Tennis-Wallpaper-High-Definition-700x300.jpg" alt=""/>
</li>
				<li>
  <img src="http://welltechnically.com/wp-content/uploads/2013/08/android-wallpapers-700x300.jpg" alt=""/>
</li>
				<li>
  <img src="http://welltechnically.com/wp-content/uploads/2013/09/android-widescreen-wallpaper-14165-hd-wallpapers-700x300.jpg" alt=""/>
</li> */}
            </ul>
        </div>
    );
}

export default CarouselCapa;

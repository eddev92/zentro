import React, { Component } from 'react';
import '../../../styles/carousel-capa.css';

class CarouselCapa extends Component {
    state = {
        index: 1
    }
    componentDidMount() {
        this.autoLoadImages();
    }
    autoLoadImages = () => {
        const { index } = this.state;

        setTimeout(() => {
            if (index === 6) {
                this.setState({ index: 1 });
                return this.autoLoadImages(); 
            }
            this.setState({ index: index+1 })
            this.autoLoadImages();
        }, 5000);
    }
    getNumberIndex(string) {
        const index = Number(string.slice(3));
        return index;
    }
    render() {
        const { index } = this.state;
        const { active } = this.props;
        console.log(this.state.index)
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
                img5: 'images/63.jpg',
                img6: 'images/64.jpg',
            }
            break;
            case 4: images = {
                img1: 'images/gestion1.jpg',
                img2: 'images/gestion2.jpg',
                img3: 'images/gestion3.jpg',
                img4: 'images/gestion1.jpg',
                img5: 'images/gestion3.jpg',
                img6: 'images/gestion2.jpg',
            }
            break;
            case 5: images = {
                img1: 'images/68A.jpg',
                img2: 'images/68B.jpg',
                img3: 'images/68A.jpg',
                img4: 'images/68B.jpg',
                img5: 'images/68A.jpg',
                img6: 'images/68B.jpg',
            }
            break;
        }

    return (
        <div className="carousel-linus">
                {<div className={(index === this.getNumberIndex('img1')) ? 'show' : 'hidden'}>{images.img1 && <img src={images.img1} alt=""/>}</div>}
                {<div className={(index === this.getNumberIndex('img2')) ? 'show' : 'hidden'}>{images.img2 && <img src={images.img2} alt=""/>}</div>}
                {<div className={(index === this.getNumberIndex('img3')) ? 'show' : 'hidden'}>{images.img3 && <img src={images.img3} alt=""/>}</div>}
                {<div className={(index === this.getNumberIndex('img4')) ? 'show' : 'hidden'}>{images.img4 && <img src={images.img4} alt=""/>}</div>}
                {<div className={(index === this.getNumberIndex('img5')) ? 'show' : 'hidden'}>{images.img5 && <img src={images.img5} alt=""/>}</div>}
                {<div className={(index === this.getNumberIndex('img6')) ? 'show' : 'hidden'}>{images.img6 && <img src={images.img6} alt=""/>}</div>}
        </div>
    );
    }
    
}

export default CarouselCapa;

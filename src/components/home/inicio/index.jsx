import React, { Component } from 'react';
import '../../../styles/inicio.css';

class Inicio extends Component{
    state = {
        sectionActive: 0
    }
    changeItem() {
        const {sectionActive} = this.state;
        if (sectionActive > 0) {
           return this.setState({sectionActive: 0})
        }
        this.setState({ sectionActive: sectionActive+1})
    }
    selectImage = (index) => {

        this.setState({ sectionActive: index })        
    }
    renderImage = () => {
        const {sectionActive} = this.state;
        let img = '';
        console.log(sectionActive)
        switch (sectionActive) {
            case 0: img = 'https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg'; break;
            case 1: img = 'https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg'; break;
        }
        return <img src={img} />
    }
    renderCarousel() {
        const {sectionActive} = this.state;
        
        // setTimeout(() => {
        //     this.changeItem();
        //     }, 10000);
        return (
            <div>
                <div className="selects">
                 <img src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg" className={(sectionActive === 0) ? 'active' : ''} onClick={this.selectImage.bind(this, 0)} />
                 <img src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(121).jpg" className={(sectionActive === 1) ? 'active' : ''} onClick={this.selectImage.bind(this, 1)} />
                </div>
                    {this.renderImage()}
            </div>

        )
    }
    render() {
        return (
            <div className="main-carousel">
                {this.renderCarousel()}
            </div>
        )
    }
}

export default Inicio;

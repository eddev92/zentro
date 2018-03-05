import React, { Component } from 'react';
import '../../../styles/simple-carousel.css';

class CarouselSimple extends Component {
    state = {
        open: false,
        index: 0,
        img1Index: 1,
        img2Index: 2,
        images: {}
    }
    componentDidMount() {
        this.increaseIndex();
    }
    increaseIndex() {
        const { galeryCourse } = this.props;
        const {index, images} = this.state;
        console.log(galeryCourse)
        setTimeout(() => {
            if (index === 3 && galeryCourse.total === 4){
                this.setState({index: 0})
                return this.increaseIndex();
            }
            if (index > 3 && galeryCourse.total === 5){
                this.setState({index: 0})
                return this.increaseIndex();
            }    
        if (index === galeryCourse.total){
            this.setState({index: 0})
            return this.increaseIndex();
        }
            this.setState({index: index+3},() => {
                this.increaseIndex();
            })
        }, 3000)
    }
    renderImages(galeryCourse) {
        if (!galeryCourse) {
            return null;
        }
        console.log((galeryCourse.total))
        console.log((galeryCourse))
        const { img1Index, img2Index, index } = this.state;
        if (this.props.galeryCourse.total <= 4) {
            return (
                <div className="row">
                    {(galeryCourse.img1 || galeryCourse.img2) && <div className={index === 0 ? 'row normal' : 'row hidden'}>
                    {galeryCourse.img1 && <div className="col-md-6 item-galery">
                        <img src={galeryCourse.img1} alt=""/>
                    </div>}
                    {galeryCourse.img2 && <div className="col-md-6 item-galery">
                        <img src={galeryCourse.img2} alt=""/>
                    </div>}
                </div>}
                {(galeryCourse.img3 || galeryCourse.img4) && <div className={index === 3 && (galeryCourse.img3 || galeryCourse.img4) ? 'row normal' : 'row hidden'}>
                {galeryCourse.img3 && <div className={(galeryCourse.img3 && galeryCourse.img4) ? 'col-md-6 item-galery' : 'col-md-6 item-galery position-center'}>
                        <img src={galeryCourse.img3} alt=""/>
                    </div>}
                    {galeryCourse.img4 && <div className={(galeryCourse.img3 && galeryCourse.img4) ? 'col-md-6 item-galery' : 'col-md-6 item-galery position-center'}>
                        <img src={galeryCourse.img4} alt=""/>
                    </div>}
    
                </div>}
                </div>
            )
        } else {return (
            <div className="row">
                {(galeryCourse.img1 || galeryCourse.img2) && <div className={index === 0 ? 'row normal' : 'row hidden'}>
                {galeryCourse.img1 && <div className="col-md-6 item-galery">
                    <img src={galeryCourse.img1} alt=""/>
                </div>}
                {galeryCourse.img2 && <div className="col-md-6 item-galery">
                    <img src={galeryCourse.img2} alt=""/>
                </div>}
            </div>}
            {(galeryCourse.img3 || galeryCourse.img4) && <div className={index === 3 && (galeryCourse.img3 || galeryCourse.img4) ? 'row normal' : 'row hidden'}>
            {galeryCourse.img3 && <div className={(galeryCourse.img3 && galeryCourse.img4) ? 'col-md-6 item-galery' : 'col-md-6 item-galery position-center'}>
                    <img src={galeryCourse.img3} alt=""/>
                </div>}
                {galeryCourse.img4 && <div className={(galeryCourse.img3 && galeryCourse.img4) ? 'col-md-6 item-galery' : 'col-md-6 item-galery position-center'}>
                    <img src={galeryCourse.img4} alt=""/>
                </div>}

            </div>}
            {(galeryCourse.img5 || galeryCourse.img6) && <div className={index === 6 && (galeryCourse.img5 || galeryCourse.img6) ? 'row normal' : 'row hidden'}>
            {galeryCourse.img5 && <div className={(galeryCourse.img5 && galeryCourse.img6) ? 'col-md-6 item-galery' : 'col-md-6 item-galery position-center'}>
                    <img src={galeryCourse.img5} alt=""/>
                </div>}
                {galeryCourse.img6 && <div className={(galeryCourse.img5 && galeryCourse.img6) ? 'col-md-6 item-galery' : 'col-md-6 item-galery position-center'}>
                    <img src={galeryCourse.img6} alt=""/>
                </div>}

            </div>}
            </div>
        )

        }
    }

render() {
    const { galeryCourse } = this.props;
    let items = [];
    console.log(items)
    return (
        <div className="main">
        {this.renderImages(galeryCourse)}
            
        </div>
    );
    }
}

export default CarouselSimple;

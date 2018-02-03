import React, { Component } from 'react';
import '../../styles/home.css';

class HomeComponent extends Component{
    render() {
        return (
            <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">

    <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg" alt="Second slide" />
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="Third slide" />
        </div>
    </div>
    <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
    <ol className="carousel-indicators">
        <li data-target="#carousel-thumb" data-slide-to="0" className="active"> <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg" className="img-fluid" /></li>
        <li data-target="#carousel-thumb" data-slide-to="1"><img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(121).jpg" className="img-fluid" /></li>
        <li data-target="#carousel-thumb" data-slide-to="2"><img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg" className="img-fluid" /></li>
    </ol>
</div>
        )
    }
}

export default HomeComponent;

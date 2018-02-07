import React, { Component } from 'react';
import '../../styles/home.css';
import Menu from '../../components/shared/menu';

class HomeComponent extends Component{
    state = {
        open: false,
        sectionActive: 0
    }

    selectSection = (index) => {
        this.setState({ sectionActive: index})
    }
    openModal = () => {
        const {open} = this.state;

        this.setState({ open: !open})
    }
    render() {
        const { photoSelected, sectionActive, open } = this.state;

        return (
            <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
            {/* <Menu/> */}
            <div className="content-logo">
            <img src="images/logo.png" className="logo" alt=""/>
            </div>
                <div className="carousel-inner" role="listbox">
                    <div className={`carousel-item ${(sectionActive === 0) ? 'active' : ''}`}>
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg" alt="First slide" />
                    </div>
                    <div className={`carousel-item ${(sectionActive === 1) && 'active'}`}>
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg" alt="Second slide" />
                    </div>
                    <div className={`carousel-item ${(sectionActive === 2) && 'active'}`}>
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="Third slide" />
                        <button type="button" className="btn btn-primary courses" onClick={this.openModal}>
            Ver cursos
</button>
<div className={(open) ? 'modal fade show' : 'modal fade'} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            </div>
            <div className="modal-body">
                ...
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={this.openModal} data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
                    </div>
                    <div className={`carousel-item ${(sectionActive === 3) && 'active'}`}>
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg" alt="Third slide" />
                    </div>
                    <div className={`carousel-item ${(sectionActive === 4) && 'active'}`}>
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="Third slide" />
                    </div>
                    <div className={`carousel-item ${(sectionActive === 5) && 'active'}`}>
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg" alt="Third slide" />
                    </div>
                    <div className={`carousel-item ${(sectionActive === 6) && 'active'}`}>
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="Third slide" />
                    </div>
                </div>
                <ol className="carousel-indicators">
                    <li data-target="" data-slide-to="0" className={(sectionActive === 0) ? 'active' : ''} onClick={this.selectSection.bind(this, 0)}> <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg" className="img-fluid" />
                    {(sectionActive === 0) && <span>INICIO</span>}
                    </li>
                    <li data-target="" data-slide-to="1" className={(sectionActive === 1) ? 'active' : ''} onClick={this.selectSection.bind(this, 1)}><img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(121).jpg" className="img-fluid" />
                    {(sectionActive === 1) && <span>SERVICIOS</span>}
                    </li>
                    <li data-target="" data-slide-to="2" className={(sectionActive === 2) ? 'active' : ''} onClick={this.selectSection.bind(this, 2)}><img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg" className="img-fluid" />
                    {(sectionActive === 2) &&  <span>CAPACITACIÓN</span>}
                    </li>
                    <li data-target="" data-slide-to="3" className={(sectionActive === 3) ? 'active' : ''} onClick={this.selectSection.bind(this, 3)}><img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg" className="img-fluid" />
                    {(sectionActive === 3) && <span>ARTICULOS</span>}
                    </li>
                    <li data-target="" data-slide-to="4" className={(sectionActive === 4) ? 'active' : ''} onClick={this.selectSection.bind(this, 4)}><img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg" className="img-fluid" />
                    {(sectionActive === 4) && <span>EVENTOS</span>}
                    </li>
                    <li data-target="" data-slide-to="5" className={(sectionActive === 5) ? 'active' : ''} onClick={this.selectSection.bind(this, 5)}><img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg" className="img-fluid" />
                    {(sectionActive === 5) && <span>ENLACES</span>}
                    </li>
                    <li data-target="" data-slide-to="5" className={(sectionActive === 6) ? 'active' : ''} onClick={this.selectSection.bind(this, 6)}><img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg" className="img-fluid" />
                    {(sectionActive === 6) && <span>CONTÁCTOS</span>}
                    </li>
                </ol>
            </div>
        )
    }
}

export default HomeComponent;

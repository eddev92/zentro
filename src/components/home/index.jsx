import React, { Component } from 'react';
import '../../styles/home.css';
import Menu from '../../components/shared/menu';
import ContactForm from '../../components/shared/contact-form';
import Inicio from '../../components/home/inicio';
import Consultoria from '../../components/home/consultoria';
import Capacitacion from '../../components/home/capacitacion';
import CourseContent from '../../components/shared/courses-content';

class HomeComponent extends Component{
    state = {
        open: false,
        sectionActive: 0,
        dropdownShow: false
    }

    selectSection = (index) => {
        const {sectionActive, dropdownShow} = this.state;
        if (dropdownShow) {
            this.setState({dropdownShow: false})
        }
        this.setState({ sectionActive: index, dropdownShow: sectionActive === 2 && true})
    }
    closeDropwdown = () => {
        const {dropdownShow} = this.state;

        this.setState({ dropdownShow: !dropdownShow})
    }
    render() {
        const { photoSelected, sectionActive, open, dropdownShow } = this.state;

        return (
            <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
            <h3 className="eslogan container-fluid">Centro especializado en capacitación y análisis</h3>
            <nav className={(open) ? 'navbar navbar-expand-lg navbar-dark indigo menu-content-aux' : 'navbar navbar-expand-lg navbar-dark indigo menu-content'}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"/></button>
    
    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
                    <ul className="navbar-nav mr-auto">
                        <li className={(sectionActive === 0) ? 'nav-item active' : 'nav-item'} onClick={this.selectSection.bind(this, 0)}>
                            <a className="nav-link">Inicio</a>
                        </li>
                        <li className={(sectionActive === 1) ? 'nav-item active' : 'nav-item'} onClick={this.selectSection.bind(this, 1)}>
                            <a className="nav-link">Consultoría</a>
                        </li>
                        <li className={(sectionActive === 2) ? 'nav-item dropdown show' : 'nav-item dropdown'} style={{ width: '116px'}} onClick={(dropdownShow) ? this.closeDropwdown : this.selectSection.bind(this, 2)}>
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Capacitación</a>
                            <div className={(dropdownShow) ? 'dropdown-menu dropdown-primary show' : 'dropdown-menu dropdown-primary'} aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className={(sectionActive === 3) ? 'nav-item active' : 'nav-item'} onClick={this.selectSection.bind(this, 3)}>
                            <a className="nav-link">Publicación</a>
                        </li>
    
                        <li className={(sectionActive === 4) ? 'nav-item active' : 'nav-item'} onClick={this.selectSection.bind(this, 4)}>
                            <a className="nav-link">Enlaces</a>
                        </li>
                        <li className={(sectionActive === 5) ? 'nav-item active' : 'nav-item'} onClick={this.selectSection.bind(this, 5)}>
                            <a className="nav-link">Contáctenos</a>
                        </li>
    
                    </ul>
                </div>
            </nav>
            {/* <Menu/> */}
            <div className="content-logo">
            <img src="images/logo.png" className="logo" alt=""/>
            </div>
                <div className="carousel-inner" role="listbox">
                    <div className={`carousel-item ${(sectionActive === 0) ? 'active' : ''}`}>
                        <Inicio/>
                    </div>
                    <div className={`carousel-item ${(sectionActive === 1) && 'active'}`}>
                        <Consultoria />
                    </div>
                    <div className={`carousel-item ${(sectionActive === 2) && 'active'}`}>
                    <Capacitacion />
                        
                    </div>
                    <div className={`carousel-item ${(sectionActive === 3) && 'active'}`}>
    
                    </div>
                    <div className={`carousel-item ${(sectionActive === 4) && 'active'}`}>
                        <img className="d-block w-100" src="images/menu5.jpg" alt="Third slide" />
                    </div>
                    <div className={`carousel-item ${(sectionActive === 5) && 'active'}`}>
                        <img className="d-block w-100" src="images/menu6.jpg" alt="Third slide" />
                    </div>
                    <div className={`carousel-item ${(sectionActive === 6) && 'active'}`}>
                        <img className="d-block w-100" src="images/menu7.jpg" alt="Third slide" />
                        <ContactForm />
                    </div>
                </div>
                {(sectionActive === 2) && <button type="button" className="btn btn-primary courses" onClick={this.openModal}>
                                        Ver cursos
                            </button>}
                        <div className={(open) ? 'modal fade show' : 'modal fade'} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header text-center">
                                        <h5 className="modal-title" id="exampleModalLabel">CURSOS PRESENCIALES + IN HOUSE</h5>
                                    </div>
                                    <div className="modal-body">
                                        <CourseContent />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={this.openModal} data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
    
        )
    }
}

export default HomeComponent;

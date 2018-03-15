import React, { Component } from 'react';
import './styles/home.css';
import './App.css';
import Menu from './components/shared/menu';
import Inicio from './components/home/inicio';
import Consultoria from './components/home/consultoria';
import Capacitacion from './components/home/capacitacion';
// import '../../../styles/capacitacion.css';
import CourseContent from './components/shared/courses-content';
import ContentModalInit from './components/shared/content-modal-inicio';
import ContentPublication from './components/shared/publicaciones-content';
import Publicacion from './components/home/publicacion';
import Contactenos from './components/home/contactenos';
import Galeria from './components/home/galery';
import Enlaces from './components/home/enlaces';
import Footer from './components/footer';

class App extends Component {
  state = {
    open: false,
    sectionActive: 0,
    dropdownShow: false,
    openPublicaciones: false,
    showInicio: false,
    showInicioDrop: false,
    initIndex: 0,
    auxModal: false,
    auxCapa: false,
    aux: false,
    selected: false,
    codContentCarousel: -1,
    publicacionIndex: false,
    publicacionType: 0,
    showTitle: false
}
componentDidMount() {
  this.showTitleWeb();
}
showTitleWeb = () => {
  const { showTitle } = this.state;
  setTimeout(() => {
    this.setState({ showTitle: true });
  }, 6000)
}
openModal = () => {
  const {open} = this.state;

  this.setState({ open: !open})
}
selectSection(index) {
    const {sectionActive, dropdownShow, showInicio, showInicioDrop, selected} = this.state;
    // if (index === 3) {
    //   this.openModalPublicaciones();
    // }
    // if(index >= 1) {
    //   this.reset();
    // }
    if (dropdownShow === true) {
        this.setState({dropdownShow: false})
    }
    if (index === 0) {
     return this.setState({ sectionActive: index, showInicioDrop: !showInicioDrop, selected: !selected})
    }
    if (index === 3) {
     return this.setState({sectionActive: index, dropdownShow: !dropdownShow, auxModal: false, initIndex: 0})
    }
    this.setState({ sectionActive: index, auxModal: false, initIndex: 0 })
    this.reset();
}
closeDropwdown = () => {
    const {dropdownShow} = this.state;

    this.setState({ dropdownShow: !dropdownShow})
}
closeModal = () => {
  const {showInicio} = this.state;

  this.setState({ showInicio: !showInicio, auxModal: false, initIndex: 0})
}
openModalPublicaciones = () => {
  const { openPublicaciones } = this.state;

  this.setState({ openPublicaciones: true })
}
openModalInicio = (index) => {
  const { showInicio, selected } = this.state;
  console.log(index)
  this.setState({ showInicio: !showInicio, initIndex: index, selected: !selected })
}
renderContentInit() {
  const { initIndex } = this.state;
console.log(initIndex)
  return (
    <ContentModalInit indexContent={initIndex}/>
  )
}
callFocus = (e) => {
  if (e) {
    this.setState({ aux: true, initIndex: 0, selected: true })
  }
}
hiddenMOdal = (e) => {
  console.log('entro')
  if (e) {
    this.setState({ auxModal: false })
  }
}
reset = () => {
  this.setState({selected: false});
}
closeModalPublicaciones = () => {
  const { openPublicaciones } = this.state;

  this.setState({ openPublicaciones: false })
}
renderModalPublicaciones() {
  return (
    <ContentPublication closeModalPublicacion={this.closeModalPublicaciones}/>
  )
}
render() {
    const { sectionActive, open, dropdownShow, initIndex, aux, selected, codContentCarousel, publicacionType, showTitle } = this.state;

    return (
        <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
          {/* <div className="preloader">
          <img src="images/Preloader.gif" alt="Preloader" />
        </div> */}
        {showTitle && <h3 className="eslogan container-fluid">Centro especializado en capacitación y análisis</h3>}
        <nav className="navbar navbar-expand-lg navbar-dark indigo menu-content">
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"/></button> */}


            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav mr-auto">
                    <li className={(sectionActive === 0) ? 'nav-item active inicio-item' : 'nav-item inicio-item'} onClick={this.selectSection.bind(this, 0)} onMouseOut={this.hiddenMOdal} onMouseOver={this.callFocus}>
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Inicio</a>
                        <div className={(selected && sectionActive === 0) ? 'dropdown-menu dropdown-primary show' : 'dropdown-menu dropdown-primary'} aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" onClick={this.openModalInicio.bind(this, 1)}>¿Quiénes somos?</a>
                            <a className="dropdown-item" onClick={this.openModalInicio.bind(this, 2)}>Misión y Visión</a>
                            <a className="dropdown-item" onClick={this.openModalInicio.bind(this, 3)}>Valores</a>
                            <a className="dropdown-item" onClick={this.openModalInicio.bind(this, 4)}>Talento humano</a>
                            <a className="dropdown-item" onClick={this.openModalInicio.bind(this, 5)}>Por qué elegir ZENTRO?</a>
                        </div>
                    </li>
                    <li className={(sectionActive === 1) ? 'nav-item active width-normal' : 'nav-item width-normal'} onClick={this.selectSection.bind(this, 1)}>
                        <a className="nav-link">Consultoría</a>
                    </li>
                    <li className={(sectionActive === 2) ? 'nav-item active width-normal' : 'nav-item width-normal'} onClick={this.selectSection.bind(this, 2)}>
                        <a className="nav-link">Capacitación</a>
                    </li>
                    {/* <li className={(sectionActive === 3) ? 'nav-item dropdown show' : 'nav-item dropdown'} onClick={(dropdownShow) ? this.closeDropwdown : this.selectSection.bind(this, 3)}>
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Publicación</a>
                        <div className={(dropdownShow) ? 'dropdown-menu dropdown-primary show' : 'dropdown-menu dropdown-primary'} aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" onClick={this.openModalPublicaciones.bind(this, 1)}>Artículos de investigación</a>
                            <a className="dropdown-item" onClick={this.openModalPublicaciones.bind(this, 2)}>Congresos</a>
                            <a className="dropdown-item" onClick={this.openModalPublicaciones.bind(this, 3)}>Presentaciones</a>
                        </div>
                    </li> */}
                    <li className={(sectionActive === 3) ? 'nav-item active width-normal' : 'nav-item width-normal'} onClick={this.selectSection.bind(this, 3)}>
                        <a className="nav-link">Publicación</a>
                    </li>
                    <li className={(sectionActive === 4) ? 'nav-item active enlaces-item' : 'nav-item enlaces-item'} onClick={this.selectSection.bind(this, 4)}>
                        <a className="nav-link">Enlaces</a>
                    </li>
                    
                    <li className={(sectionActive === 6) ? 'nav-item active galeria-item' : 'nav-item galeria-item'} onClick={this.selectSection.bind(this, 6)}>
                        <a className="nav-link">Galeria</a>
                    </li>
                    <li className={(sectionActive === 5) ? 'nav-item active width-normal' : 'nav-item width-normal'} onClick={this.selectSection.bind(this, 5)}>
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
                <div className={`carousel-item ${(sectionActive === 0) ? 'active' : ''}`} onMouseOver={this.reset}>
                    <Inicio/>
                </div>
                <div className={`carousel-item ${(sectionActive === 1) && 'active'}`}>
                    <Consultoria />
                </div>
                <div className={`carousel-item ${(sectionActive === 2) && 'active'}`} onMouseOver={this.reset}>
                <Capacitacion index={codContentCarousel} />
                    
                </div>
                <div className={`carousel-item ${(sectionActive === 3) && 'active'}`}>
                  <Publicacion/>
                </div>
                <div className={`carousel-item ${(sectionActive === 4) && 'active'}`}>
                    <Enlaces />
                </div>
                <div className={`carousel-item ${(sectionActive === 6) && 'active'}`}>
                    <Galeria />
                </div>
                <div className={`carousel-item ${(sectionActive === 5) && 'active'}`}>
                  <Contactenos/>
                </div>
            </div>
            
            {(sectionActive === 2) && <button type="button" className={open ? 'btn btn-primary courses left' : 'btn btn-primary courses'} onClick={this.openModal}>
                                    {open ? 'Cerrar' : 'Ver cursos'}
                        </button>}
                    {(sectionActive === 2) ? <div className={(open) ? 'modal fade show right' : 'modal fade right'} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
                        <div className="modal-dialog modal-full-height modal-bottom modal-notify modal-danger" role="document">
                            <div className="modal-content">
                                <div className="modal-header text-center">
                                    <h5 className="modal-title" id="exampleModalLabel">CURSOS</h5>
                                </div>
                                <div className="modal-body">
                                    <CourseContent />
                                </div>
                            </div>
                        </div>
                    </div> : null}
                        {(aux || initIndex > 0) ? <div className={(initIndex > 0) ? 'modal fade show inicio no-right' : 'modal fade no-show inicio no-right'} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-body modal-inicio">
                                {this.renderContentInit()}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={this.closeModal} data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>}
                    </div> : null}
                    {/* {this.state.openPublicaciones && this.renderModalPublicaciones()} */}
                    <Footer />
        </div>

    );
  }
}

export default App;

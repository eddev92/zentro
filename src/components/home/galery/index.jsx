import React, { Component } from 'react';
import '../../../styles/galeria.css';
import CarouselSimple from '../../shared/carousel/simple-carousel';

class Galeria extends Component{
    state = {
        galeryCourse: 0,
        typeGalery1: false,
        typeGalery2: false,
        openCollapse: false,
        reset: false
    }
    selectGaleryCourse = (index) => {
        const { openCollapse, galeryCourse, reset, typeGalery1, typeGalery2 } = this.state;
        if (typeGalery1){
            return this.setState({galeryCourse: index, openCollapse: true, typeGalery1: false})
        }
        if (typeGalery2){
            return this.setState({galeryCourse: index, openCollapse: true, typeGalery2: false})
        }
       
        this.setState({ galeryCourse: index, openCollapse: true });
        if (galeryCourse > 0) {
            this.setState({ reset: true });
        }
    }
    openCollapse = (index) => {
        const { openCollapse, galeryCourse, reset } = this.state;
        console.log(index)
        this.setState({ typeGalery1: !this.state.typeGalery1, openCollapse: true });
    }
    openCollapse2 = (index) => {
        const { openCollapse, galeryCourse, reset } = this.state;
        console.log(index)
        this.setState({ typeGalery2: !this.state.typeGalery2, openCollapse: true });
    }
    getImagesContent(galeryCourse) {
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
                    total: 3,
                    title: ''
                }
                break;
                case 1: images = {
                    img1: 'images/19.png',
                    img2: 'images/20.jpg',
                    img3: 'images/21.jpg',
                    total: 3,
                }
                break;
                case 2: images = {
                    img1: 'images/23.jpg',
                    img2: 'images/22.png',
                    img3: 'images/11.jpg',
                    total: 3,
                    title: ''
                }
                break;
                case 3: images = {
                    img1: 'images/27.jpg',
                    img2: 'images/26.jpg',
                    img3: 'images/25.png',
                    total: 3,
                    title: ''
                }
                break;
                case 4: images = {
                    img1: 'images/28A.jpg',
                    img2: 'images/28.jpg',
                    img3: 'images/30.jpg',
                    img4: 'images/29.jpg',
                    total: 4,
                    title: ''
                }
                break;
                case 5: images = {
                    img1: 'images/31.jpg',
                    img2: 'images/32.jpg',
                    img3: 'images/33.jpg',
                    total: 3,
                    title: ''
                }
                break;
                case 6: images = {
                    img1: 'images/34.png',
                    img2: 'images/35.jpg',
                    img3: 'images/36.jpg',
                    img4: 'images/37A.jpg',
                    total: 4,
                    title: ''
                }
                break;
                case 7: images = {
                    img1: 'images/43.png',
                    img2: 'images/44.png',
                    img3: 'images/45.png',
                    total: 3,
                    title: ''
                }
                break;
                case 8: images = {
                    img1: 'images/46.png',
                    img2: 'images/47.jpg',
                    img3: 'images/48.jpg',
                    total: 3,
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
                    total: 6,
                    title: ''
                }
                break;
                case 10: images = {
                    img1: 'images/53A.png',
                    img2: 'images/53.jpg',
                    img3: 'images/54.jpg',
                    img4: 'images/55.png',
                    total: 4,
                    title: ''
                }
                break;
                case 11: images = {
                    img1: 'images/56A.png',
                    img2: 'images/56.png',
                    img3: 'images/57.png',
                    img4: 'images/58A.png',
                    img5: 'images/58.jpg',
                    total: 5,
                    title: ''
                }
                break;
                case 12: images = {
                    img1: 'images/59A.png',
                    img2: 'images/59.png',
                    img3: 'images/60.jpg',
                    img4: 'images/61.jpg',
                    img5: 'images/62.png',
                    total: 5,
                    title: ''
                }
                break;
            }
            return images;
        }
    render() {
        const { galeryCourse, openCollapse, reset, typeGalery1, typeGalery2 } = this.state;
        const images = this.getImagesContent(galeryCourse);

        return (
            <div className="main-galeria">
            <div className="row">
            <div className="accordion col-md-6" id="accordionEx" role="tablist" aria-multiselectable="true">
                <div className="card">
                    <div className="card-header" role="tab" id="headingOne">
                        <a onClick={this.openCollapse.bind(this, 1)}>
                            <h5 className="mb-0">
                            ANÁLISIS QUÍMICO
                            </h5>
                        </a>
                    </div>
                    <div id="collapseOne" className={typeGalery1 ? 'show' : 'none'} role="tabpanel" aria-labelledby="headingOne" data-parent="#accordionEx" >
                        <div className="card-body">
                        <button className={galeryCourse === 1 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-md-12' : 'btn btn-outline-primary waves-effect col-md-12'} onClick={this.selectGaleryCourse.bind(this, 1)}>
                            Análisis volumétrico de minerales
                            </button>
                            <button className={galeryCourse === 2 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-md-12' : 'btn btn-outline-primary waves-effect col-md-12'} onClick={this.selectGaleryCourse.bind(this, 2)}>
                            Análisis volumétrico de aguas
                            </button>
                            <button className={galeryCourse === 3 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-md-12' : 'btn btn-outline-primary waves-effect col-md-12'} onClick={this.selectGaleryCourse.bind(this, 3)}>
                            Análisis instrumental por absorción atómica en minerales
                            </button>
                            <button className={galeryCourse === 4 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-md-12' : 'btn btn-outline-primary waves-effect col-md-12'} onClick={this.selectGaleryCourse.bind(this, 4)}>
                            Análisis instrumental por absorción atómica en alimentos y cosméticos
                            </button>
                            <button className={galeryCourse === 5 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-md-12' : 'btn btn-outline-primary waves-effect col-md-12'} onClick={this.selectGaleryCourse.bind(this, 5)}>
                            Análisis instrumental por absorción molecular UV/Vis en aguas
                            </button>
                            <button className={galeryCourse === 6 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-md-12' : 'btn btn-outline-primary waves-effect col-md-12'} onClick={this.selectGaleryCourse.bind(this, 6)}>
                            Análisis clásicos e instrumentales para alimentos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion col-md-6" id="accordionEx" role="tablist" aria-multiselectable="true">
                <div className="card">
                    <div className="card-header" role="tab" id="headingOne2">
                        <a onClick={this.openCollapse2.bind(this, 2)}>
                            <h5 className="mb-0">
                            QUÍMICA ANALÍTICA AMBIENTAL E INGENIERÍA AMBIENTAL
                            </h5>
                        </a>
                    </div>
                    <div id="collapseOne2" className={typeGalery2 ? 'show' : 'none'} role="tabpanel" aria-labelledby="headingOne2" data-parent="#accordionEx" >
                        <div className="card-body">
                            <button className={galeryCourse === 7 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-md-12' : 'btn btn-outline-primary waves-effect col-md-12'} onClick={this.selectGaleryCourse.bind(this, 7)}>
                            Control y tratamiento de aguas residuales
                            </button>
                            <button className={galeryCourse === 8 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-md-12' : 'btn btn-outline-primary waves-effect col-md-12'} onClick={this.selectGaleryCourse.bind(this, 8)}>
                            Control y tratamiento y de aguas residuales por lodos activos
                            </button>
                            <button className={galeryCourse === 9 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-md-12' : 'btn btn-outline-primary waves-effect col-md-12'} onClick={this.selectGaleryCourse.bind(this, 9)}>
                            Muestreo y caracterización de aguas
                            </button>
                            <button className={galeryCourse === 10 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-md-12' : 'btn btn-outline-primary waves-effect col-md-12'} onClick={this.selectGaleryCourse.bind(this, 10)}>
                            Muestreo y caracterización de suelos
                            </button>
                            <button className={galeryCourse === 11? 'btn aqua-gradient btn-rounded waves-effect waves-light col-md-12' : 'btn btn-outline-primary waves-effect col-md-12'} onClick={this.selectGaleryCourse.bind(this, 11)}>
                            Generación y predicción del drenaje ácido de mina
                            </button>
                            <button className={galeryCourse === 12 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-md-12' : 'btn btn-outline-primary waves-effect col-md-12'} onClick={this.selectGaleryCourse.bind(this, 12)}>
                            Caracterización y tratamiento del drenaje ácido de minaL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {galeryCourse === 0 ? <div class="select-consulty"><h1>SELECCIONE ALGÚN TIPO DE CURSO</h1></div> : <CarouselSimple galeryCourse={images}/>}
            </div>
        )
    }
}

export default Galeria;

import React, { Component } from 'react';
import '../../../styles/galeria.css';
import CarouselSimple from '../../shared/carousel/simple-carousel';

class Galeria extends Component{
    state = {
        galeryCourse: 0,
        openCollapse: false,
        reset: false
    }
    selectGaleryCourse = (index) => {
        const { openCollapse, galeryCourse, reset } = this.state;
        this.setState({ galeryCourse: index, openCollapse: true });
        if (galeryCourse > 0) {
            this.setState({ reset: true });
        }
    }
    openCollapse = (index) => {
        const { openCollapse, galeryCourse, reset } = this.state;
        this.setState({ openCollapse: true });
    }
    render() {
        const { galeryCourse, openCollapse, reset } = this.state;
        return (
            <div className="main-galeria">
            <div className="row">
            <div className="accordion col-md-6" id="accordionEx" role="tablist" aria-multiselectable="true">
                <div className="card">
                    <div className="card-header" role="tab" id="headingOne">
                        <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={this.openCollapse}>
                            <h5 className="mb-0">
                            ANÁLISIS QUÍMICO
                            </h5>
                        </a>
                    </div>
                    <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordionEx" >
                        <div className="card-body">
                        <button className={galeryCourse === 1 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-md-12' : 'btn btn-outline-primary waves-effect col-md-12'} onClick={this.selectGaleryCourse.bind(this, 1)}>
                            Análisis volumétricos de minerales
                            </button>
                            <button className={galeryCourse === 2 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-md-12' : 'btn btn-outline-primary waves-effect col-md-12'} onClick={this.selectGaleryCourse.bind(this, 2)}>
                            Análisis volumétricos de aguas
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
                        <a data-toggle="collapse" href="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                            <h5 className="mb-0">
                            QUÍMICA ANALÍTICA AMBIENTAL E INGENIERÍA AMBIENTAL
                            </h5>
                        </a>
                    </div>
                    <div id="collapseOne2" className="collapse" role="tabpanel" aria-labelledby="headingOne2" data-parent="#accordionEx" >
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
            {galeryCourse === 0 ? <div class="select-consulty"><h1>SELECCIONE ALGÚN TIPO DE CURSO</h1></div> : <CarouselSimple galeryCourse={galeryCourse} />}
            </div>
        )
    }
}

export default Galeria;

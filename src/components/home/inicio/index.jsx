import React, { Component } from 'react';
import '../../../styles/inicio.css';
import InitCourseContent from '../../shared/content-init-course';

class Inicio extends Component{
    state = {
        sectionActive: 0,
        courseActive: 1,
        showSubtitle: true,
        showDetail: false,
        courseIndex: 0
    }
    componentDidMount() {
        this.loadCoursesInit();
        this.hiddenSubmessage();
    }
    hiddenSubmessage = () => {
        const { showSubtitle } = this.state;
        setTimeout(() => {
            this.setState({  showSubtitle: !showSubtitle });
        }, 7000)
    }
    loadCoursesInit() {
        const { courseActive } = this.state;
        setTimeout(() => {
            if (courseActive === 5) {
                this.setState({ courseActive: 3 })
                return this.loadCoursesInit()
            }
            this.setState({ courseActive: courseActive+2 }, () => {
                this.loadCoursesInit();
            })
        }, 5500)
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
        switch (sectionActive) {
            case 0: img = 'https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg'; break;
            case 1: img = 'https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg'; break;
        }
        return <img src={img} className="img-responsive"/>
    }
    renderCourseDetail() {
        const { courseIndex } = this.state;

        return <InitCourseContent index={courseIndex} goBack={this.goBack}/>
    }
    goBack = () => {
        const { courseIndex } = this.state;

        this.setState({ courseIndex: 0 });

    }
    showDetailCourseInit = (index) => {
        const { courseIndex, showDetail } = this.state;

        this.setState({ courseIndex: index, showDetail: !showDetail });

    }
    renderCarousel() {
        const {sectionActive} = this.state;

        return (
            <div>
                    {this.renderImage()}
            </div>

        )
    }
    getImageBackground(index) {
        let img;
        switch (index) {
            case 1: img = 'actual.jpg';
            break;
            case 2: img = 'prox1.jpg';
            break;
            case 3: img = 'prox2.jpg';
            break;
        }
        return img;
    }
    render() {
        const { courseActive, showSubtitle, showDetail, courseIndex } = this.state;
        const img = (courseIndex != 0 ) ? this.getImageBackground(courseIndex) : 'Inicio.png'
        return (
            <div className="main-carousel">
                <div className={(courseIndex === 0) ? 'container-fluid' : 'container-fluid withCover'} style={{backgroundImage: `url(images/${img})`}}>
                    {showSubtitle && <div className="content-titleweb">
                    <h1 className="titleweb">Centro especializado en capacitación y análisis</h1>
                </div>}
                {courseIndex < 1 ?
                <div>
                    <div className={(courseActive === 3) ? 'row final' : 'row blue'} style={{height: '100%'}}>
                        <div className="content-row col-xs-12 col-md-10 backG">
                            <h3>Curso teórico - práctico de</h3>
                            <h1>ANÁLISIS VOLUMÉTRICO DE MINERALES</h1>
                            <button type="button" className="btn btn-primary courses-content" onClick={this.showDetailCourseInit.bind(this, 1)}>
                            Ver detalle
                            </button>
                        </div>
                    </div>
                    <div className={(courseActive === 5) ? 'row final' : 'row red'} style={{height: '100%'}}>
                        <div className="col-xs-12 col-md-5 courseFuture">
                        <div className="course-content-init">
                            <h2 className="text-black">Próximamente...</h2>
                            <h3>Curso teórico - práctico de</h3>
                            <h2 className="text-black">ANÁLISIS INSTRUMENTAL POR ABSORCIÓN MOLECULAR UV / VIS EN AGUAS</h2>
                            <button type="button" className="btn btn-primary courses-content" onClick={this.showDetailCourseInit.bind(this, 2)}>
                                Ver detalle
                                </button>
                        </div>
                        </div>
                        <div className="col-xs-12 col-md-5 courseFuture">
                        <div className="course-content-init">
                            <h2 className="text-black">Próximamente...</h2>
                            <h3>Curso teórico - práctico de</h3>
                            <h2 className="text-black">TRATAMIENTO DE AGUAS RESIDUALES INDUSTRIALES</h2>
                            <button type="button" className="btn btn-primary courses-content" onClick={this.showDetailCourseInit.bind(this, 3)}>
                                Ver detalle
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                : this.renderCourseDetail()}
                </div>
            </div>
        )
    }
}

export default Inicio;

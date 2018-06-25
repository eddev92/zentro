import React, { Component } from 'react';
import '../../../styles/inicio.css';
import InitCourseContent from '../../shared/content-init-course';
let time = 2500;

class Inicio extends Component{
    state = {
        sectionActive: 0,
        courseActive: 1,
        showSubtitle: true,
        showDetail: false,
        timeAux: false,
        courseIndex: 0,
        statement: false
    }
    componentDidMount() {
        this.hiddenSubmessage();
        this.changeStatement();
        
    }
    changeStatement = () => {
        const { statement } = this.state;

        setTimeout(() => {
            this.setState({ statement: !statement }, () => {
                this.changeStatement();
            })
        }, 1000)
    }
    hiddenSubmessage = () => {
        const { showSubtitle } = this.state;
        setTimeout(() => {
            this.setState({courseActive: 3})
            this.loadCoursesInit();
        }, 1800)
        setTimeout(() => {
            this.setState({  showSubtitle: !showSubtitle });
        }, 2400)
    }
    moreTime = () => {
        const { timeAux } = this.state;

        if (timeAux) {
            return null;
        }
        this.setState({ timeAux: true });
    }
    loadCoursesInit() {
        const { courseActive, showSubtitle } = this.state;
        let tm = this.state.timeAux ? 4000 : 2000;
        setTimeout(() => {
            if (courseActive === 5) {
                this.setState({ courseActive: 3 })
                // return this.loadCoursesInit()
            }
            // this.setState({ courseActive: courseActive+2 }, () => {
            //     this.loadCoursesInit();
            // })
        }, 4000)
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
        const { goToContactUs } = this.props;

        return <InitCourseContent index={courseIndex} goBack={this.goBack} goToContactUs={goToContactUs}/>
    }
    goBack = () => {
        const { courseIndex } = this.state;

        this.setState({ courseIndex: 0 });

    }
    showDetailCourseInit = (index) => {
        const { courseIndex, showDetail } = this.state;

        this.setState({ courseIndex: index, showDetail: !showDetail });

    }
    getImageBackground(index) {
        let img;
        switch (index) {
            case 1: img = 'actual.jpg';
            break;
            case 2: img = 'prox1.png';
            break;
            case 3: img = 'prox2.jpg';
            break;
            case 4: img = 'Inicio.jpg';
            break;
        }
        return img;
    }
    render() {
        const { courseActive, showSubtitle, showDetail, courseIndex, statement } = this.state;
        const img = (courseIndex != 0 ) ? this.getImageBackground(courseIndex) : 'Inicio.jpg'
        return (
            <div className="main-carousel">
                <div className="container-fluid">
                <img src={`images/${img}`} className="img-responsive img-contentInit" />
                    {showSubtitle && <div className="content-titleweb">
                    <h1 className="titleweb">Centro especializado en capacitación y análisis</h1>
                </div>}
                {courseIndex < 1 ?
                <div>
                    {/* <div className={(courseActive === 3) ? 'row final' : 'row blue'} style={{height: '100%'}}>
                        <div className="content-row col-xs-12 col-md-10 backG">
                            <h3>Curso teórico - práctico de</h3>
                            <h1>ANÁLISIS VOLUMÉTRICO DE MINERALES</h1>
                            <button type="button" className="btn btn-primary courses-content" onClick={this.showDetailCourseInit.bind(this, 1)}>
                            Ver detalle
                            </button>
                        </div>
                    </div> */}
                    <div className={(courseActive === 3) ? 'row final' : 'row blue'} style={{height: '100%'}}>
                        <div className="content-row col-xs-12 col-md-10 backG">
                            <h3 style={{fontWeight: 700}}>CURSOS TEÓRICO-PRÁCTICOS</h3>
                            <h1>2018</h1>
                            <button type="button" className={(statement) ? 'btn btn-primary courses-content vacantes active-statement' : 'btn btn-primary courses-content vacantes normal-statement'}>
                            Vacantes limitadas
                            </button>
                            <button type="button" className="btn btn-primary courses-content info-aqui" onClick={this.showDetailCourseInit.bind(this, 4)}>
                            Información aquí
                            </button>
                        </div>
                    </div>
                    {/* <div className={(courseActive === 5) ? 'row final' : 'row red'} style={{height: '100%'}}>
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
                    </div> */}
                </div>
                : this.renderCourseDetail()}
                </div>
            </div>
        )
    }
}

export default Inicio;

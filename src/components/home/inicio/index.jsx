import React, { Component } from 'react';
import '../../../styles/inicio.css';

class Inicio extends Component{
    state = {
        sectionActive: 0,
        courseActive: 1,
        showSubtitle: true
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
        console.log(sectionActive)
        switch (sectionActive) {
            case 0: img = 'https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg'; break;
            case 1: img = 'https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg'; break;
        }
        return <img src={img} className="img-responsive"/>
    }
    renderCarousel() {
        const {sectionActive} = this.state;

        return (
            <div>
                    {this.renderImage()}
            </div>

        )
    }
    render() {
        const { courseActive, showSubtitle } = this.state;
        console.log(courseActive)
        return (
            <div className="main-carousel">
                {/* {this.renderCarousel()} */}
                <div className="container-fluid" style={{backgroundImage: 'url(images/gestion3.jpg)'}}>
                {showSubtitle && <div className="content-titleweb">
                <h1 className="titleweb">Centro especializado en capacitación y análisis</h1>
                </div>}
                    <div className={(courseActive === 3) ? 'row final' : 'row blue'} style={{background: 'blue'}}>
                    <div className="content-row">
                        <h1>titulo curso</h1>
                        <p>parrafo contenido de curso 1 a dictarse proximamente</p>
                        <span>fechas a dictarse</span>
                        <span>horas</span>
                        <span>persona de contacto</span>
                    </div>
                    </div>
                    <div className={(courseActive === 5) ? 'row final' : 'row red'} style={{background: 'red'}}>
                    <div className="content-row">
                    <h1>titulo curso</h1>
                        <p>parrafo contenido de curso 2 a dictarse proximamente</p>
                        <span>fechas a dictarse</span>
                        <span>horas</span>
                        <span>persona de contacto</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inicio;

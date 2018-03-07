import React, { Component } from 'react';
import '../../../styles/capacitacion.css';
import CourseContent from '../../../components/shared/courses-content';

class Capacitacion extends Component{
    state = {
        open: false,
        index: 0
    }
    componentDidMount() {
        this.increaseIndex();
        
    }
    increaseIndex() {
        const {index} = this.state;
        setTimeout(() => {
                            
        if (index >= 2){
            this.setState({index: 0})
             return this.increaseIndex();
        }
            this.setState({index: index+1},() => {
                this.increaseIndex();
            })
        }, 5000)
    }
    openModal = () => {
        const {open} = this.state;

        this.setState({ open: !open})
    }
    loadImages(index) {
        let url;

        switch (index) {
            case 0: url = 'images/1.jpg'; break;
            case 1: url = 'images/2.jpg'; break;
            case 2: url = 'images/3.jpg'; break;
            case 4: url = 'images/4a.jpg'; break;
        }
        return url;
    }
    renderCarousel() {
        const {index} = this.state;
        const url = this.loadImages(index)
        return (
            <img src={url} alt="" className={(index > 0) ? 'active': 'inactive'}/>
        )
    }
    render() {
        const { open } = this.state;

        return (
            <div className="main-capacitacion row">
            {/* <img src="images/capacitacion.jpg" alt=""/> */}
            {this.renderCarousel()}
            <div className="info-capa col-xs-12 col-md-5">
                <h1>Los cursos de capacitación son desarrollados por expertos en cada tema, siendo el objetivo principal de <b>ZENTRO</b> que el 
                participante adquiera las competencias específicas que le permitan un mejor desarrollo en su área de trabajo.</h1>
            </div>

  
            </div>


        )
    }
}

export default Capacitacion;

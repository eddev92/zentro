import React, { Component } from 'react';
import '../../../styles/capacitacion.css';
import CourseContent from '../../../components/shared/courses-content';

class Capacitacion extends Component{
    state = {
        open: false
    }

    openModal = () => {
        const {open} = this.state;

        this.setState({ open: !open})
    }
    render() {
        const { open } = this.state;

        return (
            <div className="main-capacitacion row">
            <img src="images/capacitacion.jpg" alt=""/>
            <div className="info-capa col-5">
                <h1>Los cursos de capacitación son desarrollados por expertos en cada tema, siendo el objetivo principal de <b>ZENTRO</b> que el 
                participante adquiera las competencias específicas que le permitan un mejor desarrollo en su área de trabajo.</h1>
            </div>

  
            </div>


        )
    }
}

export default Capacitacion;

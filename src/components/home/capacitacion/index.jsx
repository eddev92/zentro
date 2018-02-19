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
            <div className="main-capacitacion">
                <h1>Los cursos de capacitación son desarrollados por expertos en cada tema, siendo el objetivo principal de ZENTRO que el participante adquiera las competencias específicas que le permitan un mejor desarrollo en su área de trabajo.</h1>
                {/* <button type="button" className="btn btn-primary courses" onClick={this.openModal}>
                                    Ver cursos
                        </button>
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
                        </div> */}
            </div>


        )
    }
}

export default Capacitacion;

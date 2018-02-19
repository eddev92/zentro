import React, { Component } from 'react';
import '../../../styles/courses-content.css';

class CourseContent extends React.Component {
    state = {
        typeCourse: 0,
        couseSelected: false,
        CoursePresential: 0
    }
    selectTypeCourse = (index) => {
        if(index === 2){
            this.setState({ CoursePresential: 0 });
        }
        this.setState({ typeCourse: index })
    }
    selectCourse = (index) => {
        this.setState({ CoursePresential: index })
    }
    render() {
        const { couseSelected, typeCourse, CoursePresential } = this.state;
    return (
        <div className="main-content row aux">
            <div className="main-button container text-center">
            <button class="btn aqua-gradient btn-rounded waves-effect waves-light" onClick={this.selectTypeCourse.bind(this, 1)}>Presenciales</button>
            <button class="btn aqua-gradient btn-rounded waves-effect waves-light" onClick={this.selectTypeCourse.bind(this, 2)}>In house</button>
            </div>
                <div className="row" style={{width: '100%', margin: 'auto'}}>
                {typeCourse === 0 && <h1>Seleccione algun tipo de curso</h1>}
                    {typeCourse === 1 ? <div className={typeCourse === 1 ? (CoursePresential > 0) ? 'col-6 indice' :'col-12 indice' : 'col-6 indice'}>
                        <h3 className="text-center">CURSOS PRESENCIALES</h3>
                        <p>Estos son cursos de capacitación donde se brinda al participante el fundamento teórico y la aplicación práctica mediante clases de laboratorio y desarrollo de talleres</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                        <button type="button" className="btn btn-outline-primary waves-effect" onClick={this.selectCourse.bind(this, 1)}>Análisis químico</button>
                                        </td>
                                        <td>
                                        <button type="button" className="btn btn-outline-primary waves-effect" onClick={this.selectCourse.bind(this, 2)}>Química Analítica Ambiental e Ingeniería Ambiental</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <button type="button" className="btn btn-outline-primary waves-effect" onClick={this.selectCourse.bind(this, 3)}>Estadística aplicada a la industria</button>
                                        </td>
                                        <td>
                                        <button type="button" className="btn btn-outline-primary waves-effect" onClick={this.selectCourse.bind(this, 4)}>Sistemas de gestión</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <button type="button" className="btn btn-outline-primary waves-effect" onClick={this.selectCourse.bind(this, 5)}>Microbiología</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>: null}
                    {typeCourse === 2 && <div>Curso inhouse</div>}
                    <div className={CoursePresential > 0 ? 'col-6 content final' : 'col-6 content inicial'}>
                         <h1>content</h1>
                    </div>
                </div>
        </div>
    );
    }
}

export default CourseContent;

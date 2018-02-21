import React, { Component } from 'react';
import '../../../styles/courses-content.css';
import COURSES from './../../../utils/data/courses';
import CourseItem from '../../shared/course-item';
import CourseInhouse from '../../shared/courses-content/course-inhouse';

class CourseContent extends React.Component {
    state = {
        typeCourse: 0,
        couseSelected: false,
        CoursePresential: 0,
        courseSelected: {}
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
    validateCourseSelected(course) {
        const element = COURSES.find(e => e.id === course);
        return element;
    }
    renderContentCourse() {
        const { CoursePresential } = this.state;
        console.log(CoursePresential)
        const courseSelected = this.validateCourseSelected(CoursePresential);
        console.log(courseSelected)
        return (
            <CourseItem item={courseSelected} />
        )
    }
    render() {
        const { couseSelected, typeCourse, CoursePresential } = this.state;
    return (
        <div className="main-content row aux">
            <div className="main-button container text-center">
            <button className={typeCourse === 1 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-5' : 'btn btn-outline-primary waves-effect col-5'} onClick={this.selectTypeCourse.bind(this, 1)}>Presenciales</button>
            <button className={typeCourse === 2 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-5' : 'btn btn-outline-primary waves-effect col-5'} onClick={this.selectTypeCourse.bind(this, 2)}>In house</button>
            </div>
            {typeCourse === 0 && <div className="select-course text-center"><h1>SELECCIONE UN TIPO DE CURSO</h1></div>}
                {typeCourse > 0 && <div className="row" style={{width: '100%', margin: 'auto'}}>
                    {typeCourse === 1 ? <div className={typeCourse === 1 ? (CoursePresential > 0) ? 'col-6 indice' :'col-12 indice' : 'col-6 indice'}>
                        <h3 className="text-center">CURSOS PRESENCIALES</h3>
                        <p>Estos son cursos de capacitación donde se brinda al participante el fundamento teórico y la aplicación práctica mediante clases de laboratorio y desarrollo de talleres</p>
                        <button type="button" className={CoursePresential === 1 ? 'btn btn-outline-primary waves-effect col-12 active' : 'btn btn-outline-primary waves-effect col-12'} onClick={this.selectCourse.bind(this, 1)}>Análisis químico</button>
                    
                        <button type="button" className={CoursePresential === 2 ? 'btn btn-outline-primary waves-effect col-12 active' : 'btn btn-outline-primary waves-effect col-12'} onClick={this.selectCourse.bind(this, 2)}>Química Analítica Ambiental e Ingeniería Ambiental</button>
                        
                        <button type="button" className={CoursePresential === 3 ? 'btn btn-outline-primary waves-effect col-12 active' : 'btn btn-outline-primary waves-effect col-12'} onClick={this.selectCourse.bind(this, 3)}>Estadística aplicada a la industria</button>
                        
                        <button type="button" className={CoursePresential === 4 ? 'btn btn-outline-primary waves-effect col-12 active' : 'btn btn-outline-primary waves-effect col-12'} onClick={this.selectCourse.bind(this, 4)}>Sistemas de gestión</button>
                        
                        <button type="button" className={CoursePresential === 5 ? 'btn btn-outline-primary waves-effect col-12 active' : 'btn btn-outline-primary waves-effect col-12'} onClick={this.selectCourse.bind(this, 5)}>Microbiología</button>
                        <div className="content-logo" style={{right: '37%'}}>
                            <img src="images/logo.png" className="logo" alt=""/>
                        </div>
                    </div>: null}
                    {typeCourse === 2 && <CourseInhouse />}
                    <div className={CoursePresential > 0 ? 'col-6 content final' : 'col-6 content inicial'} style={{backgroundImage: 'url(images/reader.jpg)'}}>
                         <h1>{this.renderContentCourse()}</h1>
                    </div>
                </div>}
        </div>
    );
    }
}

export default CourseContent;

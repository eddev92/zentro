import React, { Component } from 'react';
import '../../../styles/courses-content.css';
import COURSES from './../../../utils/data/courses';
import CourseItem from '../../shared/course-item';
import CourseInhouse from '../../shared/courses-content/course-inhouse';
import Carousel from '../../../components/shared/carousel';
import CarouselCapa from '../../../components/shared/carousel-capa';
import CoursesContentServices from '../../../services/courses-content';
import ContentCoursePresential from '../../shared/detail-course';
import CoursesAQ from '../../../utils/data/content-AQ-courses';
import CarouselSimple from '../../shared/carousel/simple-carousel';

class CourseContent extends Component {
    state = {
        typeCourse: 0,
        couseSelected: false,
        CoursePresential: 0,
        courseSelected: {},
        courseContentAQ: 0,
        courses: []
    }
    componentDidMount() {
        this.loadCourses();
    }
    loadCourses() {
        const courses = CoursesAQ;
        this.setState({ courses });
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
    selectCourseAQ = (index) => {
        this.setState({ courseContentAQ: index });
    }
    closeCoursesDetail = () => {
        this.setState({ courseContentAQ: 0 });
    }
    goBack = () => {
        this.setState({ CoursePresential: 0 });
    }
    renderContentCourse() {
        const { CoursePresential, courses } = this.state;
        const courseSelected = this.validateCourseSelected(CoursePresential);
        return (
            <CourseItem item={courseSelected} courses={courses} selectCourseAQ={this.selectCourseAQ} />
        )
    }
    renderContentCoursePresential() {
        const { courseContentAQ, courses } = this.state;

        return <ContentCoursePresential index={courseContentAQ} courses={courses} closeContent={this.closeCoursesDetail}/>
    }
    getImages = (active) => {
        let images;
        switch (active) {
            case 0: images = {
                img1: 'images/capacitacion.jpg',
                img2: 'images/contactos.jpg',
                img3: 'images/capacitacion.jpg',
                total: 3
            }
            break;
            case 1: images = {
                img1: 'images/8.png',
                img2: 'images/5.jpg',
                img3: 'images/6.jpg',
                img4: 'images/7.png',
                img5: 'images/3.jpg',
                img6: 'images/9.jpg',
                total: 6
            }
            break;
            case 2: images = {
                img1: 'images/10.jpg',
                img2: 'images/10A.jpg',
                img3: 'images/11.jpg',
                img4: 'images/12.jpg',
                total: 4
            }
        }
        return images;
    }
    render() {
        const { couseSelected, typeCourse, CoursePresential, courses, courseContentAQ } = this.state;
        const height = true;
        const buttonBack = true;
        if(courseContentAQ > 0) {
            return this.renderContentCoursePresential();
        } else {
            const images = this.getImages(typeCourse)
            return (
                <div className="main-content row aux">
                    {CoursePresential === 0 && <div className="main-button container text-center">
                    <button className={typeCourse === 1 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-5' : 'btn btn-outline-primary waves-effect col-5'} onClick={this.selectTypeCourse.bind(this, 1)}>Presenciales</button>
                    <button className={typeCourse === 2 ? 'btn aqua-gradient btn-rounded waves-effect waves-light col-5' : 'btn btn-outline-primary waves-effect col-5'} onClick={this.selectTypeCourse.bind(this, 2)}>In house</button>
                    </div>}
                    
                    {typeCourse === 0 && <div className="select-course text-center"><h1>SELECCIONE UN TIPO DE CURSO</h1></div>}
                        {typeCourse > 0 && <div className="row" style={{width: '100%', margin: 'auto'}}>
                            {typeCourse === 1 ? <div className={typeCourse === 1 ? (CoursePresential > 0) ? 'col-xs-12 col-md-3 indice' :'col-xs-12 col-md-12 indice' : 'col-xs-12 col-md-6 indice'}>
                            {CoursePresential > 0 && <button type="button" className="btn btn-primary atras" onClick={this.goBack}>
                            <img src="images/back.svg" alt=""/>
                                </button>}
                            <h3 className="text-center">CURSOS PRESENCIALES</h3>
                            <div className={(CoursePresential > 0) ? 'buttons-presentials' : 'buttons-presentials'}>
                                <button type="button" className={CoursePresential === 1 ? 'btn btn-outline-primary waves-effect col-xs-12 active' : 'btn btn-outline-primary waves-effect col-xs-12'} onClick={this.selectCourse.bind(this, 1)}>Análisis químico</button>
                            
                                <button type="button" className={CoursePresential === 2 ? 'btn btn-outline-primary waves-effect col-xs-12 active' : 'btn btn-outline-primary waves-effect col-xs-12'} onClick={this.selectCourse.bind(this, 2)}>Química Analítica Ambiental e Ingeniería Ambiental</button>
                                
                                <button type="button" className={CoursePresential === 3 ? 'btn btn-outline-primary waves-effect col-xs-12 active' : 'btn btn-outline-primary waves-effect col-xs-12'} onClick={this.selectCourse.bind(this, 3)}>Estadística aplicada a la industria</button>
                                
                                <button type="button" className={CoursePresential === 4 ? 'btn btn-outline-primary waves-effect col-xs-12 active' : 'btn btn-outline-primary waves-effect col-xs-12'} onClick={this.selectCourse.bind(this, 4)}>Sistemas de gestión</button>
                                
                                <button type="button" className={CoursePresential === 5 ? 'btn btn-outline-primary waves-effect col-xs-12 active' : 'btn btn-outline-primary waves-effect col-xs-12'} onClick={this.selectCourse.bind(this, 5)}>Microbiología</button>
                                
                                </div>
                                
                                {CoursePresential === 0 && <p>Estos son cursos de capacitación donde se brinda al participante el fundamento teórico y la aplicación práctica mediante clases de laboratorio y desarrollo de talleres</p>}
                                {!(CoursePresential > 0) && <CarouselSimple galeryCourse={images} height={height}/>}
                            
                            </div>: null}
                            {typeCourse === 2 && <CourseInhouse />}
                            <div className={CoursePresential > 0 ? 'col-xs-12 col-md-4 content final' : 'col-xs-12 col-md-4 content inicial'}>
                                 <h1>{this.renderContentCourse()}</h1>
                            </div>
                            {CoursePresential > 0 && <div className="col-md-5">
                                <CarouselCapa active={CoursePresential}/>
                            </div>}
                        </div>}
                </div>
            );
        }
    
    }
}

export default CourseContent;

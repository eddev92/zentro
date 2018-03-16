import React, { Component } from 'react';
import '../../../styles/detail-course.css';

const getContentCourse = ( index, courses ) => {
    let courseSelected;
    if (index && courses) {
        courseSelected = courses.find(course => course.idCourse === index);
    }
    return courseSelected;
}
const getLaboratories = (laboratories = []) => {
    let result;
    if (laboratories) {
        result = laboratories.map(lab => <li>{lab.text}</li>);
    }
    return result;
}
const ContentCoursePresential = ({ index, courses, closeContent }) => {
    console.log(index)
    console.log(courses)
    const course = getContentCourse(index, courses);
    console.log(course)
    const objetives = course && course.objetives.map(e => <li>{e.text}</li>)
    const temas = course && course.temary.map(e => (e.laboratories) ? <li>{e.text}<ul>{getLaboratories(e.laboratories)}</ul></li> : <li>{e.text}</li>)
    return (
        <div className="main-content-course">
        <h2>{course.title}</h2>
        <p className="col-md-10">
            {course.content}
        </p>
        {course.content2 && <p className="col-md-10">
            {course.content2}
        </p>}
        {course.content3 && <p className="col-md-10">
            {course.content3}
        </p>}
            <div className="row objetivos col-md-6">
                <h4>Objetivos:</h4>
                <ul>
                    {objetives}
                </ul>
            </div>
            <div className="row temario col-md-6">
                <h4>Temario:</h4>
                <ul>
                    {temas}
                </ul>
            </div>
            <div className="row footer-buttons-courses">
                <div className="col-md-5 btn-content-course">
                    <button type="button" className="btn btn-primary courses-content" onClick={closeContent}>
                    Atrás
                    </button>
                </div>
                <div className="col-md-5 btn-content-course">
                    <button type="button" className="btn btn-primary courses-content dowload">
                    <a href={course.url} download={course.url} style={{color: 'white'}}>Descargar</a>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default ContentCoursePresential;

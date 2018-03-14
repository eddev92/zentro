import React, { Component } from 'react';
import '../../../styles/detail-course.css';

const getContentCourse = ({ index }) => {

}
const ContentCoursePresential = ({ index, courses, open = false }) => {
    console.log(index)
    console.log(courses[0])
    return (
        <div className="main-content-course">
        <h2>title</h2>
        <p className="col-md-10">El análisis químico volumétrico es fundamental para el análisis de minerales, porque nos permite hallar de manera muy exacta la ley de los elementos en la muestra. Este curso proporciona los fundamentos teóricos y prácticos necesarios para desempeñarse con éxito en el análisis volumétrico de este tipo de muestras, dando especial énfasis a la parte experimental. A través de las prácticas de laboratorio seleccionadas, el participante consolida su formación teórica en volumetría, además de realizar el tratamiento de la muestra y la eliminación de interferentes. Finalmente, también se le proporcionará una herramienta (los diagramas de Pourbaix), que le ayudará en el análisis de los métodos volumétricos oficiales.</p>
            <div className="row objetivos col-md-6">
                <h4>Objetivos:</h4>
                <ul>
                    <li>Emplear correctamente las técnicas generales del análisis volumétrico</li>
                    <li>Emplear correctamente las técnicas generales del análisis volumétrico</li>
                    <li>Emplear correctamente las técnicas generales del análisis volumétrico</li>
                </ul>
            </div>
            <div className="row temario col-md-6">
                <h4>Temario:</h4>
                <ul>
                    <li>1. Introducción a los diagramas de Pourbaix</li>
                    <li>2. Introducción a los diagramas de Pourbaix</li>
                    <li>3. Laboratorio:
                        <ul>
                            <li>reparación y tratamiento preliminar de las muestras</li>
                            <li>reparación y tratamiento preliminar de las muestras</li>
                            <li>reparación y tratamiento preliminar de las muestras</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="row footer-buttons-courses">
                <div className="col-md-5 btn-content-course">
                    <button type="button" className="btn btn-primary courses-content" onClick={this.openModal}>
                    Atrás
                    </button>
                </div>
                <div className="col-md-5 btn-content-course">
                    <button type="button" className="btn btn-primary courses-content" onClick={this.openModal}>
                    Descargar
                    </button>
                </div>
            </div>
        </div>
        
    );
}

export default ContentCoursePresential;

import React, { Component } from 'react';
import '../../../styles/content-course-init.css';

const getContentCourseInit = ( index ) => {
    let content = {
        title: '',
        subtitle: '',
        dates: '',
        schedules: '',
        schedulesLab: '',
        place: '',
        certification: '',
        duration: '',
        sponsor: ''
    };

    switch (index) {
        case 1:
        content = {
            title: 'Curso Teórico-Práctico de',
            subtitle: 'ANÁLISIS VOLUMÉTRICO DE MINERALES',
            dates: '26 de Mayo al 3 de Junio del 2018',
            schedules: 'Horario teoría: Sábados de 8:00 - 14:00',
            schedulesLab: 'Horario de Laboratorio: Domingos de 8:00 a 14:00',
            duration: '24 horas cronológicas',
            place: 'IESTP SIMÓN BOLIVAR, Calle 3 Nº 100 - Ciudad del Pescador (Altura de la Cdra. 32 Av. Colonial) - Bellavista – Callao',
            sponsor: 'Certificación: A nombre de la Sociedad Química del Perú',
            url: 'http://zentro.pe/images/1 Anal Vol Miner.pdf',
            content: "El análisis químico volumétrico es fundamental para el análisis de minerales, porque nos permite hallar de manera muy exacta la ley de los elementos en la muestra. Este curso proporciona los fundamentos teorías y prácticos necesarios para desempeñarse con éxito en el análisis volumétrico de este tipo de muestras, dando especial énfasis a la parte experimental. A través de las prácticas de laboratorio seleccionadas, el participante consolida su formación teórica en volumetría, además de realizar el tratamiento de la muestra y la eliminación de interferentes. Finalmente, también se le proporcionará una herramienta (los diagramas de Pourbaix), que le ayudará en el análisis de los métodos volumétricos oficiales.",
            objetives: [
                {
                    text: "Emplear correctamente las técnicas generales del análisis volumétrico"
                },
                {
                    text: "Calcular las concentraciones de las disoluciones basándose en el análisis volumétrico"
                },
                {
                    text: "Saber elegir el método apropiado de análisis químico volumétrico cuando se le presente una muestra a analizar",
                },
                {
                    text: "Aplicar los diagramas de Pourbaix en el desarrollo de los métodos de análisis"
                }
            ],
            temary: [
                {
                    text: "1. Introducción a los diagramas de Pourbaix"
                },
                {
                    text: "2. Fundamentos del análisis volumétrico"
                },
                {
                    text: "3. Preparación y estandarización de soluciones"
                },
                {
                    text: "4. Cálculos en el análisis volumétrico"
                },
                {
                    text: "5. Disoluciones valoradas y patrones primarios"
                },
                {
                    text: "6. Fundamentos de los métodos volumétricos: neutralización, precipitación, formación de complejos y oxido reducción"
                },
                {
                    text: "7. Laboratorio:",
                    laboratories: [
                        {
                            text: "Preparación y tratamiento preliminar de las muestras"
                        },
                        {
                            text: "Volumetría de formación de complejos: Análisis de plomo y zinc por complexometría"
                        },
                        {
                            text: "Volumetría Redox: análisis de Fe por dicromatometría"
                        },
                        {
                            text: "Volumetría Redox: análisis de Cu por iodometría "
                        },
                        {
                            text: "Reporte de resultados"
                        }
                    ]
                }
            ]
        }
        break;
        case 2:
        content = {
            title: 'Curso Teórico-Práctico de',
            subtitle: 'ANÁLISIS INSTRUMENTAL POR ABSORCIÓN MOLECULAR UV / VIS EN AGUAS',
            dates: 'Del 23 de Junio al 1 de Julio del 2018',
            schedules: 'Horario teoría: Sábados de 8:00 a 14:00',
            schedulesLab: 'Horario laboratorio: Domingos de 8:00 a 14:00',
            duration: '24 horas cronológicas',
            sponsor: 'Certificación: A nombre de la Sociedad Química del Perú',
            place: '	IESTP SIMÓN BOLIVAR, Calle 3 Nº 100 - Ciudad del Pescador (Altura de la Cdra. 32 Av. Colonial) - Bellavista – Callao',
            url: 'http://zentro.pe/images/5 Anal Inst Abs Molec Uv vis Aguas.pdf',
            content: "El presente curso proporciona la teoría fundamental para comprender la espectrofotometría de absorción molecular. Da las herramientas necesarias para realizar una evaluación periódica, para chequear la exactitud de longitudes de onda y de absorbancias del instrumento. Así como también mediante la realización de prácticas dirigidas el participante desarrollará métodos oficiales (APHA) de metales y aniones para desempeñarse con éxito en un laboratorio de análisis de aguas. El curso también proporcionará a los participantes los elementos necesarios para el desarrollo y aplicación de la calidad analítica total en el reporte de resultados.",
            objetives: [
                {
                    text: "Establecer los fundamentos de la absorción molecular."
                },
                {
                    text: "Reconocer los principales componentes del espectrofotómetro uv/vis y realizar su operación analítica de rutina y verificar el desempeño del instrumento."
                },
                {
                    text: "Realizar análisis cuantitativo de metales y aniones, aplicando el control de calidad analítico adecuado para el reporte de los resultados."
                }
            ],
            temary: [
                {
                    text: "1. Fundamento de la espectroscopía de absorción uv/vis",
                    laboratories: [
                        {
                            text: "Espectro Electromagnético: interacción entre la radiación electromagnética y la materia. Espectroscopía de absorción, conceptos: absorbancia, transmitancia, absortividad molar. Ley de Lambert y Beer: desviaciones positivas y negativas. Relación entre la absorbancia y concentración. Preparación de muestras."
                        }
                    ]
                },
                {
                    text: "2. Instrumentación",
                    laboratories: [
                        {
                            text: "Componentes principales de un espectrofotómetro: fuente de radiación: lámpara de deuterio y de tungsteno, monocromador, detectores: fotomultiplicador. Celdas de muestra: cuarzo, vidrio, plástico. Espectrofotómetro de haz simple y haz doble: ventajas y desventajas."
                        }
                    ]
                },
                {
                    text: "3. Laboratorio:",
                    laboratories: [
                        {
                            text: "Manejo del espectrofotómetro."
                        },
                        {
                            text: "Características de los espectros en absorción molecular."
                        },
                        {
                            text: "Análisis de Fe."
                        },
                        {
                            text: "Espectroscopia de derivadas: análisis de fósforo."
                        },
                        {
                            text: "Método rápido de análisis de nitrato."
                        },
                        {
                            text: "Análisis de sulfato."
                        },
                        {
                            text: "Control de calidad analítico."
                        },
                        {
                            text: "Reporte de resultados."
                        }
                    ]
                }
            ]
        }
        break;
        case 3:
        content = {
            title: 'Curso Teórico-Práctico de',
            subtitle: 'TRATAMIENTO DE AGUAS RESIDUALES INDUSTRIALES',
            url: 'http://zentro.pe/images/1 Trat Aguas Resid.pdf',
            dates: 'Del 7 al 15 de Julio del 2018',
            schedules: 'Horario teoría: Sábados de 8:00 a 14:00',
            schedulesLab: 'Horario de laboratorio: Domingos de 8:00 a 14:00',
            duration: '24 horas cronológicas',
            place: 'IESTP SIMÓN BOLIVAR, Calle 3 Nº 100 - Ciudad del Pescador (Altura de la Cdra. 32 Av. Colonial) - Bellavista – Callao',
            sponsor: 'Certificación: A nombre de la Sociedad Química del Perú',
            content: "El vasto rubro industrial en el Perú, al cual se le suman mercados, supermercados, lavanderías, hoteles, centros de estética, restaurantes, panaderías, etc., producen una variable cantidad y calidad de aguas residuales que, por tener características diferentes, requieren de tratamientos específicos y, muchas veces, particulares a este tipo de industria y/o comercio.",
            content2: "Es por ello que en este curso el participante no solo aprenderá y profundizará en el amplio campo del tratamiento de aguas residuales, con énfasis en la parte industrial, sino que se le proporcionará una herramienta (los diagramas de Pourbaix) que le ayudará a evaluar los diversos procesos de tratamiento, así como también, monitorear y controlar (mediante los análisis químicos respectivos) el avance del mismo en la planta.",
            objetives: [
                {
                    text: "Evaluar y tratar un agua residual industrial, utilizando los diagramas de Pourbaix."
                },
                {
                    text: "Determinar los parámetros del proceso de tratamiento de un agua residual industrial, utilizando los diagramas de Pourbaix."
                },
                {
                    text: "Caracterizar un agua residual industrial, utilizando los diagramas de Pourbaix."
                }
            ],
            temary: [
                {
                    text: "1. Introducción a los diagramas de Pourbaix"
                },
                {
                    text: "2. Taller de diagramas de Pourbaix"
                },
                {
                    text: "3. Análisis químico de las aguas residuales"
                },
                {
                    text: "4. Introducción al tratamiento de aguas residuales"
                },
                {
                    text: "5. Tratamiento terciario de aguas residuales industriales"
                },
                {
                    text: "6. Laboratorio:",
                    laboratories: [
                        {
                            text: "Análisis de: demanda química de oxígeno, demanda bioquímica de oxígeno, cianuro libre, cianuro total, cianuro WAD"
                        },
                        {
                            text: "Tratamiento de coagulación – floculación : Uso del test de jarras"
                        },
                        {
                            text: "Tratamiento de agua residual cianurada"
                        }
                    ]
                }
            ]
        }
    }
    return content;
}
const getLaboratories = (laboratories = []) => {
    let result;
    if (laboratories) {
        result = laboratories.map(lab => <li>{lab.text}</li>);
    }
    return result;
}
const InitCourseContent = ({index, goBack}) => {
    const content = getContentCourseInit(index)
    const objetives = content && content.objetives.map(e => <li>{e.text}</li>)
    const temas = content && content.temary.map(e => (e.laboratories) ? <li>{e.text}<ul>{getLaboratories(e.laboratories)}</ul></li> : <li>{e.text}</li>)
    return (
<div className="main-content-course-init">
<div className="row">
        <div className="col-6">
            <button type="button" className="btn btn-primary" onClick={goBack} style={{marginTop: '-10px'}}>
            Atrás
            </button>
        </div>
        <div className="col-6 btn-downloadInit">
            
            <a href={content.url} download={content.url} className="btn btn-primary" style={{color: 'white'}}>Descargar</a>
            
        </div>
    </div>
    <h2 className="text-center">{content.title}</h2>
    <h1 className="text-center">{content.subtitle}</h1>
    <p className="col-md-10">
        {content.content}
    </p>
    {content.content2 && <p className="col-md-10">
        {content.content2}
    </p>}
    {content.content3 && <p className="col-md-10">
        {content.content3}
    </p>}
    <br/>
    <h4>Cronograma:</h4>
    <ul className="col-xs-11 col-md-6">
        <li>{content.dates}</li>
        <li>{content.schedules}</li>
        {content.schedulesLab && <li>{content.schedulesLab}</li>}
        <li>{content.duration}</li>
        <li>{content.sponsor}</li>
    </ul>
    <div className="row objetivos left-text block-div col-md-12">
                <h4>Objetivos:</h4>
                <ul>
                    {objetives}
                </ul>
            </div>
            <div className="row temario left-text block-div col-md-12">
                <h4>Temario:</h4>
                <ul>
                    {temas}
                </ul>
            </div>
</div>
    )
}
export default InitCourseContent;

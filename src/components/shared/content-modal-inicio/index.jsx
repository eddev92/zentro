import React, { Component } from 'react';
import '../../../styles/content-inicio.css';

class ContentModalInit extends React.Component {
    getContent() {
        let result;
        if (!this.props.indexContent) {
            return null;
        }
        switch (this.props.indexContent) {
            case 1: result = {
                img: 'images/somos.png',
                titleText1:'Quienes Somos',
                text1: 'Somos una organización que cuenta con profesionales altamente capacitados y con amplia experiencia en el sector educativo e industrial.',
                text2: 'Nos dedicamos a capacitar personal para el sector industrial, en las áreas de muestreo y análisis químicos ambientales (agua y suelo), tratamiento de aguas residuales (domésticas, comerciales e industriales), análisis químico de minerales (por la vía clásica e instrumental), corrosión (identificación, evaluación y análisis termodinámico) así como el desarrollo de aspectos básicos y entorno general de los sistemas de gestión (ISO 17025, 17020, 9000) en las modalidades presencial e “in house”. Brindamos también consultoría a empresas en el rubro de análisis químico (desarrollo de nuevos métodos de análisis, implementación de métodos analíticos oficiales (APHA, EPA, ISO, etc.), tratamiento de aguas residuales (provenientes de laboratorios de análisis o empresas industriales como: mineras, pesqueras, azucareras, de alimentos, etc.) y en el sector agrícola (muestreo de agua y suelo, calidad de agua de riego y análisis de suelos)',
                text3: 'ZENTRO cuenta con materiales de laboratorio y equipos específicos para cada área de servicio, como por ejemplo: microscopios, espectrofotómetros UV-vis y de absorción atómica, equipo para test de jarras, reactores para tratamiento de agua, analizadores de DBO y DQO entre otros.'
            };
            break;
            case 2: result = {
                img: 'images/mision.jpg',
                titleText1: 'Nuestra Misión',
                text1: 'Somos una organización generadora y difusora de conocimiento científico y tecnológico, comprometida con el desarrollo sostenible del país, así como con la protección del medio ambiente; nos dedicamos a capacitar personal para que adquieran habilidades y competencias específicas que les permitan ser un agente de cambio en su puesto de trabajo, así como también asesorar empresas para que puedan cumplir con sus metas de producción propuestas y mantengan altos sus estándares de calidad.',
                titleText2: 'Nuestra Visión',
                text2: 'Ser líderes nacionales e internacionales en capacitaciones y consultorías en el ámbito químico industrial y ambiental, así como también un referente académico en el área de investigación, innovación y desarrollo químico y ambiental.'
            };
            break;
            case 3: result = {
                img: 'images/valores.jpg',
                titleText1: 'Valores',
                text1Special: 'Todas los entrenamientos, consultorías e información técnica entregada por nuestra organización, están sujetos a estrictos valores como: calidad, honestidad y responsabilidad.'
            };
            break;
            case 4: result = {
                img: 'images/talento.jpg',
                titleText1: 'Talento Humano',
                members: [
                    {
                        name: 'Rocío Tafur Castillo',
                        profile: 'Microbióloga (UNT), con entrenamiento en Japón en el control microbiológico de alimentos,  16 años de experiencia en análisis microbiológicos de alimentos y agua de acuerdo a métodos normalizados en empresas acreditadas bajo la 17025 y certificadas bajo la ISO 9001, diplomado en sistema de gestión de la calidad ISO 9001, conocimientos de HACCP, certificación orgánica; especialización, consultoría e implementación en sistemas de gestión de calidad de laboratorios ISO 17025 y de organismos de inspección ISO 17020; así como la realización de auditorías internas de dichos sistemas de gestión. Expositor de temas de análisis y buenas prácticas en laboratorios microbiológicos, buenas prácticas de manufactura, 5S, aspectos generales de certificación orgánica, metrología básica, normas de sistemas de gestión, estructura documental, ciclo de mejora continua, entre otros.'
                    },
                    {
                        name: 'Hernán Zapata Gamarra',
                        profile: 'Ingeniero Químico (UNT), egresado de la maestría en química ambiental PUCP. Con más de 10 años de experiencia en Tecsup en el dictado de cursos de muestreo, caracterización y tratamiento de aguas residuales domésticas, comerciales e industriales, muestreo y caracterización de suelo y aire, así como también en análisis termodinámico de la corrosión. Conferencista en eventos nacionales e internacionales en temas ambientales y de corrosión, como en la Sociedad Nacional de Industrias, la Sociedad Química del Perú, Convención minera Perumin, Encuentro Científico Internacional, Congreso Latinoamericano de Corrosión, entre otros, así como autor de diversos artículos científicos como la revista I+i investigación aplicada e innovación (Tecsup), Industrial data (UNMSM), Memorias del congreso peruano de química, Encuentro Científico Internacional (Perú) y Congreso latinoamericano de corrosión (Colombia). Experto en la elaboración, interpretación y análisis de los diagramas de Pourbaix, con aplicaciones a soluciones en problemas industriales como: corrosión, química analítica cualitativa y cuantitativa, hidrometalurgia, muestreo, caracterización y tratamiento de aguas residuales y evaluación, caracterización y tratamiento del drenaje ácido de mina. Miembro del consejo directivo de la Sociedad Química del Perú, socio del Colegio de Ingenieros del Perú e inscrito en el Directorio Nacional de Investigadores e innovadores del Concytec'
                    },
                    {
                        name: 'Marixa Zegarra Pisconti',
                        profile: 'Mg. Química (UNMSM) con mención en química analítica, con 18 años de experiencia en TECSUP en el dictado de cursos de formación regular y capacitación continua (Análisis Químico de Minerales, Análisis de Minerales por Absorción Atómica, Análisis Químico Instrumental, Espectrofotometría UV/Vis, Análisis Químico por Volumetría, Fundamentos de Cromatografía de Gases, Buenas Prácticas de Laboratorio, Gestión de Seguridad en el Laboratorio Químico). Cursos dictados a industrias: Mineras: SIMSA, MILPO, SANTA CRUZ (Argentina), RIO TINTO, PLUS PETROL, SIDER PERU, BROCAL, GOLD FIELD, XSTRATA-TINTAYA, YANACOCHA, CAJAMARQUILLA, LA PAMPILLA. con amplia experiencia en laboratorios trasnacionales: en pruebas e implementación de métodos oficiales de análisis químicos y fisicoquímicos de aguas según APHA, EPA, bajo los requisitos de la norma ISO/IEC 17025 y realización de auditorías internas de la mencionada norma.'
                    },
                    {
                        name: 'Ernesto Zeña',
                        profile: 'Lic. Estadístico (UNMSM) y maestrando en Estadística (PUCP). Con 16 años de experiencia en Consultoría e investigación social y para la industria en proyectos de Cosude-CAPLAB, Oxoterra SAC, Walsh Perú S.A Ingenieros y Científicos Consultores, Proyectos Gestión y Recursos Sociales - Progreso Perú y la Universidad Nacional Mayor de San Marcos. Con 11 años de experiencia docente a nivel superior en TECSUP y la Universidad de Lima, en cursos de Estadística Básica para los Negocios, Estadística y Probabilidades I y II, Estadística Aplicada a Laboratorio y Análisis de Diseños Experimentales. Conferencista en Congresos Internacionales de Innovación Educativa en Latinoamérica y Europa. Autor de artículos científicos en la revista I+i Investigación Aplicada - Lima - Perú y del libro “EDUcación y TECnología. Propuestas desde la investigación y la innovación educativa” – Barcelona – España, Memorias del II y III Congreso Internacional de Innovación Educativa – Ciudad de México – México. Experto en procesamiento de datos usando diversas técnicas multivariantes,  Minería de datos y Modelos de Ecuaciones Estructurales. Experto en el uso de softwares estadísticos como R, IBM-SPSS, IBM-AMOS, IBM- CLEMENTINE, Weka, Minitab, entre otros.'
                    }
                ]
            }
            break;
            case 5: result = {
                img: 'images/porque.jpg',
                titleText1: 'Por qué elegir ZENTRO?',
                reasons: [
                    'Porque el participante adquirirá habilidades que le permitirá ser más competente en su entorno laboral y académico.',
                    'Porque las consultorías y capacitaciones son realizadas por profesionales con amplia experiencia en su campo.',
                    'Porque la capacitación teórica y práctica se realiza por profesionales con amplio dominio académico e industrial.',
                    'Porque contamos con horarios para personas que trabajan.',
                    'Porque el participante puede realizar la retroalimentación de un curso en tiempo real.',
                    'Porque contamos con suficientes equipos y materiales, para que las prácticas de laboratorio sean realizadas por grupos pequeños de participantes logrando así un entrenamiento prácticamente personalizado.',
                    'Todas las prácticas de laboratorio cuentan con un profesor principal y un asistente para lograr los objetivos de la práctica propuesta.'
                ],
                right: true
            }
            break;
        }
        return result;
    }
    render() {
        let result = this.getContent(this.props.indexContent || 0)
        if (this.props.indexContent === 0 || this.props.indexContent === null) {
            return null;
            ;
        }
        const members = result.members && result.members.map(e =>
            <p>
                <h4>{e.name}</h4>
                {e.profile}
            </p> 
        );
        const reasons = result.reasons && result.reasons.map(e =>
                <p>{e}</p>
        )
            return (
                <div className="main-content-incio inicio" style={{backgroundImage: `url(${result.img})`, backgroundPositionX: `${(result.right ? '-205px': '')}`}}>
                    <p>
                    {result.titleText1 && <h1>{result.titleText1}</h1>}
                    {result.text1}
                    </p>
                    {result.text1Special && <p>{result.text1Special}</p>}
                    {result.text2 && <p>{result.titleText2 && <h1>{result.titleText2}</h1>}{result.text2}</p>}
                    {result.text3 && <p>{result.text3}</p>}
                    {members}
                    {result.reasons && reasons}
                </div>
            )
        }
       
 
}

export default ContentModalInit;

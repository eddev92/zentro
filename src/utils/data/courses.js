const COURSES = [
    {
        id: 1,
        title: 'Análisis químico',
        text: 'Los métodos de análisis químicos ya sean clásicos o instrumentales se emplean para determinar la concentración de un analito en particular en matrices diversas.',
        itemCourses: [
            {
                id: 1,
                title: 'Análisis volumétrico de minerales.',
                url: 'http://zentro.pe/images/1 Anal Vol Miner.pdf'
            },
            {
                id: 2,
                title: 'Análisis volumétrico de aguas.',
                url: 'http://zentro.pe/images/2 Anal Vol Aguas.pdf'
            },
            {
                id: 3,
                title: 'Análisis instrumental por absorción atómica en minerales.',
                url: 'http://zentro.pe/images/3 Anal Inst AA Miner.pdf'
            },
            {
                id: 4,
                title: 'Análisis instrumental por absorción atómica en alimentos y cosméticos.',
                url: 'http://zentro.pe/images/4 Anal Inst AA Alim y Cosmet.pdf'
            },
            {
                id: 5,
                title: 'Análisis instrumental por absorción molecular UV/Vis en aguas.',
                url: 'http://zentro.pe/images/5 Anal Inst Abs Molec Uv vis Aguas.pdf'
            },
            // {
            //     id: 6,
            //     title: 'Análisis y caracterización de suelos.',
            //     url: 'http://zentro.pe/images/5_Analisis Inst UV Vis Aguas.pdf'
            // }
        ]
    },
    {
        id: 2,
        title: 'Química Analítica Ambiental e Ingeniería Ambiental',
        text: 'La química analítica ambiental, desarrolla los métodos y procedimientos para un correcto muestreo y un adecuado análisis en matrices ambientales, mientras la ingeniería ambiental utiliza los análisis anteriores para elegir el mejor método de tratamiento y/o remediación de la contaminación ambiental.',
        itemCourses: [
            {
                id: 7,
                title: 'Tratamiento de aguas residuales industriales.',
                url: 'http://zentro.pe/images/1 Trat Aguas Resid.pdf'
            },
            {
                id: 8,
                title: 'Tratamiento de aguas residuales por lodos activos.',
                url: 'http://zentro.pe/images/2 Trat Aguas Resid x Lod Activ.pdf'
            },
            {
                id: 9,
                title: 'Muestreo y caracterización de aguas.',
                url: 'http://zentro.pe/images/3 Muestreo y Caract Aguas.pdf'
            },
            {
                id: 10,
                title: 'Muestreo y caracterización de suelos.',
                url: 'http://zentro.pe/images/4 Muestreo y Caract Suelos.pdf'
            },
            {
                id: 11,
                title: 'Generación y predicción del drenaje ácido de mina.',
                url: 'http://zentro.pe/images/5 Generac y Pred Drenaj Acid Mina.pdf'
            },
            {
                id: 12,
                title: 'Caracterización y tratamiento del drenaje ácido de mina.',
                url: 'http://zentro.pe/images/6 Caract y Trat Drenaj Acid Mina.pdf'
            }
        ]
    },
    {
        id: 3,
        title: 'Estadística aplicada a la industria',
        text: 'Los métodos estadísticos y la quimiometría son de uso obligatorio en cualquier laboratorio de análisis químico ya que nos permitirá evaluar el diseño de un método de análisis, así como el resultado final del mismo.',
        itemCourses: [
            {
                id: 13,
                title: 'Elementos de estadística y quimiometría.'
            },
            {
                id: 14,
                title: 'Muestreo estadístico para laboratorios de análisis químico.'
            },
            {
                id: 15,
                title: 'Diseños experimentales en química analítica.'
            }
        ]
    },
    {
        id: 4,
        title: 'Sistemas de gestión',
        text: 'Conjunto de reglas y principios que permite optimizar recursos, reducir costes y mejorar la productividad en una empresa; a través de la aplicación de la mejora continua y el cumplimiento de requisitos. Dichos sistemas están asociados a normas y técnicas para evaluar el estado de cumplimiento de los mismos.',
        itemCourses: [
            {
                id: 16,
                title: 'Presentación de normas: 17020, 17025 y 9001',
                subtitle: 'Principios del sistema de gestión de calidad y ciclo de mejora continua.',
                schedules: '8 horas. Teoría y taller'
            },
            {
                id: 17,
                title: 'Introducción a los Sistemas de Gestión : ISO 9001, ISO 17020 e ISO 17025',
                url: 'http://zentro.pe/images/6 Caract y Trat Drenaj Acid Mina.pdf'
            }
        ]
    },
    {
        id: 5,
        title: 'Microbiología',
        text: 'La microbiología estudia microorganismos como las bacterias, virus y hongos con capacidad de provocar alteraciones en diferentes sustratos. Así mismo contempla la forma de realizar la determinación de los mismos a través de métodos estandarizados.',
        itemCourses: [
            {
                id: 18,
                title: 'Introducción a la microbiología. 6 horas.'
            },
            {
                id: 19,
                title: 'Bacteriología. 6 horas'
            },
            {
                id: 20,
                title: 'Métodos de análisis microbiológicos 12 h'
            },
            {
                id: 21,
                title: 'Técnicas Microbiológicas para el Análisis de Aguas'
            }
        ]
    }
]

export default COURSES;

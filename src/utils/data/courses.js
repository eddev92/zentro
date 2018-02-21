const COURSES = [
    {
        id: 1,
        title: 'Análisis químico',
        text: 'Los métodos de análisis químicos ya sean clásicos o instrumentales se emplean para determinar la concentración de un analito en particular en matrices diversas.',
        itemCourses: [
            {
                id: 1,
                title: 'Análisis volumétricos de minerales.'
            },
            {
                id: 2,
                title: 'Análisis volumétricos de aguas.'
            },
            {
                id: 3,
                title: 'Análisis instrumental por absorción atómica en minerales.'
            },
            {
                id: 4,
                title: 'Análisis instrumental por absorción atómica en alimentos y cosméticos. '
            },
            {
                id: 5,
                title: 'Análisis instrumental por absorción molecular UV/Vis en aguas.'
            },
            {
                id: 6,
                title: 'Análisis y caracterización de suelos.'
            },
            {
                id: 7,
                title: 'Análisis clásicos e instrumentales para alimentos.'
            }
        ]
    },
    {
        id: 2,
        title: 'Química Analítica Ambiental e Ingeniería Ambiental',
        text: 'La química analítica ambiental, desarrolla los métodos y procedimientos para un correcto muestreo y un adecuado análisis en matrices ambientales, mientras la ingeniería ambiental utiliza los análisis anteriores para elegir el mejor método de tratamiento y/o remediación de la contaminación ambiental.',
        itemCourses: [
            {
                id: 1,
                title: 'Control y tratamiento de aguas residuales'
            },
            {
                id: 2,
                title: 'Control y tratamiento y de aguas residuales por lodos activos.'
            },
            {
                id: 3,
                title: 'Muestreo y caracterización de aguas.'
            },
            {
                id: 4,
                title: 'Muestreo y caracterización de suelos.'
            },
            {
                id: 5,
                title: 'Generación y predicción del drenaje ácido de minas.'
            },
            {
                id: 6,
                title: 'Caracterización y tratamiento del drenaje ácido de mina.'
            }
        ]
    },
    {
        id: 3,
        title: 'Estadística aplicada a la industria',
        text: 'Los métodos estadísticos y la quimiometría son de uso obligatorio en cualquier laboratorio de análisis químico ya que nos permitirá evaluar el diseño de un método de análisis, así como el resultado final del mismo.',
        itemCourses: [
            {
                id: 1,
                title: 'Elementos de estadística y quimiometría.'
            },
            {
                id: 2,
                title: 'Muestreo estadístico para laboratorios de análisis químico.'
            },
            {
                id: 3,
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
                id: 1,
                title: 'Presentación de normas: 17020, 17025 y 9001',
                subtitle: 'Principios del sistema de gestión de calidad y ciclo de mejora continua.',
                schedules: '8 horas. Teoría y taller'
            },
            {
                id: 2,
                title: 'Análisis volumétricos de aguas.',
                subtitle: 'Sistemas de gestión ambiental, de seguridad, salud ocupacional y técnicas de auditoría de sistemas de gestión ',
                schedules: '18 horas. Teoría y taller'
            }
        ]
    },
    {
        id: 5,
        title: 'Microbiología',
        text: 'La microbiología estudia microorganismos como las bacterias, virus y hongos con capacidad de provocar alteraciones en diferentes sustratos. Así mismo contempla la forma de realizar la determinación de los mismos a través de métodos estandarizados.',
        itemCourses: [
            {
                id: 1,
                title: 'Introducción a la microbiología. 6 horas.'
            },
            {
                id: 2,
                title: 'Bacteriología. 6 horas'
            },
            {
                id: 3,
                title: 'Métodos de análisis microbiológicos 12 h'
            }
        ]
    }
]

export default COURSES;

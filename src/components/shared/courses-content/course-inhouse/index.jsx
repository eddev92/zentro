import React from 'react';
import '../../../../styles/course-inhouse.css';

const CourseInhouse = () => (
    <div class="card card-cascade wider reverse my-4 inhouse">
    <h3 className="text-center">CURSOS IN HOUSE</h3>
    <div class="view overlay hm-white-slight">
        <img src="images/inhouse.jpg" class="img-fluid"/>
        <a href="#!">
            <div class="mask"></div>
        </a>
    </div>
    <div class="card-body text-center">
        <h5 class="indigo-text"><strong>Estas son capacitaciones “a medida” y su empresa elige el contenido del curso, horario y lugar de capacitación.</strong></h5>
    </div>

</div>
);

export default CourseInhouse;

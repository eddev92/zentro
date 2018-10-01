import React, { Component } from 'react';
import '../../../styles/table.css';

class TableComponent extends Component {
    state = {
        courses: this.props.courses
    }
    renderRows(courses) {
        console.log('courses', courses)
    const coursesAux = courses.map((course) => {
       return <tr>
            <td>{course.curse}</td>
            {
                (course.date_inscrp2 && course.date_inscrp3 && course.date_inscrp4)
                ?
                <td><ul>
                    <li>{course.date_inscrp1}</li>
                    <li>{course.date_inscrp2}</li>
                    <li>{course.date_inscrp3}</li>
                    <li>{course.date_inscrp4}</li>
                    </ul></td>
                :
                <td>{course.date_inscrp1}</td>
            }
            {
                (course.date_start2 && course.date_start3 && course.date_start4)
                ?
                <td><ul>
                    <li>{course.date_start1}</li>
                    <li>{course.date_start2}</li>
                    <li>{course.date_start3}</li>
                    <li>{course.date_start4}</li>
                    </ul></td>
                :
                <td>{course.date_start1}</td>
                }
            <td>{course.hours}</td>
            <td><a href={course.urlPdf} target="_blank" style={{cursor: 'pointer'}}>Ver ficha de curso</a></td>
        </tr>
    })
    return coursesAux;
    }
    render() {
   return (
   <div>
    <div class="card-body">
        <table class="table table-hover table-responsive-md table-fixed">
            <thead>
                <tr>
                    <th>Cursos</th>
                    <th>Fecha límite de inscripción</th>
                    <th>Fecha de inicio</th>
                    <th>Duración</th>
                    <th>Información del curso</th>
                </tr>
            </thead>
            <tbody>
                {this.renderRows(this.state.courses)}
            </tbody>
        </table>
    </div>
</div>
)
    }
};

export default TableComponent;

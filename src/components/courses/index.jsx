import React, { Component } from 'react';
import '../../styles/courses.css';

class CoursesComponent extends Component{
    render() {
        return(
            <div className="row main-course">
                <div className="col-6 reader">
                    
                </div>
                <div className="col-6 index">
                <select class="mdb-select">
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                </div>
            </div>
        )
    }
}

export default CoursesComponent;

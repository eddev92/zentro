import React, { Component } from 'react';
import './../../../styles/course-item.css';

const CourseItem = ({ item = {}, courses = [], selectCourseAQ }) => {
    console.log(item)
    const subCourses = item.itemCourses && item.itemCourses.map(e => <li><a onClick={(e.id > 0 && e.id < 13 || e.id === 17 || e.id === 21) ? selectCourseAQ.bind(this, e.id) : null} className="link-pdf">{e.title}</a></li>)
       return ( <div className="main-item">
            <div className="title">
                <strong>{item.title}</strong>
            </div>
            <p>{item.text}</p>
            <div className="main-body">
                <ul>
                    {subCourses}
                </ul>
            </div>
        </div>
       )
}

export default CourseItem;

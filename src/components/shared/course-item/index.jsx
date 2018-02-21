import React, { Component } from 'react';
import './../../../styles/course-item.css';

const CourseItem = ({ item = {} }) => {
    const subCourses = item.itemCourses && item.itemCourses.map(e => <li>{e.title}</li>)
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

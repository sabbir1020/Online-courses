import React from 'react';
import './Course.css'

const Course = (props) => {
    // console.log(props.Course)
    const { name, img, Coursefree,Coursename}= props.Course
    return (
    <div>
          <div className="card">
             <img src={img} class="card-img-top" alt="..."/>
            <div className="card-body">
             
              <h5 className="card-title">Name:{name}</h5>
              <h5>CourseName:{Coursename}</h5>
              <h5>Coursefree:{Coursefree}</h5>
            
            </div>
          </div>
    </div>
    );
};

export default Course;
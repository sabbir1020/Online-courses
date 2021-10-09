import React from 'react';
import { useParams } from 'react-router';

const CoursesDetites = (props) => {
    const { name, img, Coursefree,Coursename}= props.Course
    return (
        <div>
           <div>
          <div className="card">
             <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
           
              <h5 className="card-title">Name:{name}</h5>
              <h5>CourseName:{Coursename}</h5>
              <h5>Coursefree:{Coursefree}</h5>
            </div>
          </div>
    </div>
        </div>
    );
};

export default CoursesDetites;
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import CoursesDetites from '../CoursesDetites/CoursesDetites';
import Home from '../Home/Home';

const Courses = () => {
   const [courses, setCourses] = useState([]);
  
   useEffect(()=>{
        fetch('fakedata')
        .then(res => res.json())
        .then(data=>setCourses(data))
   },[])
    return (
        <div>
          
           <div className="row row-cols-1 row-cols-md-3 g-4">
                
           
         
         {
             courses.map(Course=> <CoursesDetites 
                key ={Course.Id} Course ={Course}></CoursesDetites>)
         }
           </div>
        </div>
    );
};

export default Courses;

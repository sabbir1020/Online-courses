import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Course from '../Course/Course';

const Home = () => {
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
                courses.map(course =><Course
                key ={course.Id}
                Course={course}
                ></Course>)
            }
         
           </div>
        </div>
    );
};

export default Home;
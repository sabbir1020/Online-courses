import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="">

   <div>
 
   <ul className="nav justify-content-center p-3 mb-2  text-white header-container">
       <h2 className='coureseName'>Online courses</h2>
            <li className="nav-item">
            <Link className="nav-link active" to="/home">Home</Link>
            </li>
        <li className="nav-item">
            <Link className="nav-link" to="/courses">Courses</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
  
        </li>
  </ul>
   </div>
        </div>
    );
};

export default Header;
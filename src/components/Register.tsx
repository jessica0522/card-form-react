import React from "react";
import { Link } from 'react-router-dom';
import hamburger from '../assets/hamburger.svg';

const Register = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="hamburger-container">
          <Link to="/menu">
            <img className="hamburger" src={hamburger} alt="hamburger-icon" />
          </Link>         
        </div>
        <div className="title-container">
          <h3 className="tc">Register card form</h3>
        </div>
      </div>
    </div>
  )
}

export default Register
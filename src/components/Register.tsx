import React from "react";
import hamburger from '../assets/hamburger.svg';

const Register = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="hamburger-container">
          <img className="hamburger" src={hamburger} alt="hamburger-icon" />
        </div>
        <div className="title-container">
          <h3 className="tc">Register card form</h3>
        </div>
      </div>
    </div>
  )
}

export default Register
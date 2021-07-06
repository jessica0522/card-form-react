import React from "react";
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.svg';

const Menu = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="hamburger-container">
          <Link to="/">
            <img className="hamburger" src={arrow} alt="arrow-icon" />
          </Link>         
        </div>
        <div className="title-container">
          <h3 className="tc">Menu</h3>
        </div>
      </div>
    </div>
  )
}

export default Menu
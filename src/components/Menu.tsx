import React from "react";
import arrow from '../assets/arrow.svg';

const Menu = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="hamburger-container">
          <img className="hamburger" src={arrow} alt="arrow-icon" />
        </div>
        <div className="title-container">
          <h3 className="tc">Menu</h3>
        </div>
      </div>
    </div>
  )
}

export default Menu
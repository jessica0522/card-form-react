import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Welcome from './Welcome'
import hamburger from '../assets/hamburger.svg';

export interface State {
  user: {
    FirstName: string
    LastName: string
  }
}

const Register = () => {
  //init a user
  const [user] = useState<State['user']>({
    FirstName: 'Jessica',
    LastName: 'Liu'
  })

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

      <div className="content-container">
        <Welcome user={user} />
      </div>
    </div>
  )
}

export default Register
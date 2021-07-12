import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import Welcome from './Welcome'
import Form from './Form'
import hamburger from '../assets/hamburger.svg';

export interface State {
  user: {
    FirstName?: string
    LastName?: string
  }
}

const Register = () => {
  //set user state
  const [user, setUser] = useState<State['user']>({})

  useEffect(() => {
    let isMounted = true; 
    //add delay for display loading
    setTimeout(() => {
      //get user information
      axios.get('/data.json')
      .then(res => {
        if(isMounted)
        //set user
        setUser(res.data);
      });
    }, 500);

    // if unmounted use cleanup to toggle value
    return () => { isMounted = false };
  }, []);

  return (
    <div className="container">
      <div className="header">
        <div className="hamburger-container">
          <Link to="/menu">
            <img className="hamburger" src={hamburger} alt="hamburger-icon" />
          </Link>         
        </div>
        <div className="title-container">
          <h3 data-testid="pageTitle" className="tc">Register card form</h3>
        </div>
      </div>

      <div className="content-container">
        {
          user.FirstName ? <Welcome user={user} /> : <p className="welcome loading">Loading user...</p>         
        }     
        <Form />
      </div>
    </div>
  )
}

export default Register
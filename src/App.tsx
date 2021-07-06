import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Menu from './components/Menu'
import Register from './components/Register'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/menu" >
            <Menu />
          </Route>
          <Route path="/" >
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

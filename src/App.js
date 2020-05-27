import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
      </Router>
    </div>
  );
}

export default App;

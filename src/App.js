import React from 'react';
import {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Category from './Category';

class App extends Component {
  state = {  }
  render() { 
    return ( 
    <Home />
     );
  }
}

export default App;

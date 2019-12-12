import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    );
  }
}

export default App;

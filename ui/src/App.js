import React, { Component } from 'react';

import Floor from './Floor/Floor';
import Wall from './Wall/Wall';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Wall />
        <Floor />
      </div>
    );
  }
}

export default App;

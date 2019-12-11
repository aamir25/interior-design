import React, { Component } from 'react';

import './Floor.css';

import Couch from "../Couch/Couch";

class Floor extends Component {
  render() {
    return (
      <div className="floor">
        <div className="couch-container">
          <Couch />
        </div>
      </div>
    );
  }
}

export default Floor;

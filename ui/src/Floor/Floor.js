import React, { Component } from 'react';

import './Floor.css';

import Couch from "../Couch/Couch";
import ColorPicker from '../ColorPicker/ColorPicker';

class Floor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayColorPicker: false
    };

    this.toggleColorPicker = this.toggleColorPicker.bind(this);
    this.setBackGroundColor = this.setBackGroundColor.bind(this);
  }

  toggleColorPicker(e) {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    });
  }

  setBackGroundColor(color) {
    this.props.setColor('floorColor', color.hex);
  }

  render() {
    let floorStyle;

    floorStyle = {
      backgroundColor: this.props.floorColor
    };

    return (
      <div className="floor-wrapper">
        <div
          className="floor"
          style={floorStyle}
          onClick={this.toggleColorPicker}
        >

        </div>

        <div className="couch-container">
          <Couch
            couchColor={this.props.couchColor}
            setColor={this.props.setColor}
          />
        </div>

        <div className="color-picker">
          <ColorPicker
            color={this.props.floorColor}
            setBackGroundColor={(color) => this.setBackGroundColor(color)}
            shouldDisplay={this.state.displayColorPicker}
          />
        </div>
      </div>
    );
  }
}

export default Floor;

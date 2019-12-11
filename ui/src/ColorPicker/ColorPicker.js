import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

import './ColorPicker.css';

class ColorPicker extends Component {
  render() {
    let colorPickerClass;
    
    colorPickerClass = this.props.shouldDisplay ?
    'color-picker-wrapper display-block' :
    'color-picker-wrapper';

    return (
        <div className={colorPickerClass}>
            <SketchPicker 
                color={this.props.color}
                onChange={this.props.setBackGroundColor}
            />
        </div>
    );
  }
}

export default ColorPicker;

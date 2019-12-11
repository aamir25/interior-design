import React, { Component } from "react";

import Curtain from '../Curtain/Curtain';
import ColorPicker from '../ColorPicker/ColorPicker';

import './Wall.css';

class Wall extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          displayColorPicker: false,
          backgroundColor: '#f5f5dc'
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
        this.setState({
            backgroundColor: color.hex
        });
    }

    render() {
        let wallStyle;

        wallStyle = {
            backgroundColor: this.state.backgroundColor
        };

        return (
            <div className="wall-wrapper">
                <div 
                    className="wall" 
                    style={wallStyle} 
                    onClick={this.toggleColorPicker}
                >
                </div>
        
                <div 
                    style={wallStyle}
                    className="baseboard"
                ></div>
        
                <div className="curtain-container">
                    <Curtain />
                </div>

                <div className="color-picker-container">
                    <ColorPicker 
                        color={this.state.backgroundColor}
                        setBackGroundColor={(color) => this.setBackGroundColor(color)}
                        shouldDisplay={this.state.displayColorPicker}
                    />
                </div>
            </div>
        );
    }
}

export default Wall;
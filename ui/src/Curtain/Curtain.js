import React, { Component } from "react";

import ColorPicker from '../ColorPicker/ColorPicker';

import './Curtain.css';

class Curtain extends Component {
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
        this.props.setColor('curtainColor', color.hex);
    }

    render() {
        let curtainStyle;

        curtainStyle = {
            backgroundColor: this.props.curtainColor
        };

        return (
            <div className="curtain-wrapper">
                <div className="curtain-rod"></div>

                <div className="curtain">
                    <div style={curtainStyle} onClick={this.toggleColorPicker}></div>
                    <div style={curtainStyle} onClick={this.toggleColorPicker}></div>
                    <div style={curtainStyle} onClick={this.toggleColorPicker}></div>
                    <div style={curtainStyle} onClick={this.toggleColorPicker}></div>
                    <div style={curtainStyle} onClick={this.toggleColorPicker}></div>
                    <div style={curtainStyle} onClick={this.toggleColorPicker}></div>
                </div>

                <div className="color-picker-container">
                    <ColorPicker 
                        color={this.props.curtainColor}
                        setBackGroundColor={(color) => this.setBackGroundColor(color)}
                        shouldDisplay={this.state.displayColorPicker}
                    />
                </div>
            </div>
        );
    }
}

export default Curtain;
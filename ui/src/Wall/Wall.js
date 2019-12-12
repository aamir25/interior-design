import React, { Component } from "react";

import Curtain from '../Curtain/Curtain';
import ColorPicker from '../ColorPicker/ColorPicker';

import './Wall.css';

class Wall extends Component {
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
        this.props.setColor('wallColor', color.hex);
    }

    render() {
        let wallStyle;

        wallStyle = {
            backgroundColor: this.props.wallColor
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
                    <Curtain
                        curtainColor={this.props.curtainColor}
                        setColor={this.props.setColor}
                    />
                </div>

                <div className="color-picker-container">
                    <ColorPicker
                        color={this.props.wallColor}
                        setBackGroundColor={(color) => this.setBackGroundColor(color)}
                        shouldDisplay={this.state.displayColorPicker}
                    />
                </div>
            </div>
        );
    }
}

export default Wall;
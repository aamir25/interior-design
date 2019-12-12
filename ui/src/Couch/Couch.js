import React, { Component } from "react";

import ColorPicker from '../ColorPicker/ColorPicker';

import './Couch.css';

class Couch extends Component {
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
        this.props.setColor('couchColor', color.hex);
    }

    render() {
        let couchStyle;

        couchStyle = {
            backgroundColor: this.props.couchColor
        };

        return (
            <div className="couch-wrapper">
                <div
                    className="upper-part"
                    style={couchStyle}
                    onClick={this.toggleColorPicker}
                >
                    <div className="left-arm-rest" style={couchStyle}></div>
                    <div className="right-arm-rest" style={couchStyle}></div>
                </div>

                <div
                    className="down-part"
                    style={couchStyle}
                    onClick={this.toggleColorPicker}
                >
                </div>

                <div className="couch-color-picker">
                    <ColorPicker
                        color={this.props.couchColor}
                        setBackGroundColor={(color) => this.setBackGroundColor(color)}
                        shouldDisplay={this.state.displayColorPicker}
                    />
                </div>
            </div>
        );
    }
}

export default Couch;
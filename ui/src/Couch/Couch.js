import React, { Component } from "react";

import './Couch.css';

class Couch extends Component {
    render() {
        return (
            <div className="couch-wrapper">
                <div className="upper-part">
                    <div className="left-arm-rest"></div>
                    <div className="right-arm-rest"></div>
                </div>

                <div className="down-part"></div>
            </div>
        );
    }
}

export default Couch;
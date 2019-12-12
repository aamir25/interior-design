import React, { Component } from 'react';
import axios from 'axios';

import Floor from '../Floor/Floor';
import Wall from '../Wall/Wall';

import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: null,
            wallColor: '#f5f5dc',
            curtainColor: '#008000',
            floorColor: '#ff0000',
            couchColor: '#0000ff',
            responseMsg: ''
        };

        this.setColor = this.setColor.bind(this);
        this.saveSettings = this.saveSettings.bind(this);
        this.displayResponseMsg = this.displayResponseMsg.bind(this);
    }

    componentDidMount() {
        let userName = localStorage.getItem('userName');

        if (userName || this.state.userName) {
            axios.get(`http://localhost:4200/settings/${userName || this.state.userName}`)
                .then((res) => {
                    if (res.data.success) {
                        this.setState({
                            userName: userName,
                            wallColor: res.data.settings.wallColor,
                            curtainColor: res.data.settings.curtainColor,
                            floorColor: res.data.settings.floorColor,
                            couchColor: res.data.settings.couchColor
                        });
                    }
                })
                .catch((err) => {
                    this.props.history.push('/login');
                });
        }
    }

    saveSettings() {
        let payload = {
            settings: {
                wallColor: this.state.wallColor,
                curtainColor: this.state.curtainColor,
                floorColor: this.state.floorColor,
                couchColor: this.state.couchColor
            }
        };

        axios.post(`http://localhost:4200/settings/${this.state.userName}`, payload)
            .then((res) => {
                this.displayResponseMsg('Saved');
            })
            .catch((err) => {
                this.displayResponseMsg('Error');
            })
    }

    setColor(item, hex) {
        this.setState({
            [item]: hex
        });
    }

    displayResponseMsg(msg) {
        this.setState({
            responseMsg: msg
        });

        setTimeout(() => {
            this.setState({
                responseMsg: ''
            })
        }, 3000);
    }

    render() {
        return (
            <div className="main-wrapper">
                <div className="submit-button">
                    <button onClick={this.saveSettings}>Save</button>
                    <h3>{this.state.responseMsg}</h3>
                </div>

                <Wall
                    wallColor={this.state.wallColor}
                    curtainColor={this.state.curtainColor}
                    setColor={this.setColor}
                />
                <Floor
                    floorColor={this.state.floorColor}
                    couchColor={this.state.couchColor}
                    setColor={this.setColor}
                />
            </div>
        );
    }
}

export default Home;

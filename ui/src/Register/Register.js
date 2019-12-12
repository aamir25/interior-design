import React, { Component } from 'react';
import axios from 'axios';

import './Register.css';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            errorMsg: '',
            isError: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, key) {
        this.setState({ [key]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let payload = {
            userName: this.state.userName,
            password: this.state.password
        };

        axios.post('http://localhost:4200/users', payload)
            .then((res) => {
                if (res.data.success) {
                    localStorage.setItem('userName', this.state.userName);

                    this.setState({
                        userName: '',
                        password: '',
                        errorMsg: '',
                        isError: false
                    });

                    this.props.history.push('/login');
                }
            })
            .catch((err) => {
                this.setState({
                    isError: true,
                    errorMsg: JSON.stringify(err)
                });
            });
    }

    render() {
        let errorMsg = this.state.isError ? this.state.errorMsg : '';

        return (
            <div className="register-page">
                <h1>Register</h1>

                <div className="form">
                    <form className="register-form" onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.userName} onChange={(event) => this.handleChange(event, 'userName')} placeholder="Set Username" required />

                        <input type="password" value={this.state.password} onChange={(event) => this.handleChange(event, 'password')} placeholder="Set Password" required />

                        <button type="submit">Register</button>

                        <p className="message">
                            Already registered? <a href="/login">Click here Login</a>
                        </p>

                        <p className="error-msg">{errorMsg}</p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;

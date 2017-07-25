import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DbConnection from 'src/db-connection/DbConnection';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rememberMe: true,
    };
  }

  onLogin = (response) => {
    if (!response.success) {
      // TODO: Print some error message
    } else {
      this.props.onLogin();
    }
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleCheckboxChange = (event) => {
    this.setState({ rememberMe: event.target.checked ? true : undefined });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    DbConnection.login(this.state.email,
      this.state.password,
      this.state.rememberMe,
      this.onLogin);
  }

  render() {
    return (
      <div className="login">
        <div className="login-box">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="E-postadress" onChange={this.handleEmailChange} />
            <input type="password" placeholder="Lösenord" onChange={this.handlePasswordChange} />
            <label htmlFor="remember-me-checkbox">Kom ihåg mig:</label>
            <input
              id="remember-me-checkbox"
              type="checkbox"
              checked={this.state.rememberMe}
              onChange={this.handleCheckboxChange}
            />
            <input type="submit" value="Logga in" />
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;

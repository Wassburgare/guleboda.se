import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DbConnection from 'src/db-connection/DbConnection';

class Login extends Component {
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleCheckboxChange = (event) => {
    this.setState({ rememberMe: event.target.checked ? true : undefined });
  }

  onLogin = (response) => {
    if (!response.success) {
      // TODO: Print some error message
    } else {
      this.props.onLogin();
    }
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
      <div>
        <h1>Page under construction! 😘</h1>
        <form onSubmit={this.handleSubmit}>
          Email: <input type="text" onChange={this.handleEmailChange} /><br />
          Password: <input type="password" onChange={this.handlePasswordChange} /><br />
          Remember me: <input type="checkbox" onChange={this.handleCheckboxChange} /> <br />
          <input type="submit" value="Sign in" />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;

import React, { Component } from 'react';
// import 'MainApp/App.scss';
import DbConnection from 'src/db-connection/DbConnection';

import Login from 'AdminApp/login/Login';
import Book from 'AdminApp/book/Book';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: <div />,
    };
  }

  componentWillMount() {
    this.authenticate();
  }

  setBookView = () => {
    this.setState({ view: <Book /> });
  }

  setLoginView = () => {
    this.setState({ view: <Login onLogin={this.setBookView} /> });
  }

  authenticate = () => {
    DbConnection.auth((response) => {
      if (!response.success) {
        this.setLoginView();
      } else {
        this.setBookView();
      }
    });
  }

  render() {
    return (
      <div className="App">
        { this.state.view }
      </div>
    );
  }
}

export default App;

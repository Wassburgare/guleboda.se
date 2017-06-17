import React, { Component } from 'react';
import './App.css';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Find from './sections/find/Find';
import Todo from './sections/todo/Todo';
import Book from './sections/book/Book';
import DbConnection from './db-connection/DbConnection';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    DbConnection.getBookings((bookings) => {
      this.setState({ bookings });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <About />
          <Find />
          <Todo />
          <Book bookings={this.state.bookings} />
        </div>
      </div>
    );
  }
}

export default App;

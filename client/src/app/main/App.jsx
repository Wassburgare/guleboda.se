import React, { Component } from 'react';
import 'MainApp/App.scss';
import Header from 'MainApp/header/Header';
import About from 'MainApp/about/About';
import Find from 'MainApp/find/Find';
import Todo from 'MainApp/todo/Todo';
import Book from 'MainApp/book/Book';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <About />
          <Find />
          <Todo />
          <Book />
        </div>
      </div>
    );
  }
}

export default App;

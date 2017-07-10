import React, { Component } from 'react';
import './App.scss';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Find from './sections/find/Find';
import Todo from './sections/todo/Todo';
import Book from './sections/book/Book';

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

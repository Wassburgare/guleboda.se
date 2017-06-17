import React, { Component } from 'react';
import Lorem from 'react-lorem-component';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <h2>Vad finns att göra?</h2>
        <hr />
        <Lorem count="1" />

        <div className="todo-item-row">
          <div className="todo-item">
            <img src={'https://www.placecage.com/gif/450/280'} alt="" />
            <h3>Korrö Hantverksby</h3>
            <Lorem count="1" />
            <a href="http://www.korro.se/" target="_blank" rel="noopener noreferrer">www.korro.se</a>
          </div>
          <div className="todo-item">
            <img src={'https://www.placecage.com/gif/451/280'} alt="" />
            <h3>Glasriket Småland</h3>
            <Lorem count="1" />
            <a href="https://www.glasriket.se/sv/glaset/glasbruken" target="_blank" rel="noopener noreferrer">www.glasriket.se/sv/glaset/glasbruken</a>
          </div>
        </div>
        <div className="todo-item-row">
          <div className="todo-item">
            <img src={'https://www.placecage.com/gif/452/280'} alt="" />
            <h3>Kosta Outlet</h3>
            <Lorem count="1" />
            <a href="http://www.kostaoutlet.se/" target="_blank" rel="noopener noreferrer">www.kostaoutlet.se</a>
          </div>
          <div className="todo-item">
            <img src={'https://www.placecage.com/gif/453/280'} alt="" />
            <h3>Utvandrarleden</h3>
            <Lorem count="1" />
            <a href="http://www.utvandrarleden.se/" target="_blank" rel="noopener noreferrer">www.utvandrarleden.se</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;

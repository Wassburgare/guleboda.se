import React, { Component } from 'react';
import Lorem from 'react-lorem-component';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>Om stugan</h2>
        <hr />
        <div className="summary-box">
          <h2>Snabbfakta</h2>
          <Lorem paragraphLowerBound={1} paragraphUpperBound={1} sentenceUpperBound={7} />
        </div>
        <Lorem />
      </div>
    );
  }
}

export default About;

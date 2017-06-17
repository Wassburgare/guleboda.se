import React, { Component } from 'react';
import Lorem from 'react-lorem-component';
import { PhotoSwipeGallery } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';
import imageItems from './ImageLoader';
import './About.css';

const options = {
  shareEl: false,
  bgOpacity: 0.9,
  closeOnScroll: false,
  history: false,
};

const getThumbnailContent = item =>
  (
    <img src={item.thumbnail} alt="" />
  );

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
        <PhotoSwipeGallery
          items={imageItems}
          options={options}
          thumbnailContent={getThumbnailContent}
        />
      </div>
    );
  }
}

export default About;

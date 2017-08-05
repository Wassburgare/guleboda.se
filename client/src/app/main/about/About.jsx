import React, { Component } from 'react';
import { PhotoSwipeGallery } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';

import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import imageItems from './ImageLoader';
import './About.scss';

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
        <a name="about">
          <h2>
            <FormattedMessage
              id={'About.heading'}
              defaultMessage={'About the house'}
            />
          </h2>
        </a>
        <hr />
        <div className="summary-box">
          <h2>
            <FormattedMessage
              id={'About.quickFacts.header'}
              defaultMessage={'Quick facts'}
            />
          </h2>
          <p>
            <FormattedMessage
              id={'About.quickFacts.bullets'}
              defaultMessage={'6 beds, extra beds can be arranged\n\n2 bedrooms, living room + kitchen\n\n2 bathrooms (one with shower)\n\n90 sq m, living space\n\nWinterized\n\nNew kitchen + bathroom (2017)\n\nSummer price, 6000 SEK/week'}
            />
          </p>
        </div>
        <p>
          <FormattedMessage
            id={'About.desc'}
            defaultMessage={'A little text about the house.'}
          />
        </p>
        <PhotoSwipeGallery
          items={imageItems(this.props.intl)}
          options={options}
          thumbnailContent={getThumbnailContent}
        />
      </div>
    );
  }
}

About.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(About);

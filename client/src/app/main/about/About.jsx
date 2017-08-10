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
              defaultMessage={'About the cottage'}
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
            defaultMessage={'Rent a cottage in true Smolandian farm environment. This summerhouse/cottage has what many seek. The cottage is also winterized and can be rented all year round.\n\nCalm, close to the sea (50 meters) and with access to boat, canoe and bikes. Here you can fish, go for wonderful strolls in the forest and on dirt roads.\n\nHere is a rich fauna of flowers and plants, this is because the area has been cultivated in small-scale with grazing animals for generations. The area also has a very rich birdlife.\n\nFor those interested in trips there is a wide range of options. With its location right in the middle of Småland there is an array of trip destinations within a short drive.\n\nClose to Korrö recreation ground (4 km), opportunities for many fun activities open up, see link below. Please also see the other links available for tips on things to do.'}
            // Hyr en stuga i äkta småländsk lantgårdsmiljö. Detta sommarhus/stuga har det många söker. Stugan är även vinterbonad och går att hyra året om.\n\nLugnt, sjönära (50 meter) och har tillgång till båt, kanot och cyklar. Här kan du fiska, gå på härliga promenader i skog och grusvägar.\n\nHär finns en rik fauna av blommor och växter, detta genom att trakten brukats småskaligt i generationer med betande djur. Trakten har även ett mycket rikt fågelliv.\n\nFör den som är sugen på utflykter finns ett stort utbud. Med sitt läge mitt i glasbrukssmåland finns det även en rad med utflyktsmål inom en kort bilresa.\n\nMed bland annat närheten av Korrö-frilufsbas (4 km), öppnar sig möjligheter till många roliga aktiviteter, se länk nedan. Följ gärna även de övriga länkar som finns angivna för att få tips om vad som finns att göra.
          />
        </p>
        <p className="click-images">
          <FormattedMessage
            id={'About.images'}
            defaultMessage={'Click the pictures below to see our slideshow.'}
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

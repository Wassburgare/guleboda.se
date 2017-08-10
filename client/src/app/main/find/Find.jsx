import React, { Component } from 'react';
import Lorem from 'react-lorem-component';
import { FormattedMessage } from 'react-intl';

import './Find.scss';

class Find extends Component {
  render() {
    return (
      <div className="find">
        <a name="find">
          <h2>
            <FormattedMessage
              id={'Find.heading'}
              defaultMessage={'Get here'}
            />
          </h2>
        </a>
        <hr />
        <p>
          <FormattedMessage
            id={'Find.desc'}
            defaultMessage={'The cottage is located 5 kilometers south of Korrö, 40 kilometers south of Växjö and 60 kilometers from Karlskrona. The cottage has what many seek: seclusion, close to farms and no large roads nearby.'}
          />
        </p>
        <div className="eniro-map">
          <iframe
            title="eniro"
            src="https://kartor.eniro.se/m/qN25Z?embed=true&center=56.617709748963904,15.232543945312498&zoom=7&layer=map&scroll=false"
          />
        </div>
      </div>
    );
  }
}

export default Find;

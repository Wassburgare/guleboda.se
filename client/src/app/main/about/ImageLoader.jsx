import { defineMessages } from 'react-intl';

import cowsFull from './images/cows.jpg';
import pathFull from './images/path.jpg';
import pigsFull from './images/pigs.jpg';

import cowsThumb from './images/thumbnails/cows.jpg';
import pathThumb from './images/thumbnails/path.jpg';
import pigsThumb from './images/thumbnails/pigs.jpg';

const messages = defineMessages({
  cows: {
    id: 'About.image.cows',
    defaultMessage: 'Live in an idyllic farm environment.',
  },
  pigs: {
    id: 'About.image.pigs',
    defaultMessage: 'Happy pigs that are allowed to root outside the whole summer!',
  },
  path: {
    id: 'About.image.path',
    defaultMessage: 'Go explore along dirt roads and crooked paths. Listen to the nature without any noise.',
  },
});

const imageItems = intl => [
  {
    src: cowsFull,
    thumbnail: cowsThumb,
    msrc: cowsThumb,
    w: 1386,
    h: 780,
    title: intl.formatMessage(messages.cows),
  },
  {
    src: pigsFull,
    thumbnail: pigsThumb,
    msrc: pigsThumb,
    w: 880,
    h: 495,
    title: intl.formatMessage(messages.pigs),
  },
  {
    src: pathFull,
    thumbnail: pathThumb,
    msrc: pathThumb,
    w: 1049,
    h: 590,
    title: intl.formatMessage(messages.path),
  },
];

export default imageItems;

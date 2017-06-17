import cowsFull from './images/cows.jpg';
import pathFull from './images/path.jpg';
import pigsFull from './images/pigs.jpg';

import cowsThumb from './images/thumbnails/cows.jpg';
import pathThumb from './images/thumbnails/path.jpg';
import pigsThumb from './images/thumbnails/pigs.jpg';

const imageItems = [
  {
    src: cowsFull,
    thumbnail: cowsThumb,
    msrc: cowsThumb,
    w: 1386,
    h: 780,
    title: 'Bo i en idyllisk lantgårdsmiljö.',
  },
  {
    src: pigsFull,
    thumbnail: pigsThumb,
    msrc: pigsThumb,
    w: 880,
    h: 495,
    title: 'Glada grisar som får böka ute hela sommaren!',
  },
  {
    src: pathFull,
    thumbnail: pathThumb,
    msrc: pathThumb,
    w: 1049,
    h: 590,
    title: 'Gå på upptäcktsfärd längs grusvägar och krokiga stigar. Lyssna på naturens ljud utan buller och vägbrus.',
  },
];

export default imageItems;

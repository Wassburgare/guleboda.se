import { defineMessages } from 'react-intl';

import livingRoomFull from './images/living_room.jpg';
import kitchenFull from './images/kitchen.jpg';
import house1Full from './images/house_1.jpg';
import cowsFull from './images/cows.jpg';
import pathFull from './images/path.jpg';
import pigsFull from './images/pigs.jpg';
import lake1Full from './images/lake_1.jpg';
import lake2Full from './images/lake_2.jpg';
import lake3Full from './images/lake_3.jpg';
import meadowFull from './images/meadow.jpg';

import livingRoomThumb from './images/thumbnails/living_room.jpg';
import house1Thumb from './images/thumbnails/house_1.jpg';
import kitchenThumb from './images/thumbnails/kitchen.jpg';
import cowsThumb from './images/thumbnails/cows.jpg';
import pathThumb from './images/thumbnails/path.jpg';
import pigsThumb from './images/thumbnails/pigs.jpg';
import lake1Thumb from './images/thumbnails/lake_1.jpg';
import lake2Thumb from './images/thumbnails/lake_2.jpg';
import lake3Thumb from './images/thumbnails/lake_3.jpg';
import meadowThumb from './images/thumbnails/meadow.jpg';

const messages = defineMessages({
  livingRoom: {
    id: 'About.image.livingRoom',
    defaultMessage: 'Living room...',
  },
  kitchen: {
    id: 'About.image.kitchen',
    defaultMessage: 'This is how a kitchen may look.',
  },
  house1: {
    id: 'About.image.house1',
    defaultMessage: 'This is an image of a house.',
  },
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
  lake1: {
    id: 'About.image.lake1',
    defaultMessage: 'Viren.',
  },
  lake2: {
    id: 'About.image.lake2',
    defaultMessage: 'Another picture of Viren.',
  },
  lake3: {
    id: 'About.image.lake3',
    defaultMessage: 'And again.',
  },
  meadow: {
    id: 'About.image.meadow',
    defaultMessage: 'Green grass.',
  },
});

const imageItems = intl => [
  {
    src: livingRoomFull,
    thumbnail: livingRoomThumb,
    msrc: livingRoomFull,
    w: 1024,
    h: 576,
    title: intl.formatMessage(messages.livingRoom),
  },
  {
    src: kitchenFull,
    thumbnail: kitchenThumb,
    msrc: kitchenFull,
    w: 1024,
    h: 768,
    title: intl.formatMessage(messages.kitchen),
  },
  {
    src: house1Full,
    thumbnail: house1Thumb,
    msrc: house1Full,
    w: 1024,
    h: 576,
    title: intl.formatMessage(messages.house1),
  },
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
  {
    src: lake1Full,
    thumbnail: lake1Thumb,
    msrc: lake1Full,
    w: 1024,
    h: 768,
    title: intl.formatMessage(messages.lake1),
  },
  {
    src: lake2Full,
    thumbnail: lake2Thumb,
    msrc: lake2Full,
    w: 1024,
    h: 768,
    title: intl.formatMessage(messages.lake2),
  },
  {
    src: lake3Full,
    thumbnail: lake3Thumb,
    msrc: lake3Full,
    w: 1024,
    h: 768,
    title: intl.formatMessage(messages.lake3),
  },
  {
    src: meadowFull,
    thumbnail: meadowThumb,
    msrc: meadowFull,
    w: 1024,
    h: 768,
    title: intl.formatMessage(messages.meadow),
  },
];

export default imageItems;

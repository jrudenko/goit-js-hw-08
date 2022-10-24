import '../css/common.css';
import '../css/03-feedback.css';

import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

onPlay = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

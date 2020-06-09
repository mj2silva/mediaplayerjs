import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const playerConfig = {
  video: document.querySelector('#video'),
  playPauseButton: document.querySelector('#play-pause-button'),
  muteUnmuteButton: document.querySelector('#mute-unmute-button'),
  playIconClassName: 'fas fa-play',
  pauseIconClassName: 'fas fa-pause',
  unMuteIconClassName: 'fas fa-volume-down',
  muteIconClassName: 'fas fa-volume-mute',
  plugins: [
    new AutoPlay(),
    new AutoPause(),
  ],
};

const player = new MediaPlayer(playerConfig);
player.run();

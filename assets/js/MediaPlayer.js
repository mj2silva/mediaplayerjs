
class MediaPlayer {

  constructor(config) {
    this.media = config.video;
    this.plugins = config.plugins || [];
    this.playPauseButton = config.playPauseButton || '';
    this.muteUnmuteButton = config.muteUnmuteButton || '';
    this.playIconClassName = config.playIconClassName || '';
    this.pauseIconClassName = config.pauseIconClassName || '';
    this.unMuteIconClassName = config.unMuteIconClassName || '';
    this.muteIconClassName = config.muteIconClassName || '';

    this.muteUnmuteButton.onclick = () => {
      this.toggleUnmute();
    };

    this.playPauseButton.onclick = () => {
      this.togglePlay();
    };
    
    this.mute();
    this.pause();
    this._initPlugins();
  }

  _initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  pause() {
    this.playPauseButton.firstChild.className = this.playIconClassName;
    this.media.pause();
  }

  play() {
    this.playPauseButton.firstChild.className = this.pauseIconClassName;
    this.media.play();
  }

  mute() {
    this.muteUnmuteButton.firstChild.className = this.muteIconClassName;
    this.media.muted = true;
  }

  unMute() {
    this.muteUnmuteButton.firstChild.className = this.unMuteIconClassName;
    this.media.muted = false;
  }

  togglePlay() { (this.media.paused) ? this.play() : this.pause(); }
  toggleUnmute() { (this.media.muted) ? this.unMute() : this.mute(); }
};

export default MediaPlayer;

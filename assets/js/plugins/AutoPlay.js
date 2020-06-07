class AutoPlay {
  constructor() {
    this.run = (player) => {
      player.mute();
      player.play();
    };
  }
}

export default AutoPlay;

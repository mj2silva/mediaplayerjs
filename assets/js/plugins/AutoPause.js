class AutoPause {
  // threshold: ¿Qué por ciento del contenido del objeto debe insteresctarse
  // con el contenedor para que el observer se dispare?
  constructor() {
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
      threshold: 0.25,
    });
  }

  run(player) {
    this.player = player;
    this.observer.observe(this.player.media);
    document.addEventListener('visibilitychange', this.handleVisibliltyChange.bind(this));
  }

  handleIntersection(entries) {
    const entry = entries[0];
    return (entry.isIntersecting)
      ? this.player.play()
      : this.player.pause();
  }

  handleVisibliltyChange(event) {
    const isVisible = event.target.visibilityState === 'visible';
    return (isVisible)
      ? this.player.play()
      : this.player.pause();
  }
}

export default AutoPause;

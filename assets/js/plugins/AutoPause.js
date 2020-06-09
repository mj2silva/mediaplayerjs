class AutoPause {
  run(player) {
    this.player = player;
    // threshold: ¿Qué por ciento del contenido del objeto debe insteresctarse
    // con el contenedor para que el observer se dispare?
    const observer = new IntersectionObserver(this.handleIntersection.bind(this), {
      threshold: 0.25,
    });
    observer.observe(this.player.media);
  }

  handleIntersection(entries) {
    const entry = entries[0];
    if (this.player) {
      if (entry.isIntersecting) {
        this.player.play();
      } else {
        this.player.pause();
      }
    }
  }
}

export default AutoPause;

class ResultsView {
  constructor(model) {
    this.model = model;


    this.el = document.createElement('div');
    this.el.classList.add('grid-card');
    this.el.innerHTMl = `
     <div class="player__one"></div>
     <div class="score__one"></div>
     <div class="player__2"></div>
     <div class="score__2"></div>`;
  }

  render() {
    this.querySelector('.player__one').innerText = this.model.name;
    this.querySelector('.score__one').innerText = this.model.score;
    this.querySelector('.player__two').innerText = this.model.name;
    this.querySelector('.score__two').innerText = this.model.score;
  }
}

export default class ResultsList {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }
  render() {
    this.el.innerHTMl = '';
    this.model.forEach((result) => {
      const game = new ResultsView(result);
      game.render();
      this.el.appendChild(game.el);
    }
  });
}

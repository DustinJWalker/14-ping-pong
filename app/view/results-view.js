class ResultsView {
  constructor(model) {
    this.model = model;


    this.el = document.createElement('div');
    this.el.classList.add('grid-card');
    this.el.innerHTMl = `
    <div class="grid-card">
           <div class="grid-item">
           <h3 class="time"></h3>
             <div class="grid-item__top">
               <p class="player__1"></p>
               <p class="verses">vs</p>
               <p class="player__2"></p>
             </div>
             <div class="grid-item__bottom">
               <p class="score__1"></p>
               <p class="score__2"></p>
             </div>
           </div>
       </div>`;
  }

  render() {
    this.querySelector('.player__one').innerText = this.model.name;
    this.querySelector('.score__one').innerText = this.model.score;
    this.querySelector('.player__two').innerText = this.model.name;
    this.querySelector('.score__two').innerText = this.model.score;
  }
}

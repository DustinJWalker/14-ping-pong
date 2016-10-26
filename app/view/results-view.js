class ItemView {
  constructor(model) {
    this.model = model;


    this.el = document.createElement('div');
    this.el.classList.add('grid-card');
    this.el.innerHTML = `
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
    this.el.querySelector('.player__1').innerText = this.model.players[0].name;
    this.el.querySelector('.score__1').innerText = this.model.players[0].score;
    this.el.querySelector('.player__2').innerText = this.model.players[1].name;
    this.el.querySelector('.score__2').innerText = this.model.players[1].score;
  }
}


export default class CollectionView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    this.el.innerHTML = '';
   // Loop through our model
    this.model.games.forEach((result) => {
      const row = new ItemView(result);
      row.render();
     // create a new result row
      this.el.appendChild(row.el);
    });
  }
}

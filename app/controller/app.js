import ResultList from '../view/results-view';

export default class AppController {
  constructor(appElement) {
    this.appElement = appElement;
    this.model = [];
  }

  start() {
    this.resultView = new ResultList(this.appElement.querySelector('.grid'), this.model);


   // grab our data from the API
    fetch('https://hidden-thicket-10616.herokuapp.com/games')
     .then((res) => res.json())
     .then((data) => {
       this.model = data;
       this.resultView.model = this.model;

       this.resultView.render();
     });
  }
}

import ResultList from '../view/result-view';

export default class AppController {
  constructor(appElement) {
    this.appElement = appElement;
    this.model = [];
  }

  start() {
    this.resultView = new ResultListView(this.appElement.querySelector('.grid'), this.model);


   // grab our data from the API
    fetch('http://tiny-tn.herokuapp.com/collections/sw-bpm')
     .then((res) => res.json())
     .then((data) => {
       this.model = data;
       this.resultView.model = this.model;

       this.resultView.render();
     });

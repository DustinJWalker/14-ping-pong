import ResultList from '../view/results-view';
import FormView from '../view/form-view';

export default class AppController {
  constructor(appElement) {
    this.appElement = appElement;
    this.model = [];
  }

  start() {
    this.resultView = new ResultList(this.appElement.querySelector('.grid'), this.model);

        // grab our data from the API
    fetch('https://hidden-thicket-10616.herokuapp.com/games').then((res) => res.json()).then((data) => {
      this.model = data;
      this.resultView.model = this.model;

      this.resultView.render();
    });

    this.formView = new FormView(this.appElement.querySelector('.home-form'), this);
  }
  logScore(player, score) {
    fetch('https://hidden-thicket-10616.herokuapp.com/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ player, score }),
    }).then((res) => res.json()).then((data) => {
            // update the controller model to be the old results PLUS the newly submitted once
            // the "..." or spread operator pulls out all o fthe items from an array in order
      this.model = [
        data, ...this.model,
      ];
            // ..the resultView needs to be informed of the model change
      this.resultView.model = this.model;
            // now that the model has changed our resultView
      this.resultView.render();
    });
  }
}

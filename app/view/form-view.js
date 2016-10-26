export default class FormView {
  constructor(el, controller) {
    this.el = el;
    this.controller = controller;
// with a fat arrow this stays the same
    const onsubmit = (ev) => {
      // stops the form from actually submiting
      ev.preventDefault();

      const player = this.el.querySelector('.home-form__player').value;
      const score = this.el.querySelector('.home-form__score').value;
      // delegate the logging of the heartrate to the controller
      this.controller.logHeartRate(user, bpm);
      // empty the input  so the user can type in again
      this.el.querySelector('.home-form__player').value = '';
      this.el.querySelector('.home-form__score').value = '';

      this.el.addEventListener('submit', onsubmit);
    };
  }
}

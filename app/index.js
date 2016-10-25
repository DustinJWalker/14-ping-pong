import 'whatwg-fetch';
import AppController from './controller/app';

const el = document.querySelector('.app');
const application = new AppController(el);

application.start();

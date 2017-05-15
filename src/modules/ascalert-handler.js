import template from './template';
import {show} from './dom-handler';

const alertClass = '.ascalert';

const ascalertInit = () => {
  let wrapper = document.createElement('div');
  wrapper.innerHTML = template;
  while(wrapper.firstChild){
      document.body.appendChild(wrapper.firstChild);
  }
};

const getAlert = () => {
  let $alert = document.querySelector(alertClass);
  if(!$alert){
      ascalertInit();
      $alert = getAlert();
  }
  return $alert;
};

const throwAlert = () => {
    let $alert = getAlert();
    show($alert);
};

export {
    ascalertInit,
    getAlert,
    throwAlert
}
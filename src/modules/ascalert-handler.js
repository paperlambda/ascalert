import template from './template';
import {show, fadeIn, addClass, slideUp} from './dom-handler';

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
  // Add css class
  addClass($alert, 'slide-up-ready');
  $alert.style.bottom = "-80px";
  return $alert;
};

const throwAlert = () => {
    let $alert = getAlert();
    slideUp($alert);
    // fadeIn($alert,10);
    show($alert);
};

export {
    ascalertInit,
    getAlert,
    throwAlert
}
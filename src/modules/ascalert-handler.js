import template from './template';
import {show, fadeOut, removeClass, slideUp} from './dom-handler';

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
    $alert.style.bottom = "-80px";
    slideUp($alert);
    show($alert);
};

const handleClose = () => {
    ascalert.close();
};

const closeAlert = () => {
    let $alert = getAlert();
    removeClass($alert, 'slide-up');
    fadeOut($alert,16)
};

export {
    ascalertInit,
    getAlert,
    throwAlert,
    closeAlert,
    handleClose
}
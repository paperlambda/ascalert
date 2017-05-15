import { getAlert } from './ascalert-handler';

const setParams = (params) => {
  let $alert = getAlert();

  let $text = $alert.querySelector('p');
  $text.innerHTML = params.text;

};

export {setParams};
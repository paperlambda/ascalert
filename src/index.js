import {throwAlert, getAlert, handleClose} from './modules/ascalert-handler';
import {removeClass, fadeOut} from './modules/dom-handler';
import {setParams} from './modules/set-params';
import './styles.scss';

let ascalert = (args, timer = undefined) => {
    let params = {};
    if (args === undefined) {
        console.error('Ascalert needs at least 1 arguments');
        return false
    };
    switch (typeof args){
        case 'string':
        params.text = args;
        break;
        default:
        console.error('Unexpected type of arguments. Expected "string", got ' + typeof args);
        return false;
    }

    setParams(params);
    throwAlert();

    if(timer !== undefined){
        switch (typeof timer){
            case 'number':
                setTimeout(function () {
                    ascalert.close();
                }, timer);
                break;
            default:
                console.error('Unexpected type of arguments. Expected "number", got ' + typeof timer);
                return false;
        }
    }

    // Attach close function to element
    let $alert = getAlert();
    let closeBtn = $alert.querySelectorAll('.ascalert-close');
    closeBtn[0]['onclick'] = (e) => handleClose(e,$alert);
};

ascalert.close = () => {
    let $alert = getAlert();
    removeClass($alert, 'slide-up');
    fadeOut($alert,16)
};

if(typeof window !== 'undefined'){
    window.ascalert = ascalert;
} else {
    console.log('Ascalert is not compatible');
}
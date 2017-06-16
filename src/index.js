import {throwAlert} from './modules/ascalert-handler';
import {setParams} from './modules/set-params';
import './styles.scss';

let ascalert = (args, timer = null) => {
    let message = args;
    let params = {};
    if (message === undefined) {
        console.error('Ascalert needs at least 1 arguments');
        return false
    };
    switch (typeof message){
        case 'string':
        params.text = message;
        break;
        default:
        console.error('Unexpected type of arguments. Expected "string", got ' + typeof message);
        return false;
    }
    setParams(params);
    throwAlert();
};

if(typeof window !== 'undefined'){
    window.ascalert = ascalert;
} else {
    console.log('Ascalert is not compatible');
}
import {throwAlert, closeAlert} from './modules/ascalert-handler';
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
                    closeAlert()
                }, timer);
                break;
            default:
                console.error('Unexpected type of arguments. Expected "number", got ' + typeof timer);
                return false;
        }
    }

};

if(typeof window !== 'undefined'){
    window.ascalert = ascalert;
} else {
    console.log('Ascalert is not compatible');
}
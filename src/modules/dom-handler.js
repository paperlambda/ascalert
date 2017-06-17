const show = (elem) => {
    elem.style.opacity = '';
    elem.style.display = 'block';
};

const hasClass = (elem, className) => {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

const addClass = (elem, className) => {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
};

const removeClass = (elem, className) => {
    let newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
};

const fadeOut = (elem, interval) => {
    interval = interval || 16;
    elem.style.opacity = 1;
    if(+elem.style.opacity > 0){
        let tick = () => {
            elem.style.opacity = +elem.style.opacity - 0.05;
            if(+elem.style.opacity > 0){
                setTimeout(tick, interval);
            } else {
                elem.style.display = 'none';
                removeElement(elem);
            }
        };
        tick();
    }
};

const slideUp = (elem) => {
    if(parseInt(elem.style.bottom) != 0){
        let sec = +new Date();
        let tick = () => {
            elem.style.bottom = (parseInt(elem.style.bottom) + 0.005) + 'px';
            sec = +new Date();
            if(parseInt(elem.style.bottom) != 0) {
                setTimeout(tick, 0.001);
            }
        };
        tick();
    }
};

const removeElement = (elem) => {
    //  Remove element
    elem.parentNode.removeChild(elem);
    return false;
};



export {
    show,
    addClass,
    hasClass,
    removeClass,
    slideUp,
    fadeOut,
    removeElement
}
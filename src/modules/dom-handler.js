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

const fadeIn = (elem, interval) => {
    if(+elem.style.opacity < 1){
        interval = interval || 16;
        elem.style.opacity = 0;
        elem.style.display = 'block';
        let tick = () => {
            elem.style.opacity = +elem.style.opacity + 0.05;
            if(+elem.style.opacity < 1){
                setTimeout(tick, interval);
            }
        };
        tick();
    }
};

const slideUp = (elem) => {
    if(parseInt(elem.style.bottom) != 0){
        let sec = +new Date();
        let tick = () => {
            elem.style.bottom = (parseInt(elem.style.bottom) + (new Date() - sec) / 100) + 'px';
            sec = +new Date();

            if(parseInt(elem.style.bottom) != 0){
                setTimeout(tick, 0.0001);
            }
        };
        tick();
    }
    // addClass(elem, 'slide-up');
};


export {
    show,
    fadeIn,
    addClass,
    hasClass,
    removeClass,
    slideUp
}
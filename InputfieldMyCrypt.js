$(function () {

    'use strict';

    var milliseconds,
        Inputfield,
        timer;

    function deFocus() {
        clearTimeout(timer);
        timer = setTimeout(function () {
            Inputfield.type = 'password';
            Inputfield.blur();
        }, milliseconds);
    }

    $('.FieldtypeMyCrypt').on('focus focusout keydown click select', function (event) {

        if (event.type === 'focus') {
            Inputfield = event.target || event.srcElement;
            milliseconds = 2500;
        } else if (event.type === 'focusout') {
            milliseconds = 0;
        } else if (event.type === 'keydown') {
            milliseconds = 1500;
        } else if (event.type === 'click') {
            milliseconds = 2500;
        } else if (event.type === 'select') {
            milliseconds = 86400000;
        }

        Inputfield.type = 'text';
        deFocus();
    });

});

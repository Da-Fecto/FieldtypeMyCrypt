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

    // Initialize
    $('.FieldtypeMyCrypt').on('focus', function (event) {
        Inputfield = event.target || event.srcElement;
        milliseconds = 2500;
        Inputfield.type = 'text';
        deFocus();
    });

    // Manual blur
    $('.FieldtypeMyCrypt').on('focusout', function () {
        milliseconds = 0;
        deFocus();
    });

    // User interaction with the Inputfield
    $('.FieldtypeMyCrypt').on('keydown click', function (event) {
        Inputfield.type = 'text';
        milliseconds = (event.type === 'click') ? 2500 : 1500;
        deFocus();
    });

    // Text selected, don't blur the input (for a day).
    $('.FieldtypeMyCrypt').on('select', function () {
        milliseconds = 86400000;
        deFocus();
    });
});

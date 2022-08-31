'use strict';

$(function(){
    var nav = $('#side-nav');
    var back = $('#wrapper');
    var gray = $('#grayOut');
    var button = $('#menu-button');
    $('.js-menu').on('click',function(){
        if(nav.hasClass('is-open')){
            nav.removeClass('is-open');
            back.removeClass('is-open');
            gray.removeClass('is-open');
            button.removeClass('is-open');
        }
        else{
            nav.addClass('is-open');
            back.addClass('is-open');
            gray.addClass('is-open');
            button.addClass('is-open');
        }
    });
});
'use strict';

$(window).on('load',function(){
    if(window.matchMedia('(min-width:680px)').matches){
        $('.js-main-visual').children('img').attr('src','/image/main-visual.jpg' );
    }else{
        $('js-main-visual').children('img').attr('src','/image/main-visual-SP.jpg');
    };
});

$(window).resize(function(){
    if(window.matchMedia('(min-width:680px)').matches){
        $('.js-main-visual').children('img').attr('src','/image/main-visual.jpg' );
    }else{
        $('.js-main-visual').children('img').attr('src','/image/main-visual-SP.jpg');
    };
});
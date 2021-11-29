$(function(){
    $('.hamburger').on('click',function(){
        $('.hamburger, .our-menu').toggleClass('show');
    });

    $('.ham').on('click',function(){
        $('.none-pate').toggleClass('none');
    });
});
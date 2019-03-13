$(function() {

  $('#my-menu').mmenu({
    extensions: ['widescreen', 'theme-black', 'effect-menu-slide','pagedim-black','position-right' ],
    navbar: {
      //title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
    },
  });

  var API = $('#my-menu').data('mmenu');
 var $icon = $('.hamburger');

 API.bind( "open:finish", function(){
    setTimeout(function()
    {
      $icon.addClass( "is-active" );
    }, 10);
 });
 API.bind( "close:finish", function()
 {
    setTimeout(function()
    {
      $icon.removeClass( "is-active" );
    }, 10);
 });﻿


});

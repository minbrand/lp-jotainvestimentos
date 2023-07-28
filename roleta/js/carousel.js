var screenWidth = $(window).width();
var animateLeft = '-260px';
if(screenWidth >= 1280) animateLeft = '-360px';

setInterval(function(){
  var carousel = $('.carousel .card:first-of-type');
  $('.carousel .card').each(function(){
    $(this).animate({left: animateLeft}, '400', function(){
      $(carousel).insertAfter('.carousel .card:last-of-type');
      $(this).css('left', '0');
    });
  });
}, 6000);

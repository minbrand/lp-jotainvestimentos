var screenWidth = $(window).width();
var fullScreenHeight = $('.fullScreen.videoContainer').height();
console.log(fullScreenHeight);
var distance = 80;
if(screenWidth > 768) distance = 360;
console.log(distance);
var videoContainerTop = $('.fullScreen.videoContainer').offset().top + distance;

$(window).scroll(function(){
  if($(this).scrollTop() >= videoContainerTop){
    $('.fullScreen.videoContainer').addClass('fixedVideo');
    $('.spaceContainer').show().css("height", fullScreenHeight + "px");
  }else if($(this).scrollTop() <= videoContainerTop){
    $('.videoContainer.fixedVideo').removeClass('fixedVideo');
    $('.spaceContainer').hide();
  }
});

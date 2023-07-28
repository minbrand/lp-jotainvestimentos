$(document).ready(function(){
  var distance = $(window).height() * 3/4;
  var count = false;
  var initial = 0;

  function counting(){
    $('.count').each(function(){
      var $this = $(this);
      var targetValue = parseInt($this.html());
      setInterval(function(){
        if(initial < targetValue){
          initial++;
          $this.html(initial);
        }
      }, 5);
    });
  }

  function animateScroll(){
    $('.numbers').each(function(){
      var itemTop = $(this).offset().top - distance;

      if($(document).scrollTop() >= itemTop){
        $(this).addClass('anime').find('.set').addClass('count');

        if(count == false){
          counting();
          count = true;
        }
      }
    });
  }

  animateScroll();

  $(window).scroll(function(){
    animateScroll();
  });

});

  var i=0;
  function slide(){
    $('.event_slide').animate({left:-300}, function(){
      $('.event_slide li:first').appendTo('.event_slide');
      $('.event_slide').css({left:0});
    })
  }
  setInterval(slide, 2500)


  var i=0;
  function slide(){
    i++;
    if (i > $('.slide li:last').index()){
      i=0;
    }
     $('.slide li').eq(i).fadeIn('slow');
     $('.slide li').eq(i-1).fadeOut();
  }
  setInterval(slide,4000); 

var i=0;
    function slide(){
      i++;
      if (i > $('.slide_text li:last').index()){
        i=0;
      }
       $('.slide_text li').eq(i).fadeIn('slow');
       $('.slide_text li').eq(i-1).fadeOut();
    }
    setInterval(slide,4000); 
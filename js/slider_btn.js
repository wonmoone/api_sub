  var i=0;
  $(document).ready(function(){
			$(".slider_btn").eq(0).click(function(){
        i--;
        $(".slide li").eq(i).fadeIn();
        $(".slide li").eq(i+1).fadeOut();
      });

			$(".slider_btn").eq(1).click(function(){
        i++;
        $(".slide li").eq(i).fadeIn();
        $(".slide li").eq(i-1).fadeOut();
      });

  });

    
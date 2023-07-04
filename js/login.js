  $(function(){
     $('#option').mouseover(function(){
      $(this).children('.login_sub').stop().slideDown(),
      $('#option > a').find('img').css('transform' ,'rotate(180deg)');
     }).mouseout(function(){
      $('.login_sub').stop().slideUp(),
      $('#option > a').find('img').css('transform' ,'rotate(0)');
     });
  });

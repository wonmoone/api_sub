
  $(function(){
     $('#brand_more').mouseover(function(){
      $("#brand_morelist_box").stop().slideDown(),
      $('#brand_more').find('img').css('transform' ,'rotate(180deg)');
     }).mouseout(function(){
      $('#brand_morelist_box').stop().slideUp(),
      $('#brand_more').find('img').css('transform' ,'rotate(0)');
     })
  });

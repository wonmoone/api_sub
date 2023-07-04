  $(function(){
     $('#category_wrap > ul > li ').eq(0).mouseover(function(){
      $(".category_sub1").stop().fadeIn(250),
      $('#category_wrap > ul > li').eq(0).find('img').css('transform' ,'rotate(180deg)');
     }).mouseout(function(){
      $(".category_sub1").stop().fadeOut(250),
      $('#category_wrap > ul > li').eq(0).find('img').css('transform' ,'rotate(0)');
     });


     $('#category_wrap > ul > li ').eq(1).mouseover(function(){
      $(".category_sub2").stop().fadeIn(250),
      $('#category_wrap > ul > li').eq(1).find('img').css('transform' ,'rotate(180deg)');
     }).mouseout(function(){
      $(".category_sub2").stop().fadeOut(250),
      $('#category_wrap > ul > li').eq(1).find('img').css('transform' ,'rotate(0)');
     });

     $('#category_wrap > ul > li ').eq(2).mouseover(function(){
      $(".category_sub3").stop().fadeIn(250),
      $('#category_wrap > ul > li').eq(2).find('img').css('transform' ,'rotate(180deg)');
     }).mouseout(function(){
      $(".category_sub3").stop().fadeOut(250),
      $('#category_wrap > ul > li').eq(2).find('img').css('transform' ,'rotate(0)');
     });

     $('#category_wrap > ul > li ').eq(3).mouseover(function(){
      $(".category_sub4").stop().fadeIn(250),
      $('#category_wrap > ul > li').eq(3).find('img').css('transform' ,'rotate(180deg)');
     }).mouseout(function(){
      $(".category_sub4").stop().fadeOut(250),
      $('#category_wrap > ul > li').eq(3).find('img').css('transform' ,'rotate(0)');
     });
  });

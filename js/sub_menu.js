$(function(){
  $('.best_sub li').click(function(){
    var index = $(this).index();

    $('#best_wrap').stop().hide();
    $('.best_wrap').stop().hide();
    

    $('.best_wrap').eq(index).stop().show();
  });

  $('.steady_sub li').click(function(){
    var index = $(this).index();

    $('#steady_wrap').stop().hide();
    $('.steady_wrap').stop().hide();

  
    $('.steady_wrap').eq(index).stop().show();
  });
  




  $('.best_sub li').click(function(){

    $(this).css('color','#474c98');
    $(this).css('border-bottom', '2px solid #474c98');
    $(this).siblings().css({
      'color':'#767676',
      'border-bottom':'none'
    });
  });

  $('.steady_sub li').click(function(){

    $(this).css('color','#474c98');
    $(this).css('border-bottom', '2px solid #474c98');
    $(this).siblings().css({
      'color':'#767676',
      'border-bottom':'none'
    });
  });
     
});
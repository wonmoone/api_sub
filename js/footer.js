$(function(){
  $('#footer_rightbox > ul > button').mouseover(function(){
   $('.family_sub').stop().fadeIn(250),
   $('#footer_rightbox > ul > button').find('img').css('transform' ,'rotate(180deg)');
  }).mouseout(function(){
   $('.family_sub').stop().fadeOut(250),
   $('#footer_rightbox > ul > button').find('img').css('transform' ,'rotate(0)');
  });
});

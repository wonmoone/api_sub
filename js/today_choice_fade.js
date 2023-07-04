$(function () {
  function prev5(){
      $('#choice_fade > li:last').prependTo('#choice_fade');
  }

  function next5(){
      $('#choice_fade > li:first').appendTo('#choice_fade');
  }

  $('#contents_slide #left_btn').click(function(){
      prev5();
  });


  $('#contents_slide #right_btn').click(function(){
      next5();
  });
});
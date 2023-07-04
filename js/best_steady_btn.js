$(function(){
  $("#steady").click(function(){
      $("#steady").css("opacity","1" );
      $("#best").css("opacity","0.5" );
      $(".steady_sub").stop().show();
      $("#steady_wrap").fadeIn();
      $(".best_sub").hide();
      $("#best_wrap").hide();
      $(".best_wrap").hide();
    });
    $("#best").click(function(){
      $("#steady").css("opacity","0.5" );
      $("#best").css("opacity","1" );
      $("#best_wrap").fadeIn();
      $(".best_sub").stop().show();
      $(".steady_sub").hide();
      $("#steady_wrap").hide();
      $(".steady_wrap").hide();
    });
});

 $(function(){
  $("#recommend > .btn > #hide_btn").hide();
    $("#recommend > .btn > #show_btn").click(function(){
      $("#recommend > .text").css({
        "height":"640px",
        "overflow":"block"
    });
    $("#recommend").css({
      "height":"770px"
  });
    $("#recommend > .btn > #hide_btn > img").css({
    "transform":"rotate(180deg)"
  });

  $("#recommend > .btn > #hide_btn").show();
  $("#recommend > .btn > #show_btn").hide();
    });
 });

 $(function(){
    $("#recommend > .btn > #hide_btn").click(function(){
      $("#recommend > .text").css({
        "height":"210px",
        "overflow":"hidden"
    });
    $("#recommend").css({
      "height":"330px"
  });

  $("#recommend > .btn > #hide_btn").hide();
  $("#recommend > .btn > #show_btn").show();
    });
 });
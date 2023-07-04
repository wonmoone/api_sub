 $(function(){
  $("#info_box > .btn > #hide_btn").hide();
    $("#info_box > .btn > #show_btn").click(function(){
      $("#info_box > .text").css({
        "height":"380px",
        "overflow":"block"
    });
    $("#info_box").css({
      "height":"490px"
  });
    $("#info_box > .btn > #hide_btn > img").css({
    "transform":"rotate(180deg)"
  });

  $("#info_box > .btn > #hide_btn").show();
  $("#info_box > .btn > #show_btn").hide();
    });
 });

 $(function(){
    $("#info_box > .btn > #hide_btn").click(function(){
      $("#info_box > .text").css({
        "height":"69px",
        "overflow":"hidden"
    });
    $("#info_box").css({
      "height":"200px"
  });

  $("#info_box > .btn > #hide_btn").hide();
  $("#info_box > .btn > #show_btn").show();
    });
 });

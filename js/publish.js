 $(function(){
  $("#publish > .btn > #hide_btn").hide();
    $("#publish > .btn > #show_btn").click(function(){
      $("#publish > .text").css({
        "height":"920px",
        "overflow":"block"
    });
    $("#publish").css({
      "height":"1050px"
  });
    $("#publish > .btn > #hide_btn > img").css({
    "transform":"rotate(180deg)"
  });

  $("#publish > .btn > #hide_btn").show();
  $("#publish > .btn > #show_btn").hide();
    });
 });

 $(function(){
    $("#publish > .btn > #hide_btn").click(function(){
      $("#publish > .text").css({
        "height":"220px",
        "overflow":"hidden"
    });
    $("#publish").css({
      "height":"360px"
  });

  $("#publish > .btn > #hide_btn").hide();
  $("#publish > .btn > #show_btn").show();
    });
 });
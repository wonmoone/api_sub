 $(function(){
  $("#book_list > .btn > #hide_btn").hide();
    $("#book_list > .btn > #show_btn").click(function(){
      $("#book_list > .text").css({
        "height":"1150px",
        "overflow":"block"
    });
    $("#book_list").css({
      "height":"1250px"
  });
    $("#book_list > .btn > #hide_btn > img").css({
    "transform":"rotate(180deg)"
  });

  $("#book_list > .btn > #hide_btn").show();
  $("#book_list > .btn > #show_btn").hide();
    });
 });

 $(function(){
    $("#book_list > .btn > #hide_btn").click(function(){
      $("#book_list > .text").css({
        "height":"220px",
        "overflow":"hidden"
    });
    $("#book_list").css({
      "height":"333px"
  });

  $("#book_list > .btn > #hide_btn").hide();
  $("#book_list > .btn > #show_btn").show();
    });
 });

      $(function () {

        function prev1() {
        $('.ranking li:last').prependTo('.ranking');
        $('.ranking').css({marginLeft:-300}); 
        $('.ranking').stop().animate({ marginLeft: 0 },500);
    }


    function next1() {
        $('.ranking').stop().animate({ marginLeft: -300 }, function () {
            $('.ranking li:first').appendTo('.ranking');
            $('.ranking').css({ marginLeft: 0 },500);
        });
    }


    $('#ranking_wrap #left_btn').click(function () {
        prev1();
    });

    $('#ranking_wrap #right_btn').click(function () {
        next1();
    });
});

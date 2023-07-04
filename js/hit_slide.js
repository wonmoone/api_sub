 $(function () {

        function prev1() {
        $('#hit_slide li:last').prependTo('#hit_slide');
        $('#hit_slide').css({marginLeft:-300}); 
        $('#hit_slide').stop().animate({ marginLeft: 0 },600);
    }


    function next1() {
        $('#hit_slide').stop().animate({ marginLeft: -300 }, function () {
            $('#hit_slide li:first').appendTo('#hit_slide');
            $('#hit_slide').css({ marginLeft: 0 },600);
        });
    }


    $('#hit_btn #left_btn').click(function () {
        prev1();
    });

    $('#hit_btn #right_btn').click(function () {
        next1();
    });
});

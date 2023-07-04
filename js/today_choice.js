
$(function () {

    function prev2() {
    $('#swiper_contents li:last').prependTo('#swiper_contents');
    $('#swiper_contents').css({marginLeft:-150}); 
    $('#swiper_contents').stop().animate({ marginLeft: 0 });
}


function next2() {
    $('#swiper_contents').stop().animate({ marginLeft: -150 }, function () {
        $('#swiper_contents li:first').appendTo('#swiper_contents');
        $('#swiper_contents').css({ marginLeft: 0 });
    });
}


$('#contents_slide #left_btn').click(function () {
    prev2();
});

$('#contents_slide #right_btn').click(function () {
    next2();
});
});
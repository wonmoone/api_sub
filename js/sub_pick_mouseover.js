$(function(){
    var i=0;
    $("#pick_menu > li").mouseenter(function(){
        i = ($(this).index())+1
        $(".pick_wrap > div").hide()

        $("#pick_menu > li").css({
            "background-color":"#f7f7f7",
            "color":"#595959"
        })

        $("#pick_menu > li:hover").css({
            "background-color":"#545454",
            "color":"#fff"
        })
        $(".pick_wrap > div:nth-of-type"+"("+i+")").stop().fadeIn(400)
    })
});
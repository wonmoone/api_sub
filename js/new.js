$(function(){
    var i=0;
    $("#new_menu > li").mouseenter(function(){
        i = ($(this).index())+1
        $(".new_wrap > div").hide()


        $("#new_menu > li").css({
            "border-bottom":"2px solid #fff",
            "color":"#000   "
        })

        $("#new_menu > li:hover").css({
            "border-bottom":"2px solid #474c98",
            "color":"#474c98"
        })

        $(".new_wrap > div:nth-of-type"+"("+i+")").stop().fadeIn("fast")
    })
});
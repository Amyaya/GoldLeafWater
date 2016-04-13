/**
 * Created by amyaya on 3/13/16.
 */
$(document).ready(function(){
    $("#water").animate({right:'+=220px',opacity:'1'},"slow");
    $(".slogan").hide().fadeIn(2500);
    $("#text1").hide().delay(2000).slideDown(500);

    var b=$("#init").width()/2-15;
    $("#benefits .arrow").css("background-position",b+"px center");

    $("#benefits ul li a").mousemove(function(){
        $(".wrap-text").css("color","black");
        $(this).find(".wrap-text").css("color","#f2d680");
        var c=$(this).parent().attr("data-panel");
        $("#benefits li").removeClass("active");
        $("#benefits .copy div").removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().parent().addClass("active");
        $('.copy div[data-panel="'+c+'"]').addClass("active");
        var d=$(this).offset().left-$("#benefits").offset().left-15;
        var e=d+$(this).width()/2-15;
        $("#benefits .arrow").css("background-position",e+"px center");
    })
});


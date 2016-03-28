/**
 * Created by amyaya on 3/13/16.
 */
$("#benefits ul li a").mousemove(function(){
    var c=$(this).parent().attr("data-panel");
        $("#benefits li").removeClass("active");
        $("#benefits .copy div").removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().parent().addClass("active");
        $('.copy div[data-panel="'+c+'"]').addClass("active");
    var c=$(this).offset().left-15;
        d=c+$(this).width()/2-37;
        $("#benefits .arrow").css("background-position",d+"px center");
})
function bottleRemove(){
    $("#water").animate({right:'+=220px',opacity:'1'},"slow");
}



/*function(b){
    var c=b.parent().offset().left-a(".features.tablet").offset().left-15,
        d=c+b.width()/2-22;
    a(".arrow").css("background-position",d+"px center")
}*/

$('input').focus(function() {
    $("html").keydown(function(event){
        if(event.which == "37")
            $("#box").animate({"left": "-=30px"});
        if(event.which == "39")
            $("#box").animate({"left": "+=30px"});
        if(event.which == "38")
            $("#box").animate({"top": "-=30px"});
        if(event.which == "40")
            $("#box").animate({"top": "+=30px"});
    });
});

/*
$('input').focus(function(){
$(document).keydown(function(e){
    switch (e.which){
        case 37 : $("#box").animate({left: "-=30"});
            break;
        case 38 : $("#box").animate({top: "-=30"});
            break;
        case 39 : $("#box").animate({right: "+=30"});
            break;
        case 40 : $("#box").animate({top: "+=30"});
            break;
    }
});
});
*/
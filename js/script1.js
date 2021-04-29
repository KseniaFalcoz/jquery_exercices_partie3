var plusClick = 0;

$("button").click(function(){
    plusClick ++;
    $("#nbClicks").attr("value", plusClick);
});

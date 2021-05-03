var plusClick = 0;

$("button").click(function(){
    plusClick ++;
    $("#nbClicks").val(plusClick);
});
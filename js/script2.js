var plusMinusClick = 0;

$("#plusClick").click(function(){
    plusMinusClick ++;
    $("#nbClicks").attr("value", plusMinusClick);
});
$("#minusClick").click(function(){
    plusMinusClick --;
    $("#nbClicks").attr("value", plusMinusClick);
});
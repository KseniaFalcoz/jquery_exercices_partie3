var plusMinusClick = 0;

$("#plusClick").click(function(){
    plusMinusClick ++;
    $("#nbClicks").val(plusMinusClick);  // .attr("value", plusMinusClick)
});
$("#minusClick").click(function(){
    plusMinusClick --;
    $("#nbClicks").val(plusMinusClick);
});
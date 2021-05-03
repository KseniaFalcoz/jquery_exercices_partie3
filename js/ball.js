var canvas = document.getElementById("ball");
var ctx = canvas.getContext("2d");
var pi = Math.PI;

ctx.beginPath();
ctx.fillStyle = "deepskyblue";
ctx.arc(125, 125, 125, 0, 2*pi, false);
ctx.fill();


$('input').focus(function() {
    $(document).keydown(function(event){
        if(event.which == "37")
            $("#ball").animate({"left": "-=30px"});
        if(event.which == "39")
            $("#ball").animate({"left": "+=30px"});
        if(event.which == "38")
            $("#ball").animate({"top": "-=30px"});
        if(event.which == "40")
            $("#ball").animate({"top": "+=30px"});
    });
});
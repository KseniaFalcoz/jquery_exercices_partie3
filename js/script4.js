$("#augmenter").click(function() {
    $("#box").css("height", "+=60");
});

$("#recolorer").click(function() {
    $("#box").css("backgroundColor","darkseagreen");
});

$("#disparaitre").click(function() {
    $("#box").hide();
});

$("#apparaitre").click(function() {
    $("#box").show();
});

$("#restaurer").click(function() {
    $("#box").css("backgroundColor","darkorange").height(60);
});
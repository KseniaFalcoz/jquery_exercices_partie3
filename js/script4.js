$("#augmenter").click(function() {
    $("#box").height(120);
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
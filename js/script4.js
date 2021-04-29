$("#augmenter").click(function() {
    $("#box").height("60px");
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
    $("#box").css("backgroundColor","darkorange");
});
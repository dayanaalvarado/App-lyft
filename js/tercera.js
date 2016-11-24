$(function() {
var offset = $("#fijo").offset();
var topPadding = 15;
$(window).scroll(function() {
if ($("#fijo").height() < $(window).height() && $(window).scrollTop() > offset.top) { /* LINEA MODIFICADA POR ALEX PARA NO ANIMAR SI EL fijo ES MAYOR AL TAMANO DE PANTALLA */
$("#fijo").stop().animate({
marginTop: $(window).scrollTop() - offset.top + topPadding
});
} else {
$("#fijo").stop().animate({
marginTop: 0
});
};
});
});
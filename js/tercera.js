$(function() {
var offset = $("#fijo").offset();
var topPadding = 100;
$(window).scroll(function() {
if ($("#fijo").height() < $(window).height() && $(window).scrollTop() > offset.top) { 
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

//ARREGLAR LA FUNCION
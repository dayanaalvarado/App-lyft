$('.contiene-bandera').on('click', function(e){
	// recupero el nombre  y el valor del pais pulsado
	var pais_pulsado = $(this).find('span').html();

	// lo guardo en localStorage
	localStorage.setItem('nombre_pais', pais_pulsado);
});
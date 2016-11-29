$('#paises').on('click', function(e){
	// recupero el nombre del pais pulsado
	var pais_pulsado = $(this).find('#elegir-paises').html();

	// lo guardo en localStorage
	window.localStorage.setItem('nombre_pais', pais_pulsado);
});
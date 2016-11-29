var paises = [
	{
		nombre: "chile",
		prefijo: "+569",
		bandera: "images/chile.jpg"
	},
	{
		nombre: "peru",
		prefijo: "+519",
		bandera: "images/peru.png"
	},
	{
		nombre: "mexico",
		prefijo: "+529",
		bandera: "images/mexico.png"
	}
	
];

// traerme el nombre del pais desde localStorage
var nombre_pais = window.localStorage.getItem("nombre_pais") || "chile";

// recuperar el objeto pais, desde el arreglo de paises
var pais = {};
for (var i=0 ; i<paises.length ; ++i){
	if (paises[i].nombre == nombre_pais) {
		pais = paises[i];
		break;
	}
}
// solo queda modificar el DOM
$('#elegir-pais img').attr('src', pais.bandera);
$('#prefijo').html(pais.prefijo);
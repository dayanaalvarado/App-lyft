var paises = [
	{
		nombre: "Argentina",
		prefijo: "+54",
		bandera: "img/argentina.png"
	},
	{
		nombre: "Brasil",
		prefijo: "+55",
		bandera: "img/peru.png"
	},
	{
		nombre: "Canadá",
		prefijo: "+1",
		bandera: "img/Canada.png"
	},
	{
		nombre: "Chile",
		prefijo: "+56",
		bandera: "img/chile.png"
	},
	{
		nombre: "Ecuador",
		prefijo: "+593",
		bandera: "img/ecuador.png"
	},
	{
		nombre: "Estados Unidos",
		prefijo: "+1",
		bandera: "img/eeuu.png"
	},
	{
		nombre: "Italia",
		prefijo: "+39",
		bandera: "img/italia.png"
	},
	{
		nombre: "México",
		prefijo: "+52",
		bandera: "img/mexico.png"
	},
	{
		nombre: "Perú",
		prefijo: "+519",
		bandera: "img/peru.png"
	},
	{
		nombre: "República Dominicana",
		prefijo: "+89",
		bandera: "img/republicad.png"
	}
	
];

// traerme recuprar GET DE TRAER /el nombre del pais desde localStorage
//siempre sera null la primera vez 
var nombre_pais = window.localStorage.getItem("nombre_pais") || "Chile";

// recuperar el objeto pais, desde el arreglo de paises
var pais = {};
for (var i=0 ; i<paises.length ; ++i){
	if (paises[i].nombre == nombre_pais) {
		pais = paises[i];
		break;
	}
}
$('#elegir-paises img').attr('src', pais.bandera);
$('#prefijo').html(pais.prefijo);

function validar(frm) {
  if (frm.txt.value.length!=9) {
    alert('error');
    frm.txt.focus();
  }
}
function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje="";
//alert (mesDelAño);
	
switch(mesDelAño)
{
	case"Enero":
	case"Marzo":
	case"Mayo":
	case"Julio":
	case"Agosto":
	case"Octubre":
	case"Diciembre":
	mensaje="tiene 31 días.";
	break;
	case"Febrero":
	mensaje="tiene 28 días.";
	break;
	default:
	mensaje="tiene 30 días.";
}

if (mensaje!= "") 
{
	alert(mensaje);
}



}//FIN DE LA FUNCIÓN
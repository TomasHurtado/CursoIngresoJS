function mostrar()
{
	var planeta;
	var mensaje="";
	planeta=prompt("Ingrese un planeta");

	switch(planeta)
	{
		case"tierra":
		mensaje="aca vivimos";
		break;
		case"mercurio":
		case"venus":
		mensaje="aca hace mas calor";
		break;
		case"marte":
		case"jupiter":
		case"saturno":
		case"urano":
		case"neptuno":
		
		alert("acá hace más frio");
		default:
		mensaje="eso no es un planeta";
	}
	if (mensaje!="") 
	{
		alert(mensaje);
	}
}

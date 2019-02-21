function mostrar()
{
	var hora;
	var mensaje="";

	hora=parseInt(laHora.value);

	switch(hora)
	{
		case hora:
		if (hora>=6 && hora<11) 
		{
			mensaje="es de mañana";
		}
		else
		{ 
			if (hora>=12 && hora<19) 
			{
				mensaje="es de tarde";
			}
			if (hora>=20 && hora<=24) 
			{
				mensaje="es de noche";
			}
		}
		if (hora>=20 && <24) 
		{
			mensaje="a dormir";
		}
		default:
		mensaje="no es una hora valida";
 		
 	}
 	
 	if (mensaje!="") 
 	{
 		alert(mensaje);
  	}
}

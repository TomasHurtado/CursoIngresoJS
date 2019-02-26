function mostrar()
{
	var numeroAnterior;
	var numeroIngresado=0;
	var recorrido;
	var acumulador;
	numeroIngresado=prompt("ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);
	
	for(recorrido=numeroIngresado-1;recorrido>1;recorrido--)
	{

		for(numeroAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
		{
		console.log(numeroAnterior);

			if (numeroIngresado%numeroAnterior==0) 
			{

			acumulador=acumulador+numeroAnterior;

			}

		}

		if (acumulador==numeroIngresado) 
		{
		console.log("es perfecto");
		}
		
	}
}




































































/*function mostrar()
{
	var numeroAnterior;
	var numeroIngresado=0;
	var recorrido;
	numeroIngresado=prompt("ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);
	
	for(recorrido=numeroIngresado-1;recorrido>1;recorrido--)
	{

		for(numeroAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
		{
		console.log(numeroAnterior);

			if (numeroIngresado%numeroAnterior==0) 
			{

			break;

			}

		}

		if (numeroAnterior==1) 
		{
		console.log("primo" + recorrido);
		}
		
	}
}
*/









































/*function mostrar()
{
	var numeroAnterior;
	var numeroIngresado=0;

	numeroIngresado=prompt("ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);
	for(numeroAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
	{
		console.log(numeroAnterior);

		if (numeroIngresado%numeroAnterior==0) 
		{
			break;
		}

	}

	if (numeroAnterior==1) 
	{
		console.log("primo");
	}
	else
	{
		console.log("noprimo");
	}

}*/
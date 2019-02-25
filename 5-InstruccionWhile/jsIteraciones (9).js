function mostrar()
{

	var contador=0;
	// declarar variables
	var max;
	var min;
	var respuesta='si';

	while(respuesta =="si")
	{
	 numero=prompt("ingrese numero");
	 numero=parseInt(numero);
	 contador=contador+1;
	 if (numero>numero) 
	 {
	 	max=numero;
	 }
	 else(numero<numero)
	 {
	 	min=numero;
	 }
	 
	 respuesta=prompt("quiere segir ingresando?");
	
	}

 maximo.value=max;
 minimo.value=min;


}//FIN DE LA FUNCIÓN
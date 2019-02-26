function mostrar()
{
	var numero=0;
	var contador=0;
	// declarar variables
	var max=0;
	var min;
	var respuesta='si';

	while(respuesta =="si")
	{
	 numero=prompt("ingrese numero");
	 numero=parseInt(numero);
	 contador=contador+1;
	 if (numero>max) 
	 {
	 	max=numero;
	 }
	 else
	 {
	 	min=numero;
	 	if (min<numero) 
	 	{
	 		min=numero;
	 	}
	 }
	 
	 respuesta=prompt("quiere segir ingresando?");
	
	}

 maximo.value=max;
 minimo.value=min;


}//FIN DE LA FUNCIÓN
function mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var respuesta="si";
	var pesomax=0;
	var nombrepesado;
	var temperaturapesada;

	while(respuesta =="si")
	{
	 animal=prompt("ingrese animal");
	
	

	 	while(isNan(animal)==true)
		{
		 peso=prompt("ingrese peso");
		 peso=parseInt(peso);

			 if (peso>=1 || peso<=1000) 
	 		{
	 			while(isNan(peso)==false)
	 			{
	 				temperatura=prompt("ingrese temperatura");
	 				temperatura=parseInt(temperatura);

	 				if (temperatura>= -30 || temperatura<=30) 
	 				{
	 					while(isNan(temperatura)==false)
	 					{
	 						temperatura=temperatura;
	 					}
	 				}

	 			}
	 		}
		}
		//temperatura par
		if(temperatura % 2 == 0) 
		{
			var pares=pares+1;
		}	

		//el nombre y temperatura del anima mas pesado+
		if (peso>pesomax) 
		{
			pesomax=peso;
			nombrepesado=nombre;
			temperaturapesada=temperatura;

		}

		//animales 0grados
		if (temperatura<0) 
		{
			var menostemp=menostemp++;
		}

		var contador=contador++;
		var acumulador=acumulador+peso;
	}

	if (temperatura<0) 
	{
	var pesomenos=peso;
	if (peso<pesomenos) 
	{
		pesomenos=peso;
	}
	}

	alert("la cantidad de temperatura pares es de:" + pares)

}

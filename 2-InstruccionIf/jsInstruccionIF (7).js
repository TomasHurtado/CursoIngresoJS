function mostrar()
{
//tomo la edad  


//alert(estadoCivil.value);
	var edades;
	var civil;

	edades=edadIngresada.value;
	civil=estadoCivil.value;

	edades=parseInt(edades);

	//alert(civil+edades)
	
	if (civil == "Casado" || civil=="Divorciado") 
	{
		if (edades>18) 
		{
			
		}
		else
		{
			alert("Es muy pequeño para NO ser soltero.");
			
		}


	}
}

//FIN DE LA FUNCIÓN
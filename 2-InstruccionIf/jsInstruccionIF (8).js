function mostrar()
{
//tomo la edad  

	var edades;
	var civil;

	edades=edadIngresada.value;
	civil=estadoCivil.value;

	edades=parseInt(edades);

	//alert(civil+edades)
	
	if (civil == "Soltero" ) 
	{
		if (edades>=18) 
		{
				alert("Es soltero y no es menor");
		}
		


	}


}//FIN DE LA FUNCIÓN
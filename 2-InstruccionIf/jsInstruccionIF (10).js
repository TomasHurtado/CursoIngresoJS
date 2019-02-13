function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var randon;
	randon=Math.floor((Math.random() * 10) + 1);

	if (randon >= 9)
	 {
	 	alert("Execelente");

	 }

	 else
	 {
	 	if (randon<4) 
	 	{
	 		alert("Vamos, la proxima se puede")
	 	}
	 	else
	 	{
	 		alert("Aprobo")
	 	}
	 }



}//FIN DE LA FUNCIÓN
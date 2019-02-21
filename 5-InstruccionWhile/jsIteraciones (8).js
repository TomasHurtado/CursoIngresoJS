function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta =="si")
	{
	 numero=prompt("ingrese numero");
	 numero=parseInt(numero);
	 contador=contador+1;
	 
	 respuesta=prompt("quiere segir ingresando?");

	 if (numero<0) 
	 {
	 	negativo=negativo*numero;
	 }
	 else
	 {
	 	positivo=positivo+numero;
	 }

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
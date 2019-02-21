function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';


	var contador=0;
	var acumulador=0;
	var numero=0;
	

	while(respuesta =="si")
	{
	 numero=prompt("ingrese numero");
	 numero=parseInt(numero);
	 contador=contador+1;
	 acumulador=numero+acumulador;
	 respuesta=prompt("quiere segir ingresando?");

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero=0;
	numero=prompt("ingrese numero");

	while(contador<5)
	{
	 numero=prompt("ingrese numero");
	 numero=parseInt(numero);
	 contador=contador+1;
	 acumulador=numero+acumulador;

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
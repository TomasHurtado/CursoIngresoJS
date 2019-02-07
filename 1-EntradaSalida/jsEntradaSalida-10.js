/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldos;
	var aumento;

	sueldos=importe.value;


	sueldos=parseInt(sueldos);

	aumento=(sueldos*25)/100;

	resultado.value=sueldos-aumento;
	alert(sueldos-aumento);
}
